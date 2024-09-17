# Lecture # 1 - Introduction to React

## Lecture Topics

- Learn how to create a React application and start it
- Learn about imports and exports in React
- Discuss the benefits of React over Vanilla JS
- Discuss the difference between HTML and JSX
- Discuss the importance of Components
- Learn how a Component is written
- Learn how to render a Component

## Setup

Please make sure that you are inside the folder for this repository (the `SE-NYC-071524-Phase-2` folder) before following these instructions for setup:

1. Run the following command in the terminal to create a new React application named `pets-app`:

```
npx create-react-app pets-app
```

2. Run the following command in the terminal to move inside of the directory for the React application:

```
cd pets-app
```

3. Run the following command in the terminal to start the React application and run the React application in your browser:

```
npm start
```

If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. Delete the CSS code with the `App.css` file that is within `pets-app/src`. Then, copy & paste the CSS code from the `example.css` file into the `App.css` file.

5. Copy the `images` folder, and paste a copy of it into the `public` folder that is within the `pets-app` folder.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will learn about the fundamentals of React, including Components, to help us accomplish some tasks related to displaying data on the website.

1. In the `App.js` file, the `App` component currently returns an `<div>` element with the `className` of `App` that contains some starter code. Delete this `<div>` element along with its starter code.

2. The `App` component should return a `<div>` element with the `className` of "app".

3. Create a folder named `components` within the `src` folder.

4. Create a new file named `Header.js` inside of the `components` folder. Then, inside of the `Header.js` file, create a `Header` component that will return a `<header>` element that contains the following elements inside it:
   - An `<h1>` element.
   - The `<h1>` element must have the text "Flatapets" inside it, as well as a `<span>` element inside it.
   - The `<span>` element must have the `className` of "logo", and must have the 🐈 emoji inside it.

5. Export your `Header` component from `Header.js`. Import your `Header` component into `App.js`.

6. Render the `Header` component inside of the `<div>` element returned from the `App` component.

7. Create a new file called `PetList.js` inside of the `components` folder. Then, inside of the `PetList.js` file, create a `PetList` component that will return a `<ul>` element with the `className` of "pet-list".

8. Export your `PetList` component from `PetList.js`. Import your `PetList` component into `App.js`.

9. Render the `PetList` component inside of the `<div>` element returned from the `App` component. The `PetList` component should be rendered after the `Header` component.

10. Create a folder named `data` inside of the `src` folder that is within the `pets-app` folder.

11. Create a file named `petsData.js` inside of the `data` folder.

12. Inside of the `petsData.js` file, write the code to create the following two variables, each of which will be assigned the value of an object as follows:
    - Create a variable named `dog` whose value is an `object` with the following key and value pairs:
      - A key named `name` with the value of the string `Fido`.
      - A key named `image` with the value of the string `images/dog.jpeg`.
    - Create a variable named `cat` whose value is an `object` with the following key and value pairs:
      - A key named `name` with the value of the string `Kitty`.
      - A key named `image` with the value of the string `images/cat.png`.

13. Export the `dog` and `cat` variables that you created in the previous deliverable from `petsData.js`. Import these variables into `PetList.js`.

14. In the `PetList` component, create two `<li>` elements which should be rendered inside of the `<ul>` element in the `PetList` component. Each of the `<li>` elements must contain a `className` of "pet".

15. The first `<li>` element must contain the following elements inside it:
    - An `<img>` element. The `<img>` element's `src` attribute must have the value of the dog's image. The `<img>` element's `alt` attribute must have the value of the dog's name.
    - An `<h4>` element. The dog's name should display inside of this `<h4>` element.

16. The second `<li>` element must contain the following elements inside it:
    - An `<img>` element. The `<img>` element's `src` attribute must have the value of the cat's image. The `<img>` element's `alt` attribute must have the value of the cat's name.
    - An `<h4>` element. The cat's name should display inside of this `<h4>` element.

## Creating a React App

`create-react-app` will build a project folder for our application and install all the dependencies we need (via Node Package Manager).

To create a new React application and start it, run:

```
npx create-react-app app-name
cd app-name
npm start
```

In addition to React, it gives us:

- Webpack: a tool for bundling and minifying our code (along with a server for running our code in development)
- Babel: a transpiler that lets us write modern JavaScript and JSX

## Components

Components are the building blocks of React. A component is a function that:

- Takes in some raw data (props)
- Returns user interface (JSX)

There are some things you'll need to keep in mind:

- The name of your component function must be capitalized.
- A component can only return one element. That element can have children, like this:

``` javascript
function Card() {
  return (
    <div id="card1" className="card">
      <h1>Hello Flatiron!</h1>
      <p>Greetings!</p>
    </div>
  );
}
```

### Resources

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Webpack](https://webpack.js.org/)
- [Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)