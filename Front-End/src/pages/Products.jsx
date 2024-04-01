import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SlideCategories from '../components/SlideCategories';
import CatItemProduct from '../components/CatItemProduct';
import { AiOutlineSearch } from 'react-icons/ai';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function Products({ cart, activeLink, handleLinkClick, setCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    try {
      axios.get('http://127.0.0.1:8000/api/vegetables').then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'API : ', error);
    }
  }, []);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === 'Tout'
        ? products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : products.filter((product) =>
          product.cat === category &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered =
      selectedCategory === 'Tout'
        ? products.filter((product) =>
          product.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        : products.filter((product) =>
          product.cat === selectedCategory &&
          product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div>
      <Header cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <div className="container-fluid p-0">
        <img src="/product-header.jpg" className='img-fluid w-100 m-0 p-0' alt="" />
        <SlideCategories />
      </div>

      <div className='container-fluid all-product pb-5'>
        <div className="container-fluid">
          <h1 className='home-title text-center'>Ny Vokatry ny Tantsaha</h1>
          <div className="row mb-3">
            <div className="product-nav p-0 text-center col-md-10 offset-md-2">
              <button
                onClick={() => filterProductsByCategory('Tout')}
                className={selectedCategory === 'Tout' ? 'active' : ''}
              >
                Tout nos produits
              </button>
              <button
                onClick={() => filterProductsByCategory('legume')}
                className={selectedCategory === 'legume' ? 'active' : ''}
              >
                Légumes
              </button>
              <button
                onClick={() => filterProductsByCategory('fruit')}
                className={selectedCategory === 'fruit' ? 'active' : ''}
              >
                Bar à fruits Secs
              </button>
              <button
                onClick={() => filterProductsByCategory('jus')}
                className={selectedCategory === 'jus' ? 'active' : ''}
              >
                Boisson
              </button>
              <button
                onClick={() => filterProductsByCategory('confiture')}
                className={selectedCategory === 'confiture' ? 'active' : ''}
              >
                Confiture
              </button>
            </div>
          </div>
          <div className="row">
            <div className="categories offset-md-1 col-md-8">
              <div className="products row">
                {productsToDisplay.length === 0 ? (
                  <p className='ps-5'>Pas de résultats.</p>
                ) : (productsToDisplay.map((product) => (
                  <div key={product.id} className="col-md-3 product pb-4 p-0 ms-5 mb-5 text-center">
                    <CatItemProduct image={product.photos} type={product.name} productId={product.id} />
                    <div className="row pt-3">
                      <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <p className='price'>{product.price} € </p>
                      </div>
                      <div className="col-md-8">
                        <button onClick={() => addToCart(product)} className="btn btn-primary">Ajouter au panier</button>
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`}></Link>
                  </div>
                )))}
              </div>
              <ul className="pagination mt-3 ms-2">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-md-2 right pt-4 mb-5 pb-3">
              <form onSubmit={handleSearch} className="d-flex">
                <input className="form-control me-2" type="search" value={searchTerm} onChange={handleSearch} placeholder="Rechercher ..." aria-label="Search" />
                <button type="submit" className="btn btn-outline-success"><AiOutlineSearch /></button>
              </form>
              <h2 className="title mt-4">NEVER MISS OUR SITE</h2>
              <img src="./subscribe.png" className="img-fluid mt-3" alt="" />
              <img src="./submit.png" className="img-fluid mt-3" alt="" />
              <h2 className="title">ADVERTISSEMENT </h2>
              <img src="./block.png" className="img-fluid w-100 p-2" alt="" />
              <h2 className="title mt-5">JOIN OUR EMAIL </h2>
              <p>we sure will let you know every time we post something new here. enter your email for notifications and join thousands other subscribers.</p>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Your email..." aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
