// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const Header = () => {
    const container = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');
    
    container.appendChild(date);
    container.appendChild(title);
    container.appendChild(temperature);

    container.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('date');

    date.textContent = "DECEMBER 4, 2020";
    title.textContent = "Lambda Times";
    temperature.textContent = "98°"

    return container;
}

const newHeader = Header();
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(newHeader);
