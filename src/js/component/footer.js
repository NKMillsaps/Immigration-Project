import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<Link to="/options">
				<button className="btn btn-primary">Options</button>
			</Link>
		</p>
	</footer>
);
