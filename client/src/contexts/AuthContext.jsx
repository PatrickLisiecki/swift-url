/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = async (email, password) => {
	const { user, session } = await supabase.auth.signInWithPassword({ email, password });
	return { user, session };
};

const signOut = async () => {
	await supabase.auth.signOut();
};

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === "SIGNED_IN") {
				setUser(session.user);
				setAuth(true);
			} else if (event === "SIGNED_OUT") {
				setUser(null);
				setAuth(false);
			}
		});

		return () => {
			data.subscription.unsubscribe();
		};
	}, []);

	return <AuthContext.Provider value={{ user, login, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
