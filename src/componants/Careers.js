import React from 'react'
import './css/Careers.css'

export default function Careers() {
  return (
    <>
    <div className="box">
   	    <div className="img-title">
   	  	  <h1>CAREERS</h1>
   	    </div>
   </div>

   
   <div className="container-fluid careers">
   		<p className="paraGraph">Present for more than a decade in the F&B industry, and a game changer, First Fiddle Restaurants has been an innovator and leader. The company has a pan-India presence and is one of the world’s largest F&B company in the casual dining sector, serving over 5 lakhs of customers monthly across 25+ outlets.</p>
   		<h3>Opportunities to explore with us:</h3>
   		<ol>
   			<li>Corporate Sales & Partnerships</li>
   			<li>Restaurant Managemen</li>
   			<li>Marketing Opportunities</li>
   		</ol>
   		<h3>Come work with us!</h3>
   		<p className="paraGraph">First Fiddle is all about innovation, creativity and understanding the ever-changing consumer needs. The work environment enables professional and personal growth.</p>
   		<h4>When you join us, here’s what happens:-</h4>
   		<p className="paraGraph">Upload your CV in the field below or mail us at careers@firstfiddle.in and tell us why we should hire you. If an opening comes up that matches your profile, we will get in touch with you!</p>
   		
   	<div className="container-fluid">
   		<div className="row">
   				<div className="col-md-6 col-sm-12">
   					<h5>Steep learning curve</h5>
   					<p className="paraGraph">‘Knowledge is power’. We believe in constantly learning and adapting to the consumer trend and market.</p>
   					<h5>Growth opportunities</h5>
   					<p className="paraGraph">Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!</p>
   					<h5>Exciting work environment</h5>
   					<p className="paraGraph">Work in a highly motivated environment with talented people. A positive work environment, ensures a productive and happy you.</p>
   				</div>
   			<div className="col-md-6 col-sm-12">
   					 <h4 _ngcontent-lst-c4 >Upload your CV (.doc/.docx files accepted)</h4>
    		    	<form autocomplete="on">
    		    	<div className="mb-3">
    		    		<label></label>
    		    		<input type="name" name="" placeholder="Name" className="form-control"/>
    		    	</div>

    		    	<div className="mb-3">
    		    		<label></label>
    		    		<input type="email" name="" placeholder="EMAIL" className="form-control"/>
    		    	</div>

    		    	<div className="mb-3">
    		    		<label></label>
    		    		<input type="phone" name="" placeholder="PHONE" className="form-control"/>
    		    	</div>

    		    	<div className="mb-3">
    		    		<label></label>
    		    		<textarea placeholder="MESSAGE" className="form-control"></textarea>
    		    	</div>
    		    	<button className="btn btn-warning">SUBMIT</button>
    		    	</form>
   			</div>
   		</div>
   	</div>
   </div>
    </>
  )
}
