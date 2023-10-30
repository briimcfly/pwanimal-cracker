# PWA Text Editor
a browser-based text editor built to work offline. 

## User Story 
`AS A` developer <br>
`I WANT` to create notes or code snippets with or without an internet connection <br>
`SO THAT` I can reliably retrieve them for later use <br>

## Acceptance Criteria
`GIVEN` a text editor web application <br>
`WHEN` I open my application in my editor <br>
`THEN` I should see a client server folder structure <br>
`WHEN` I run **npm run start** from the root directory <br>
`THEN` I find that my application should start up the backend and serve the client <br>
`WHEN` I run the text editor application from my terminal<br>
`THEN` I find that my JavaScript files have been bundled using webpack<br>
`WHEN` I run my webpack plugins<br>
`THEN` I find that I have a generated HTML file, service worker, and a manifest file<br>
`WHEN` I use next-gen JavaScript in my application <br>
`THEN` I find that the text editor still functions in the browser without errors<br>
`WHEN` I open the text editor<br>
`THEN` I find that IndexedDB has immediately created a database storage<br>
`WHEN` I enter content and subsequently click off of the DOM window<br>
`THEN` I find that the content in the text editor has been saved with IndexedDB<br>
`WHEN` I reopen the text editor after closing it<br>
`THEN` I find that the content in the text editor has been retrieved from our IndexedDB<br>
`WHEN` I click on the Install button<br>
`THEN` I download my web application as an icon on my desktop<br>
`WHEN` I load my web application<br>
`THEN` I should have a registered service worker using workbox<br>
`WHEN` I register a service worker<br>
`THEN` I should have my static assets pre cached upon loading along with subsequent pages and static assets<br>
`WHEN` I deploy to Heroku<br>
`THEN` I should have proper build scripts for a webpack application<br>

## Overview
This editor is a progressive web application (PWA) designed to function offline and is equipped with versatile data persistence techniques to ensure compatibility across different browsers. The core of its data storage functionality stems from the **idb** package, a favored IndexedDB API wrapper by industry leaders like Google and Mozilla. 

![application image](https://github.com/briimcfly/pwanimal-cracker/assets/7972240/0c9b6f2c-9765-48c9-9cce-87a51060d07a)


A deployed version can be viewed [here](https://pwanimal-cracker-011e7a407de9.herokuapp.com/)

## Installation 
To get started, clone the repository from the provided link. Then, enter the project directory and use your preferred package manager to install the necessary dependencies.

## Usage 
After completing installation, start the application by using `npm run start` then launch `localhost:3000`

## Technologies Used 
* Heroku
* Webpack
* Workbox
* Babel

## Reflection 
This project has allowed me to apply the core skills I have recently learned and put them into practice. During development, I had the opportunity to deepen my understanding Webpack. Additionally, I developed a deeper appreciation for for the importance code commenting, and the development principal DRY. (Don't repeat yourself).
