function performRequest()
{
    var search_engine = document.getElementById("search").value;
    var word = document.getElementById("word").value;
    word = reverseLeet(word);
    if(word)
    {
        if(search_engine == "Google")
        {
            window.open("https://www.google.it/search?q=" + word, "_self");
        }
        if(search_engine == "Yahoo")
        {
            window.open("https://it.search.yahoo.com/search?p=" + word, "_self");
        }
        if(search_engine == "Bing")
        {
            window.open("https://www.bing.com/search?q=" + word, "_self");
        }
        if(search_engine == "Twitter") {
            window.open("https://twitter.com/search?q=" + word, "_self");
        }
        if(search_engine == "Github") {
            window.open("https://github.com/search?q=" + word, "_self");
        }
        if(search_engine == "StackOverflow"){
            window.open("http://stackoverflow.com/search?q=" + word, "_self");
        }
        if(search_engine == "IJW"){
            window.open("https://github.com/itjustworksteam?q=" + word, "_self");
        }
        if(search_engine == "instagram"){
            window.open("https://www.instagram.com/explore/tags/" + word, "_self");
        }
        if(search_engine == "facebook"){
            window.open("https://www.facebook.com/search/all/?q=" + word, "_self");
        }
        if(search_engine == "youtube"){
            window.open("https://www.youtube.com/results?search_query=" + word, "_self");
        }
    }
}

function leet(str) { 

    return str.toUpperCase().replace(/a/gi, '4').replace(/i/gi, '1').replace(/e/gi, '3').replace(/g/gi, '6').replace(/o/gi, '0').replace(/s/gi, '5').replace(/t/gi, '7').toLowerCase(); 
}

function reverseLeet(str){
    return str.toUpperCase().replace(/4/gi, 'A').replace(/1/gi, 'I').replace(/3/gi, 'E').replace(/6/gi, 'G').replace(/0/gi, 'O').replace(/5/gi, 'S').replace(/7/gi, 'T').toLowerCase();
}

// title of the html page
document.querySelector('title').innerHTML = leet("search");
// title of the h1
document.querySelector('.title').innerHTML = leet("search");
// placeholder
document.getElementById('word').placeholder = leet("insert what you want to search");
// button
document.getElementById('button-search').innerHTML = leet("search");
// copyright at the end of the page
document.getElementById('copyright').innerHTML = leet("2016 Riccardo Crippa");
