import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const LogIn = () => {
	const { store, actions } = useContext(Context)

	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleLog = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleLogIn = (e) => {
		e.preventDefault();
		console.log('Inicio de sesión', user);
		actions.logInUser(user)
		setUser({
			email: '',
			password: '',
		});
		const accessToken = sessionStorage.getItem('accessToken');
		if (accessToken) {
			// Si el inicio de sesión es exitoso, navegar a la vista /demo
			navigate('/demo');
		}
	}

	return (
		<div className="login-box">
			<div className="logTitle">
				<h5 >Hello!</h5>
				<p id="p"> Sign in to your account</p>
			</div>
			<form onSubmit={handleLogIn}>
				<div className="user-box">
					<input required="" name="email" type="text" value={user.email} onChange={handleLog} />
					<label>Email</label>
				</div>
				<div className="user-box">
					<input required="" name="password" type="password" value={user.password} onChange={handleLog} />
					<label>Password</label>
				</div>
				<button type="submit" className="login-button">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Log in
				</button>
			</form>
			<p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
		</div>

	);
};