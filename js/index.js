//1. Get a list of books and render them from http://localhost:3000/books
//fetch function returns promise
//append parent UL, id=list with LI element of each book title returned
//2. Be able to click on a book and see the thumbnail, description, and a list of users who liked
//use event handlers to turn LI into clickable item (hover color to show actionable?)
//show thumbnail, title, subtitle, author, description, and UL of users who liked
//3. Like a book by clicking on a button.
//add button element (next to book so it doesn't move?)
//use PATCH and append your user, "{"id":1, "username":"pourus"}, to array of existing likes
//BONUS. unlike a book by clicking same button
//search current like array for your user, if found, change button to unlike
//PATCH request removes your user and updates

function getBooks() {
	return fetch('http://localhost:3000/books')
	.then (resp => resp.json())
	}

function createBookLI(bookObject) {
	const liElement = document.createElement('li');
	liElement.textContent = bookObject.title;
	liElement.addEventListener("click",showBookDetails)
	return liElement;
	}

function showBooksList(booksArray) {
	const LIContainer = document.getElementById('list');
	booksArray.forEach(bookObject => {
		const bookLI = createBookLI(bookObject);
		LIContainer.appendChild(bookLI);
		});
	};

function showBookDetails() {
	alert(event.target.innerText);
	}

getBooks().then(showBooksList);