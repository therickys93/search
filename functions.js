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
    }
}