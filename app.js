//AIzaSyA0-TyKv764oZyZ9gIPuagu28t-Z5nCL-k key

$(document).ready(function() {

    $('#toolbox').click(function(){
        $('#options').toggle("fast");
    })

    
    $(document).on("click", "#go", function() {
        var userSearch = $('#userinput').val();
        var searchCri = encodeURIComponent(userSearch);
        var ytDirect = 'http://gdata.youtube.com/feeds/api/videos?q='+searchCri+'&format=5&max-results=1&v=2&alt=jsonc';
        //var ytvid = 'https://www.googleapis.com/youtube/v3/videos?q='+searchCri+'&maxResults=1&key={AIzaSyA0-TyKv764oZyZ9gIPuagu28t-Z5nCL-k}';
        
    

        $.ajax ({
            type: "GET",
            url: ytDirect,
            dataType: "jsonp",
            success: function(response) {
                
                if(response.data.items) {
                    $.each(response.data.items, function(i,data) {
                        var videoId = data.id;
                        var videoTitle = data.title;
                        var videoAuth = data.uploader;
                        var videoHits = data.viewCount;
                        var vidLikes = data.likeCount;
                        var vidframe = $('#iframe');
                        var url = "http://www.youtube.com/embed/";
                        var loopUrl = "https://www.youtube.com/v/"+videoId+"?version=3&feature=player_embedded&loop=1&playlist=,"
                        var vidurl = url + videoId;

                        if(document.getElementById('looper').checked) {
                            vidframe.attr("src", loopUrl);
                        }

                        else {
                            vidframe.attr("src", vidurl);
                        }

                        $('#views').text("Views: "+videoHits);
                        $('#author').text("Author: "+videoAuth);
                        $('#likes').text("Likes: "+vidLikes);
                        $('#embedlink').val("http://www.youtube.com/watch?v="+videoId);
                        


                        //var vidbox = "<iframe width='560' height='3' src='http://www.youtube.com/embed/"+videoId+"'frameborder='0' type='text/html'></iframe>";
                        //var result = "<div id = 'result'>"+vidbox+"</div>";
                        //$('#result').html(result);
                    });
                }

            }

        });

    });

 
  
});

