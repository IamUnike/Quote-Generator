// This Function fires when the page loads 
window.addEventListener("load", getQuote)

// General Element Collection 
let quoteContent = document.querySelector(".quote-content")
let authorContent = document.querySelector(".author-content")
let nextBtn = document.querySelector(".next-btn")
let previousBtn = document.querySelector(".prev-btn")
let twitterBtn = document.querySelector(".twitter")
let whatsappBtn = document.querySelector(".whatsapp")

let quoteContainer = document.querySelector(".quote-container")
let newQuoteContainer = document.querySelector(".new-quote-container")
let newQuoteBtn = document.querySelector(".new-quote-btn")

// This array contains the quotes and authors
	const quoteCollection = [
		//Quote 1
		{quote: "Make the most of yourself, for there will never be another You. And the most of today, for there will never be another now", 
		 author: "Gideon Cyril"
		},
		
		//Quote 2
		{quote: "Imagination is greater than knowledge", 
		 author: "Albert Einstein"
		},		
		
		//Quote 3
		{quote: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel",
		 author: "Maya Angelou"
		},		
		
		//Quote 4
		{quote: "Life isn't about finding yourself. Life is about creating yourself",
	   	 author: "George Bernard Shaw"
		},		
		
		//Quote 5
		{quote: "Be the change that you wish to see in the world",
		 author: "Mahatma Gandhi"
		},		
		
		//Quote 6
		{quote: "You must do the things you think you cannot do", 
		 author: "Eleanor Roosevelt"
		},		
		
		//Quote 7
		{quote: "Miracles happen every day. Change your perception of what a miracle is and you'll see them all around you",
		 author: "Jon Bon Jovi"
		},	
			
		//Quote 8
		{quote: "Success isn't about how much money you make. It's about the difference you make in people's lives",
	     author: "Michelle Obama"
		},	
			
		//Quote 9
		{quote: "You miss 100 percent of the shots you don't take",
		 author: "Wayne Gretzky"
		},
		
		//Quote 10
		{quote: "If you don't stand for something, you'll fall for anything",
		 author: "Malcolm X"
		},
	]
	
	
//This Function gives text to the quoteContents	
	function getQuoteText(){
		quoteContent.innerText = " \" " + " " + quoteCollection[Index].quote + " \" "
		authorContent.textContent = "- " + quoteCollection[Index].author
	}
		
	
//This Function gets the quote and author
	function getQuote(){
		//Quote Index
		Index = 0;	
		//fire the getQuoteText function 
		getQuoteText()
	}
	
	
// This Function gets the next quote
	function getNextQuote(){
		Index++
		//fire the getQuoteText function 
		getQuoteText()
		
		if(Index === (quoteCollection.length - 1)){
			Index = -1
		}
	}
	nextBtn.addEventListener("click", getNextQuote)


// This Function gets the previous quote
	function getPrevQuote(){
		Index--	
				
		if(Index === -1){
			Index = (quoteCollection.length - 1)
		}	
		//fire the getQuoteText function 
		getQuoteText()			
	}
	previousBtn.addEventListener("click", getPrevQuote)


// This Function shares the quote to Twitter when clicked
	twitterBtn.addEventListener("click", function(){
		let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteContent.textContent}`
			window.open(tweetUrl, "_blank")
	})
	
	
// This Function shares the quote to Whatsapp when clicked
	whatsappBtn.addEventListener("click", function(){
		let whatsappUrl = `whatsapp://send?text=${quoteContent.textContent}`
			window.open(whatsappUrl, "_blank")
	})


//This Function displays a page for the user to enter a new quote
	function getNewQuoteContainer(){
		quoteContainer.classList.add("hide")
		newQuoteBtn.classList.add("hide")
		newQuoteContainer.classList.remove("hide")
	}
	newQuoteBtn.addEventListener("click", getNewQuoteContainer)


// This Function adds the user new quote to the array of quotecollection
	let userQuote = document.querySelector(".user-quote")
	let userAuthor = document.querySelector(".user-author")	
	function addUserQuote(){
		//add the user input to the beginning of the array
		quoteCollection.unshift({
			quote: userQuote.value,
			author: userAuthor.value
		})
		
		quoteContainer.classList.remove("hide")
		newQuoteBtn.classList.remove("hide")
		newQuoteContainer.classList.add("hide")
		//call the getQuote function so the user will see the quote he entered
		getQuote()
			
		//reset the user input values
		userQuote.value = ""
		userAuthor.value = ""
	}
	//The add user quote function fires when the add button is clicked
	let addBtn = document.querySelector(".addBtn")	
		addBtn.addEventListener("click", addUserQuote)


//This Function closes the new quote container when the user clicks on the close button
	let closeBtn = document.querySelector(".close-btn")
		closeBtn.addEventListener("click", function(){
			quoteContainer.classList.remove("hide")
			newQuoteBtn.classList.remove("hide")
			newQuoteContainer.classList.add("hide")
			
			//reset the user input values
			userQuote.value = ""
			userAuthor.value = ""
		})
