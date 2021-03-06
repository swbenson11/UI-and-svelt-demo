# Smart Access Technical Assessment

## Demo of Project

<img src="demo.gif" height="500">

### Assignment

You are required to develop a simple onboarding screen flow; one being the slider with three slider options. Once the user clicks finish, the _screen fades, or slides away_ to reveal the welcome page that instructs them to tap a tag. Each of the onboarding screens should be its own component, where you use events or some kind of pubsub architecture to communicate between the two screens. (This is not a page navigation, rather a state change/component transition).

All the assets required can be found linked to this email. Included below are sketch(or image files if you don't have sketch) and a zip file of assets.

### The Challenge

- The result (not including images) to be no more than 50 kb. (hint: there is a tiny swipe library available online that is 2kb)
- Use a bundler (webpack, rollup) to bundle the code via npm run build command for a packaged dist folder
- This should work on mobile view. No need to make work for desktop.
- Make sure to use latest css3 (sass, preferably) and an autoprefixer for browser compatibility.
- Use babel to compile production code down to es2015 script for back browser compatibility
- Skip button should then to go main white screen.
- Only tapping reader will bring up the reader
- Clicking about smart access should slide up and show an iframe with smartaccess.io inside Bonus Points if Svelte is used to build out components. Not required tho.

## Getting Started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

### Building production mode

To create an optimized version of the app:

```bash
npm run build
```

You can run the newly built app with npm run start

## Notes

I’ve chosen to do the assignment with Svelte. I had been reading about it before the assignment and I thought it was a good time to try it out. I’m particularly happy with how some of the UI components turned out. I specifically like how I was able to keep the Slider and BottomOverlay component as generic, reusable components. As per the email I designed this for a mobile environment. I just used Chrome's device toolbar to toggle a mobile resolution when developing.

I started with this [template](https://github.com/sveltejs/template).

The email said, "Only tapping reader will bring up the reader", but the design has a button to show reader. So I made both show the reader. This project is lacking tests. Since this is a new framework to me and wasn’t logic heavy I decided to forgo them. If this was on the job I would try and include some, especially for my generic UI components.
