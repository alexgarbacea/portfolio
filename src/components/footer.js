import React from 'react';

const Footer = () => {
    return(
        <div className="ftr">
            <h2 className="ftrTxt">Website made by Alexandru Gârbacea<br />
                View code on GitHub <a href="https://github.com/alexgarbacea/portfolio" rel="noreferrer" target="_blank">here</a>
            
                <div className="container">
                    <a href="https://www.linkedin.com/in/alexgarbacea/" target="_blank" rel="noreferrer">
                    <img className="abtTch"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="Linkedin"
                        title="Let's connect!"
                    />
                    </a>
                </div>
            </h2>
        </div>
    );
}

export default Footer;