// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
  {
    "quote":      "some quote",
    "author":     "some author",
    "reference":  "origin",
    "date":       "year",
    "category":   "category1"
  },
  {
    "quote":      "some quote2",
    "author":     "some author2",
    "reference":  "origin2",
    "date":       "year2",
    "category":   "category2"
  },
  {
    "quote":      "some quote3",
    "author":     "some author3",
    "reference":  "origin3",
    "date":       "year3",
    "category":   "category1"
  },
  {
    "quote":      "some quote4",
    "author":     "some author4",
    "reference":  "origin4",
    "date":       "year4",
    "category":   "category4"
  },
  {
    "quote":      "some quote5",
    "author":     "some author5",
    "reference":  "origin5",
    "date":       "year5",
    "category":   "category5"
  },
  {
    "quote":      "some quote6",
    "author":     "some author6",
    "reference":  "origin6",
    "date":       "year6",
    "category":   "category6"
  },
  {
    "quote":      "some quote7",
    "author":     "some author7",
    "reference":  "origin7",
    "date":       "year7",
    "category":   "category7"
  },
  {
    "quote":      "some quote8",
    "author":     "some author8",
    "reference":  "origin8",
    "date":       "year8",
    "category":   "category8"
  }

];

// Create the getRandomQuuote function and name it getRandomQuote

funtion getRandomQuote(){
  //get total number of array items
  var quotesLength = quotes.length + 1;
  var myRandomNumber = Math.random() * (quotesLength - 0) + 0;
  var randomQuote = quotes[myRandomNumber] ;

  return randomQuote;
}

// Create the printQuote funtion and name it printQuote

function printQuote() {
  getRandomQuote();
  //document write to html

  //document write to class="quote" randomQuote.quote

  

}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
