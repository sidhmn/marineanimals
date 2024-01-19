let map = L.map('map').setView([0, 10], 1, );
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom:1,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //bounds: map.getSouthWest(),map.getNorthEast(),
    maxBounds: map.bounds,
}).addTo(map);

let harpSeal = L.icon({
    iconUrl: './index-src/baby-harp-seal.jpg',

    iconSize:     [30,30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});
nSealMark1 = L.marker([58,-178],{icon: harpSeal,alt:"northern seal, Bering Sea"})
    .bindPopup("This area has: <br> ribbon seals, spotted seals, and ringed seals");
nSealMark2 = L.marker([52,-175],{icon: harpSeal,alt:"northern seal, Aleutian Islands"})
    .bindPopup("This area has: <br> harbor seals");
nSealMark3 = L.marker([47,-152],{icon: harpSeal,alt:"northern seal, Kuril Islands"})
    .bindPopup("This area has: <br> harbor seals");
nSealMark4 = L.marker([72,-145],{icon: harpSeal,alt:"northern seal, Beaufort Sea"})
    .bindPopup("This area has: <br> ringed seals");
nSealMark5 = L.marker([60,-85],{icon: harpSeal,alt:"northern seal, Hudson Bay"})
    .bindPopup("This area has: <br> grey seals,harbor seals, and ringed seals");
nSealMark6 = L.marker([3,-80],{icon: harpSeal,alt:"northern seal, South East American Coast"})
    .bindPopup("This area has: <br> harbor seals");
nSealMark7 = L.marker([66,-79],{icon: harpSeal,alt:"northern seal, Northwestern passages"})
    .bindPopup("This area has: <br> ringed seals");
nSealMark8 = L.marker([38,-75],{icon: harpSeal,alt:"northern seal, Chesapeake Bay"})
    .bindPopup("This area has: <br> harbor seals");
nSealMark9 = L.marker([72,-64],{icon: harpSeal,alt:"northern seal, Baffin Bay"})
    .bindPopup("This area has: <br> hooded seals, harp seals,and ringed seals");
nSealMark10 = L.marker([48,-62],{icon: harpSeal,alt:"northern seal, Gulf of St. Lawrence"})
    .bindPopup("This area has: <br> hooded seals, harbor seals, and ringed seals");
nSealMark11 = L.marker([60,-56],{icon: harpSeal,alt:"northern seal, Labrador Sea"})
    .bindPopup("This area has: <br> harp seals and ring seals");
nSealMark12 = L.marker([69,-52],{icon: harpSeal,alt:"northern seal, South West Greenlandic Coast"})
    .bindPopup("This area has: <br> hooded seals and harbor seals");
nSealMark13 = L.marker([64, -30],{icon: harpSeal,alt:"northern seal, between Iceland and Greenland"})
    .bindPopup("This area has: <br> hooded seals, harp seals, <br> grey seals, and ringed seals");
nSealMark14 = L.marker([77,-20],{icon: harpSeal,alt:"northern seal, South East Greenland Coast"})
    .bindPopup("This area has: <br> hooded seals and harbor seals");
nSealMark15 = L.marker([53,-5],{icon: harpSeal,alt:"northern seal, Irish Sea"})
    .bindPopup("This area has: <br> grey seals and harbor seals");
nSealMark16 = L.marker([81.5,1.5],{icon: harpSeal,alt:"northern seal, Greenland Sea"})
    .bindPopup("This area has: <br> hooded seals, harp seals, and ringed seals");
nSealMark17 = L.marker([57,4],{icon: harpSeal,alt:"northern seal, North Sea"})
    .bindPopup("This area has: <br> grey seals and harbor seals");
nSealMark18 = L.marker([69,2],{icon: harpSeal,alt:"northern seal, Norwegian Sea"})
    .bindPopup("This area has: <br> grey seals, harbor seals, and ringed seals");
nSealMark19 = L.marker([58,20],{icon: harpSeal,alt:"northern seal, Baltic Sea"})
    .bindPopup("This area has: <br> grey seals and ringed seals");
nSealMark20 = L.marker([70,37],{icon: harpSeal,alt:"northern seal, South-East Barents Sea"})
    .bindPopup("This area has: <br> grey seals");
nSealMark21 = L.marker([75,37.5],{icon: harpSeal,alt:"northern seal, Barents Sea"})
    .bindPopup("This area has: <br> harp seals");
nSealMark22 = L.marker([69,22],{icon: harpSeal,alt:"northern seal, Kara Sea"})
    .bindPopup("This area has: <br> ringed seals");
nSealMark23 = L.marker([43,50],{icon: harpSeal,alt:"northern seal, Caspian Sea"})
    .bindPopup("This area has: <br> Caspian seals");
nSealMark24 = L.marker([53,108],{icon: harpSeal,alt:"northern seal, Lake Baikal"})
    .bindPopup("This area has: <br> baikal seals");
nSealMark25 = L.marker([36,124],{icon: harpSeal,alt:"northern seal, Yellow Sea"})
    .bindPopup("This area has: <br> spotted seals");
nSealMark26 = L.marker([57,126],{icon: harpSeal,alt:"northern seal, Laptev Sea"})
    .bindPopup("This area has: <br> ringed seals");
nSealMark26 = L.marker([40,135],{icon: harpSeal,alt:"northern seal, Sea of Japan"})
    .bindPopup("This area has: <br> spotted seals");
nSealMark27 = L.marker([53,149],{icon: harpSeal,alt:"northern seal, Sea of Okhotsk"})
    .bindPopup("This area has: <br> ribbon seals, spotted seals, and ringed seals");
nSealMark28 = L.marker([73,158],{icon: harpSeal,alt:"northern seal, East Siberian Sea"})
    .bindPopup("This area has: <br> ringed seals");
//nSealMark5 = L.marker([80,37],{icon: harpSeal,alt:"northern seal, northernmost Barents Sea"})
    //.bindPopup("This area has: <br> ");
//nSealMark3 = L.marker([80,80],{icon: harpSeal,alt:"northern seal, northernmost Kara Sea"})
    //.bindPopup("This area has: <br> ");\
nSeals = L.layerGroup([nSealMark1,nSealMark2,nSealMark3,nSealMark4,nSealMark5, nSealMark6, nSealMark7,
nSealMark8,nSealMark9,nSealMark10,nSealMark11,nSealMark12,nSealMark13,nSealMark14,nSealMark15,nSealMark16,
    nSealMark17,nSealMark18,nSealMark19,nSealMark20,nSealMark21,nSealMark22,nSealMark23,nSealMark24,
    nSealMark25,nSealMark26,nSealMark27,nSealMark28]);
let leopardSeal = L.icon({
    iconUrl: './index-src/leopard-seal.jpg',

    iconSize:     [30,30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});
//sSealMark1 =L.marker([-36,130],{icon: leopardSeal,alt:"southern seal, Great Australian Bight"})
    //.bindPopup("This area has: <br> ");
sSealMark1 =L.marker([-66,67],{icon: leopardSeal,alt:"southern seal, Southernmost Indian Ocean"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals")
sSealMark2 =L.marker([-65,120],{icon: leopardSeal,alt:"southern seal, Southernmost Indian Ocean"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals");
sSealMark3 =L.marker([34,18],{icon: leopardSeal,alt:"southern seal, Mediterranean Sea"})
    .bindPopup("This area has: <br> Mediterranean monk seals");
sSealMark4 =L.marker([35,-3],{icon: leopardSeal,alt:"southern seal, Alboran Sea"})
    .bindPopup("This area has: <br> Mediterranean monk seals");
sSealMark5 =L.marker([38,25],{icon: leopardSeal,alt:"southern seal, Aegean Sea"})
    .bindPopup("This area has: <br> Mediterranean monk seals");
sSealMark6 =L.marker([42,16],{icon: leopardSeal,alt:"southern seal, Adriatic Sea"})
    .bindPopup("This area has: <br> Mediterranean monk seals");
sSealMark7 =L.marker([-70,-10],{icon: leopardSeal,alt:"southern seal, Southernmost Atlantic Ocean"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals");
sSealMark8 =L.marker([28,-15],{icon: leopardSeal,alt:"southern seal, Canarias Islands"})
    .bindPopup("This area has: <br> Mediterranean monk seals");
sSealMark9 =L.marker([-41,-16],{icon: leopardSeal,alt:"southern seal, South Atlantic Ocean"})
    .bindPopup("This area has: <br> southern elephant seals");
sSealMark10 =L.marker([-74,-43],{icon: leopardSeal,alt:"southern seal, Weddell Sea"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals");
sSealMark11 =L.marker([-59,-64],{icon: leopardSeal,alt:"southern seal, Drake Passage"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals");
sSealMark12 =L.marker([-73,-130],{icon: leopardSeal,alt:"southern seal, Southernmost Pacific Ocean"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals");
sSealMark13 =L.marker([58,-145],{icon: leopardSeal,alt:"southern seal, Gulf of Alaska"})
    .bindPopup("This area has: <br> northern elephant seals");
sSealMark14 =L.marker([21,-157],{icon: leopardSeal,alt:"southern seal, Hawaiian Islands"})
    .bindPopup("This area has: <br> Hawaiian monk seals");
sSealMark15 =L.marker([-45,-161],{icon: leopardSeal,alt:"southern seal, Argentine Sea"})
    .bindPopup("This area has: <br> southern elephant seals");
sSealMark16 =L.marker([-76,-165],{icon: leopardSeal,alt:"southern seal, Ross Sea"})
    .bindPopup("This area has: <br> weddell seals, leopard seals, <br>crabeater seals, ross seals, and southern elephant seals");
sSealMark17 =L.marker([44,-171],{icon: leopardSeal,alt:"southern seal, North Pacific Ocean"})
    .bindPopup("This area has: <br> northern elephant seals");
sSeals = L.layerGroup([sSealMark1,sSealMark2,sSealMark3,sSealMark4,sSealMark5,sSealMark6,sSealMark7,sSealMark8,
    sSealMark9,sSealMark10,sSealMark11,sSealMark12,sSealMark13,sSealMark14,sSealMark15,sSealMark16,sSealMark17]);
SAFurSeal = L.icon({
    iconUrl: './index-src/south-american-fur-seal.jpg',

    iconSize:     [30,30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});
furSealMark1 =L.marker([-43,170],{icon: SAFurSeal,alt:"fur seal, New Zealand Coast"})
    .bindPopup("This area has: <br> Antipodean fur seals")
furSealMark2 = L.marker([53,149],{icon: SAFurSeal,alt:"fur seal, Sea of Okhotsk"})
    .bindPopup("This area has: <br> northern fur seals");
furSealMark3 = L.marker([-39,145],{icon: SAFurSeal,alt:"fur seal, Bass Strait"})
    .bindPopup("This area has: <br> brown fur seals");
furSealMark4 = L.marker([40,136],{icon: SAFurSeal,alt:"fur seal, Sea of Japan"})
    .bindPopup("This area has: <br> northern fur seals");
furSealMark5 =L.marker([-36,130],{icon: SAFurSeal,alt:"fur seal, Great Australian Bight"})
    .bindPopup("This area has: <br> Antipodean fur seals");
furSealMark6 =L.marker([-65,120],{icon: SAFurSeal,alt:"fur seal, Southernmost Indian Ocean"})
    .bindPopup("This area has: <br> Antarctic fur seals");
furSealMark7 =L.marker([-53,70],{icon: SAFurSeal,alt:"fur seal, Strait of Magallan"})
    .bindPopup("This area has: <br> South American fur seals");
furSealMark8 = L.marker([-34,18],{icon: SAFurSeal,alt:"fur seal, Coast of South Africa"})
    .bindPopup("This area has: <br> brown fur seals");
furSealMark9 = L.marker([-22,14],{icon: SAFurSeal,alt:"fur seal, Coast of Nambia"})
    .bindPopup("This area has: <br> brown fur seals");
furSealMark10 =L.marker([-41,-16],{icon: SAFurSeal,alt:"fur seal, South Atlantic Ocean"})
    .bindPopup("This area has: <br> subantarctic fur seals");
furSealMark11 =L.marker([-59,-64],{icon: SAFurSeal,alt:"fur seal, Drake Passage"})
    .bindPopup("This area has: <br> Antarctic fur seals");
furSealMark12 =L.marker([-48,-69],{icon: SAFurSeal,alt:"fur seal, islands of the South Indian Ocean"})
    .bindPopup("This area has: <br> subantarctic fur seals and Antarctic fur seals");
furSealMark13 =L.marker([-32,-73],{icon: SAFurSeal,alt:"fur seal, near the coast of Chile"})
    .bindPopup("This area has: <br> Juan Fernández fur seals, and South American fur seals");
furSealMark14=L.marker([41,-124],{icon: SAFurSeal,alt:"fur seal, American West Coast"})
    .bindPopup("This area has: <br> northern fur seals");
furSealMark15=L.marker([52,-130],{icon: SAFurSeal,alt:"fur seal, Queen Charlotte Sound"})
    .bindPopup("This area has: <br> northern fur seals");
furSealMark16=L.marker([-53,-144],{icon: SAFurSeal,alt:"fur seal, Southeast Indian Ocean"})
    .bindPopup("This area has: <br> subantarctic fur seals");
furSealMark17=L.marker([58,-148],{icon: SAFurSeal,alt:"fur seal, Gulf of Alaska"})
    .bindPopup("This area has: <br> northern fur seals");
furSealMark18 =L.marker([-45,-165],{icon: SAFurSeal,alt:"fur seal, Argentine Sea"})
    .bindPopup("This area has: <br> South American fur seals");
furSealMark19 = L.marker([58,-179],{icon: SAFurSeal,alt:"fur seal, Bering Sea"})
    .bindPopup("This area has: <br> northern fur seals");
furSeals = L.layerGroup([furSealMark1,furSealMark2,furSealMark3,furSealMark4,furSealMark5,furSealMark6,
    furSealMark7,furSealMark8,furSealMark9,furSealMark10,furSealMark11,furSealMark12,furSealMark13,furSealMark14,
    furSealMark15,furSealMark16,furSealMark17,furSealMark18,furSealMark19])
CASeaLion = L.icon({
    iconUrl: './index-src/california-sea-lion.jpg',

    iconSize:     [30,30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});
seaLionMark1 =L.marker([-43,170],{icon: CASeaLion,alt:"sea lion, New Zealand Coast"})
    .bindPopup("This area has: <br> New Zealand sea lions")
seaLionMark2 = L.marker([53,148],{icon: CASeaLion,alt:"sea lion, Sea of Okhotsk"})
    .bindPopup("This area has: <br> stellar sea lions");
seaLionMark3 = L.marker([40,134],{icon: CASeaLion,alt:"sea lion, Sea of Japan"})
    .bindPopup("This area has: <br> stellar sea lions");
seaLionMark4 =L.marker([-36,130],{icon: CASeaLion,alt:"sea lion, Great Australian Bight"})
    .bindPopup("This area has: <br> Australian sea lion");
seaLionMark5 =L.marker([-30,114],{icon: CASeaLion,alt:"sea lion, west coast of Australia"})
    .bindPopup("This area has: <br> Australian sea lion");
seaLionMark6 =L.marker([-1,89],{icon: CASeaLion,alt:"sea lion,Galápagos Islands"})
    .bindPopup("This area has: <br> Galápagos sea lions");
seaLionMark7 =L.marker([-53,69],{icon: CASeaLion,alt:"sea lion,Strait of Magallan"})
    .bindPopup("This area has: <br> South American sea lions");
seaLionMark8 =L.marker([-32,-73],{icon: CASeaLion,alt:"sea lion, near the coast of Chile"})
    .bindPopup("This area has: <br> South American sea lions");
seaLionMark9=L.marker([41,-124],{icon: CASeaLion,alt:"sea lion, American West Coast"})
    .bindPopup("This area has: <br> stellar sea lions and California sea lions");
seaLionMark10=L.marker([58,-149],{icon: CASeaLion,alt:"sea lion, Gulf of Alaska"})
    .bindPopup("This area has: <br> stellar sea lions and California sea lions");
seaLionMark11 =L.marker([-45,-166],{icon: CASeaLion,alt:"sea lion, Argentine Sea"})
    .bindPopup("This area has: <br> South American sea lions");
seaLionMark12 = L.marker([58,-180],{icon: CASeaLion,alt:"sea lion, Bering Sea"})
    .bindPopup("This area has: <br> stellar sea lions");
seaLions = L.layerGroup([seaLionMark1,seaLionMark2,seaLionMark3,seaLionMark4,seaLionMark5,seaLionMark6,
    seaLionMark7,seaLionMark8,seaLionMark9,seaLionMark10,seaLionMark11,seaLionMark12])
walrusI = L.icon({
    iconUrl: './index-src/walrus.jpg',

    iconSize:     [30,30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});

walrusMark1 = L.marker([58,-180],{icon: walrusI,alt:"walrus, Bering Sea"})
    .bindPopup("This area has: <br> walrus");
walrusMark2 = L.marker([70,-171],{icon: walrusI,alt:"walrus, Chukchi Sea"})
    .bindPopup("This area has: <br> walrus");
walrusMark3 = L.marker([77,127],{icon: walrusI,alt:"walrus, Laptev Sea"})
    .bindPopup("This area has: <br> walrus");
walrusMark4 = L.marker([75,39],{icon: walrusI,alt:"walrus, Barents Sea"})
    .bindPopup("This area has: <br> walrus");
walrusMark5 = L.marker([69,23],{icon: walrusI,alt:"walrus, Kara Sea"})
    .bindPopup("This area has: <br> walrus");
walrusMark6 = L.marker([77,-21],{icon: walrusI,alt:"walrus, South East Greenland Coast"})
    .bindPopup("This area has: <br> walrus");
walrusMark7 = L.marker([72,-65],{icon: walrusI,alt:"walrus, Baffin Bay"})
    .bindPopup("This area has: <br> walrus");
walrusMark8 = L.marker([66,-80],{icon: walrusI,alt:"walrus, Northwestern passages"})
    .bindPopup("This area has: <br> walrus");
wal = L.layerGroup([walrusMark1,walrusMark2,walrusMark3,walrusMark4,walrusMark5,walrusMark6,walrusMark7,walrusMark8])

let overlayMaps = {
    "Fur Seals" : furSeals,
    "Sea Lions" : seaLions,
    "Northern Seals": nSeals,
    "Southern Seals": sSeals,
    "Walrus" : wal,
}
let layerControl = L.control.layers(null, overlayMaps).addTo(map);

function centerMap(){
    map.panTo([0,0])
}


function earless(){
    if (document.getElementById("earless").style.visibility === "visible") {
        closeFam()
        document.getElementById("e-Title").style.border = "none"
    }else{
        document.getElementById("walrus").style.visibility = "collapse"
        document.getElementById("eared").style.visibility = "collapse"
        document.getElementById("earless").style.visibility = "visible"
        document.getElementById("e-Title").style.border = "solid"
    }
}
function eared(){
    if (document.getElementById("eared").style.visibility === "visible") {
        closeFam()
        document.getElementById("e+Title").style.border = "none"
    }else {
        document.getElementsByClassName("families").visibility = "collapse"
        document.getElementById("eared").style.visibility = "visible"
        document.getElementById("e+Title").style.border = "solid"
    }
}
function walrus(){
    if (document.getElementById("walrus").style.visibility === "visible") {
        closeFam()
        document.getElementById("wTitle").style.border = "none"
    }else {
        document.getElementsByClassName("families").visibility = "collapse"
        document.getElementById("walrus").style.visibility = "visible"
        document.getElementById("wTitle").style.border = "solid"
    }
}
function closeFam(){
    document.getElementById("walrus").style.visibility="collapse"
    document.getElementById("eared").style.visibility="collapse"
    document.getElementById("earless").style.visibility="collapse"
    document.getElementById("wTitle").style.border = "none"
    document.getElementById("e+Title").style.border = "none"
    document.getElementById("e-Title").style.border = "none"
}