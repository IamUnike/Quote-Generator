// This Function fires when the page loads 
window.addEventListener("load", getQuote)
//window.addEventListener('load', getRandomQuote)

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

const type = document.querySelector('.type')


// This array contains the quotes and authors
	const quoteCollection = [
		//Quote 1
		{
			quote: "Make the most of yourself, for there will never be another You. And the most of today, for there will never be another now", 
		 	author: "Gideon Cyril",
		 	type: 'default'
		},
		
		//Quote 2
		{
			quote: "Imagination is greater than knowledge", 
		 	author: "Albert Einstein",
		 	type: 'default'
		},		
		
		//Quote 3
		{
			quote: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel",
		 	author: "Maya Angelou",
		 	type: 'default'
		},		
		
		//Quote 4
		{
			quote: "Life isn't about finding yourself. Life is about creating yourself",
	   	 	author: "George Bernard Shaw",
		 	type: 'default'
		},		
		
		//Quote 5
		{
			quote: "Be the change that you wish to see in the world",
		 	author: "Mahatma Gandhi",
		 	type: 'default'
		},		
	]
	
	
//This Function gives text to the quoteContents	
	function getQuoteText(){
		quoteContent.textContent = ` " ${quoteCollection[Index].quote} " `
		authorContent.textContent = ` - ${quoteCollection[Index].author}`
		type.textContent = `${quoteCollection[Index].type}`
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
			console.log('here')
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

// This function copies the current quote
	const copyBtn = document.querySelector('.copy-btn')
		copyBtn.addEventListener('click', function(){
			navigator.clipboard.writeText(`${quoteContent.textContent} by ${authorContent.textContent}`)

			alert('Your quote has been copied')
		})

//This function speaks the code
		const speechBtn = document.querySelector('.speech-btn')
			speechBtn.addEventListener('click', function(){
				let utterance = new SpeechSynthesisUtterance(`${quoteContent.textContent} by ${authorContent.textContent}`)

				speechSynthesis.speak(utterance)
			})

		
//This Function displays a page for the user to enter a new quote
	function getNewQuoteContainer(){
		quoteContainer.classList.add("hide")
		newQuoteBtn.classList.add("hide")
		newQuoteContainer.classList.remove("hide")
		randomBtn.classList.add('hide')

	}
	newQuoteBtn.addEventListener("click", getNewQuoteContainer)


// This Function adds the user new quote to the array of quotecollection
	let userQuote = document.querySelector(".user-quote")
	let userAuthor = document.querySelector(".user-author")	
	function addUserQuote(){
		//add the user input to the beginning of the array
		quoteCollection.unshift({
			quote: userQuote.value,
			author: userAuthor.value,
			type: 'user'
		})

		quoteContainer.classList.remove("hide")
		newQuoteBtn.classList.remove("hide")
		newQuoteContainer.classList.add("hide")
		randomBtn.classList.remove('hide')
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
			randomBtn.classList.remove('hide')
			//reset the user input values
			userQuote.value = ""
			userAuthor.value = ""
		})


//This asynchronous function gets a random quote and displays it on the page
async function getRandomQuote(){
	const response = await fetch('https://api.quotable.io/random')
	const data = await response.json()

	const randomCollection = {
		quote: data.content,
		author: data.author,
		type: 'random'
	}
	displayRandomQuote(randomCollection)

	console.log(data)
}

function displayRandomQuote(randomCollection){
	quoteContent.textContent = randomCollection.quote
	authorContent.textContent= randomCollection.author
	type.textContent = randomCollection.type
}

const randomBtn = document.querySelector('.random-quote')
	randomBtn.addEventListener('click', getRandomQuote)
