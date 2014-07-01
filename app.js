$(document.ready(function({
    
    $('#userinput').keyup(function(){
        var userSearch = $(this).val();
        var searchCri = encodeURIComponent(userSearch);
        var ytDirect = 'http://gdata.youtube.com/feeds/api/videos?q='+searchCri+'&format=5&max-results=1&v=2&alt=jsonc';

    })

  
});

