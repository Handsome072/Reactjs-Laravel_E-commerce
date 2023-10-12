import React, { useEffect } from 'react';

function Recipe() {
  useEffect(() => {
    const testScroll = () => {
      const recipeElement = document.querySelector('.recipe');
      const recipePosition = recipeElement.getBoundingClientRect().top;
      const screenRecipe = window.innerHeight;

      if ((recipePosition +200) < screenRecipe) {
        recipeElement.classList.add('opacite');
      }
    }

    window.addEventListener('scroll', testScroll);

    return () => {
      window.removeEventListener('scroll', testScroll);
    };
  }, []);

  return (
    <div className="container-fluid recipe-bg p-5 pt-0">
      <div className="container recipe pt-5">
        <div className="row">
          <div className="col-md-4 offset-md-2 text-start">
            <h1>Des recettes et des conseils au quotidien</h1>
            <p className='fw-bold mt-3'>À vous qui planifiez vos repas dès le contenu de votre panier dévoilé,
              ou à vous qui cherchez une idée de repas pour ce soir alors qu’on est déjà ce soir...</p>
            <p>L’équipe vous accompagne avec des recettes simples et saines, et des conseils pour ne pas faire chou blanc devant une variété que vous n’avez pas encore domptée.</p>
            <p>Vous ne saviez pas qu’il fallait couper les fânes des radis pour les conserver plus longtemps ? Maintenant, oui.</p>
            <button className='btn btn-success mt-4'>Decouvrir nos Recettes</button>
          </div>
          <div className="col-md-5 recipe-right">
            <h5 className='mt-5 text-white'>Votre marché en ligne livré à domicile</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
