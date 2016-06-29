var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"

var getQuote = function(data) {
  $("#thequote").html(data.quoteText);
  
  if(data.quoteAuthor === "") {
    data.quoteAuthor = "Anonymous";
  }
  
  $("#theauthor").html(data.quoteAuthor);
}


$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}

$("#quotebutton").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
  animationClick("#theheading", "rubberBand");
});