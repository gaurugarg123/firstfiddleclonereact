import React from 'react'
import "./css/OurTeam.css"

export default function OurTeam() {
    return (
        <>
            <div className="box2222">
                <div className="img-title">
                    <h1>MEET THE TEAM</h1>
                </div>
            </div>
            <br /><br />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://www.firstfiddle.in/assets/images/priyank-sukhija.jpg" alt='#' className="d-block w-100 prink"/>
                        </div>
                        <div className="col-md-6">
                            <h1>Priyank Sukhija</h1>
                            <strong>C.E.O. & M.D</strong>
                            <br /><br />
                            <p className="para">
                                Priyank Sukhija is a prolific restauranteur, industrious to the core and a true innovator! A simple man, he doesn’t sweat of success. An amiable personality, he is zealous towards what he does. Born in a family of educated lawyers, Priyank has been the captain of his own boat. The only businessman in the family, he opened the fine-dining restaurant Lazeez Affaire at Malcha Marg, with support from his parents at the young age of 19.The success of Lazeez Affaire prompted him to take Delhi’s existing culinary experience and transform it into something no one could foresee. Priyank Sukhija is a prolific restaurateur, industrious to the core and true innovator! A simple man, he doesn’t sweat of success.
                            </p>
                            <button className="btn btn-warning">Read More</button><br/>
                                <div className="social-icons text-left icons" style={{color:"#ffad00"}}>
                                    <a href="/" style={{color:"#ffad00"}}><i className="fab fa-linkedin"></i></a>
                                    <a href="/" style={{color:"#ffad00"}}><i className="fab fa-facebook-square"></i></a>
                                    <a href="/" style={{color:"#ffad00"}}><i className="fab fa-twitter-square"></i></a>
                                    <a href="/" style={{color:"#ffad00"}}><i className="fab fa-instagram"></i></a>
                                </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="card text-center">
                                <a href="/" target="_blank">
                                    <img src="https://app.firstfiddle.in/images/ff_meet_team/YPAshok.jpg" alt="https://app.firstfiddle.in/images/ff_meet_team/YPAshok.jpg" width="100%"/>
                                </a>
                                <div className="card-body text-muted text-center">
                                    <h5>Y. P. ASHOK</h5>
                                    <span style={{color:"#4b61dd"}}><strong>Chairman</strong></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card text-center">
                                <a href="spices.html" target="_blank">
                                    <img src="https://app.firstfiddle.in/images/ff_meet_team/B.R.-Sachdeva.jpg" alt="https://app.firstfiddle.in/images/ff_meet_team/B.R.-Sachdeva.jpg" width="100%"/>
                                </a>
                                <div className="card-body text-muted text-center">
                                    <h5>B.R. SACHDEVA</h5>
                                    <span style={{color:"#4b61dd"}}><strong>Director Finance & Legal</strong></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card text-center">
                                <a href="spices.html" target="_blank">
                                    <img src="https://app.firstfiddle.in/images/ff_meet_team/Sagar-Bajaj.jpg" alt="https://app.firstfiddle.in/images/ff_meet_team/Sagar-Bajaj.jpg" width="100%"/>
                                </a>
                                <div className="card-body text-muted text-center">
                                    <h5>SAGAR BAJAJ</h5>
                                    <span style={{color:"#4b61dd"}}><strong>Corporate Chef</strong></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card text-center">
                                <a href="spices.html" target="_blank">
                                    <img src="https://app.firstfiddle.in/images/ff_meet_team/JAY-PHOTO-1-1.jpg" alt="htt" width="100%"/>
                                </a>
                                <div className="card-body text-muted text-center">
                                    <h5>JAY SHANKAR NATRAJ</h5>
                                    <span style={{color:"#4b61dd"}}><strong>Franchise Lead</strong></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card text-center">
                                <a href="spices.html" target="_blank">
                                    <img src="https://app.firstfiddle.in/images/ff_meet_team/vibhutiPR.jpg" alt="https://app.firstfiddle.in/images/ff_meet_team/vibhutiPR.jpg" width="100%"/>
                                </a>
                                <div className="card-body text-muted text-center">
                                    <h5>VIBHUTI SOOD</h5>
                                    <span style={{color:"#4b61dd"}}><strong>PR And Communications Head</strong></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
