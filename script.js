
//Calcolo i vari sconti in relazione alle ore

function calcoloTotale() {

    let costosviluppoBackEnd = 20.5;
    let costosviluppoFrontEnd = 15.3;
    let costoprojectAnalist = 33.6;
}

let Sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
alert("Sconti");

let ore = document.getElementById("Hours requested").value;
    ore = parseInt(ore);
    alert("Ore");


    let lavoro = document.getElementById("TypeofWork").value; 
   
    
    let discountVal = document.getElementById("discount").value;   
    
    
    let valoreSconto = controlloSconto("Sconti");
    