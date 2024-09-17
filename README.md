# Lecture # 2 - Components & Props

## Lecture Topics


- Review the benefits of React over Vanilla JS
- Review the difference between HTML and JSX
- Review the importance of Components
- Review how a component is written
- Explain what props are and how to create them
- Recognize destructured props and how to work with them
- Recognize best practices when writing components and props
- Observe how to render multiple components from a list
- Discuss the importance of the key prop for a list of components

## Setup


Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.
2. Run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will learn about Components and Props to help us accomplish some tasks related to displaying data on the website.

1. In `App.js`, the `PetList` component is rendered inside of `<div className="app">`. Create a prop named `pets` that is passed to the `PetList` component. The value of the `pets` prop should be the value of the `pets` variable that was imported from the `petsData.js` file into the the `App.js` file.

2. In `PetList.js`, destructure the `pets` prop in the `PetList` component.

3. In the `PetList` component, use the `.map()` array iterator to iterate over the `pets` array (prop that was passed to the `PetList` component) and create a list of `Pet` components which should be rendered inside of the `<ul>` element in the `PetList` component.

4. The `Pet` components should have a prop called `pet`. The value of the `pet` prop should be an object from the `pets` array (prop that was passed to the `PetList` component).

5. Create a `key` prop for the `Pet` components - this is necessary since we are creating a list of `Pet` components. The value of the `key` prop should be the `id` for the pet object.

6. Create a new file called `Pet.js` inside of the `components` folder. Then, inside of the `Pet.js` file, create a `Pet` component. Destructure the `pet` prop in the `Pet` component. The `Pet` component must return an `<li>` element with the `className` of "pet". This `<li>` element must contain the following elements inside it:
    - An `<img>` element. The `<img>` element's `src` attribute must have the value of the pet's image. The `<img>` element's `alt` attribute must have the value of the pet's name.
    - An `<h4>` element. The pet's name should display inside of this `<h4>` element.

7. Export your `Pet` component from `Pet.js`. Import your `Pet` component into `PetList.js`.

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

## Props

When you create components, one way to make them dynamic and reusable is by passing in props. For example, if we wanted to create several cards on our page using a Card component, we could do so like this:

``` javascript
function Card(props) {
  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card greeting="Good morning!" subGreeting="Hello World!" />
    <Card greeting="Class is in session!" subGreeting="Welcome to React!" />
  </div>,
  document.getElementById("root")
);
```

The props argument in our Card component defines an object that React will pass to our function when it is called, and it will use whatever attributes we add to our JSX component as key-value pairs on that props object.

### Resources

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Webpack](https://webpack.js.org/)
- [Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)
