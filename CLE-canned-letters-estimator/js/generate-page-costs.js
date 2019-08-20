
const selectionsSelector = $("#aboutSelections");
const selectionsCostSelector = $("#aboutCostSelections");;
const selectionsProcessSelector = $("#aboutProcessSelections");
const selectionTotalSelector = $("#aboutTotalSelections");
const selectSpecTecn = $("#aboutSpecTecSelections");
let totalMaterialCost = 0;
let totalProcessCost = 0;


const sfrido = 0.20; //20 percent on material costs
const utiliAziendali = 0.35;// 30 percent utili aziendali
const fixedCost = 0.35;// 30 percent costi fissi aziendali
const clienteFinale = 0.70; //+70 percent
const installatore = 0.15; // -15 percent
const insegnista = 0.25; //-25 percent
const rivenditore = 0.35; // -35 percent


imported.src = "js/estimator-controller.js";
document.getElementsByTagName("head")[0].appendChild(imported);
imported.src = "js/estimator-costs.js";
document.getElementsByTagName("head")[0].appendChild(imported);


function generatePageCosts()
{
  $("#estimatorLettereScatolateForm").remove();
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
  $("<table/>", {
    id: 'allSpec'

  }).appendTo(selectSpecTecn);

  $("<tr/>", {
    id: idC
  }).appendTo("#allSpec");

  $("<td/>", {
    text: "Perimetro"
  }).appendTo("#" + idC);
  $("<td/>", {
    text: totalPerimeter
  }).appendTo("#" + idC);

  idC ++;

  $("<tr/>", {
    id: idC
  }).appendTo("#allSpec");
  $("<td/>", {
    text: "Area"
  }).appendTo("#" + idC);
  $("<td/>", {
    text: totalArea
  }).appendTo("#" + idC);

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

  $("<table/>", {
    id: 'allCosts'

  }).appendTo(selectionTotalSelector);

  $("<tr/>", {
    id: idC
  }).appendTo("#allCosts");

  $("<td/>", {
    text: "Costo totale materiali"
  }).appendTo("#" + idC);
  $("<td/>", {
    text: totalMaterialCost
  }).appendTo("#" + idC);


  idC ++;
  $("<tr/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<td/>", {
    text: "+ Costo sfrido materiali"
  }).appendTo("#" + idC);
  $("<td/>", {
    text: costoSfrido
  }).appendTo("#" + idC);


  idC ++;

  $("<tr/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<td/>", {
    text: "+ Costo totale lavorazione"
  }).appendTo("#" + idC);
  $("<td/>", {
    text: totalProcessCost
  }).appendTo("#" + idC);






  idC ++;
  $("<tr/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<td/>", {
    text: "+ Costi fissi (euro) "
  }).appendTo("#" + idC);
  $("<td/>", {
    text: costiFissi
  }).appendTo("#" + idC);

  idC ++;
  $("<tr/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<td/>", {
    text: " + Utili aziendali(euro) "
  }).appendTo("#" + idC);
  $("<td/>", {
    text: utili
  }).appendTo("#" + idC);


  idC ++;
  $("<tr/>", {
    id: idC
  }).appendTo("#allCosts");
  $("<td/>", {
    text: "Soglia minima di vendita (euro) "
  }).appendTo("#" + idC);
  $("<td/>", {
    text: totalPrice
  }).appendTo("#" + idC);





  $("#sogliaMinima").text(totalPrice);

  $("#clienteFinale").text(costoClienteFinale);


  $("#installatore").text(costoInstallatore);


  $("#insegnista").text(costoInsegnista);


  $("#rivenditore").text(costoRivenditore);

  $("#sellCost").css("display","block");

}

function selectionGenerator() {

  $("<table/>", {
    id: 'step0'

  }).appendTo(selectionsSelector);



    let idC = 0;


    for (x in step0Storage) {

        idC++;
        $("<tr/>", {
          id: idC
        }).appendTo("#step0");

        $("<td/>", {
          text: x
        }).appendTo("#" + idC);
        $("<td/>", {
          text: step0Storage[x]
        }).appendTo("#" + idC);



    }
  $("<table/>", {
    id: 'step1'

  }).appendTo(selectionsSelector);
  for (x in step1Storage) {

    idC++;
    $("<tr/>", {
      id: idC
    }).appendTo("#step1");

    $("<td/>", {
      text: x
    }).appendTo("#" + idC);
    $("<td/>", {
      text: step1Storage[x]
    }).appendTo("#" + idC);



  }
  $("<table/>", {
    id: 'step2'

  }).appendTo(selectionsSelector);
  for (x in step2Storage) {

    idC++;
    $("<tr/>", {
      id: idC
    }).appendTo("#step2");

    $("<td/>", {
      text: x
    }).appendTo("#" + idC);
    $("<td/>", {
      text: step2Storage[x]
    }).appendTo("#" + idC);



  }

  $("<table/>", {
    id: 'step3'

  }).appendTo(selectionsSelector);


  for (x in step3Storage) {

    idC++;
    $("<tr/>", {
      id: idC
    }).appendTo("#step3");

    $("<td/>", {
      text: x
    }).appendTo("#" + idC);
    $("<td/>", {
      text: step3Storage[x]
    }).appendTo("#" + idC);



  }

  $("<table/>", {
    id: 'step4'

  }).appendTo(selectionsSelector);
  for (x in step4Storage) {

    idC++;
    $("<tr/>", {
      id: idC
    }).appendTo("#step4");

    $("<td/>", {
      text: x
    }).appendTo("#" + idC);
    $("<td/>", {
      text: step4Storage[x]
    }).appendTo("#" + idC);



  }

  $("<table/>", {
    id: 'step5'

  }).appendTo(selectionsSelector);
  for (x in step5Storage) {

    idC++;
    $("<tr/>", {
      id: idC
    }).appendTo("#step5");

    $("<td/>", {
      text: x
    }).appendTo("#" + idC);
    $("<td/>", {
      text: step5Storage[x]
    }).appendTo("#" + idC);



  }
}

function costMaterialGenerator() {

  let idC = 500;
  $("<table/>", {
    id: 'step2Costs'

  }).appendTo(selectionsCostSelector);


  if(materialsCost["Step 2"]!== undefined && materialsCost["Step 2"].length !== 0) {

    $("<h4/>", {
      text: "Costo materiali step 2"
    }).appendTo("#step2Costs");

    for (l in materialsCost["Step 2"]) {


      if (materialsCost["Step 2"] !== undefined) {
        let p = Object.keys(materialsCost["Step 2"][l])[0];

        idC++;
        $("<tr/>", {
          id: idC
        }).appendTo("#step2Costs");

        $("<td/>", {
          text: p
        }).appendTo("#" + idC);
        $("<td/>", {
          text: materialsCost["Step 2"][l][p]
        }).appendTo("#" + idC);


        totalMaterialCost += parseFloat(materialsCost["Step 2"][l][p]);
      }
    }
  }





  if(materialsCost["Step 3"]!== undefined && materialsCost["Step 3"].length !== 0) {

    $("<table/>", {
      id: 'step3Costs'

    }).appendTo(selectionsCostSelector);

    $("<h4/>", {
      text: "Costo materiali step 3"
    }).appendTo("#step3Costs");

    for (l in materialsCost["Step 3"]) {

      let p = Object.keys(materialsCost["Step 3"][l])[0];

      idC++;
      $("<tr/>", {
        id: idC
      }).appendTo("#step3Costs");

      $("<td/>", {
        text: p
      }).appendTo("#" + idC);
      $("<td/>", {
        text: materialsCost["Step 3"][l][p]
      }).appendTo("#" + idC);
      totalMaterialCost += parseFloat(materialsCost["Step 3"][l][p]);

    }

  }

  if(materialsCost["Step 4"]!== undefined && materialsCost["Step 4"].length !== 0) {
    $("<table/>", {
      id: 'step4Costs'

    }).appendTo(selectionsCostSelector);
    $("<h4/>", {
      text: "Costo materiali step 4"
    }).appendTo("#step4Costs");

    for (l in materialsCost["Step 4"]) {

      let p = Object.keys(materialsCost["Step 4"][l])[0];

      idC++;
      $("<tr/>", {
        id: idC
      }).appendTo("#step4Costs");

      $("<td/>", {
        text: p
      }).appendTo("#" + idC);
      $("<td/>", {
        text: materialsCost["Step 4"][l][p]
      }).appendTo("#" + idC);
      totalMaterialCost += parseFloat(materialsCost["Step 4"][l][p]);

    }
  }

  if(materialsCost["Step 5"]!== undefined && materialsCost["Step 5"].length !== 0) {

    $("<table/>", {
      id: 'step5Costs'

    }).appendTo(selectionsCostSelector);

    $("<h4/>", {
      text: "Costo materiali step 5"
    }).appendTo("#step5Costs");

    for (l in materialsCost["Step 5"]) {

      let p = Object.keys(materialsCost["Step 5"][l])[0];

      idC++;
      $("<tr/>", {
        id: idC
      }).appendTo("#step5Costs");

      $("<td/>", {
        text: p
      }).appendTo("#" + idC);
      $("<td/>", {
        text: materialsCost["Step 5"][l][p]
      }).appendTo("#" + idC);
      totalMaterialCost += parseFloat(materialsCost["Step 5"][l][p]);

    }
  }
}

function costProcessGenerator() {

  let idC = 1000;
  $("<table/>", {
    id: 'step2PCosts'

  }).appendTo(selectionsProcessSelector);



  $("<h4/>", {
    text: "Costo lavorazione step 2"
  }).appendTo("#step2PCosts");

  for(l in processCost["Step 2"]) {
   if(processCost["Step 2"]!== undefined) {
     let p = Object.keys(processCost["Step 2"][l])[0];

     idC++;
     $("<tr/>", {
       id: idC
     }).appendTo("#step2PCosts");

     $("<td/>", {
       text: p
     }).appendTo("#" + idC);
     $("<td/>", {
       text: processCost["Step 2"][l][p]
     }).appendTo("#" + idC);
     totalProcessCost += parseFloat(processCost["Step 2"][l][p]);
   }
  }



  if(processCost["Step 3"]!== undefined && processCost["Step 3"].length !== 0) {

    $("<table/>", {
      id: 'step3PCosts'

    }).appendTo(selectionsProcessSelector);

    $("<h4/>", {
      text: "Costo lavorazione step 3"
    }).appendTo("#step3PCosts");

    for (l in processCost["Step 3"]) {

      let p = Object.keys(processCost["Step 3"][l])[0];

      idC++;
      $("<tr/>", {
        id: idC
      }).appendTo("#step3PCosts");

      $("<td/>", {
        text: p
      }).appendTo("#" + idC);
      $("<td/>", {
        text: processCost["Step 3"][l][p]
      }).appendTo("#" + idC);

      totalProcessCost += parseFloat(processCost["Step 3"][l][p]);

    }
  }

  if(processCost["Step 4"]!== undefined && processCost["Step 4"].length !== 0) {

    $("<table/>", {
      id: 'step4PCosts'

    }).appendTo(selectionsProcessSelector);

    $("<h4/>", {
      text: "Costo lavorazione step 4"
    }).appendTo("#step4PCosts");

    for (l in processCost["Step 4"]) {

      let p = Object.keys(processCost["Step 4"][l])[0];

      idC++;
      $("<tr/>", {
        id: idC
      }).appendTo("#step4PCosts");

      $("<td/>", {
        text: p
      }).appendTo("#" + idC);
      $("<td/>", {
        text: processCost["Step 4"][l][p]
      }).appendTo("#" + idC);
      totalProcessCost += parseFloat(processCost["Step 4"][l][p]);

    }
  }


  if(processCost["Step 5"]!== undefined && processCost["Step 5"].length !== 0) {

    $("<table/>", {
      id: 'step5PCosts'

    }).appendTo(selectionsProcessSelector);

    $("<h4/>", {
      text: "Costo lavorazione step 5"
    }).appendTo("#step5PCosts");

    for (l in processCost["Step 5"]) {

      let p = Object.keys(processCost["Step 5"][l])[0];

      idC++;
      $("<tr/>", {
        id: idC
      }).appendTo("#step5PCosts");

      $("<td/>", {
        text: p
      }).appendTo("#" + idC);
      $("<td/>", {
        text: processCost["Step 5"][l][p]
      }).appendTo("#" + idC);

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
