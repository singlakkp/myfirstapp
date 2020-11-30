import React from 'react';


const Contact = () =>{
  return (
  	<>
  		<div className="container-fluid nav_bg">
			<div className = "row">
				<div className = "col-10 mx-auto">
					<div className ="row">
						<div className ="col-sm-5 col-10 mx-auto">
							<form>
								<div class="row mb-3">
							    <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
							    <div class="col-sm-10">
							      <input type="text" class="form-control" id="inputName3" />
							    </div>
							  	</div>
								  <div class="row mb-3">
								    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
								    <div class="col-sm-10">
								      <input type="email" class="form-control" id="inputEmail3" />
								    </div>
								  </div>
								  <div class="row mb-3">
								    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
								    <div class="col-sm-10">
								      <input type="password" class="form-control" id="inputPassword3" />
								    </div>
								  </div>
								  <div class="row mb-3">
								    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Message</label>
								    <div class="col-sm-10">
								      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
								    </div>
								  </div>
								
							 	
							  <button type="submit" class="btn btn-primary">Sign in</button>
							</form>
						</div>
						<div className ="col-sm-5 col-10 mx-auto">
							<div className = "right_up">
								<div className="mapouter">
									<div className="gmap_canvas">
										<iframe id="gmap_canvas" className ="gmap_style" 
										src="https://maps.google.com/maps?q=oryxn%20technologies&t=&z=13&ie=UTF8&iwloc=&output=embed" 
										frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</>
  );
}

export default Contact;