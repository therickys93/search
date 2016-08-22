function performRequest()
{
    var search_engine = document.getElementById("search").value;
    var word = document.getElementById("word").value;
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
        /*
        if(search_engine == "AOL") {
            window.open("http://search.aol.com/aol/search?q=" + word, "_self");
        }
        if(search_engine == "DuckDuckGo") {
            window.open("https://duckduckgo.com/?q=" + word, "_self");
        }
        if(search_engine == "Ask") {
            window.open("http://ask.com/web?q=" + word, "_self");
        }
        if(search_engine == "InfoSpace") {
            window.open("http://search.infospace.com/search/web?q=" + word, "_self");
        }
        if(search_engine == "Info") {
            window.open("http://www.info.com/search?qkw=" + word, "_self");
        }
        */
        if(search_engine == "Twitter") {
            window.open("https://twitter.com/search?q=" + word, "_self");
        }
        if(search_engine == "Github") {
            window.open("https://github.com/search?q=" + word, "_self");
        }
        if(search_engine == "StackOverflow"){
            window.open("http://stackoverflow.com/search?q=" + word, "_self");
        }
    }
}