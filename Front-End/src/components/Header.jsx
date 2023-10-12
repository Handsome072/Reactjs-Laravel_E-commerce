import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Notification from '../components/Notification';
import { MdEmail } from "react-icons/md";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import "../App.css";

function Header({ cart, activeLink, handleLinkClick }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
             
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`container-fluid bg-header ${scrolled ? 'header-scrolled' : ' '}`}>
                <div className=' col-md-7 header-text-icon '>
                    <i className='ps-5 text-white header-icon'> < BsTelephoneInboundFill /> <span > &nbsp; +261 34 18 522 33</span>  </i>
                    <i className='text-white header-icon ps-5'> < MdEmail />  <span > &nbsp; andsonandriamitovy@gmail.com</span>  </i>
                </div>
                <div className="container col-md-5 nav-header  ">
                    <ul className="nav float-end ">
                        <li >
                            <a className="nav-link text-white " href="#">Langue</a>
                        </li>
                        <li >
                            <a className="nav-link text-white " href="#">Aide et FAQ</a>
                        </li>
                        <li className='border-end-0' >
                            <Link to='/home' className="nav-link text-white " >Mon Compte</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className={`navbar navbar-header navbar-expand-lg pb-2 pt-2 ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container-fluid   ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  pe-5" id="navbarSupportedContent">
                        <div className=" m-auto  ">
                            <Link className="logo" to='/' onClick={() => handleLinkClick('/home')}>
                                AndsonSite
                            </Link>
                        </div>
                        <ul className="navbar-nav ms-auto pe-5 pt-0  mb-2 mb-lg-0 ps-5">
                            <li>             
                                <Link to='/home' className={`link-nav ${activeLink === '/home' ? 'active-header text-white' : ''}`} onClick={() => handleLinkClick('/home')}>
                                    Acceuil
                                </Link>
                            </li>
                            <li>              
                                <Link to='/about' className={`link-nav ${activeLink === '/about' ? 'active-header text-white' : ''}`} onClick={() => handleLinkClick('/about')}>
                                    A propos
                                </Link>
                            </li>
                            <li>              
                                <Link to='/products' className={`link-nav ${activeLink === '/products' ? 'active-header text-white' : ''}`} onClick={() => handleLinkClick('/products')}>
                                    Boutique
                                </Link>
                            </li>
                            <li>              
                                <Link to='/contact' className={`link-nav ${activeLink === '/contact' ? 'active-header text-white' : ''}`} onClick={() => handleLinkClick('/contact')}>
                                    Nous Contacter
                                </Link>
                            </li>
                            <li>
                                <Link to='/blog' className={`link-nav ${activeLink === '/blog' ? 'active-header text-white' : ''}`} onClick={() => handleLinkClick('/blog')}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        <div className=' search  pe-5' > <i className='text-start'><AiOutlineShoppingCart /></i>
                            <span >
                                <Link to="/cart" className={`text-white ${activeLink === '/cart' ? '' : ''}`} onClick={() => handleLinkClick('/cart')}> <Notification cartItemsCount={cart.length} />
                                </Link>
                            </span>
                        </div>
                        <form className="d-flex nav-right">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Rechercher" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"> < AiOutlineSearch /></span>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
