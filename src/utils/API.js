import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticle: function(topic,startYear,endYear) {
      // queryURL is the url we'll use to query the API
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      // alert(topic)
      // alert(startYear)
      // alert(endYear)
      // add the api key parameter (the one we received when we registered)
      queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    
      // grab text the user typed into the search input, add as parameter to url
      // var searchTerm = $("#search-term").val().trim();
      queryURL += "&q=" + topic;
    
      // if the user provides a startYear, include it in the queryURL
      // var startYear = $("#start-year").val().trim();
    
      if (parseInt(startYear,0)) {
        queryURL += "&begin_date=" + startYear + "0101";
      }
    
      // if the user provides an endYear, include it in the queryURL
      // var endYear = $("#end-year").val().trim();
    
      if (parseInt(endYear,0)) {
        queryURL += "&end_date=" + endYear + "0101";
      }
    
      // Logging the URL so we have access to it for troubleshooting
      // console.log("---------------\nURL: " + queryURL + "\n---------------");
    
      // returqueryURL;
    return axios.get(queryURL);
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
