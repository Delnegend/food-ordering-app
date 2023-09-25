import { strings } from "../assets/store";

export default function SignInScreen() {
	return (
		<>
			<div className="flex h-[calc(100vh-var(--footbar-height))] flex-col items-center justify-center">
				<button className="group flex items-center justify-center rounded-full border-none bg-white px-6 py-5 shadow-xl transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-90">
					<i className="fab fa-google text-red mr-3 text-xl"></i>
					{strings.loginWithGoogle}
				</button>
			</div>
		</>
	);
}
