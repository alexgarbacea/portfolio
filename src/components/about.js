import React from 'react';

const About = () => {
    return(
        <div className="about">
            <div className="brdr">
                <h1 className="abtit">ABOUT<span className="absml">Me</span></h1>
            </div>
            <div className="container">
                <div className="abtSect">
                    <h1 className="abtSectTit">Front-end</h1>
                    <p className="abtTxt">
                        I am passionate about front-end web development
                        <br /> and I think it is an exciting career because it’s always 
                        <br />evolving, constantly changing and it's all about creativity<br /> 
                        and creative problem-solving. The user interface is <br /> 
                        the reason that determines a user to stay on the website, <br /> 
                        that's why I am proud to development front-end.
                    </p>
                </div>
                <div className="abtSect">
                    <h1 className="abtSectTit">Back-end</h1>
                    <p className="abtTxt">
                        I like to understand how every process works, 
                        <br /> and enjoy always improving my skills.<br /> 
                        Back-end is less visual, but far more functional, 
                        <br /> so you might say it's the back bone of every website.<br />
                        Developing in back-end for me is like giving life to the actual app.
                    </p>
                </div>
                <div className="abtSect">
                    <h1 className="abtSectTit">More</h1>
                    <p className="abtTxt">
                        Working on both front-end and back-end I have acquired a variety of skills <br />
                        and worked with a multitude of technologies. Some of them are:
                        <div className="container">
                            <img className="abtTch"
                            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                                alt= "JavaScript"
                                title="JavaScript"
                            />
                            <img className="abtTch"
                                src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"
                                alt="React.js"
                                title="React.js"
                            />
                            <img className="abtTch"
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                                alt="CSS"
                                title="CSS"
                            />
                            <img className="abtTch"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Devicon-html5-plain-wordmark.svg/640px-Devicon-html5-plain-wordmark.svg.png"
                                alt="HTML5"
                                title="HTML5"
                            />
                            <img className="abtTch"
                                src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                                alt="C#"
                                title="C#"
                            />
                            <img className="abtTch"
                                src="https://www.sqlserverlogexplorer.com/wp-content/uploads/2019/11/sql-database.png"
                                alt="SQL"
                                title="SQL"
                            />
                            <img className="abtTch"
                                src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                                alt="PHP"
                                title="PHP"
                            />
                            <img className="abtTch"
                                src="http://book.git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                                alt="GIT"
                                title="GIT"
                            />
                            <img className="abtTch"
                                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                                alt="NODE.js"
                                title="NODE.js"
                            />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;