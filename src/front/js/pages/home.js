import React from "react";
import { LogIn } from "./login.js";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="homeContainer">
			<div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<LogIn />
					</div>
				</div>
			</div>
		</div>
	);
};
