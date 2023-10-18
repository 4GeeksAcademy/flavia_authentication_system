import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [isUser, setIsUser] = useState(false);

	const handleIsUser = () => {
		setIsUser(true);
	}


	return (
		<div className="container">
			
		</div>
	);
};
