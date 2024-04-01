import React, { useEffect } from 'react';
import { Element } from 'react-scroll';

function Separated() {
  useEffect(() => {
    const ScrollWindows = () => {
      const Separated = document.querySelector('.separation');
      const SeparatedPosition = Separated.getBoundingClientRect().top;
      const screenSeparated = window.innerHeight;

      if (SeparatedPosition < screenSeparated) {
        Separated.classList.add('opacite');
      }
    };

    window.addEventListener('scroll', ScrollWindows);

    return () => {
      window.removeEventListener('scroll', ScrollWindows);
    };
  }, []);

  return (
    <Element className="container-fluid separation text-center text-white">
      <h1 className="fw-bold pt-5 display-3">Dénicheurs de Bon</h1>
      <h3 className="pb-3">Une histoire de pépites bien produites et bien choisies.</h3>
      <button className="btn btn-warning fw-bold p-3">Découvrir le manifeste du bon</button>
    </Element>
  );
}

export default Separated;
