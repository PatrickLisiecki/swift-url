import { Link } from "react-router-dom";

function App() {
	return (
		<main className="page relative flex flex-col items-center justify-center gap-y-2 bg-dark-body">
			<Link
				to="/signup"
				className="mx-auto w-[350px] rounded border border-dark-border bg-dark-bg px-4 py-3 text-center text-[14px] font-semibold uppercase text-dark-text hover:border-dark-border-hover hover:bg-[#393939]"
			>
				Sign up
			</Link>
			<Link
				to="/login"
				className="mx-auto w-[350px] rounded border border-dark-border bg-dark-bg px-4 py-3 text-center text-[14px] font-semibold uppercase text-dark-text hover:border-dark-border-hover hover:bg-[#393939]"
			>
				Login
			</Link>
		</main>
	);
}

export default App;
