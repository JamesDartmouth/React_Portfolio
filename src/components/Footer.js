import React from 'react';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return (

        <footer>
            <ul className="footer-item">
                <li className="footer">
                    <a href="https://github.com/JamesDartmouth">Github</a>
                    {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                </li>
                <li className="footer-item">
                    {/* <a href="#">LinkedIn</a> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                </li>
                <li className="footer-item">
                    {/* <a href="#">Twitter</a> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                </li>
                <li className="footer-item">
                    {/* <a href="#">Instagram</a> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                </li>
                <li className="footer-item">
                    {/* <a href="#">Facebook</a> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                </li>
            </ul>
        </footer>
    );
}

// const element = <FontAwesomeIcon icon={faEnvelope} />
// ReactDOM.render(element, document.body)