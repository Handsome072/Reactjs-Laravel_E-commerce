import React, { useState, useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 700) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShowButton(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleAnimationEnd = () => {
        setIsClicked(false);
    };

    return (
        <>
            <footer>
                <div className='container-fluid foot p-5'>
                    <div className="container">
                        <div className="row">
                            <div className='col-md-3'>
                                <h1 className="logo">Handsome</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                            </div>
                            <div className='col-md-3'>
                                <h2>A Propos</h2>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>dolor sit</li>
                                    <li>amet, consectetur</li>
                                    <li>adipiscing elit</li>
                                    <li>Auctor libero</li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                <h2>Parametre</h2>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>dolor sit</li>
                                    <li>amet, consectetur</li>
                                    <li>adipiscing elit</li>
                                    <li>Auctor libero</li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                <h2>Nous Contacter</h2>
                                <ul>
                                    <li>Antananarivo, Madagascar </li>
                                    <li>Email:&nbsp;andsonandriamitovy@gmail.com</li>
                                    <li>Phone: +261 34 18 522 33</li>
                                </ul>
                            </div>
                            <div
                                className={`up-bouton ${showButton ? "show" : ""} ${isClicked ? "clicked" : ""}`}
                                onClick={scrollToTop}
                                onAnimationEnd={handleAnimationEnd}
                            >
                                <span><FaArrowUp /></span>
                            </div>
                        </div>
                    </div>
                    <p className="text-center pt-5 pb-0 mb-0 footer-text">copyright@projet2023andsonandriamitovy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
