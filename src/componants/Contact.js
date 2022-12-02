import React from 'react'
import './css/Contact.css'

export default function Contact() {
  return (
    <>
        <div className="box1">
	    <div className="img-title">
		<h1>CONTECT US</h1>
	    </div>
        </div><br/>

   
    <div className="container-fluid contact">
    	<div className="row">
    		<div className="col-sm-6 contact-us">
    		    <h4 _ngcontent-lst-c4 style={{paddingBottom:"4%"}}>SEND US MESSAGE </h4>
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

    		<div className="col-sm-6 contact-us-2"><br/>
    			<h4 style={{paddingBottom:"4%"}}>CONTACT INFO</h4><br/>
    			<strong _ngcontent-lst-c4 style={{color:"#fcb21b"}}>Address</strong>
    			<p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
    			<strong _ngcontent-lst-c4 style={{color:"#fcb21b"}}>For Franchise Enquiry</strong><br/>
    			Mobile:<p style={{color:"#fcb21b"}}>+91 9313663486</p>
    			EMAIL:<p style={{color:"#fcb21b"}}>franchise@firstfiddle.in</p>
    			<strong _ngcontent-lst-c4 style={{color:"#fcb21b"}}>For HR Enquiry</strong><br/>
    			Mobile:<p style={{color:"#fcb21b"}}>+91 9313663486</p>
    			Email:<p style={{color:"#fcb21b"}}>+91 9313663486</p>
    			<strong _ngcontent-lst-c4 style={{color:"#fcb21b"}}>For Other Enquiry</strong><br/>
    			Mobile:<p style={{color:"#fcb21b"}}>+91 9313663486</p>
    			Email:<p style={{color:"#fcb21b"}}>+91 9313663486</p>
    			Open: Monday – Saturday 10:30 – 19:30
    		</div>
    	</div>
    </div>
    </>
  )
}
