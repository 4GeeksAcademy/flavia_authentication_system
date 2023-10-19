import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogIn } from "./login.js";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="homeContainer">
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<LogIn />
					</div>
				</div>
			</div>
		</div>
	);
};
