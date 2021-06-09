import React from 'react';
import Projects from './Project';

const ProjectDisplay = ({proj}) =>{
    const allProj = proj.map((p,i) =>{
        return(
            <Projects
                key={i}
                title={proj[i].title}
                descr={proj[i].descr}
                image={proj[i].image}
                btno={proj[i].btno}
                btlnk={proj[i].btlnk}
                btcode={proj[i].btcode}
                tech={proj[i].tech.map(element => {
                    return( <span className="tech">{element}</span>);//Return tech as separate entity
                })}
                />
        );
    })
    return(
        <div id="projects" className="ct">
            <h1><span className="sectitle">Latest projects</span></h1>
            <div className="container animate__animated animate__fadeInUp">
                {allProj}
            </div>
            <h1>View more of my projects on GitHub <a href="https://github.com/alexgarbacea" rel="noreferrer" target="_blank">here</a></h1>
        </div>
    );
}

export default ProjectDisplay;