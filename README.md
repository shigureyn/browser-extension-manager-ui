
# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). The project is a responsive browser extensions dashboard where users can filter extensions, toggle their active state, remove items from the list, and switch between light and dark themes.

## Table of contents

* [Overview](#overview)

  * [The challenge](#the-challenge)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My process](#my-process)

  * [Built with](#built-with)
  * [What I learned](#what-i-learned)
  * [Continued development](#continued-development)
  * [Useful resources](#useful-resources)
  * [AI Collaboration](#ai-collaboration)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

* Toggle extensions between active and inactive states
* Filter extensions by all, active, and inactive states
* Remove extensions from the list
* Select their preferred color theme
* View the optimal layout depending on their device screen size
* See hover, active, and focus states for all interactive elements

### Screenshot

### Links

* Solution URL: https://github.com/shigureyn/browser-extension-manager-ui.git
* Live Site URL: https://shigureyn.github.io/browser-extension-manager-ui/

## My process

### Built with

* Semantic HTML5 markup
* Mobile-first CSS
* Flexbox
* CSS Grid
* Local variable fonts with `@font-face`
* Vanilla JavaScript
* JavaScript modules
* Fetch API
* JSON data rendering
* `localStorage`
* Accessible buttons with `aria-label` and `aria-pressed`
* Light and dark theme support with `body[data-theme="dark"]`

### What I learned

During this project, I practiced building a more realistic interactive UI instead of writing every card manually in HTML.

One important part was keeping the HTML structure clean and letting JavaScript render the extension cards from `data.json`:

```html
<section class="extensions" aria-labelledby="extensions-title">
  <div class="container extensions-container">
    <div class="extensions-header">
      <h1 class="extensions-title" id="extensions-title">Extensions List</h1>

      <div class="extensions-filter" aria-label="Filter extensions">
        <button
          class="extensions-filter__button extensions-filter__button--active"
          type="button"
          aria-pressed="true"
          data-filter="all"
        >
          All
        </button>

        <button
          class="extensions-filter__button"
          type="button"
          aria-pressed="false"
          data-filter="active"
        >
          Active
        </button>

        <button
          class="extensions-filter__button"
          type="button"
          aria-pressed="false"
          data-filter="inactive"
        >
          Inactive
        </button>
      </div>
    </div>

    <ul class="extensions-list" aria-label="Browser extensions list"></ul>
  </div>
</section>
```

I also practiced creating a theme system without CSS custom properties. The light theme is the default state, and the dark theme is controlled by a data attribute on the `body` element:

```css
body {
  color: hsl(227, 75%, 14%);
  background: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
}

body[data-theme="dark"] {
  color: hsl(200, 60%, 99%);
  background: linear-gradient(180deg, #040918 0%, #091540 100%);
}
```

For the card list, I used CSS Grid and a mobile-first approach. The layout starts with one column on small screens and changes to multiple columns on larger screens:

```css
.extensions-list {
  display: grid;
  gap: 0.75rem;
}

@media (min-width: 48rem) {
  .extensions-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .extensions-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

I also learned why SVGs inside an `<img>` element cannot be easily recolored with CSS. To make the logo text adapt to the current theme, it is better to separate the icon from the text or use inline SVG with `currentColor`.

Another useful part was splitting the JavaScript into modules:

```text
js/
├── main.js
├── api.js
├── render.js
├── filters.js
└── theme.js
```

This made the project easier to understand:

* `api.js` loads extension data from `data.json`
* `render.js` creates the extension cards
* `filters.js` handles filter logic and active filter buttons
* `theme.js` handles light/dark theme switching
* `main.js` connects all modules together

### Continued development

In future projects, I want to continue improving:

* Better project structure with reusable JavaScript modules
* More consistent class naming with BEM
* Accessible interactive components
* Working with SVG icons and `currentColor`
* Saving UI state with `localStorage`
* More accurate responsive layouts from design references
* Cleaner CSS organization without repeating too many color values

### Useful resources

* [MDN - Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - Helped with storing filter and action values in HTML.
* [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Helped with loading extension data from `data.json`.
* [MDN - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) - Useful for building the responsive card grid.
* [MDN - prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) - Helped make transitions more accessible.
* [MDN - ARIA: aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) - Helped make toggle buttons more understandable for assistive technologies.

### AI Collaboration

I used ChatGPT as a learning assistant during this project.

AI helped me with:

* Reviewing the semantic HTML structure
* Improving accessibility for icon-only buttons and filter buttons
* Planning how to render cards from `data.json`
* Debugging broken image paths after the project structure changed
* Understanding why SVG colors do not change when the SVG is loaded through `<img>`
* Improving CSS for light and dark themes

## Author

* GitHub - [@shigureyn](https://github.com/shigureyn)
* Frontend Mentor - [@shigureyn](https://www.frontendmentor.io/profile/shigureyn)

## Acknowledgments

Thanks to Frontend Mentor for the challenge and to ChatGPT for guidance, code review, debugging help, and explanations during the development process.
