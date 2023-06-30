// hamburger

const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

addEventListener('scroll', () => {
    if(this.scrollY >= 700) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
});

//nav-links

navLinksLi.forEach(li => li.addEventListener('click', () => {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')
}))


// typed js

let options = {
    strings: [
        'Un Oasis De Dios',
        'Ministerio Hispano Internacional', 
    ],    
    
    typeSpeed: 40,
    loop: false,
    showCursor: false,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 900,
    backDelay: 1500,
  };
  
  let typed = new Typed('#hero-titles', options);

// AOS

AOS.init();





const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1dbc124c8amsh22d381d323ce21ap13a3d2jsnfa5e20929cc3',
		'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
	}
};


async function getVerse(book, chapter, vFrom, vTo) {
    let res = await axios.get (`https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=${book}&chapter=${chapter}&VerseFrom=${vFrom}&VerseTo=${vTo}`, option);
    console.log(res.data.Output)

const textDiv = document.getElementById('text');
const newPara = document.createElement("p");
newPara.appendChild(document.createTextNode(res.data.Output));
textDiv.appendChild(newPara);

const button = document.querySelector('#clear');
button.addEventListener('click', function(e) {
    newPara.remove();    
});

}    


const form = document.querySelector('#searchform');
const input1 = document.querySelector('.name1');
const input2 = document.querySelector('.name2');
const input3 = document.querySelector('.name3');
const input4 = document.querySelector('.name4');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    getVerse(input1 .value, input2 .value, input3 .value, input4 .value);
    input1 .value = '';
    input2 .value = '';
    input3 .value = '';
    input4 .value = '';
  
});



// Get the search input and result container elements
const searchInput = document.querySelector('#search-input');
const searchResultsContainer = document.querySelector('#search-results');

// Add an event listener to the search input to listen for search queries
searchInput.addEventListener('input', () => {
  // Clear the previous search results
  searchResultsContainer.innerHTML = '';

  // Get the search query and convert it to lowercase for case-insensitive search
  const query = searchInput.value.toLowerCase();

  // Perform the search and display the matching results
  const searchResults = performSearch(query);
  displaySearchResults(searchResults);
});

// Function to perform the search based on the query
function performSearch(query) {
  // Perform the search operation here and return the matching results
}

// Function to display the search results on the page
function displaySearchResults(results) {
  // Create a list element for each search result and append it to the result container
  results.forEach(result => {
    const listItem = document.createElement('li');
    listItem.textContent = result;
    searchResultsContainer.appendChild(listItem);
  });
}



// getVerse ("John", 5, 1, 3);
// Authorization: Token b099f302f5fd73521d88220f52d632a59a263bed