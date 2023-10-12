import React, { useState } from 'react';
import { motion, useAnimation , AnimatePresence  } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SlideCategories from '../components/SlideCategories';
import { AiOutlineShoppingCart} from "react-icons/ai"
import { BsFillPencilFill } from "react-icons/bs";

import { FaTruck } from "react-icons/fa";
import CatProduct from '../components/CatProduct';
import Header from '../components/Header';
import Recipe from '../components/recipe';
import Separated from '../components/Separated';
import Footer from '../components/Footer';


function Home({ cart, activeLink, handleLinkClick }) {
    const imageAnimationControls = useAnimation();
    const textAnimationControls = useAnimation();
    const IconAnimationControls = useAnimation();
    const scrollThreshold = 100; 

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY >= scrollThreshold) {
          
            imageAnimationControls.start({
                rotate: 1080, 
                opacity: 1, 
                transition: { duration: 0.6 }, 
            });
            textAnimationControls.start({
                x: 0, 
                opacity: 1, 
                transition: { duration: 1 }, 
            });
            IconAnimationControls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 1 },
            })

        }
    };

    useEffect(() => {

        imageAnimationControls.set({ opacity: 0 });
        textAnimationControls.set({ x: 100, opacity: 0 });
        IconAnimationControls.set({ x: -100, opacity: 0 });
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [textAnimationControls, IconAnimationControls]);

    return (
        <div>

            <Header cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />

            <div className="container-fluid p-0">
                <div className="header-img row p-2 m-0 ">
                    <div className="col-md-3 offset-md-1  p-4  pt-0">
                        <ul className='categorie-nav bg-white pt-4 pb-4 rounded'>
                            <li><img src='/categorie/cat1.png' className=' mt-2' alt="" /><span className='ps-5' >Fruits Sechés</span></li>
                            <li><img src='/categorie/cat2.jpg' className=' mt-2' alt="" /><span className='ps-5' >Fruits Confits</span></li>
                            <li><img src='/categorie/cat3.png' className=' mt-2' alt="" /><span className='ps-5' >Patte de Fruits</span></li>
                            <li><img src='/categorie/cat4.jpg' className=' mt-2' alt="" /><span className='ps-5' >Poudre de Fruits</span></li>
                            <li><img src='/categorie/cat5.jpg' className=' mt-2' alt="" /><span className='ps-5' >Rouleau de Fruits</span></li>
                            <li><img src='/categorie/cat7.jpg' className=' mt-2' alt="" /><span className='ps-5' >Tutti Fruits</span></li>
                            <li><img src='/categorie/cat8.jpg' className=' mt-2' alt="" /><span className='ps-5' >Confiture</span></li>
                            <li><img src='/categorie/cat9.jpg' className=' mt-2' alt="" /><span className='ps-5' >Jus de Fruits</span></li>
                            <li><img src='/categorie/cat10.jpg' className=' mt-2' alt="" /><span className='ps-5' >Fruits Frèches</span></li>
                            <li><img src='/categorie/cat10.webp' className=' mt-2' alt="" /><span className='ps-5' >Mélanges de Fruits</span></li>

                        </ul>

                    </div>
                    <div className="offset-md-1 col-md-6 title-header mt-3 p-5">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active mt-2">
                                    <AnimatePresence wait>
                                        <div className="carousel-item active mt-2">
                                            <motion.h1
                                                className='mt-5 pt-5'
                                                initial={{ opacity: 0, y: -50 }}
                                                animate={{ opacity: 1, x: 0, y: 0 }}
                                                transition={{ type: 'spring', damping: 20, stiffness: 55, duration: 1 }}
                                            >
                                                50% Remise
                                            </motion.h1>
                                            <motion.p
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ type: 'spring', duration: 2, delay: 1 }} 
                                            >
                                                Pour votre première Achat
                                            </motion.p>
                                            <motion.div
                                                initial={{ opacity: 0 , y: 50 }}
                                                animate={{ opacity: 1 , y: 0}}
                                                transition={{ type: 'spring', duration: 2, delay: 2 }} 
                                            >
                                                <Link to='/products' className='btn fw-bold mt-5'>Voir Produits</Link>
                                            </motion.div>
                                        </div>
                                    </AnimatePresence>
                                </div>
                                <div className="carousel-item mt-2">
                                    <h1 className='mt-5 pt-5'>Livraison gratuite</h1>
                                    <p>à partir de 100 000 Ariary</p>
                                    <Link to='/products' className='btn fw-bold mt-5'> Voir Produits</Link>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>


                </div>

                <div className="container text-center p-4">
                    <img src="/paiement.png" className='img-fluid' alt="" />
                </div>

                <div className="container-fluid delivery-home p-5 pt-0">
                    <div className="container text-center">
                        <h1 className='home-title'> Ny Vokatry ny Tantsaha</h1>

                        <div className="row ">
                            <div className="col-md-5 offset-md-2 delivery-left">
                                <motion.img
                                    src="./vegetable.jpg"
                                    className='img-fluid w-100'
                                    alt=""
                                    initial={{ opacity: 0 }} 
                                    animate={imageAnimationControls} 
                                />
                                <motion.h5
                                    className="mt-5 text-white"
                                    animate={textAnimationControls} 
                                >
                                    Votre marché en ligne livré à domicile
                                </motion.h5>

                            </div>

                            <div className="col-md-4 delivery-right ">
                                <div className="row ">
                                    <div className="col-md-3  pe-0"><i><AiOutlineShoppingCart /></i></div>
                                    <div className="col-md-9 pt-2 ps-0">  <p><span className='number '>1.</span>Ajoutez au panier les produits qui vous font plaisir parmi une large sélection de fruits, légumes, épicerie, ou encore beauté & hygiène...</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 pe-0"><i>< BsFillPencilFill /></i></div>
                                    <div className="col-md-9 pt-2 ps-0  ">  <p><span className='number'>2.</span>Validez votre panier, choisissez votre mode de livraison, ajoutez vos coordonnées et payez en ligne - Paiement 100% sécurisé. </p></div>
                                </div>
                                <div className="row">
                                    <motion.div
                                        className="col-md-3 pe-0"
                                        animate={IconAnimationControls} 
                                    >
                                        <i><FaTruck /></i>
                                    </motion.div>

                                    <div className="col-md-9 pt-2 ps-0">  <p><span className='number'>3.</span>Nous préparons vos produits avec soin et assurons la livraison de votre panier dans les 24 heures qui suivent la validation de votre commande. </p></div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>



                <Separated />


                <Recipe />
                <SlideCategories />
                <CatProduct  className='mb-5' />

            </div>
            <Footer />
        </div>
    );
}

export default Home;
