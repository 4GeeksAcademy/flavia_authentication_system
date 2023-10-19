import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { LogIn } from "./login.js";
import "../../styles/login.css";

export const SignUp = () => {
	const { store, actions } = useContext(Context)

	const [newUser, setNewUser] = useState({
		email: '',
		password: '',
	});
	const [alreadyHave, setAlreadyHave] = useState(false);

	const handleAlreadyButton = () => {
		setAlreadyHave(!alreadyHave)
	}

	const handleRegister = (e) => {
		const { name, value } = e.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		console.log('Formulario enviado:', newUser);
		actions.registerUser(newUser)
		setNewUser({
			email: '',
			password: '',
		});
	};

	return (
		<>
		{
			alreadyHave ? <LogIn /> : <div className="login-box">
			<div className="logTitle">
				<h5 >Hello!</h5>
				<p id="p"> Create an account</p>
			</div>
			<form onSubmit={handleSignUp}>
				<div className="user-box">
					<input required="" name="email" type="text" value={newUser.email} onChange={handleRegister} />
					<label>Email</label>
				</div>
				<div className="user-box">
					<input required="" name="password" type="password" value={newUser.password} onChange={handleRegister} />
					<label>Password</label>
				</div>
				<button type="submit" className="login-button">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Register
				</button>
			</form>
			<p>Already have an account? <a className="a2" onClick={handleAlreadyButton}>Log in!</a></p>
		</div>
		}
		</>
	);
};
