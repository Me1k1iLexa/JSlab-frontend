import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type {RootState} from "../../store";
import { registerRequest} from "../../store/user/userSlice.ts";
import styles from '@/styles/pages/Auth.module.css'

const RegisterPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerRequest({email, username, password}));
    }

    return(
        <form
            onSubmit={handleSubmit}
            className={styles.registerForm}
        >
            <input
                type="username"
                placeholder="Имя пользователя"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={styles.input}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.input}
            />
            <button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
            >
                {loading ? 'Register...' : 'Register'}
            </button>

            {error && <p className={styles.error}>{error}</p>}
        </form>
    )
}

export default RegisterPage;