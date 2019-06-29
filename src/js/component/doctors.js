import React from "react";
import "../../styles/home.scss";

export class Doctors extends React.Component {
	render() {
		return (
			<div className="text-justify mt-5">
				<div className="container ">
					<h4 className="font-weight-bold text-center">DOCTORS</h4>

					<ol>
						<li>
							1.09 miles away 1. US Health Works Dr. Marco Muniz 1786 North West 2nd Avenue Boca Raton FL
							33432 Get directions 561-368-6920{" "}
						</li>
						<li>
							{" "}
							1.33 miles away 2. Concentra Dr. Heguang Zheng 141 Northwest 20th Street Suite C-9 Boca
							Raton FL 33431 Get directions 561-368-6920{" "}
						</li>
						<li>
							1.36 miles away 3. Complete Local Specialty Care Inc Dr. Marta Khris 106 Northeast 2nd
							Street Boca Raton FL 33432 Get directions 561-391-8086{" "}
						</li>
						<li>
							1.86 miles away 4. Paul C. Diamond, D.O. Dr. Paul Diamond 3848 Fau Boulevard Suite 210 Boca
							Raton FL 33431 Get directions 561-394-3088{" "}
						</li>
						<li>
							3.01 miles away 5. Hillsboro Urgent Care Dr. Paul Kotturan 220 Southwest Natura Avenue
							Deerfield Beach FL 33441 Get directions 954-360-7000
						</li>
					</ol>
					<p>
						<a href="https://my.uscis.gov/findadoctor">Find more doctors</a>
					</p>
				</div>
			</div>
		);
	}
}
