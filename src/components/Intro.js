import React from 'react';

const Intro = () =>{
    return(
        <div className="intro">
            <h1 className="ct tp">
                <div className=" animate__animated animate__fadeInLeft">
                    <span className="introTitle">ALEXANDRU</span>
                </div>
                <div className=" animate__animated animate__fadeInRight">
                    <span className="introTitle">GÂRBACEA</span>
                </div>
                <p className="handwr animate__animated animate__fadeInUp">Portfolio</p>
                <a href="#About"><img className="arrow animate__animated animate__fadeInUp" 
                src="https://cssanimation.rocks/levelup/public/images/downarrow.png" alt="scroll" width="60"
                title="Scroll"
                /></a>
            </h1>
           
        </div>
    );
}

export default Intro;