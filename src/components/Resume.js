import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Resume() {

    return (
        <section className= "container resume">
            <h1 id="resume">Resume</h1>
            <Container>
                <Row>
                    <Col className="skillbox">
                    <ul className="skillheader">Front-End Proficiencies</ul>
                        <li className= "skill">HTML5</li>
                        <li className= "skill">CSS3</li>
                        <li className= "skill">JavaScript</li>
                        <li className= "skill">jQuery</li>
                        <li className= "skill">Bootstrap</li>
                        <li className= "skill">React</li>
                    </Col>
                    <Col className="skillbox">
                    <ul className="skillheader">Back-End Proficiencies</ul>
                        <li className= "skill">APIs</li>
                        <li className= "skill">NodeJS</li>
                        <li className= "skill">Express</li>
                        <li className= "skill">Model View Controller (MVC)</li>
                        <li className= "skill">REST</li>
                        <li className= "skill">Progressive Web Applications (PWA)</li>
                    </Col>
                    <Col className="skillbox">
                    <ul className="skillheader">Database Proficiencies</ul>
                        <li className= "skill">MySQL</li>
                        <li className= "skill">Sequelize</li>
                        <li className= "skill">GraphQL</li>
                        <li className= "skill">MongoDB</li>
                        <li className= "skill">Mongoose</li>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="download">
                Download My Resume
                {/* <a href={require("../../assets/resume' Resume.pdf")} download>Download my Resume
                </a> */}
                </Row>
            </Container>
        </section>
    );
}