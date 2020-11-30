import React from 'react';


const Aboutus = () =>{
  return (
  	<>
  	<div className="container-fluid nav_bg">
			<div className = "row">
				<div className = "col-10 mx-auto">
					<h3>About Us</h3>
					<div className="show-read-more">
				   		<div className="text-content">
                    		<h4>Oryxn Technologies, is professional web development and offshore outsourcing company based in Mohali, North India since 2007.
                    		</h4>
                    		<div className="text">
                        		<p> We offer a wide range of services to reach your targeted audience and share your valuable information focusing on retaining your customers.</p>
                    		</div>
                    		<ul className="default-list">
                        		<li className="about_li"><i className="fa fa-check-square-o"></i>We Value Our Clients.</li>
                        		<li className="about_li"><i className="fa fa-check-square-o"></i>We Believe In Quality.</li>
                        		<li className="about_li"><i className="fa fa-check-square-o"></i>We Value Our People.</li>
                    		</ul>
                    		<div className="text">
                        		<p>We are privately owned company offering Offshore outsourcing services to various clients. Our services and solutions are designed with a focus on secure, scalable, expandable and reliable business systems. Through our low cost, high quality and reliable software services, we serve our clients giving them value for money and thus client satisfaction.</p>
                    		</div>
                		</div>
					</div>
				</div>
				<div className="col-md-6 information">
                    <div className="video-popup">
                    	<img alt=" image_src" src="images/place.jpg" className="img-responsive img-fullwidth" />
                    </div>
                </div>
			</div>

		</div>
  		
  	</>
  );
}

export default Aboutus;