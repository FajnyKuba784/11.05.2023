var map = L.map('map',{dragging:false}).setView([52.269093, 19.264268], 7);
var woje = 0
var zycia = 3
var poprawne = 0

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 var geojsonFeature = wojewodctwa.features

     var geojson = L.geoJSON(geojsonFeature).addTo(map);

    geojson
     
     function getRandomInt(){
         const liczba = (Math.floor(Math.random()* (wojewodctwa.features.length-1)))
         console.log(wojewodctwa.features[liczba].properties.nazwa)
         return(liczba)
     }

     
     function onClickFeature(e) {
         const layer = e.target;
         layer.setStyle({
           color: 'red'
         });
       }
       
       geojson.eachLayer(layer => {
           layer.on('click', onClickFeature);
        });
        geojson.eachLayer(layer => {
            layer.on('click', sprawdz);
         });
        
        function gra(){
            
            woje = getRandomInt()
            console.log(wojewodctwa.features[woje].properties.nazwa , 1)
            
            document.getElementById("h2").innerHTML = "Województwo: "+wojewodctwa.features[woje].properties.nazwa
        }

        function znik(){
            const button = document.getElementById("gra")
            var parent = button.parentNode;
            parent.removeChild(button);

        }
        
        function sprawdz(e){
            const layerw = e.target
            console.log(layerw.feature.properties.nazwa, 2)

            if(layerw.feature.properties.nazwa==wojewodctwa.features[woje].properties.nazwa){
                const h3 = document.getElementById("h3")
                h3.innerHTML = "Poprawna odpowiedz"
                poprawne++
                
            }
            else{
                const h3 = document.getElementById("h3")
                h3.innerHTML = "Niepoprawna odpowiedz"
                zycia--
                layer.on('click', function() {
                    // Oblicz środek województwa
                    var center = turf.centerOfMass(feature.geometry);
                })
            }
            
            if(zycia==0) koniec()

            document.getElementById("zycia").innerHTML = "Życia: "+zycia
            document.getElementById("poprawne").innerHTML = "Poprawne odpowiedzi: "+poprawne

            gra()
        }
        function koniec(){
            const body = document.getElementById("body")
            body.innerHTML = ""
            body.style.backgroundColor = "black"
            const koniec = document.createElement("h1")
            koniec.innerHTML = "Koniec"
            koniec.style.color = "white"
            body.appendChild(koniec)
            const button = document.createElement("button")
            button.addEventListener('click', function() {
                // odśwież stronę
                location.reload();
              });
            button.innerHTML = "Reset"
            body.appendChild(button)
        }



