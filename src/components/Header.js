import React, { useState } from 'react';
import NavTab from "./Navtab";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Resume from "./Resume";

export default function Header() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderCurrentPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Project />;
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
            <header>
                James
                <NavTab currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <main>
                {renderCurrentPage(currentPage)}
            </main>
        </div>
    );

}