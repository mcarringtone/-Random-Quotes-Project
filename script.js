let quotes = [
  { "quote":"Funny is only something that others know about you - you can't be funny by yourself.", 
  "author":"Chris Rock"
  },
  {"quote":"Pain.", 
  "author":"Will Smith"
  },
  { "quote":"If you wanna talk about influence, man, then you’ve got to realise that influence is not influence. It’s simply someone’s idea going through my new    mind.", 
    "author":"Jean-Michel Basquiat"
  }, 
  { "quote":"Sometimes you have to play a long time to be able to play like yourself.", 
    "author":"Miles Davis"
  },
  { "quote":"“My music is the spiritual expression of what I am — my faith, my knowledge, my being...When you begin to see the possibilities of music, you desire to do something really good for people, to help humanity free itself from its hangups...I want to speak to their souls.",
   "author":"John Coltrane"
  }, 
  { "quote":"When morality comes up against profit, it is seldom that profit loses.",
    "author":"Shirley Chisholm"
  }, 
  { "quote":"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "author":"Maya Angelou"
       }
]

////variables
const btn = document.getElementById("btn");
const quote = document.getElementById("quote-text")
const author = document.getElementById("author")

///Event listener 

btn.addEventListener("click", getQuote)

function getQuote (){
    let number = Math.floor(Math.random()*quotes.length);

    quote.innerHTML= '<span>"</span>'+ quotes[number].quote + '<span>"</span>';
    author.innerHTML= '<span>---</span>'+ quotes[number].author + '<span>"</span>';


}