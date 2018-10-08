// When user clicks on button, call printQuote()
document.getElementById('loadQuote').addEventListener('click', printQuote);

// Refresh Quote after Set Interval
var quoteInterval = window.setInterval(printQuote, 9000);

// Array of objects to hold data for quotes
var quotes = [
	{
		quote: "The only way to do great work is to love the work you do.",
		source: "Steve Jobs"
	},
	{
		quote: "Don't be pushed by your problems. Be led by your dreams.",
		source: "Ralph Waldo Emerson"
	},
	{
		quote: "The way to get started is to quit talking and begin doing.",
		source: "Walt Disney"
	},
	{
		quote: "The creative adult is the child who survived.",
		source: "Ursula K. Le Guind"
	},
	{
		quote: "Simplicity is the ultimate sophistication.",
		source: "Leonardo da Vinci"
	},
	{
		quote: "Be yourself. Everyone else is already taken.",
		source: "Oscar Wilde"
	},
	{
		quote: "A person who never made a mistake never tried anything new.",
		source: "Albert Einstein"
	},
	{
		quote: "Deal with the big while it is still small.",
		source: "Lao Tzu"
	},
	{
		quote: "Design is thinking made visual.",
		source: "Saul Bass"
	},
	{
		quote: "Live your dream and wear your passion.",
		source: "Holstee Manifesto"
	},
	{
		quote: "Better to do something imperfectly than to do nothing flawlessly.",
		source: "Robert H. Schuller"
	},
	{
		quote: "Make it simple, but significant.",
		source: "Don Draper"
	}
];


// Get a Random Quote from Array
function getRandomQuote() {
	for (var i = 0; i < quotes.length; i++) {
		// selects random index from quotes arr
		var randomIndex = Math.floor(Math.random() * quotes.length);
		// selects random object from quotes array
		var randomQuote = quotes[randomIndex];

		// return randomly selected quote (object)
		return randomQuote;
	}
}


// Display Random Quote to Page
function printQuote() {
	var returnedQuote = getRandomQuote();
	var quote = returnedQuote.quote;
	var source = returnedQuote.source;

	// display html str to page 
	document.getElementById('quote-box').innerHTML = 
	'<p class="quote">' + quote + '</p>' + '<p class="source">' + source + '</p>';
}

