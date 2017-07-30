// see the list of feeds here - http://www.flickr.com/services/feeds/
// this is a handy tool to get people and group ids - http://idgettr.com/

$(document).ready(function () {

    //TODO fill out your flickr API key
    var flickr_api_key = xxxxxxxxx ;

    //TODO fill the tag you are using to tag pictures of your loved one
    var loved_one_tag = xxxxxxx ;

    //URL for the REST API
    var flickrFeedUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + flickr_api_key + "&tags=" + loved_one_tag + "&per_page=100"

    $.getJSON(flickrFeedUrl + "&format=json&jsoncallback=?", { format: "json" },
        function (data) {
                
                var row = $("<div>").attr("class","row");             
            
            //EACH for the REST API
            $.each(data.photos.photo, function(i,item){    
                var li = $("<div>").attr("class", "col-lg-2 col-md-3 col-sm-3 col-6").attr("style","margin-bottom: 30px;");
                
                // CODE FOR THE REST API
                var imgsrc = "https://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_q.jpg";
                
                //Direct thumb photo link without going through the photo stream
                var imgurl = "https://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_b.jpg";

                //Photo stream link - will also show other photos in the account
                //var imgurl = "https://www.flickr.com/photos/"+ item.owner +"/"+item.id;

                var a = $("<a>").attr("href", imgurl).attr("title", item.title);
                var img = $("<img/>").attr("class","img-rounded img-responsive").attr("src", imgsrc);

                img.appendTo(a);
                a.appendTo(li);
                li.appendTo(row);
                
                // stop at 101 photos (i is 0 based)
                if (i == 100) return false;
            });
            $("#my-photos").append(row);
      });
});