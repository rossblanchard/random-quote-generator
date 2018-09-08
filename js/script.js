// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
  {
    "quote":      "There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.",
    "author":     "William Shakespeare",
    "reference":  "Hamlet, Act 1 scene 5",
    "date":       "1599",
    "category":   "Literature"
  },
  {
    "quote":      "We are what we pretend to be, so we must be very careful what we pretend to be.",
    "author":     "Kurt Vonnegut",
    "reference":  "Mother Night",
    "date":       "1962",
    "category":   "Literature"
  },
  {
    "quote":      "One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another.",
    "author":     "Rene Descartes",
    "reference":  "Le Discours de la Methode",
    "date":       "1637",
    "category":   "Philosophy"
  },
  {
    "quote":      "A sense of duty is useful in work, but offensive in personal relations. People wish to be liked, not be endured with patient resignation.",
    "author":     "Bertrand Russell",
    "reference":  "Conquest of Happiness",
    "date":       "1930",
    "category":   "Philosophy"
  },
  {
    "quote":      "Politics ought to be the part-time profession of every citizen who would protect the rights and privileges of free people and who would preserve what is good and fruitful in our national heritage.",
    "author":     "Dwight D. Eisenhower",
    "reference":  "Address recorded for the Republican Lincoln Day dinners",
    "date":       "1964",
    "category":   "Politics"
  },
  {
    "quote":      "Practical politics consists in ignoring facts.",
    "author":     "Henry Adams",
    "reference":  "The Education of Henry Adams",
    "date":       "1906",
    "category":   "Politics"
  },
  {
    "quote":      "Writing gives you the illusion of control, and then you realize it's just an illusion, that people are going to bring their own stuff into it.",
    "author":     "David Sedaris",
    "reference":  "interview in Louisville Courier-Journal",
    "date":       "2005",
    "category":   "Literature"
  },
  {
    "quote":      "Beneath the rule of men entirely great, The pen is mightier than the sword.",
    "author":     "Edward Bulwer-Lytton",
    "reference":  "Richelieu",
    "date":       "1839",
    "category":   "Literature"
  }

];

// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(){

      // get random integer between 0 and array length. since Math.floor rounds downward to nearest integer,
      // and arrays indexes begin at 0, the quotes.length and Math.floor match up nicely.
  var myRandomNumber = Math.floor(Math.random() * (quotes.length));
      // set var to hold object at index of selected random integer
  var randomQuote = quotes[myRandomNumber] ;
      //return the randomly-selected object.
  return randomQuote;
} //end getRandomQuote

// Create the printQuote funtion and name it printQuote

function printQuote() {

      //create an object var that holds the randomly-chosen quote object
  var selectedQuote = getRandomQuote();
      // query the classes for the quote paragraph and the source paragraph.
          //Note: this assumes that there's only one instance each of these classes
      //no need to get classes for year or citation. They're nested within .source so
      // we can just rebuild that innerHTML pretty easily by concatenating the necessary parts.
  var pQuote = document.querySelector(".quote") ;
  var pAuthor = document.querySelector(".source") ;
      //use innerHTML to insert quote text
  pQuote.innerHTML = selectedQuote.quote ;
      // use innerHTML to build the .source paragraph
  pAuthor.innerHTML = selectedQuote.author +
        '<span class="citation">' + selectedQuote.reference +
        '</span><span class="year">' + selectedQuote.date + '</span>' +
          '<br><span class="category">[' + selectedQuote.category + ']</span>' ;

    //Random BG color
      //set the bg color to a random hex color by setting parameters from 0 to 0xFFFFFF (white)
      // then convert resulting integer to string hexidecimal value.
      //The only random color that will not result is #FFFFFF or White.
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16) ;

  //Random Button BG Color. Kinda ruins the hover effect, but, you know, extra credit?

  var buttonBG = document.getElementById('loadQuote');
  buttonBG.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16) ;

} //end printQuote

  //show a new quote after 7 seconds.
var autoLoad = setInterval(printQuote, 7000);
document.onload = autoLoad ;

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
