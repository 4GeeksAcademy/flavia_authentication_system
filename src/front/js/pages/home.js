import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)

	/////////////////////////////////////////////////////////////////// log in
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


	////////////////////////////////////////////////////////////////////// sign up
	const [newUser, setNewUser] = useState({
		email: '',
		password: '',
	});
	const [dontHave, setDontHave] = useState(false);

	const handleDontButton = () => {
		setDontHave(!dontHave)
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Formulario enviado:', newUser);
		actions.registerUser(newUser)
		setNewUser({
			email: '',
			password: '',
		});
	};

	return (
		<div class="login-box">
			<p>Login</p>
			<form>
				<div class="user-box">
					<input required="" name="" type="text" />
					<label>Email</label>
				</div>
				<div class="user-box">
					<input required="" name="" type="password" />
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
			<p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
		</div>

	);
};
