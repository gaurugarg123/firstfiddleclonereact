import React from 'react'
import "./css/About.css"

export default function About() {
  return (
    <>
        <div className="box">
		<img alt="logo" src="https://www.firstfiddle.in/assets/images/new-about-us-1.jpg" width="100%" className="pcback"/>
		<img alt="logo" src="https://www.firstfiddle.in/assets/images/about-mob.png" className="mobback"/>
		<div className="img-titleee">
			<h1 className="ourstory">OUR STORY</h1>
			<h1 className="ourstory-2">ABOUT FIRST FIDDLE RESTAURANTS</h1>
		</div>
	</div>
	

	
	<div className="container-fluid">
		<div className="container">
			<h2 className="text-center ml-1">OUR STORY <b style={{color:"#fbaa1a"}}>SINCE 1999</b></h2>
			<br/>
			<div className="row">
				<div className="col-md-7 text-center">
					<p className="text-justify banner1content">
					   First Fiddle Restaurants, formerly known as The Lazeez Affaire Group, was conceived in the year 1999 by Priyank Sukhija and Y.P. Ashok. The company is a renowned innovator and leader in the hospitality industry. Opened in the year 1999, the first outlet by the company- Lazeez Affaire, popularised the concept of fine dining in India. Following its success, places like Warehouse Cafe followed storming Delhi’s nightlife. Eventually, ‘The Flying Saucer Cafe’ captivated the metropolis with the famous Sufi nights. Other well-known brands include ‘Lord Of The Drinks’, 'Dragonfly Experience', 'Plum by Bentchair', ‘JLWA’, ‘Tamasha’, ‘Teddy Boy’, ‘Openhouse Cafe’, and others.<br/><br/>

                        The company is dedicated to being a game changer in the F&B industry with the introduction of ‘concept’ restaurants. The company is committed to catering to the ever-changing cosmopolitan taste of its customers & customer satisfaction is an utmost priority. The restaurants are spread all over India in major metropolitan cities like New Delhi, Mumbai, Pune, Lucknow and more. Our major brands include ‘Lord of the Drinks’, 'Dragonfly Experience', 'Plum by Bentchair', ‘Tamasha’, ‘The FlyingSaucer Cafe’, ‘JLWA’ – to name a few. Plans for global expansion are underway.	
					</p>
				</div>
				<div className="col-md-5 text-center">
					<img alt="logo"  src="https://www.firstfiddle.in/assets/images/ffabout.png"/>
				</div>
			</div>
			
		</div>
	</div>
	<br/>
	 
	
	<div className="container-fluid why">
		
		<div className="container">
			
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8 text-center">
					<h1 className="GAMECHANGER">GAME CHANGER</h1>
					<p className="GAMECHANGERp">The company is dedicated to being a game changer in the F&B industry with the introduction of ‘concept’ restaurants. The company is committed to catering to the ever-changing cosmopolitan taste of its customers & customer satisfaction is an utmost priority.</p>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	</div>

   		
   		<div className="container text-center">
   			<h2 className="text-center ml-2">THE PROLIFIC <b style={{color:"#fbaa1a"}}>RESTAURANTEUR</b></h2>
   			<div className="row">
   				<div className="col-md-4 text-center"><img alt="logo" src="https://www.firstfiddle.in/assets/images/priyank2.png"/>
                </div>
   				<div className="col-md-8 text-center" style={{lineHeight:"49px", wordSpacing: "2px",letterSpacing: "2px"}}>30+ restaurants in 20 years, that’s no small attainment, but the prolific restaurateur Priyank Sukhija has done it, starting from the very young age of 19. Born in a family of lawyers, he became the only businessman in the family, opened the fine-dining restaurant Lazeez Affaire at Malcha Marg, in 1999. Beginning his journey with Lazeez Affaire, he created the most talked about brands in the hospitality industry- Lord of the Drinks, Plum by Bent Chair, Dragonfly Experience, JLWA, Tamasha, The Flying Saucer Cafe and many more. Coming from an era where people either opted for fine dining or clubbing, Priyank has been a true pioneer in building and popularizing the casual dining and successful in bringing a wave of innovation in the restaurant industry.
                </div>
   			</div>
   		</div>
    </>
  )
}
