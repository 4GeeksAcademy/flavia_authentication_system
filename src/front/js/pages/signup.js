import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const logIn = () => {
	const { store, actions } = useContext(Context)

	const [newUser, setNewUser] = useState({
		email: '',
		password: '',
	});
	const [dontHave, setDontHave] = useState(false);

	const handleDontButton = () => {
		setDontHave(!dontHave)
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
		<div className="signup-box">
			<p>Login</p>
			<form onSubmit={handleSignUp}>
				<div className="newUser-box">
					<input required="" name="email" type="text" value={newUser.email} onChange={handleRegister}/>
					<label>Email</label>
				</div>
				<div className="newUser-box">
					<input required="" name="password" type="password" value={newUser.password} onChange={handleRegister} />
					<label>Password</label>
				</div>
				<a href="#">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Submit
				</a>
			</form>
			<p>Already have an account? <a href="" className="a2">Sign up!</a></p>
		</div>

	);
};
