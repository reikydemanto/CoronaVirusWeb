// const merah = document.querySelector('.ungu')
// merah.addEventListener("click", function () {xx.style.fontSize ="xx-large";} , false);
// console.log(merah)

// function ganti_merah() {
//     const m = document.querySelectorAll('.h2');
//     for(let me of m){
//         me.style.color = '#c60000';
//     }
// }

var h2 = document.querySelectorAll("h2");
var h3 = document.querySelectorAll("h3");
var footer = document.getElementsByTagName("footer");
var nav = document.getElementsByTagName("nav");


var ungu = document.getElementById("font-ungu");

var merah = document.getElementById("font-merah");

var small = document.getElementById("font-small");

var medium = document.getElementById("font-medium");

var large = document.getElementById("font-large");

small.addEventListener("click",function(){
    change_font_small()
})

medium.addEventListener("click",function(){
    change_font_medium()
})

large.addEventListener("click",function(){
    change_font_large()
})

merah.addEventListener("click",function(){
    change_image_merah()
})
ungu.addEventListener("click",function(){
    change_image_ungu()
})

function change_font_small(){
    var txt = document.querySelectorAll(".txt");
    for (let txtx of txt){
        txtx.style.fontSize ="small";
    }
}

function change_font_medium(){
    var txt = document.querySelectorAll(".txt");
    for(let txtx of txt){
        txtx.style.fontSize = "medium"
    }
}

function change_font_large(){
    var txt = document.querySelectorAll(".txt");
    for (let txtx of txt){
        txtx.style.fontSize ="large";
    }
}

function change_image_large(){
    var img = document.querySelector(".image-jumbotron");
    img.setAttribute('src','assets/image/covid-big.jpg')
}

function change_image_merah(){
    var img = document.querySelector(".image-jumbotron");
    img.setAttribute('src','assets/image/covid-big-red.jpg')
}

for (let x of h2){

    var ungu = document.getElementById("font-ungu");

    var merah = document.getElementById("font-merah");

    //untuk merubah font menjadi sangat besar
    ungu.addEventListener("click", function () {x.style.color ="#5600c6";} , false);
    //untuk merubah font menjadi sangat kecil
    merah.addEventListener("click", function () {x.style.color ="#c60000";} , false);

}
for (let y of h3){

    var ungu = document.getElementById("font-ungu");

    var merah = document.getElementById("font-merah");

    //untuk merubah font menjadi sangat besar
    ungu.addEventListener("click", function () {y.style.color ="#5600c6";} , false);
    //untuk merubah font menjadi sangat kecil
    merah.addEventListener("click", function () {y.style.color ="#c60000";} , false);

}
for (let foot of footer){

    var ungu = document.getElementById("font-ungu");

    var merah = document.getElementById("font-merah");

    //untuk merubah font menjadi sangat besar
    ungu.addEventListener("click", function () {foot.style.backgroundColor ="#5600c6";} , false);
    //untuk merubah font menjadi sangat kecil
    merah.addEventListener("click", function () {foot.style.backgroundColor ="#c60000";} , false);

}
for (let navi of nav){

    var ungu = document.getElementById("font-ungu");

    var merah = document.getElementById("font-merah");

    //untuk merubah font menjadi sangat besar
    ungu.addEventListener("click", function () {navi.style.backgroundColor ="#363895";} , false);
    //untuk merubah font menjadi sangat kecil
    merah.addEventListener("click", function () {navi.style.backgroundColor ="#c60000";} , false);

}