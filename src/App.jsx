import './App.css'


function App() {
  return (
    <>
      <main >
        <div className="maincontainer p-md-4">
          <img src={`../public/image-omelette.jpeg`} className={`img-fluid `} />
          <section className='container-fluid px-4 py-4 px-md-0 pt-md-4 pb-md-0'>
            <h1 className='young-serif-regular page-heading'>Simple Omelette Recipe</h1>
            <p className='mt-4 outfit-400'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div className={`prepration-div p-3 rounded`}>
              <h5 className='prepration-header outfit-600'>Preparation time</h5>
              <ul>
                <li><strong>Total:</strong> Approximately 10 minutes</li>
                <li><strong>Preparation:</strong> 5 minutes</li>
                <li><strong>Cooking:</strong> 5 minutes</li>
              </ul>
            </div>
            <div className="ingredients-div mt-3 border-bottom ">
              <h2 className='ingredients-header young-serif-regular'>Ingredients </h2>
              <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            </div>
            <div className="instructions-div mt-3 border-bottom">
              <h2 className='instructions-header young-serif-regular'>Instructions </h2>
              <ol >
                <li className='ps-3 pt-2'><strong>Beat the Eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                  You can add a tablespoon of water or milk for a fluffier texture.</li>
                <li className='ps-3 pt-2'><strong>Heat the pan:</strong>Place a non-stick frying pan over medium heat and add butter or oil.</li>
                <li className='ps-3 pt-2'><strong>Cook the omelette:</strong>  Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                  the eggs evenly coat the surface.</li>
                <li className='ps-3 pt-2'><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the omelette.</li>
                <li className='ps-3 pt-2'><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
                  fillings. Let it cook for another minute, then slide it onto a plate.</li>
                <li className='ps-3 pt-2'><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
              </ol>
            </div>
            <div className="nutrition-div mt-4  ">
              <h2 className='nutrition-header young-serif-regular'>Nutrition </h2>  
              <p className='mt-4'>The table below shows nutritional values per serving without the additional fillings.</p>
              <table className="table m-0">
                <tbody>
                  <tr>                   
                    <td>Calories</td>
                    <td className='outfit-600'>277kcal</td> 
                  </tr>
                  <tr>                   
                    <td>Carbs</td>
                    <td className='outfit-600'>0g</td>                         
                  </tr>       
                  <tr>                   
                    <td>Protein</td>               
                    <td className='outfit-600'>20g</td>                             
                  </tr>  
                  <tr>                   
                    <td>Fat</td>           
                    <td className='outfit-600'>22g</td>               
                  </tr>   
                </tbody>
              </table>

            </div>
          </section>
        </div>



      </main>
    </>
  )
}



// Simple Omelette Recipe

//   An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
//   to perfection, optionally filled with your choice of cheese, vegetables, or meats.

//   Preparation time

//   Total: Approximately 10 minutes
//   Preparation: 5 minutes
//   Cooking: 5 minutes

//   Ingredients

//   2-3 large eggs
//   Salt, to taste
//   Pepper, to taste
//   1 tablespoon of butter or oil
//   Optional fillings: cheese, diced vegetables, cooked meats, herbs

//   Instructions

//   Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
//   You can add a tablespoon of water or milk for a fluffier texture.

//   Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.

//   Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
//   the eggs evenly coat the surface.

//   Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the 
//   middle, sprinkle your chosen fillings over one half of the omelette.

//   Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the 
//   fillings. Let it cook for another minute, then slide it onto a plate.

//   Enjoy: Serve hot, with additional salt and pepper if needed.

//   Nutrition

//   The table below shows nutritional values per serving without the additional fillings.

//   Calories
//   277kcal

//   Carbs
//   0g

//   Protein
//   20g

//   Fat
//   22g

export default App
