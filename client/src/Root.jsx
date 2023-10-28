import { FiChevronRight, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { getUrls, createUrl, deleteUrl } from './api/url';

function Root() {
	const [link, setLink] = useState('');
	const [allUrls, setAllUrls] = useState([]);
	const [isUpdated, setIsUpdated] = useState(false);

	// Update allUrls state whenever there is an update
	useEffect(() => {
		const fetchAllUrls = async () => {
			const data = await getUrls();

			setAllUrls(data);

			console.log('Use Effect');
		};

		fetchAllUrls();
	}, [isUpdated]);

	// Call API to create a url
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (link.trim() === '') {
			return;
		}

		const newUrl = await createUrl(link);

		setAllUrls([...allUrls, newUrl]);
		setIsUpdated(!isUpdated);
		setLink('');
	};

	// Call API to update a url
	const handleDelete = async (entry) => {
		const targetId = entry.id;

		await deleteUrl(targetId);

		setAllUrls(allUrls.filter((entry) => entry.id !== targetId));
	};

	return (
		<main className="page relative flex flex-col items-center gap-y-2 bg-white p-2">
			<div className="w-full pt-36 text-center">
				<h1 className="text-6xl font-semibold">SWIFT URL</h1>
			</div>
			<form onSubmit={handleFormSubmit}>
				<fieldset className="mt-2 flex flex-row">
					<label htmlFor="longUrl" className="sr-only">
						URL
					</label>
					<input
						type="text"
						name="longUrl"
						id="longUrl"
						placeholder="https://example.com"
						value={link}
						onChange={(e) => setLink(e.target.value)}
						className="border-dark min-w-[300px] rounded-l-xl border p-3 text-gray-800 focus:shadow-lg focus:outline-none md:min-w-[500px]"
					/>
					<button
						type="submit"
						className="text-md flex flex-row items-center justify-center gap-x-1 rounded-r-xl bg-blue-400 px-3 py-2 text-white hover:cursor-pointer hover:bg-blue-500"
					>
						Shorten <FiChevronRight />
					</button>
				</fieldset>
			</form>

			<div className="flex min-h-[200px] min-w-[50%] flex-col gap-y-2 p-2">
				{allUrls &&
					allUrls.map((entry, index) => (
						<div
							key={index}
							className="flex flex-row items-center justify-between rounded-xl border border-gray-300 bg-white p-2 text-gray-500 shadow-2xl"
						>
							<div className="flex flex-col">
								<span className="text-sm font-bold">Original URL</span>
								<a href={entry.origin}>{entry.origin}</a>
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-bold">Short URL</span>
								<a href={`/api/url/${entry.short}`}>{entry.short}</a>
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-bold">Clicks</span>
								<span>{entry.clicks}</span>
							</div>
							<button
								onClick={() => handleDelete(entry)}
								className="grid h-[30px] w-[30px] place-items-center rounded-full hover:bg-gray-200"
							>
								<FiX />
							</button>
						</div>
					))}
			</div>
		</main>
	);
}

export default Root;
