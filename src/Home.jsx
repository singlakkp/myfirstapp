import React from 'react';
import image1 from "../src/images/web-hosting-solutions.jpg";


const Home = () =>{
  return (
  	<>
  	<div className="container-fluid nav_bg">
			<div className = "row">
				<div className = "col-10 mx-auto">
					<div className = "row">
						<div className = "col-5">
							<img src= {image1} />
						</div>
						<div className = "col-5">
							<img src= {image1} />
						</div>
					</div>
				</div>
			</div>

		</div>
  		
  	</>
  );
}

export default Home;
