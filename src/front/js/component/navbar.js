import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Launch demo modal
					</button>
				</div>
			</div>
		</nav>
	);
};
