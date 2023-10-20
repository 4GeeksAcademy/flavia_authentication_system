import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white">
						<img
							className="icon"
							src="https://images.squarespace-cdn.com/content/v1/56ef803d2b8dde509ab4f8af/1559872104470-JAEIUP8Z1J0IWAK7I1H1/FLAVIA+Logo+2.png"
						/>
					</span>
				</Link>
				<div className="ml-auto">
					<button type="button" className="nav_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<i className="fa-regular fa-user"></i> Sign in
					</button>
				</div>
			</div>
		</nav>
	);
};
