import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carasoul from '../Carasoul/Carasoul-foodie';
import CarasoulEcommerce from '../Carasoul/Carasoul-eCommerce';
import CarasoulVeganCosmetics  from '../Carasoul/Carasoul-veganCosmetics';



const PortfolioCard = () => (
    <CardGroup className="container">
        <Card className="mr-3 px-4 py-4">
        <a className="myButton" href="https://foodiejournals.com/">
          <Carasoul variant="top" />
        </a>
          <Card.Body>
            <Card.Title>Foodies Journal</Card.Title>
            <Card.Text>
              Foodies Journal is an application that allows users to post, view, and save recipes.  Utilizing a django backend, and a nextJs frontend, users can create an account that allows them to save, and post a recipe.  If you are not signed up with Foodie Journals, you are restricted to only seeing posted Recipes.  You are able to sort the recipes by ingredients and the meal types such as breakfest.  
            </Card.Text>
          </Card.Body>
        </Card>
      <br />
      <Card className="mr-3 px-4 py-4">
        <a className="myButton" href="https://e-commerce-store-2.vercel.app/">
          <CarasoulEcommerce variant="top" />
        </a>
        <Card.Body>
          <Card.Title>eCommerce Store</Card.Title>
          <Card.Text>
            This application is built using ReactJs and a firebase backend.  This application allows users to view different clothing items, add them to an item cart, and to checkout the items if desired.  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mr-3 px-4 py-4">
      <a className="myButton" href="https://github.com/vegan-cosmetics/vegan-cosmetics">
        <CarasoulVeganCosmetics variant="top" />
      </a>
        <Card.Body>
          <Card.Title>Vegan Cosmetics</Card.Title>
          <Card.Text>
            This application is built soley using python.  It is just a terminal application, though it utilizes important techniques of web scraping and grabbing data from an API and multiple web pages.  This application allows users to view vegan cosmetic products by either viewing a group of the products, or the indivdal product itself.  They can save all of the products and view all the saved products as well.  
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
)

export default PortfolioCard;