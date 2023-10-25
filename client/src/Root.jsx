import { Form, Link, redirect } from 'react-router-dom';

export const action = async ({ request, params }) => {
	let longUrl = Object.fromEntries(await request.formData());

	// console.log(longUrl);

	const response = await fetch('http://localhost:7777/url', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(longUrl),
	});

	if (!response.ok) {
		throw response;
	}

	return redirect('/');
};

function Root() {
	return (
		<main className="page relative flex flex-col items-center justify-center gap-y-2 bg-dark-body p-2">
			<Form method="POST" className="flex flex-col gap-2">
				<div className="flex flex-row items-center justify-between">
					<span className="align-center text-midnight text-3xl font-semibold">Input a URL</span>
				</div>

				<fieldset className="mt-2 flex flex-row gap-1">
					<label htmlFor="longUrl" className="text-midnight text-xl font-semibold">
						URL
					</label>
					<input
						type="text"
						name="longUrl"
						id="longUrl"
						placeholder="https://example.com"
						className="rounded-xl bg-white p-3 text-gray-800 focus:outline-none"
					/>
				</fieldset>
			</Form>
		</main>
	);
}

export default Root;
