import React from 'react';
// import Project from './Project'
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';



// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
function Portfolio(props) {

    return (
        <section className= "container">
            <h1 className= "portfolio">Portfolio</h1>
            <div>
                {props.projects.map(project => (

                    <div className="card">
                        <div className="img-container">
                            <img alt={project.image} src={project.image} className="project" />
                        </div>
                        <div className="content">
                            <p className="card-title">{project.title}</p>
                            <p className="card-text">{project.description}</p>
                            <a href={project.repo}>Repository</a>
                            <a href={project.deploy}>Live</a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )

}
export default Portfolio;


