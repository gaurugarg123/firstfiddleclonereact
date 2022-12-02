import React from 'react'
import "./css/Footer.css"

export default function Footer() {
  return (
    <>
    
	<footer>
	    <div className="mf">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-5 text-center">
						<a href="/">
							<img src="https://www.firstfiddle.in/assets/images/ff-logo-02.png" className="fimg" alt='logo'/>
						</a>
					</div><br/><br/>
					<div className="col-md-7"><br/><br/>
						<b><h2 className="contect">CONTACT <span className="us">US</span></h2></b>
						<p className="pra">We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across india. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutioning the F & B industry!</p><br/>
						<div className="row">
							<div className="col-md-6">
								<span style={{color:"white"}}>
									<strong style={{color:"#ffad00", fontSize: "20px"}}>
										Address
									</strong>
									<br/>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021
								</span>
							</div><br/>
							<div className="col-md-6">
								<span style={{color:"white"}}>
									<strong style={{color:"#ffad00", fontSize: "20px"}}>
										Franchise Enquiry
									</strong>
									<br/> Mobile:<a href="/" style={{textDecoration: "none", color: "#ffad00"}}>+91 9313663486</a>
							        <br/> Email:<a href="/" style={{textDecoration: "none", color: "#ffad00"}}>franchise@firstfiddle.in</a>
								</span>
							</div>
						</div><br/>

						<div className="row">
							<div className="col-md-6">
								<span style={{color:"white"}}>
									<strong style={{color:"#ffad00"}}>
										HR Enquiry
									</strong>
									<br/>Mobile: <a href="/" style={{textDecoration: "none", color: "#ffad00"}}> +91 9999304427</a>
									<br/>Email: <a href="/" style={{textDecoration: "none", color: "#ffad00"}}> careers@firstfiddle.in</a>
								</span>
							</div>

							<div className="col-md-6">
								<span style={{color:"white"}}>
									<strong style={{color:"#ffad00"}}>
										Other Enquiry
									</strong>
									<br/>Email: <a href="/" style={{textDecoration: "none", color: "#ffad00"}}> customercare@firstfiddle.in</a>
                                </span>
							</div><br/>
							<div className="social-icons text-left icons" style={{color:"#ffad00"}}>
							<a href="/" style={{color:"#ffad00"}}><i className="fab fa-linkedin mx-1"></i></a>
							<a href="/" style={{color:"#ffad00"}}><i className="fab fa-facebook-square mx-1"></i></a>
							<a href="/" style={{color:"#ffad00"}}><i className="fab fa-twitter-square mx-1"></i></a>
							<a href="/" style={{color:"#ffad00"}}><i className="fab fa-instagram mx-1"></i></a>
							</div>
						</div>
				    </div>
			    </div>
		    </div>
        </div>

		<div className="container-fluid endfooter">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<p style={{color:"white", marginTop: "26px", display: "inline-block"}}>PRIVACY POLICY | TERMS AND CONDITIONS | BLOG<br/>COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED</p>
						
					</div>
				</div>
			</div>
		</div>
	</footer>
    </>
  )
}
