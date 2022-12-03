import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Footer() {

    return (

        <footer className ="footer">     
            <div className="container"> 
                    <row className = "footerlinks">
                        <a href="https://github.com/JamesDartmouth">Github</a>

                        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                        <a href="https://github.com/JamesDartmouth">LinkedIn</a>
                        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                    </row>
            </div>
        </footer>
    );
};
