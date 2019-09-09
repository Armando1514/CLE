
const selectionsSelector = $("#aboutSelections");
const selectionsCostSelector = $("#aboutCostSelections");
const selectionsProcessSelector = $("#aboutProcessSelections");
const selectionTotalSelector = $("#aboutTotalSelections");
const selectSpecTecn = $("#aboutSpecTecSelections");
let totalMaterialCost ;
let totalProcessCost ;


// to send via FORM
let selectedFieldsToSend= "" ;
let costToSend= "";
let processCostToSend= "" ;
let totalCostToSend= "" ;
let specTecToSend= "" ;
let pricesToSend = "";

const sfrido = 0.20; //20 percent on material costs
const utiliAziendali = 0.35;// 30 percent utili aziendali
const fixedCost = 0.35;// 30 percent costi fissi aziendali
const clienteFinale = 0.70; //+70 percent
const installatore = 0.15; // -15 percent
const insegnista = 0.25; //-25 percent
const rivenditore = 0.35; // -35 percent


imported.src = "js/estimator-conuloller.js";
document.getElementsByTagName("head")[0].appendChild(imported);
imported.src = "js/estimator-costs.js";
document.getElementsByTagName("head")[0].appendChild(imported);


$("#priceShow").on("click", function() {

  $("#aboutCostSelections").toggle("slow");

});

$("#elementShow").on("click", function(){
  $("#aboutProcessSelections").toggle("slow");
});

$("#processCostShow").on("click", function(){
  $("#aboutTotalSelections").toggle("slow");
});
$("#materialCostShow").on("click", function(){
  $("#aboutSelections").toggle("slow");
});
$("#specTecShow").on("click", function(){
  $("#aboutSpecTecSelections").toggle("slow");
});

function generatePageCosts()
{


  console.log("sdadsadassdads");

  selectedFieldsToSend = "";
  costToSend = "";
  processCostToSend = "";
  totalCostToSend = "";
  specTecToSend = "";
  pricesToSend = "";

  totalMaterialCost = 0;
  totalProcessCost = 0;



  $(".shownElements").empty();

  $("#step4Costs").remove();

  selectionGenerator();
  costMaterialGenerator();
  costProcessGenerator();
  generateSpecTec();
  generateAllCosts();
  $("#headerInfo").css("display","block");

}

function generateSpecTec()
{
  idC = 3000;
  $("<div/>", {
    id: 'allSpec'

  }).appendTo(selectSpecTecn);

  $("<ul/>", {
    id: idC
  }).appendTo("#allSpec");

  $("<li/>", {
    text: "Perimetro"
  }).appendTo("#" + idC);
  $("<li/>", {
    text: totalPerimeter
  }).appendTo("#" + idC);
  specTecToSend+= "\nPerimetro: "+ totalPerimeter;
  idC ++;

  $("<ul/>", {
    id: idC
  }).appendTo("#allSpec");
  $("<li/>", {
    text: "Area"
  }).appendTo("#" + idC);
  $("<li/>", {
    text: totalArea
  }).appendTo("#" + idC);
  specTecToSend+= "\nArea: "+ totalArea;

  idC ++;
}

function generateAllCosts() {
  let idC = 2000;

  let costoSfrido = totalMaterialCost * sfrido;
  let price = costoSfrido + totalProcessCost + totalMaterialCost;
  let utili = (price * utiliAziendali) ;
  let costiFissi = (price * fixedCost) ;
  let totalPrice = (price + utili + costiFissi);
  let costoClienteFinale = totalPrice + (totalPrice * clienteFinale);
  let costoInstallatore = costoClienteFinale - (installatore * costoClienteFinale);
  let costoInsegnista = costoClienteFinale - (insegnista * costoClienteFinale);
  let costoRivenditore = costoClienteFinale - (rivenditore * costoClienteFinale);


  totalPrice = totalPrice.toFixed(2);
  costoClienteFinale = costoClienteFinale.toFixed(2);
  costoInstallatore = costoInstallatore.toFixed(2);
  costoInsegnista = costoInsegnista.toFixed(2);
  costoRivenditore = costoRivenditore.toFixed(2);

  $("<div/>", {
    id: 'allCosts'

  }).appendTo(selectionTotalSelector);

  $("<ul/>", {
    id: idC
  }).appendTo("#allCosts");

  $("<li/>", {
    text: "+ Costo totale materiali"
  }).appendTo("#" + idC);
  $("<li/>", {
    text: "€ "+ totalMaterialCost
  }).appendTo("#" + idC);

  totalCostToSend+= "\n + Costo totale materiali: " + "€ "+ totalMaterialCost;

  idC ++;
  $("<ul/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<li/>", {
    text: "+ Costo sfrido materiali"
  }).appendTo("#" + idC);
  $("<li/>", {
    text:  "€ "+ costoSfrido
  }).appendTo("#" + idC);

  totalCostToSend+= "\n + Costo sfrido materiali: " + "€ "+ costoSfrido;

  idC ++;

  $("<ul/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<li/>", {
    text: "+ Costo totale lavorazione"
  }).appendTo("#" + idC);
  $("<li/>", {
    text:  "€ "+ totalProcessCost
  }).appendTo("#" + idC);

  totalCostToSend+= "\n + Costo totale lavorazione: " + "€ "+ totalProcessCost;





  idC ++;
  $("<ul/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<li/>", {
    text: "+ Costi fissi (euro) "
  }).appendTo("#" + idC);
  $("<li/>", {
    text:  "€ "+ costiFissi
  }).appendTo("#" + idC);


  totalCostToSend+= "\n + Costi fissi: " + "€ "+ costiFissi;


  idC ++;
  $("<ul/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<li/>", {
    text: " + Utili aziendali(euro) "
  }).appendTo("#" + idC);
  $("<li/>", {
    text:  "€ "+ utili
  }).appendTo("#" + idC);

  totalCostToSend+= "\n + Utili: " + "€ "+ utili;


  idC ++;
  $("<ul/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<li/>", {
    text: "= Soglia minima di vendita (euro) "
  }).appendTo("#" + idC);
  $("<li/>", {
    text:  "€ "+ totalPrice
  }).appendTo("#" + idC);

  totalCostToSend+= "\n = Soglia minima di vendita (euro): " + "€ "+ totalPrice;

  pricesToSend +="\n SOGLIA MINIMA DI VENDITA (CATEGORIA DI APPARTENENZA): " + "€" + totalPrice;
  pricesToSend +="\n PREZZO RIVENDITORE: " + "€" + costoRivenditore;
  pricesToSend +="\n PREZZO INSEGNISTA: " + "€" + costoInsegnista;
  pricesToSend +="\n PREZZO INSTALLATORE: " + "€" + costoInstallatore;
  pricesToSend +="\n PREZZO AL PUBBLICO: " + "€" + costoClienteFinale;



  $("#sogliaMinima").text("€" + totalPrice);

  $("#clienteFinale").text("€" + costoClienteFinale);


  $("#installatore").text("€" + costoInstallatore);


  $("#insegnista").text("€" + costoInsegnista);


  $("#rivenditore").text("€" + costoRivenditore);

  $("#sellCost").css("display","block");

}

function selectionGenerator() {

  $("<div/>", {
    id: 'step0'

  }).appendTo(selectionsSelector);


  let idC = 0;


  for (x in step0Storage) {

    if (step0Storage[x] !== undefined && step0Storage[x] !== null) {

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step0");

      $("<li/>", {
        text: x
      }).appendTo("#" + idC);
      $("<li/>", {
        text: step0Storage[x]
      }).appendTo("#" + idC);


      selectedFieldsToSend += "\n" + x + ":  " + step0Storage[x];
    }
  }
  $("<div/>", {
    id: 'step1'

  }).appendTo(selectionsSelector);

  for (x in step1Storage) {
    if (step1Storage[x] !== undefined && step1Storage[x] !== null) {
      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step1");

      $("<li/>", {
        text: x
      }).appendTo("#" + idC);
      $("<li/>", {
        text: step1Storage[x]
      }).appendTo("#" + idC);


      selectedFieldsToSend += "\n" + x + ":  " + step1Storage[x];
    }
  }


  $("<div/>", {
    id: 'step2'

  }).appendTo(selectionsSelector);


  for (x in step2Storage) {
    if (step2Storage[x] !== undefined && step2Storage[x] !== null) {
      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step2");

      $("<li/>", {
        text: x
      }).appendTo("#" + idC);
      $("<li/>", {
        text: step2Storage[x]
      }).appendTo("#" + idC);


      selectedFieldsToSend += "\n" + x + ":  " + step2Storage[x];
    }

  }

  $("<div/>", {
    id: 'step3'

  }).appendTo(selectionsSelector);


  for (x in step3Storage) {
    if (step3Storage[x] !== undefined && step3Storage[x] !== null) {
      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step3");

      $("<li/>", {
        text: x
      }).appendTo("#" + idC);
      $("<li/>", {
        text: step3Storage[x]
      }).appendTo("#" + idC);
      selectedFieldsToSend += "\n" + x + ":  " + step3Storage[x];
    }

  }

  $("<div/>", {
    id: 'step4'

  }).appendTo(selectionsSelector);
  for (x in step4Storage) {
    if (step4Storage[x] !== undefined && step4Storage[x] !== null ) {
      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step4");

      $("<li/>", {
        text: x
      }).appendTo("#" + idC);
      $("<li/>", {
        text: step4Storage[x]
      }).appendTo("#" + idC);

      selectedFieldsToSend += "\n" + x + ":  " + step4Storage[x];
    }
  }

  $("<div/>", {
    id: 'step5'

  }).appendTo(selectionsSelector);
  for (x in step5Storage) {
    if (step5Storage[x] !== undefined && step5Storage[x] !== null) {
      idC++;
      $("<ul/>",  {
        id: idC
      }).appendTo("#step5");

      $("<li/>", {
        text: x
      }).appendTo("#" + idC);
      $("<li/>", {
        text: step5Storage[x]
      }).appendTo("#" + idC);

      selectedFieldsToSend += "\n" + x + ":  " + step5Storage[x];
    }
  }

}

function costMaterialGenerator() {

  let idC = 500;
  $("<div/>", {
    id: 'step2Costs'

  }).appendTo(selectionsCostSelector);

  if(materialsCost["Step 2"]!== undefined && materialsCost["Step 2"].length !== 0) {

    $("<p/>", {
      text: "\nCosto materiali step 2",
      css: {"font-weight" : "600"}

    }).appendTo("#step2Costs");

    costToSend += "\nCosto materiali step 2";

    for (l in materialsCost["Step 2"]) {


      if (materialsCost["Step 2"] !== undefined) {

        let p = Object.keys(materialsCost["Step 2"][l])[0];

        idC++;
        $("<ul/>", {
          id: idC
        }).appendTo("#step2Costs");

        $("<li/>", {
          text: p + ": € " + materialsCost["Step 2"][l][p]
        }).appendTo("#" + idC);

        costToSend += "\n"+ p + ": € " + materialsCost["Step 2"][l][p];


        totalMaterialCost += parseFloat(materialsCost["Step 2"][l][p]);
      }
    }
  }





  if(materialsCost["Step 3"]!== undefined && materialsCost["Step 3"].length !== 0) {

    $("<div/>", {
      id: 'step3Costs'

    }).appendTo(selectionsCostSelector);

    $("<p/>", {
      text: "Costo materiali step 3",
      css: {"font-weight" : "600"}

    }).appendTo("#step3Costs");
    costToSend += "\nCosto materiali step 3";

    for (l in materialsCost["Step 3"]) {

      let p = Object.keys(materialsCost["Step 3"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step3Costs");

      $("<li/>", {
        text: p + ": € " + materialsCost["Step 3"][l][p]
      }).appendTo("#" + idC);

      costToSend += "\n"+ p + ": € " + materialsCost["Step 3"][l][p];

      totalMaterialCost += parseFloat(materialsCost["Step 3"][l][p]);

    }

  }

  if(materialsCost["Step 4"]!== undefined && materialsCost["Step 4"].length !== 0) {
    $("<div/>", {
      id: 'step4Costs'

    }).appendTo(selectionsCostSelector);
    $("<p/>", {
      text: "Costo materiali step 4",
      css: {"font-weight" : "600"}

    }).appendTo("#step4Costs");

    costToSend += "\nCosto materiali step 4";

    for (l in materialsCost["Step 4"]) {

      let p = Object.keys(materialsCost["Step 4"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step4Costs");

      $("<li/>", {
        text: p  + ": € " + materialsCost["Step 4"][l][p]
      }).appendTo("#" + idC);

      costToSend += "\n"+  p  + ": € " + materialsCost["Step 4"][l][p];


      totalMaterialCost += parseFloat(materialsCost["Step 4"][l][p]);

    }
  }

  if(materialsCost["Step 5"]!== undefined && materialsCost["Step 5"].length !== 0) {

    $("<div/>", {
      id: 'step5Costs'

    }).appendTo(selectionsCostSelector);

    $("<p/>", {
      text: "Costo materiali step 5",
      css: {"font-weight" : "600"}
    }).appendTo("#step5Costs");

    costToSend += "\nCosto materiali step 4";


    for (l in materialsCost["Step 5"]) {

      let p = Object.keys(materialsCost["Step 5"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step5Costs");

      $("<li/>", {
        text: p  + ": € " + materialsCost["Step 5"][l][p]
      }).appendTo("#" + idC);

      costToSend += "\n"+  p  + ": € " + materialsCost["Step 5"][l][p];


      totalMaterialCost += parseFloat(materialsCost["Step 5"][l][p]);

    }
  }
}

function costProcessGenerator() {

  let idC = 1000;
  $("<div/>", {
    id: 'step2PCosts'

  }).appendTo(selectionsProcessSelector);



  $("<p/>", {
    text: "Costo lavorazione step 2",
    css: {"font-weight" : "600"}
  }).appendTo("#step2PCosts");

  processCostToSend += "\n Costo lavorazione step 2";

  for(l in processCost["Step 2"]) {
    if(processCost["Step 2"]!== undefined) {
      let p = Object.keys(processCost["Step 2"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step2PCosts");

      $("<li/>", {
        text: p  + ": € " + processCost["Step 2"][l][p]
      }).appendTo("#" + idC);


      processCostToSend += "\n"+ p  + ": € " + processCost["Step 2"][l][p];


      totalProcessCost += parseFloat(processCost["Step 2"][l][p]);
    }
  }



  if(processCost["Step 3"]!== undefined && processCost["Step 3"].length !== 0) {

    $("<div/>", {
      id: 'step3PCosts'

    }).appendTo(selectionsProcessSelector);

    $("<p/>", {
      text: "Costo lavorazione step 3",
      css: {"font-weight" : "600"}
    }).appendTo("#step3PCosts");
    processCostToSend += "\n Costo lavorazione step 3";

    for (l in processCost["Step 3"]) {

      let p = Object.keys(processCost["Step 3"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step3PCosts");

      $("<li/>", {
        text: p  + ": € " + processCost["Step 3"][l][p]
      }).appendTo("#" + idC);


      processCostToSend += "\n"+ p  + ": € " + processCost["Step 3"][l][p];

      totalProcessCost += parseFloat(processCost["Step 3"][l][p]);

    }
  }

  if(processCost["Step 4"]!== undefined && processCost["Step 4"].length !== 0) {

    $("<div/>", {
      id: 'step4PCosts'

    }).appendTo(selectionsProcessSelector);

    $("<p/>", {
      text: "Costo lavorazione step 4",
      css: {"font-weight" : "600"}
    }).appendTo("#step4PCosts");

    processCostToSend += "\n Costo lavorazione step 4";


    for (l in processCost["Step 4"]) {

      let p = Object.keys(processCost["Step 4"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step4PCosts");

      $("<li/>", {
        text: p  + ": € " + processCost["Step 4"][l][p]
      }).appendTo("#" + idC);

      processCostToSend += "\n"+ p  + ": € " + processCost["Step 4"][l][p];


      totalProcessCost += parseFloat(processCost["Step 4"][l][p]);

    }
  }


  if(processCost["Step 5"]!== undefined && processCost["Step 5"].length !== 0) {

    $("<div/>", {
      id: 'step5PCosts'

    }).appendTo(selectionsProcessSelector);


    $("<p/>", {
      text: "Costo lavorazione step 5",
      css: {"font-weight" : "600"}
    }).appendTo("#step5PCosts");

    processCostToSend += "\n Costo lavorazione step 4";


    for (l in processCost["Step 5"]) {

      let p = Object.keys(processCost["Step 5"][l])[0];

      idC++;
      $("<ul/>", {
        id: idC
      }).appendTo("#step5PCosts");

      $("<li>", {
        text: p + ": € " + processCost["Step 5"][l][p]
      }).appendTo("#" + idC);

      processCostToSend += "\n"+ p + ": € " + processCost["Step 5"][l][p];


      totalProcessCost += parseFloat(processCost["Step 5"][l][p]);

    }
  }
}



function openTAB(title, name) {
  let i;
  let x = document.getElementsByClassName("formElementsSelected");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(name).style.display = "block";

  let header = document.getElementsByClassName("w3-button");
  for (i = 0; i < header.length; i++) {
    header[i].classList.remove("w3-dark-grey");
  }
  document.getElementById(title).classList.add( "w3-dark-grey");
}
