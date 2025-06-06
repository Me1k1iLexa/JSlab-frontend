import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type {RootState} from "../../store";
import {loginRequest} from "../../store/user/userSlice.ts";
import styles from '@/styles/pages/loginAuth.module.css'

const LoginPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginRequest({email, password}));
    }

    return(
        <form
            onSubmit={handleSubmit}
            className={styles.loginForm}
        >
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                disabled={loading}
            >
                {loading ? 'Logging...' : 'Login'}
            </button>

            {error && <p className={styles.error}>{error}</p>}
        </form>
    )
}

export default LoginPage;
