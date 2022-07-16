function updateMap(){
 fetch("/data.json")
 .then(Response=> Response.json())
 .then(Rsp=>{
     console.log(Rsp.data)
     Rsp.data.forEach(element=>{
         latitude = element.latitude;
         longitude = element.longitude;
         
         cases= element.infected;
         if(cases>250){
            color="rgb(255,0,0)";
         }
         else{
            color=`rgb(${cases},0,0)`;
         }

         new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
         //mark on map

     })
 })
}
updateMap();