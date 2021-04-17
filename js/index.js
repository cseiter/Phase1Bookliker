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

function fetchBooks() {
	return fetch('http://localhost:3000/books')
	.then (resp => resp.json())
	}

fetchBooks().then(console.log);

function createBookLI(bookObject) {
	const liElement = document.createElement('li');
	liElement.textContent = bookObject.title;
	console.log(liElement);
	}

const testBook = {
    "id": 1,
    "title": "Grapefruit",
    "subtitle": "A book of Instruction and Drawings.",
    "description": "Back in print for the first time in nearly thirty years, here is Yoko Ono's whimsical, delightful, subversive, startling book of instructions for art and for life. 'Burn this book after you've read it.' -- Yoko 'A dream you dream alone may be a dream, but a dream two people dream together is a reality. This is the greatest book I've ever burned.' -- John",
    "author": "Yoko Ono",
    "img_url": "https://books.google.com/books/content?id=3S8Rwr-iBdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "users": [
      {
        "id": 2,
        "username": "auer"
      },
      {
        "id": 8,
        "username": "maverick"
      }
    ]
  }

createBookLI(testBook);