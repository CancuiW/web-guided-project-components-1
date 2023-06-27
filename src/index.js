// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]
// function makeImage(item){
//   const image=document.createElement("img")
//   image.src=item
//   return image



// }
// imageData.forEach(item=>{
//   let newElement=makeImage(item.imageURL)
//   document.body.appendChild(newElement)
// })



// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

import panelData from "./data/panelData.js"
import item from "./data/constants.js"
import linkData from "./data/linkData.js"
 const {open,close}=item


// TASK 2- Verify our imports using log statements
//console.log(panelData, linkData) // log the panelData
// console.log(open) // log the open arrow
// console.log(close) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector(".accordion") //parent element


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(item) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement("div")
  panel.classList.add(".panel")

  const panelBar = document.createElement("div")
  panelBar.classList.add("panel-bar")

  
  const panelTitle = document.createElement("h3")
  panelTitle.textContent=item["title"]
  
  const panelButtons = document.createElement("div")
  panelButtons.classList.add("panel-buttons")

  const openButton = document.createElement("button")
  openButton.classList.add("panel-btn-open")
  openButton.textContent=open

  const closeButton = document.createElement("button")
  closeButton.classList.add("panel-btn-closen", "hide-btn")
  closeButton.textContent=close
  

  const panelContent = document.createElement("div")
  panelContent.classList.add("panel-content")
  panelContent.textContent=item["content"]

  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(panelButtons)
  panelButtons.appendChild(openButton)
  panelButtons.appendChild(closeButton)
  //panelContent.classList.add("toggle-on")

  openButton.addEventListener("click",()=>{
    openButton.classList.toggle("hide-btn")
    panelContent.classList.toggle("toggle-on")
    closeButton.classList.toggle("hide-btn")

  })
  closeButton.addEventListener("click",()=>{
    openButton.classList.toggle("hide-btn")
    panelContent.classList.toggle("toggle-on")
    closeButton.classList.toggle("hide-btn")

  })
// .hide - btn {
//     display: none;
//   }

// .panel - content {
//     display: none;
//     margin - top: 15px;
//   }

// .toggle - on {
//     display: block;
//   }
  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 

          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)


  // don't forget to return the panel!
  return panel
}

panelData.forEach(i=>{
  const con = makePanel(i)
  accordion.appendChild(con)
})


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.

  // < nav class="main-nav" >
  //       <a href="#" class="nav-item">Home</a>
  //       <a href="#" class="nav-item">About</a>
  //       <a href="#" class="nav-item">Blog</a>
  //       <a href="#" class="nav-item">Contact</a>
  //     </ >

// const linkData = [
//   { href: '#', className: 'nav-item', text: 'Home' },
//   { href: '#', className: 'nav-item', text: 'About' },
//   { href: '#', className: 'nav-item', text: 'Blog' },
//   { href: '#', className: 'nav-item', text: 'Contact' },
// ]
const header=document.querySelector("header")
const nav = document.createElement("nav")
nav.classList.add("main-nav")
header.appendChild(nav)

function linkMaker(item){
  const link=document.createElement("a")
  
  link.href=item.href
  link.classList.add(item.className)
  
  link.textContent=item.text
  console.log(link)
  return link

}

linkData.forEach(i=>{
  const element=linkMaker(i)
  nav.appendChild(element)
})
