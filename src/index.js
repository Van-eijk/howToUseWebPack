import {modif} from './fichier.js' 
import {nom} from './footer.js'

let body = document.getElementById("body")


// header

let header = document.createElement("header") ;

body.appendChild(header); // Ajout de l'élement dans la balyse body

header.style.backgroundColor = " blue"
let title1 = document.createElement("h2")
header.appendChild(title1);
title1.innerHTML= modif();
//title1.style.margin = "auto" ;
title1.style.textAlign= "center";

//console.log(modif());

