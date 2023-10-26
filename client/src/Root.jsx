import { useState, useEffect } from 'react';
import { getUrls, createUrl } from './api/url';

function Root() {
	const [link, setLink] = useState('');
	const [allLinks, setAllLinks] = useState([
		// { origin: 'https://example.com', short: 'a5bwbew' },
		// { origin: 'https://example.com', short: 'a5bwbew' },
	]);

	useEffect(() => {
		const fetchAllUrls = async () => {
			const allUrls = await getUrls();

			setAllLinks(allUrls);
		};

		fetchAllUrls();
	}, []);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const res = await createUrl(link);
	};

	return (
		<main className="page relative flex flex-col items-center gap-y-2 bg-dark-body p-2">
			<div className="flex flex-row items-center justify-between">
				<h1 className="align-center text-midnight text-6xl font-semibold">Swift URL</h1>
			</div>
			<form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
				<fieldset className="mt-2 flex flex-row gap-1">
					<label htmlFor="longUrl" className="text-midnight sr-only text-xl font-semibold">
						URL
					</label>
					<input
						type="text"
						name="longUrl"
						id="longUrl"
						placeholder="https://example.com"
						value={link}
						onChange={(e) => setLink(e.target.value)}
						className="min-w-[300px] rounded-xl bg-white p-3 text-gray-800 focus:outline-none md:min-w-[500px]"
					/>
					<input
						type="submit"
						value="Shorten"
						className="rounded-xl bg-white px-3 py-2 text-xl text-dark-bg hover:cursor-pointer hover:bg-blue-200 hover:text-white"
					/>
				</fieldset>
			</form>
			<div className="flex min-h-[200px] min-w-[50%] flex-col gap-y-2 p-2">
				{allLinks.length > 0 &&
					allLinks.map((link, index) => (
						<div key={index} className="flex flex-row justify-between rounded-xl bg-dark-bg p-2">
							<span className="text-2xl text-white">{link.origin}</span>
							<span className="text-2xl text-white">{link.short}</span>
						</div>
					))}
			</div>
		</main>
	);
}

export default Root;
