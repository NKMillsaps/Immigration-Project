import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Doctors extends React.Component {
	render() {
		return (
			<div className="text-justify mt-5">
				<div className="container ">
					<h1 className="font-weight-bold text-center">DOCTORS</h1>
					<p>THE LIST</p>
					<p>
						<a href="https://my.uscis.gov/findadoctor">Find a doctor</a>
					</p>
				</div>
			</div>
		);
	}
}
