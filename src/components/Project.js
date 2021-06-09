import React from 'react';

const Projects = ({title, descr, image, btno, btlnk, btcode, tech}) => {

    const returnButton = () =>{
        return btno ? (
            <div className='container'>
                
                <a href={btlnk} className='btn blu' target="_blank" rel="noreferrer">
                    Demo
                </a>
                
            </div>
         ) :
            (
                <div className='container'>
                    <a href={btlnk} className='btn blu' target="_blank" rel="noreferrer">
                        Demo
                    </a>
                    <a href={btcode} className='btn' target="_blank" rel="noreferrer">
                        Code
                    </a>
                </div>
            );
    }

    return(
        <div className="card ct">
            <img className='inside fw' src={image} 
                alt={title} />
            <div className='pad'>
                <h2 className='cardTitle'>{title}</h2>
                <p className="brdr focus">{descr}</p>
                <div className="brdr">
                    {returnButton()}
                   
                </div>
                <h4>Technologies </h4>
                <p>
                    <div className="container">{tech}</div>
                </p>
            </div>
        </div>
    );
}

export default Projects;