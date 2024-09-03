import { useState } from "react";
import "./factory.css";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function Factory() {
  const [customer, setCustomer] = useState(true);
  const [animalFeed, setAnimalFeed] = useState(false);
  const [broilerFeed, setBroilerFeed] = useState(false);
  const [layers, setLayers] = useState(false);
  const [freeRange, setFreeRange] = useState(false);
  const [pigs, setPigs] = useState(false);
  const [feedFormulation, setFeedFormulation] = useState(false);
  const [feedIngredient, setFeedIngredient] = useState(false);
  const [soyaCake, setSoyaCake] = useState(false);
  const [seeds, setSeeds] = useState(false);

  // the view for the customer content shown
  const CustomerContent = () => {
    return (
      <ul>
        <li>Cooking Oil</li>
        <li onClick={() => setAnimalFeed(!animalFeed)}>Animal Feed</li>
        {animalFeed && (
          <ul>
            <li onClick={() => setBroilerFeed(!broilerFeed)}>Broiler Feed</li>
            {broilerFeed && (
              <ul>
                <li>Starter</li>
                <li>Grower</li>
                <li>Finisher</li>
              </ul>
            )}
            <li onClick={() => setFreeRange(!freeRange)}>Free Range Feed</li>
            {freeRange && (
              <ul>
                <li>Starter Feed</li>
                <li>Grower Feed</li>
                <li>Supplementary Feed</li>
                <li>Scratch Grain</li>
              </ul>
            )}
            <li onClick={() => setLayers(!layers)}>Layers</li>
            {layers && (
              <ul>
                <li>Starter Feed</li>
                <li>Grower Feed</li>
                <li>Layer Mash</li>
                <li>Calcium Supplements</li>
              </ul>
            )}
            <li onClick={() => setPigs(!pigs)}>Pig Feed</li>
            {pigs && (
              <ul>
                <li>Starter Feed</li>
                <li>Grower Feed</li>
                <li>Finisher Feed</li>
                <li>Sow And Weaner Feed</li>
              </ul>
            )}
          </ul>
        )}
        <li onClick={() => setFeedFormulation(!feedFormulation)}>
          Feed Formulation
        </li>
        {feedFormulation && (
          <ul>
            <li>Pig Feed</li>
            <li>Broiler Feed</li>
            <li>Layer feed</li>
            <li>Free Range Feed</li>
          </ul>
        )}
        <li onClick={() => setFeedIngredient(!feedIngredient)}>
          Feed Ingredient
        </li>
        {feedIngredient && (
          <ul>
            <li>Sunflower Cake</li>
            <li onClick={() => setSoyaCake(!soyaCake)}>Soya Cake</li>
            {soyaCake && (
              <ul>
                <li>Full Fat</li>
                <li>Low Fat</li>
                <li>Mechanical Extracted</li>
              </ul>
            )}
            <li>No3 Meal(Gaga)</li>
          </ul>
        )}
        <li onClick={() => setSeeds(!seeds)}>Seeds</li>
        {seeds && (
          <ul>
            <li>Sunflower</li>
            <li>Soya Beans</li>
            <li>Onion</li>
            <li>Tomatoes</li>
          </ul>
        )}
      </ul>
    );
  };

  // the view returned for the supplier
  const SupplierView = () => {
    return (
      <ul>
        <li>Sunflower Seeds</li>
        <li>soya Beans seeds</li>
        <li>Maize</li>
      </ul>
    );
  };

  return (
    <div>
      <div className="mainFactoryContainer">
        <Header page="Home" />
        <div className="factoryContentContainer">
          <h4 onClick={() => setCustomer(true)}>customer</h4>
          {customer && <CustomerContent />}
          <h4 onClick={() => setCustomer(false)}>supplier</h4>
          {!customer && <SupplierView />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
