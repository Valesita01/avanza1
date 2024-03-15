

const  pinkColor = document.querySelector(".Pink");

const  redColor = document.querySelector(".Red");


const  yellowColor = document.querySelector(".Yellow");


const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");

const  feedbackBtn = document.querySelector(".feedback");


const buttonText = document.querySelector(".button-text");



//eventos en los botones de colores
pinkColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "pink";
    buttonText.style.color = "black";
    itemTag.style.backgroundColor = "pink";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = 'url(../img2/tulipanes.jpg)';



});

redColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "red";
    buttonText.style.color = "white";
    itemTag.style.backgroundColor = "red";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(../img2/tulipanrojo.jpg)';





});

yellowColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "yellow";
    buttonText.style.color = "black";
    itemTag.style.backgroundColor = "yellow";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = 'url(../img2/tulipanA.jpg)';





});


//implementar el boton del carrito

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";


}

cartButton.addEventListener("click" , cart);





const feedbackFun = () => {

    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
}

feedbackBtn.addEventListener("click" , feedbackFun);
