// FSJS - Random Quote Generator

// Array of quote objects
// omiting some name:value pairs, leaving some values blank to demonstrate how code works when missing expected data.

/*
var quotes = [
  {
    "quote":      "There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.",
    "author":     "William Shakespeare",
    "reference":  "Hamlet, Act 1 scene 5",
    "date":       "",                        // "1599"
    "category":   "Literature"
  },
  {
    "quote":      "No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.",
    "author":     "Nathaniel Hawthorne",
    "reference":  "The Scarlet Letter",
    "date":       "1850",                      
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
    "quote":      "No man ever steps in the same river twice, for it’s not the same river and he’s not the same man.",
    "author":     "Heraclitus",
  //  "reference":  "spoken by Heraclitus",
    "date":       "544 b.c.",
    "category":   "philosophy"
  },
  {
    "quote":      "Practical politics consists in ignoring facts.",
    "author":     "Henry Adams",
//    "reference":  "The Education of Henry Adams",
    "date":       "1906",
    "category":   "Politics"
  },
  {
    "quote":      "Writing gives you the illusion of control, and then you realize it's just an illusion, that people are going to bring their own stuff into it.",
    "author":     "David Sedaris"
  //  "reference":  "interview in Louisville Courier-Journal",
  //  "date":       "2005",
  //  "category":   "Literature"
  },
  {
    "quote":      "Beneath the rule of men entirely great, The pen is mightier than the sword.",
    "author":     "Edward Bulwer-Lytton",
    "reference":  "Richelieu",
    "date":       "1839"
  //  "category":   "Literature"
  }

];
*/

// function to select a random quote object from the array above.

function getRandomQuote(){
      // get random integer between 0 and array length. since Math.floor rounds downward to nearest integer,
      // and arrays indexes begin at 0, the quotes.length and Math.floor match up nicely.
  var myRandomNumber = Math.floor(Math.random() * (quotes.length));
      // set var to hold object at index of selected random integer
  var randomQuote = quotes[myRandomNumber] ;
      //return the randomly-selected object.
  return randomQuote;
} //end getRandomQuote

// function that calls getRandomQuote and builds HTML output.

function printQuote() {
      // object var that holds the randomly-chosen quote object
  var selectedQuote = getRandomQuote();
    // quoteString var to hold quote box html and build html out of fields from randomly-chosen object
  var quoteString
  quoteString = '<p class="quote">' + selectedQuote.quote + '</p>' +
                        '<p class="source">' + selectedQuote.author ;
              // check whether the values for reference, date, category exist and only build spans for them if they exist.
      if (selectedQuote.reference) {        // if no reference value, skip this span
          quoteString = quoteString + '<span class="citation">' + selectedQuote.reference + '</span>' ;
      }
      if (selectedQuote.date) {             // if no year/date value, skip this span
          quoteString = quoteString + '<span class="year">' + selectedQuote.date + '</span>' ;
      }
      if (selectedQuote.category) {     // if there's no category, don't build category span.
          quoteString = quoteString + '<br><span class="category">[' + selectedQuote.category + ']</span>' ;
      }
      quoteString = quoteString + '</p>';  // close the class="source" para tag

  var quoteBox = document.getElementById('quote-box') ; // var containing the  element with 'quote-box' id
  quoteBox.innerHTML = quoteString; //set innerHTML of quoteBox to the quoteString we built above

    //Random BG color
      //set the bg color to a random hex color by setting parameters from 0 to 0xFFFFFF (white)
      // then convert resulting integer to string hexidecimal value.
      //The only random color that will not result is #FFFFFF or White.
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16) ;

    //Random BG Color for the button. Kinda ruins the hover effect, but, you know, extra credit?

  var buttonBG = document.getElementById('loadQuote');
  buttonBG.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16) ;

} //end printQuote

  // on page load shows a new quote every 10 seconds regardless of button clicks.
var autoLoad = setInterval(printQuote, 10000);
document.onload = autoLoad ;

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
