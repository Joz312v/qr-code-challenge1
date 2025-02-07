# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

![](./images/Desktop%20&%20Mobile%20Responsive.png)


### Links

- Solution URL: [Solution](https://github.com/Joz312v/qr-code-challenge1.git)
- Live Site URL: [Live URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow
- JavaScript for animations

### What I learned

I applied a simple JavaScript that I'm currently learning and experimenting from a course.

- **CSS Transitions & Animations:**  
  I implemented a slide-in animation for the QR code card and a breathing effect for the attribution text. For example, the CSS transition on the card is defined as:
  
  ```css
  .card {
    opacity: 0;
    transform: translateY(100px);
    transition: transform 2s ease-out, opacity 2s ease-out;
  }
  
  .card.slide-in {
    opacity: 1;
    transform: translateY(0);
  }

- **JavaScript DOM Manipulation:**  

I learned how to wait for the DOM to load and then trigger animations by adding classes via JavaScript:

  ```js
  document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector('.card');
    card.classList.add('slide-in');
  
    setTimeout(function () {
      document.querySelector('.attribution').classList.add('breathe');
    }, 1000);
  })
  ```

### Continued development

I'm learning from different courses/tutorials, mostly videos from Udemy and other free or paid resources, and I'm glad that I discovered Frontend Mentor, because I found out that I gain more knowledge by actually doing it, rather than watching. Well that just my opinion, everybody have different ways on doing things.


### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) - about the DOMContentLoaded
- [Frontend Mentor](https://www.frontendmentor.io/) - How to get started
- [CSS-Tricks](https://css-tricks.com/guides/) - Tips and tutorials for CSS layouts and animations.

## Author

- Frontend Mentor - [@Joz312v)](https://www.frontendmentor.io/profile/Joz312v)


## Acknowledgments

I appreciate all the online resources and tutorials, whether that would be for free or paid, that helped me understand HTML, CSS animations and JavaScript interactions.


