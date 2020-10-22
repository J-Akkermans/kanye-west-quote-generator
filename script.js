function getQuote(){
    fetch('https://api.kanye.rest')
    .then((response) => response.json())
    .then(function (quote) {
        console.log(quote)
    })
    
}
getQuote()
