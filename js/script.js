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
console.log(quotes[0].quote);
// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote(){

  console.log(quotes.length);
      // get random integer between 0 and array length. since Math.floor rounds downward to nearest integer,
      // and arrays indexes begin at 0, the quotes.length and Math.floor match up nicely.
  var myRandomNumber = Math.floor(Math.random() * (quotes.length));
  console.log(myRandomNumber);
      // set var to hold object at index of selected random integer
  var randomQuote = quotes[myRandomNumber] ;
      //return the randomly-selected object.
  return randomQuote;
  }

// Create the printQuote funtion and name it printQuote

function printQuote() {
  var selectedQuote = getRandomQuote();
    //document write to html
  console.log(selectedQuote.date);
  //document write to class="quote" randomQuote.quote
  


}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
