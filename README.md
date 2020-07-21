# Landing Page Project

## Table of Contents

* [Description](#Description)
* [Features](#Features)
* [Instructions](#Instructions)
* [References](#References)

## Description 
This project is a landing page made with HTML, CSS and JavaScript which consists of sections and a navigation menu that is **dynamically** built by JavaScript, and can be run on most browsers.

## Features
* dynamically updated navigation based on the sections found in page
* Scroll to top button
* Dark mode
* All features are usable across modern desktop, tablet, and phone browsers

## Instructions
1. all page text content need to be changed to the required one.
2. when adding a new section make sure to add ` data-nav="" ` attribute to the section and that represent the section name in navigation
Example:
```
<section data-nav="timeline">...</section>
```
3. The Dark mode is applied by toogling class `.dark` to the elements needed to be changed due the mode used 
Example:
```
body.dark{
    background-color: #051922;
    color: #fff;
}
```

## References
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [W3Schools](https://www.w3schools.com/)

