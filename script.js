function getQuote(){
    fetch('https://api.kanye.rest')
    .then((response) => response.json())
    .then(function (quote) {
        document.getElementById("quote").innerHTML = "' " + quote.quote + " ' -Kayne West ";
    })
}
getQuote()
