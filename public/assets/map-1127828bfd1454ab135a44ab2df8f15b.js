function initialize(){var e="Hello",t=new google.maps.InfoWindow({content:e}),n,r=new google.maps.LatLng(37.09,-95.71),i={zoom:12,center:r,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,disableDoubleClickZoom:!0,noClear:!0,navigationControl:!0,navigationControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT}};n=new google.maps.Map(document.getElementById("map"),i),$.ajax({type:"GET",dataType:"json",url:"/issues",success:function(e){for(var r=0;r<e.length;r++){var i=new google.maps.LatLng(e[r].latitude,e[r].longitude),s=new google.maps.Marker({position:i,map:n,title:"Click me"});google.maps.event.addListener(s,"click",function(){t.open(n,s)})}}}),google.maps.event.addListener(n,"dblclick",function(e){var r=new google.maps.Marker({position:e.latLng,draggable:!0,map:n});google.maps.event.addListener(r,"click",function(){t.open(n,r)});var i=e.latLng.lat(),s=e.latLng.lng(),o="latitude="+i+"&longitude="+s;$.ajax({type:"POST",url:"/issues",data:o,success:function(){}})})};