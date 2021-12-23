/* 
Google Maps
*/
 function initMap() {
        var markers = [
        {
            "title": '<strong  style="font-size:20px"><span style="color:#ff0000">Stan</span><span style="color:#4D4D4D">Ford</span></strong></strong>',
            "lat": '17.448812',
            "lng": '78.362846',
            "description": '<strong style="font-size:20px"><span style="color:#ff0000">Stand</span><span style="color:#4D4D4D">Ford</span></strong> <br><span style="color:gray"> Plot No. 40B, Jayabheri Enclave, Behind The Platina Building, Gachibowli, Hyderabad - 500032, India.<br><br> <strong>Email: info@stechhub.com  <br><br>Contact No: 040-2988 8889 </strong></span>'
        }];

        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);

        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();

        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.BOUNCE,
                title: data.title
            });

            //Attach click event to the marker.
            (function (marker, data) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:300px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  /* FlexSlider */
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  $(".rotate").textrotator();

  new WOW().init();
 
});