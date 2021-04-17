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

  const testBookArray = [
	{
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
	},
	{
	  "id": 2,
	  "title": "Invisible Women",
	  "subtitle": "AData Bias in a World Designed for Men.",
	  "description": "Data is fundamental to the modern world. From economic development, to healthcare, to education and public policy, we rely on numbers to allocate resources and make crucial decisions. But because so much data fails to take into account gender, because it treats men as the default and women as atypical, bias and discrimination are baked into our systems. And women pay tremendous costs for this bias, in time, money, and often with their lives.",
	  "author": "Caroline Criado Perez",
	  "img_url": "https://books.google.com/books/content?id=GdmEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
	  "users": [
		{
		  "id": 10,
		  "username": "macejkovic"
		},
		{
		  "id": 4,
		  "username": "ann"
		},
		{
		  "id": 6,
		  "username": "steuber"
		},
		{
		  "id": 1,
		  "username": "pouros"
		}
	  ]
	},
	{
	  "id": 3,
	  "title": "I'm Telling the Truth, But I'm Lying",
	  "subtitle": "Essays",
	  "description": "In I’m Telling the Truth, but I’m Lying Bassey Ikpi explores her life—as a Nigerian-American immigrant, a black woman, a slam poet, a mother, a daughter, an artist—through the lens of her mental health and diagnosis of bipolar II and anxiety. Her remarkable memoir in essays implodes our preconceptions of the mind and normalcy as Bassey bares her own truths and lies for us all to behold with radical honesty and brutal intimacy.",
	  "author": "Bassey Ikpi",
	  "img_url": "https://books.google.com/books/content?id=nHlbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
	  "users": [
		{
		  "id": 8,
		  "username": "maverick"
		},
		{
		  "id": 9,
		  "username": "alex"
		}
	  ]
	}
]

function fetchBooks() {
	return fetch('http://localhost:3000/books')
	.then (resp => resp.json())
	}

fetchBooks().then(console.log);

function createBookLI(bookObject) {
	const liElement = document.createElement('li');
	liElement.textContent = bookObject.title;
	return liElement;
	}

//const bookLI = createBookLI(testBook);
//console.log(bookLI);

function showBookLI(testBookArray) {
	//const bookObject = testBookArray[0];
	const LIContainer = document.getElementById('list');
	testBookArray.forEach(bookObject => {
		const bookLI = createBookLI(bookObject);
		LIContainer.appendChild(bookLI);
		});
	};

showBookLI(testBookArray);


