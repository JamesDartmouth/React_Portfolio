import React from 'react';
// import Project from './Project'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Portfolio({ props }) {

    return (
        <section className="container">
            <div>
                <h2 className="top-title">Portfolio</h2>
            </div>
            <div>

                {props.projects.map((project) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="{project.image}" alt="Cocktails with Kanye" />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Card.Link href={project.repo}>Repository</Card.Link>
                            <Card.Link href={project.deploy}>Deployed</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    )

}

