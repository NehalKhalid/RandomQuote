var quotes = [
    {
        author : 'Albert Einstein', 
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        author : 'Oscar Wilde', 
        quote : '“Be yourself; everyone else is already taken.”'
    },
    {
        author : 'Frank Zappa', 
        quote : '“So many books, so little time.”'
    },
    {
        author : 'Dr. Seuss', 
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    },
    {
        author : 'Mae West', 
        quote : '“You only live once, but if you do it right, once is enough.”'
    },
    {
        author : 'Oscar Wilde', 
        quote : '“To live is the rarest thing in the world. Most people exist, that is all.”'
    }
]

function getRndQuote(){
    var randomNum = (Math.floor(Math.random() * quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum].quote;
    document.getElementById('quoteauthor').innerHTML = quotes[randomNum].author;
}