import { useState } from "react";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<main className="bg-dark-body page relative">
			<h1 className="w-full text-center text-3xl font-bold text-white">Swift URL</h1>
			<div className="my-[200px] flex w-full flex-col items-center justify-center">
				<h1 className="text-dark-text mb-[50px] text-3xl tracking-wide">Create an account</h1>
				<form
					className="bg-dark-bg flex min-w-[350px] flex-col items-center justify-center gap-y-4 rounded-lg p-4 shadow-lg"
					action="post"
				>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="bg-dark-bg border-dark-border text-dark-text focus:border-dark-border-hover w-full rounded border p-4 text-sm focus:outline-none"
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="bg-dark-bg border-dark-border text-dark-text focus:border-dark-border-hover w-full rounded border p-4 text-sm focus:outline-none"
					/>
					<button
						type="submit"
						className="bg-dark-bg border-dark-border text-dark-text hover:border-dark-border-hover w-full rounded border px-4 py-3 text-[14px] font-semibold uppercase hover:bg-[#393939]"
					>
						Sign up
					</button>
				</form>
			</div>
		</main>
	);
}

export default App;
