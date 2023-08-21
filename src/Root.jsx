import { Link } from "react-router-dom";

function App() {
	return (
		<main className="page relative flex items-center justify-center bg-dark-body">
			<Link
				to="/signup"
				className="mx-auto w-[350px] text-center rounded border border-dark-border bg-dark-bg px-4 py-3 text-[14px] font-semibold uppercase text-dark-text hover:border-dark-border-hover hover:bg-[#393939]"
			>
				Sign up
			</Link>
		</main>
	);
}

export default App;
