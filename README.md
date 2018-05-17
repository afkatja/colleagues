# Colleagues

## Rationale

The app is set up using React Create App and basic redux setup for fetching (mock) data from the API and sharing state between components.

I use [styled components](https://www.styled-components.com/) because the styling remains scoped per component. I also opted to using [polished](https://polished.js.org/docs/#transparentize) for sass functions with styled components.

Ideally, I would set up some mixins for shared code, and split up components into granular modules according to [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) (like links, buttons, titles, etc). In setting up a design system, I would first define the brand variables (like widths, font sizes, grid units, visual rhythm etc), but for this exercise everything is defined per component.

I played with css animation to simulate a typewriter effect for each person's bio, but it works nicely only with one line text.
For avatar animation in the popover, I use `object-position` property which is not supported in IE11. This animation is not quite pixel perfect because of the variation in the images I found.

## View the app

The app is deployed on Netlify. Visit colleagues.netlify.com to view it.

## Setting up to run locally

* Clone the repository
* Run `npm i` in the project root dir
* run `yarn start` / `npm run start` and see the app at `http://localhost:3000`
