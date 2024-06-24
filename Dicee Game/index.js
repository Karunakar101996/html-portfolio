
var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6

var randomImage1 = "images/"+"dice"+randomNumber1+".png";//Selects any images randomly.

var image1 = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor(Math.random()*6)+1;//1-6

var randomImage2 = "images/"+"dice"+randomNumber2+".png";//Selects any images randomly.

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 1 WINS";
    }
else if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 2 WINS";
    }
else 
    {
        document.querySelector("h1").innerHTML = "Draw";
    }