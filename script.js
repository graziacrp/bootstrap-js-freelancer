
//Calcolo i vari sconti in relazione alle ore

function calcoloTotale() {
    const costosviluppoBackEnd = 20.5;
    const costosviluppoFrontEnd = 15.3;
    const costoprojectAnalist = 33.6;
}

let Sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


let ore = document.getElementById("Hours").value;
    ore = parseInt(ore);
    


    let lavoro = document.getElementById("TypeofWork").value; 
   
    
    let discountVal = document.getElementById("discount").value;   
    
    
    let valoreSconto = controlloSconto("Sconti");




    if (valoreSconto == 0 && discountVal!= ""){
        alert("Codice sconto non valido.");
        document.getElementById("discount").value = "Codice sconto non valido ";
    }

    let valore , valoreTotale;
    switch (lavoro) {
        case "Backend Development":
            valore = (ore * costosviluppoBackEnd);
            valoreTotale = valore - (valore * valoreSconto);
            break;
        case "Frontend Development": 
            valore = ore * costosviluppoFrontEnd;
            valoreTotale = valore - (valore * valoreSconto);
            break;
        case "Project Analisys":
            valore = ore * costoprojectAnalist;
            valoreTotale = valore - (valore * valoreSconto);
            break;
      
    }
    
    valoreTotale = valoreTotale.toFixed(2);
        
    document.getElementById("Totale").innerHTML = "Il totale è : " + valoreTotale + " " + "\u20AC";
    
    

    function controlloSconto(lista) { 
        let discount = document.getElementById("discount").value; //codice sconto
        discount = discount.toUpperCase();
        let valoreSconto = 0;
        for (let i = 0; i < lista.length; i++){
            if (discount == lista[i]) { 
                valoreSconto = 0.25;
                break;
            } 
        }
        return valoreSconto;
    }
    