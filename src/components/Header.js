import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function Header() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderCurrentPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <h1>James's Portfolio</h1>
            </header>
            {/* We are passing the currentPage from state and the function to update it */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            <main>
                {renderCurrentPage(currentPage)}
            </main>
        </div>
    );

}