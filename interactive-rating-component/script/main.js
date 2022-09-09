var btn1 =document.getElementById("btn1");
var btn2 =document.getElementById("btn2");
var btn3 =document.getElementById("btn3");
var btn4 =document.getElementById("btn4");
var btn5 =document.getElementById("btn5");

let num = 0;


function change(number){
    

    let bg = "hsl(217, 12%, 63%)"
    reset();
    num=number;
    switch(number){


        case 1:
            btn1.style.backgroundColor = bg;
            btn1.style.color = "white";
            number = 1;
            break;
            
        case 2:
            btn2.style.backgroundColor = bg;
            btn2.style.color = "white";
            number = 2;
            break;
        case 3:
            btn3.style.backgroundColor = bg;
            btn3.style.color = "white";
            number = 3;
            break;
        case 4:
            btn4.style.backgroundColor = bg;
            btn4.style.color = "white";
            number = 4;
            break;
        case 5:
            btn5.style.backgroundColor = bg;
            btn5.style.color = "white";
            number = 5;
            break;
    
           
    }

}
function sub(){

    if(num == 0){
            alert("Please select the number of stars");
            return;
        }
    else{
        document.getElementById("welcome").style.display = "none";
        document.getElementById("thanks").style.display = "block";
        document.getElementById("selection").innerHTML = "<p>You selected "+num+" out of 5</p>";
        
    }
    

   

}
function reset(){
    btn1.style.backgroundColor = "#272e38";
    btn1.style.color= "hsl(216, 12%, 54%)";
    btn2.style.backgroundColor = "#272e38";
    btn2.style.color= "hsl(216, 12%, 54%)";
    btn3.style.backgroundColor = "#272e38";
    btn3.style.color= "hsl(216, 12%, 54%)";
    btn4.style.backgroundColor = "#272e38";
    btn4.style.color= "hsl(216, 12%, 54%)";
    btn5.style.backgroundColor = "#272e38";
    btn5.style.color= "hsl(216, 12%, 54%)";
    
}