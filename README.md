# RentME

![This is RentME!](src/assets/readme.png)

</br></br>

- [RentME](#rentme)
  - [About this application:](#about-this-application)
  - [Features:](#features)
  - [How to install RentME](#how-to-install-rentme)
  - [How to use RentME](#how-to-use-rentme)
    - [Home](#home)
    - [Bike Stores](#bike-stores)
    - [Store Detail](#store-detail)
  - [API](#api)
    - [Custom API](#custom-api)

</br></br>

## About this application:

RentMe is a web application that can be used to store information about business dedicated to rent bikes for general public across Canada.

RentMe was developed using the following tech stack:

- <p align="left"> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> functional components and styled components</p>
- <p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>  Express</p>
- <p align="left"> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>MongoDB </P>
- <p align="left"><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="node" width="40" height="40"/> </a> Node</p>

Additional packages for data visualization:

- <p align="left"> <a href="https://react-leaflet.js.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1200px-Leaflet_logo.svg.png" alt="leaflet" width="100" height="40"/> </a>Leaflet</p>
- <p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>Bootstrap</p>

This prokect is hosted in:

- <p align="left"><a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a>Heroku</p>

_RentME is fully responsive with a breakpoint in 800px_
</br></br>

## Features:

**_Visualization of all stores:_**

This is where the user can find basic information of all the stores. It's easy to see the all the cards in just one page and select one to get full information. Additionaly, the user can delete a store if needed.

**_Filter stores:_**

There is a filter input on the top of store list where the user can enter a full or parcial store name and the click on the search button or press enter key and the list of store will be updated with results.

**_Add new bike stores:_**

This is where the user can add all the information about a new store, from the name and description, through the service hours and add the types of bicycles that are available along with the cost per period of time. The user must also add the address, RentMe will automatically locate the coordinates to be displayed on a map.

**_Detail visualization about an specific store:_**

This page is where the user is redirected coming from the list of stores, this is where all the details and complete information of the store are shown, including the map for an easy location.
</br></br>

## How to install RentME

1. Clone RentMe repo by using https://github.com/alerika2018/rentalBikes.git
2. Run npm install to get all dependencies
3. Create a database in MongoDB Atlas with the name bikeStores
4. Create a .env with the following environmental variables
   - PORT=3000
   - MONGODB_URL= 'mongodb+srv://username:password@cluster0.id1ka.mongodb.net/bikeStores?retryWrites=true&w=majority'
5. Run npm run dev
6. Run npm run watch
7. Enjoy!

</br></br>

## How to use RentME

### Home

- In this page the user can visualize a nav bar to go to the Bike Store List or move back to the home page.
- In the middle of the page will find a link (Start) to be redirect to the Bike Store List.

### Bike Stores

- This page will be full of cards to show basic information of each store.
- Each card contains:
  - Icon to go to the store details page to visualize full data.
  - Store name and address along with a link to the store website.
  - Red trash can icon to delete store.
- On the upper right corner, there is a circle button with a + sign (in mobile view) or a text "New Store" (in desktop view). This button will show a canvas component where the user can enter the information of the store.
- On the upper left side, there is an input field to search stores by name.
- The form to enter the store information is made up of two parts, the first part is to enter information about the store such as the name, description, website url and the hours of operation.The second part is used to enter the information of the types of bicycles that can be rented, as a maximum, the user can enter 5.

### Store Detail

- This page will be displayed after the user click on one store card (from the Bike Store)
- This page is used only to display all the information of the store as well as a location map.

</br></br>

## API

- RentME uses a photo API to display random picture containing bikes in any form. https://api.unsplash.com/
- RentME helps the user showing a list of Canada Provinces to select from at the moment to enter the address. Also it will display a list of cities depending on the selected province. This data is store using arrays but was taken from https://gist.github.com/jdewit/8755708.

  ### Custom API

  - POST: /api/v1/store --- Send store information
  - GET: /api/v1/store ---Retrieve list of stores
  - DELETE: /api/v1/store/:id --- Delete a store by id
  - GET: /api/v1/store/:id --- Retrive information of one store by id

    > Responses are using JSON format

    **POST body format**

    ![store POST](src/assets/post.png)

    **Examples to use endpoints**

    - GET
      - localhost:3000/api/v1/store
      - localhost:3000/api/v1/store?storeName=bike
      - Response: All stores in JSON format. When nameStore param is empty, will return whole collection, otherwise, will return filtered collection by name.
    - DELETE
      - localhost:3000/api/v1/store/61a6cce3180f765c545b5db6
      - Response: { "deletedCount": 1 }
    - GET
      - localhost:3000/api/v1/store/61a559686af7338185be252c
      - Response: full information about store with id 61a559686af7338185be252c
    - POST
      - localhost:3000/api/v1/store
      - axios
        .post("/api/v1/store", storeObj)
      - storeObj in json format as seen in above picture
