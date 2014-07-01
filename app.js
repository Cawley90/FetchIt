$(document.ready(function({
    
    $('#userinput').keyup(function(){
        var userSearch = $(this).val();
        var searchCri = encodeURIComponent(userSearch);
        //var ytDirect = 'http://gdata.youtube.com/feeds/api/videos?q='+searchCri+'&format=5&max-results=1&v=2&alt=jsonc';
        var ytvid = 'GET https://www.googleapis.com/youtube/v3/videos?part=player&id='+searchCri+'&maxResults=1&key={AIzaSyA0-TyKv764oZyZ9gIPuagu28t-Z5nCL-k}';
    

        $.ajax ({
            type: "GET",
            url: ytvid,
            dataType: "jsonp",
            success: function(response) {
                if(response.data.items) {
                    $.each(response.data.items, function (i, data) {
                        var videoId = data.id;
                        var videoTitle = data.title;
                        var videoHits = data.viewCount;
                        var vidbox = "<iframe width = '600' height = '500' src = 'http://www.youtube.com/embed/"+videoId+"'frameborder='0' type='text/html'></iframe>";
                        var vidResult = "<div id = 'result'>"+video_box;
                        $("#result").html(vidResult);
                    }
                }
            }

        })

    })

  
});

