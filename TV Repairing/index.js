function loading(){
    setTimeout(logo,1000)
    function logo(){
        document.getElementById('img1').style.display = 'none';
        document.getElementById('mainsection').style.display = 'block';
        document.getElementById('mainsection').style.background = 'white';
    }  
}
function loader(){
    setTimeout(logo,500)
    function logo(){
        document.getElementById('img1').style.display = 'none';
        document.getElementById('mainsection').style.display = 'block';
        document.getElementById('mainsection').style.background = 'white';
    }  
}
setInterval(load,3000)
let store = 0;
function load(){
    if(store === 0){
        document.getElementById('crowserchild').style.marginLeft = "0px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 1){
        document.getElementById('crowserchild').style.marginLeft = "-500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 2){
        document.getElementById('crowserchild').style.marginLeft = "-1000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 3){
        document.getElementById('crowserchild').style.marginLeft = "-1500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 4){
        document.getElementById('crowserchild').style.marginLeft = "-2000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 5){
        document.getElementById('crowserchild').style.marginLeft = "-2500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 6){
        document.getElementById('crowserchild').style.marginLeft = "-3000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 7){
        document.getElementById('crowserchild').style.marginLeft = "-3500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 8){
        document.getElementById('crowserchild').style.marginLeft = "-4000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 9){
        document.getElementById('crowserchild').style.marginLeft = "-4500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 10){
        document.getElementById('crowserchild').style.marginLeft = "-5000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 11){
        document.getElementById('crowserchild').style.marginLeft = "-5500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 12){
        document.getElementById('crowserchild').style.marginLeft = "-6000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 13){
        document.getElementById('crowserchild').style.marginLeft = "-6500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 14){
        document.getElementById('crowserchild').style.marginLeft = "-7000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 15){
        document.getElementById('crowserchild').style.marginLeft = "-7500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 16){
        document.getElementById('crowserchild').style.marginLeft = "-8000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 17){
        document.getElementById('crowserchild').style.marginLeft = "-8500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 18){
        document.getElementById('crowserchild').style.marginLeft = "-9000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 19){
        document.getElementById('crowserchild').style.marginLeft = "-9500px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 20){
        document.getElementById('crowserchild').style.marginLeft = "-10000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 21){
        document.getElementById('crowserchild').style.marginLeft = "-11000px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store++;
    }
    else if(store === 22){
        document.getElementById('crowserchild').style.marginLeft = "-11600px";
        document.getElementById('crowserchild').style.transition = "margin-left 5s";
        store = 0;
    }

}