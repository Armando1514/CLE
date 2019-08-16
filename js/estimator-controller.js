let step0Storage = {};
let step1Storage = {};
let step2Storage = {};
let step3Storage = {};
let step4Storage = {};
let step5Storage = {};

let imported = document.createElement("script");
imported.src = "js/estimator-costs.js";
document.getElementsByTagName("head")[0].appendChild(imported);


/* DEBUG THE ELEMENTS SELECTED
function printAll() {
    let text;
    for (x in step0Storage) {
        text += "Step 0 " + x + " : " + step0Storage[x] + "\n";
    }
    for (x in step1Storage) {
        text += "Step 1 " + x + " : " + step1Storage[x] + "\n";
    }
    for (x in step2Storage) {
        text += "Step 2 " + x + " : " + step2Storage[x] + "\n";
    }
    for (x in step3Storage) {
        text += "Step 3 " + x + " : " + step3Storage[x] + "\n";
    }
    for (x in step4Storage) {
        text += "Step 4 " + x + " : " + step4Storage[x] + "\n";
    }
    for (x in step5Storage) {
        text += "Step 5 " + x + " : " + step5Storage[x] + "\n";
    }


    alert(text);
}
*/
/*DEBUG THE MATERIALS AND PROCESSING COSTS*/

/*
function printAll() {
    let text;

  text += "Costo Materiali step 2\n";
        for(l in materialsCost["Step 2"]) {
          let p = Object.keys( materialsCost["Step 2"][l])[0];
          text += p + ": " + materialsCost["Step 2"][l][p]+ "\n";
        }
  text += "Costo Processi step 2\n";

  for(l in processCost["Step 2"]){
        let p = Object.keys( processCost["Step 2"][l])[0];
        text += p + ": " + processCost["Step 2"][l][p]+ "\n";
      }
  text += "Costo Materiali step 3\n";

  for(l in materialsCost["Step 3"]) {
    let p = Object.keys( materialsCost["Step 3"][l])[0];
    text += p + ": " + materialsCost["Step 3"][l][p]+ "\n";
  }
  text += "Costo Processi step 3\n";

  for(l in processCost["Step 3"]){
    let p = Object.keys( processCost["Step 3"][l])[0];
    text += p + ": " + processCost["Step 3"][l][p]+ "\n";
  }

  text += "Costo Materiali step 4\n";

  for(l in materialsCost["Step 4"]) {
    let p = Object.keys( materialsCost["Step 4"][l])[0];
    text += p + ": " + materialsCost["Step 4"][l][p]+ "\n";
  }

  text += "Costo Processi step 4\n";

  for(l in processCost["Step 4"]){
    let p = Object.keys( processCost["Step 4"][l])[0];
    text += p + ": " + processCost["Step 4"][l][p]+ "\n";
  }

  text += "Costo Materiali step 5\n";

  for(l in materialsCost["Step 5"]) {
    let p = Object.keys( materialsCost["Step 5"][l])[0];
    text += p + ": " + materialsCost["Step 5"][l][p]+ "\n";
  }
  text += "Costo Processi step 5\n";

  for(l in processCost["Step 5"]){
    let p = Object.keys( processCost["Step 5"][l])[0];
    text += p + ": " + processCost["Step 5"][l][p]+ "\n";
  }
    alert(text);
}
*/
createStep0();
createStep1();


function createStep5LuceDirettaAndRiflessa() {

    resetFieldsStep5();

    resetStep5LuceDiretta();

    let selector = ".step5";

    step5Storage["step"] = "Illuminazione";

    let field2 = "Extra1";
    let field3 = "Extra2";


    labelActivation(".labelStep5");

    createTitle(selector, "illuminazione", "Tipo illuminazione :");
    createCustomDiv(selector, "customDiv1IlluminazioneStep5");
    selector = '#customDiv1IlluminazioneStep5';

    let options = [];
    options.push("Modulo led IP67 bianco freddo 6500 k");
    options.push("Modulo led IP67 bianco naturale 4000 k");
    options.push("Modulo led IP67 bianco  caldo 3000 k");
    options.push("Modulo led IP67 colorato rosso");
    options.push("Modulo led IP67 colorato verde");
    options.push("Modulo led IP67 colorato blu");
    options.push("Modulo led IP67 colorato RGB");

    createOptionsSelectInputGeneratorOnChangeOptional(selector, "selectIlluminazioneStep5", "Illuminazione", options, consequenceEndIlluminazioneStep5);
  createDiv(".step5","alimentatoreDiv");
  checkboxInputGeneratorOnChange("#alimentatoreDiv", "alimentatore", field2, "Alimentatore", consequenceEndIlluminazioneStep5);
  createDiv(".step5","alimentatoreDiv1");

  checkboxInputGeneratorOnChange("#alimentatoreDiv1", "alimentatore1", field3, "Controller RGB", consequenceEndIlluminazioneStep5);

}




function consequenceEndIlluminazioneStep5() {


  if(this.name === "Extra1")
  {
    if($('input[value="'+this.value+'"]').prop("checked"))
      saveFieldsStep5Event(this.name, this.value)
    else
      saveFieldsStep5Event(this.name, null)
  }
  else if(this.name === "Extra2")
  {
    if($('input[value="'+this.value+'"]').prop("checked"))
      saveFieldsStep5Event(this.name, this.value)
    else
      saveFieldsStep5Event(this.name, null)
  }
  else
  saveFieldsStep5Event(this.name, this.value);

  calculationIllumination(null, step5Storage["Illuminazione"], step5Storage["Extra1"], step5Storage["Extra2"]);


}


function createStep4LuceDirettaAndRiflessa() {
    resetFieldsStep4();
    resetStep4LuceDiretta();


    let selector = ".step4";

    step4Storage["step"] = "Fondello";

    let field1 = "Fondello";
    let field2 = "Extra"

    labelActivation(".labelStep4");

    createTitle(selector, "categoriaFondello", "Categoria fondello :");
    createCustomDiv(selector, "customDivCategoriaFondelloStep4");
    selector = '#customDivCategoriaFondelloStep4';

    if (step1Storage["Tipologia lavorazione"] === "Luce diretta") {
        checkboxInputGeneratorOnChange(selector, "fondello1", field1, "PVC 10 MM Bianco", consequenceFondello);
        checkboxInputGeneratorOnChange(selector, "fondello2", field1, "Alluminio composito 3MM", consequenceFondello);
    } else {

        createCustomDiv(".step4", "divFondello");
        selector = "#divFondello";
        let options = [];

        options.push("Plexi glass Opale 3MM");
        options.push("Plexi glass Opale 5MM");
        options.push("Plexi glass Opale 8MM");
        options.push("Plexi glass Opale 10MM");
      options.push("Plexi glass Opale 15MM");
      options.push("Plexi glass Opale 20MM");


        createOptionsSelectInputGeneratorOnChange(selector, "selectFondelloLuceRiflessa", "Fondello", options, consequenceFondello)

        createTitle('.step4', "distanziatore", "Distanziatore fondello (OPZIONALE):");

        checkboxInputGeneratorOnChange('#distanziatore', "distanziatoreFondello", field2, "Distanziatore fondello", consequenceFondello);


    }

}

function consequenceFondello() {

    if (this.value === "Distanziatore fondello" || step1Storage["Tipologia lavorazione"] === "Luce diretta") {
        saveFieldsStep4EventOptional(this.name, this.value);

    } else {
        saveFieldsStep4Event(this.name, this.value);

    }
  calculateFondello(step4Storage["Fondello"], step4Storage["Extra"], step1Storage["Numero lettere"]);

}

function resetStep4LuceDiretta() {
    resetFieldsStep4();
    $('.labelStep4 ').removeClass('active');
    $(".step4").empty();

}

function resetStep5LuceDiretta() {
    resetFieldsStep5();
    $('.labelStep5 ').removeClass('active');
    $(".step5").empty();

}


function createStep2LuceDirettaAndRiflessa() {

    resetFieldsStep2();

    resetStep2LuceDirettaAndRiflessa();
    resetStep3LuceDirettaAndRiflessa();
    resetStep4LuceDiretta();
    resetStep5LuceDiretta();


    let selector = ".step2";

    let field1 = "Categoria costa laterale";

    labelActivation(".labelStep2");




    if (step1Storage['Tipologia lavorazione'] === 'Luce diretta') {
        step2Storage["step"] = "Costa laterale";

        createTitle(selector, "categoriaCostaLaterale", "Categoria costa laterale :");
        createCustomDiv(selector, "customDivCategoriaCostaLateraleStep2");
        selector = '#customDivCategoriaCostaLateraleStep2';

        radioButtonInputGeneratorOnChange(selector, 'flat', field1, "Flat", createConsequenceCategoriaCostaLateraleEvent);
        radioButtonInputGeneratorOnChange(selector, "flange", field1, "Flange", createConsequenceCategoriaCostaLateraleEvent);
        radioButtonInputGeneratorOnChange(selector, 'profiloEstroso', field1, "Profilo estruso", createConsequenceCategoriaCostaLateraleEvent);

    }
    if (step1Storage['Tipologia lavorazione'] === 'Luce riflessa')
        createConsequenceCategoriaCostaLateraleEvent();
}


function resetScritteMassello() {
    $("#titleScrittaMassello").remove();
    $("#divScrittaMassello").remove();
}

function createConsequenceCategoriaCostaLateraleEvent() {

    resetStep3LuceDirettaAndRiflessa();
    resetStep4LuceDiretta();
    resetStep5LuceDiretta();

    if (step1Storage['Tipologia lavorazione'] === 'Luce riflessa') {
        createMaterialeLuceRiflessa();
    } else {
        saveFieldsStep2Event(this.name, this.value);

        switch (this.value) {
            case 'Flat':
                createMaterialeCostaLateraleFlatStep2();
                break;
            case 'Flange':
                createMaterialeCostaLateraleFlangeStep2();
                break;

            case 'Profilo estruso':
                createMaterialeCostaLateraleProfiloEstrosoStep2();
                break;
        }
    }
}

function createMaterialeLuceRiflessa() {
    resetFieldsStep2();
    resetStep2LuceDirettaAndRiflessa();
    step2Storage["step"] = "Costa laterale";

    labelActivation(".labelStep2");

    let selector = ".step2";

    let field1 = "Materiale costa laterale";

    if ($('#materialeLettere').length === 0) {
        createTitle(selector, 'materialeLettere', 'Materiale costa laterale :');
        createCustomDiv(selector, "customDivMaterialeLettereStep2");
    }

    selector = '#customDivMaterialeLettereStep2';

    radioButtonInputGeneratorOnChange(selector, "letteraAlluminio", field1, "Alluminio", createConsequenceMaterialeLuceRiflessa);
    radioButtonInputGeneratorOnChange(selector, "letteraInox", field1, "Inox", createConsequenceMaterialeLuceRiflessa);

    createCustomDiv(".step2", "lettera2");

    selector = "#lettera2";

    radioButtonInputGeneratorOnChange(selector, "letteraOttone", field1, "Ottone", createConsequenceMaterialeLuceRiflessa);
    radioButtonInputGeneratorOnChange(selector, "letteraLamieraZincata", field1, "Lamiera zincata", createConsequenceMaterialeLuceRiflessa);


}

function createConsequenceMaterialeLuceRiflessa() {

    resetStep3LuceDirettaAndRiflessa();
  removeMisuraCostaLaterale();


    if ($('#misuraCostaLaterale').length === 0) {
        createTitle('.step2', "misuraCostaLaterale", "Profondità costa laterale :");
        createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
    } else {
        removeMisuraCostaLaterale();
        createTitle('.step2', "misuraCostaLaterale", "Profondità costa laterale :");
        createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
    }

    let options = [];

    switch (this.value) {
        case 'Alluminio':
        case 'Lamiera zincata': {
            options.push("25MM");
            options.push("40MM");
            options.push("60MM");
            options.push("80MM");
            options.push("100MM");
            options.push("150MM");
            options.push("200MM");
        }
            break;
        case 'Inox':
        case 'Ottone':
            options.push("25MM");
            options.push("40MM");
            options.push("60MM");
            options.push("80MM");
            break;

    }
    saveFieldsStep2Event(this.name, this.value);


    createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2', "selectMeasureCostaLateraleLuceRiflessa", "Profondità costa laterale", options, createConsequenceMisuraCostaLateraleLuceRiflessaEvent)
    calculateCostaLateraleLuceRiflessa(step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"],step2Storage["Colore verniciatura costa laterale"]);
    calculateFrontalinoLuceRiflessa(step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"]);

}

function createConsequenceMisuraCostaLateraleLuceRiflessaEvent() {

    let field4 = "Finitura costa laterale"
    let selector = '#customDivVerniciaturaCostaLateraleStep2';
    removeExtraFrontalino();


    if ($('#verniciaturaCostaLaterale').length === 0) {

        createTitle('.step2', "verniciaturaCostaLaterale", "Finitura : ");
        createCustomDiv('.step2', "customDivVerniciaturaCostaLateraleStep2");

    }
    saveFieldsStep2Event(this.name, this.value);

    $("#customDivVerniciaturaCostaLateraleStep2").empty();

    if (step2Storage['Materiale costa laterale'] === 'Alluminio') {

        radioButtonInputGeneratorOnChange(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent);
        radioButtonInputGeneratorOnChange(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaLuceRiflessaEvent);
    } else if (step2Storage['Materiale costa laterale'] === 'Inox') {

        $("#verniciaturaCostaLaterale").text("Finitura costa laterale: ");

        radioButtonInputGeneratorOnChange(selector, "lucida", field4, "Lucida", createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent);
        radioButtonInputGeneratorOnChange(selector, 'spazzolata', field4, "Spazzolata", createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent);

    } else if (step2Storage['Materiale costa laterale'] === "Ottone") {
        radioButtonInputGeneratorOnChange(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent);
        radioButtonInputGeneratorOnChange(selector, 'galvanico', field4, "Galvanico", createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent);

    } else {
        radioButtonInputGeneratorOnChange(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent);
        radioButtonInputGeneratorOnChange(selector, 'verniciata', field4, "Verniciata", createConsequenceVerniciaturaLuceRiflessaEvent);

    }
  calculateCostaLateraleLuceRiflessa(step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"],step2Storage["Colore verniciatura costa laterale"]);
  calculateFrontalinoLuceRiflessa(step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"]);
}


function createConsequenceVerniciaturaLuceRiflessaEvent() {


    saveFieldsStep2Event(this.name, this.value);

    let selector = ".step2";

    if ($('#coloreVerniciaturaCostaLateraleLuceRiflessa').length === 0) {
        createTitle(selector, 'coloreVerniciaturaCostaLateraleLuceRiflessa', 'Colore verniciatura :');
        createCustomDiv(selector, "customDivColoreCostaLateraleStep3LuceRiflessa");
    }
    selector = "#customDivColoreCostaLateraleStep3LuceRiflessa";

    let options = [];
    options.push("Bianco");
    options.push("Blu");
    options.push("Rosso");
    options.push("Nero");
    options.push("Giallo");
    options.push("Verde");

    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreCostaLateraleLuceRiflessa", "Colore verniciatura costa laterale", options, createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent)


}



function createConsequenceVerniciaturaLuceRiflessaColorSelectedEvent() {
    if (this.name !== "Colore verniciatura costa laterale") {
        $("#coloreVerniciaturaCostaLateraleLuceRiflessa").remove();
        $("#customDivColoreCostaLateraleStep3LuceRiflessa").remove();
      console.log("s" + this.name)

      delete step2Storage["Colore verniciatura costa laterale"];
    }
  saveFieldsStep2Event(this.name, this.value);
  calculateCostaLateraleLuceRiflessa(step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"],step2Storage["Colore verniciatura costa laterale"]);
  createStep4LuceDirettaAndRiflessa();
    createStep5LuceDirettaAndRiflessa();


}

function createMaterialeCostaLateraleProfiloEstrosoStep2() {
    removeMaterialeCostaLaterale();

    let field2 = "Materiale costa laterale";
    let field3 = "Tipologia profilo";

    step2Storage[field2] = "Alluminio";
    step2Storage[field3] = null;


    createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
    createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
    let selector = '#customDivMaterialeCostaLateraleStep2';

    radioButtonInputGeneratorOnChange(selector, 'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);


    createTitle('.step2', "tipologiaProfilo", "Tipologia profilo :");
    createCustomDiv('.step2', "tipologiaProfiloDivStep2");
    selector = '#tipologiaProfiloDivStep2';
    radioButtonInputGeneratorOnChange(selector, 'letterForm', field3, "Letter form", createConsequenceMaterialeCostaLateraleEvent);
    radioButtonInputGeneratorOnChange(selector, 'letterBox', field3, "Letter box", createConsequenceMaterialeCostaLateraleEvent);


    $("#alluminio").trigger("click");


}



function createMaterialeCostaLateraleFlangeStep2() {
    removeMaterialeCostaLaterale();

    let field2 = "Materiale costa laterale";

    step2Storage[field2] = "Alluminio";

    createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
    createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
    let selector = '#customDivMaterialeCostaLateraleStep2';

    radioButtonInputGeneratorOnChange(selector, 'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);



    $("#alluminio").trigger("click");


}

function removeMaterialeCostaLaterale() {
    $("#materialeCostaLaterale").remove();
    $("#bordaturaOutline").remove();
    $("#cornicePerimetrale").remove();
    $("#customDivBordaturaCostaLateraleStep2").remove();
    $("#bordaturaCostaLaterale").remove();
    $("#customDivMaterialeCostaLateraleStep2").remove();
    $("#letterForm").remove();
    $("#letterBox").remove();
    $("#tipologiaProfiloDivStep2").remove();
    $("#tipologiaProfilo").remove();
    removeMisuraCostaLaterale();
}

function createMaterialeCostaLateraleFlatStep2() {

    resetStep3LuceDirettaAndRiflessa();
    resetStep4LuceDiretta();
    resetStep5LuceDiretta();
    removeMaterialeCostaLaterale();

    let field2 = "Materiale costa laterale";





    createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
    createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
    let selector = '#customDivMaterialeCostaLateraleStep2';

    radioButtonInputGeneratorOnChange(selector, 'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);
    radioButtonInputGeneratorOnChange(selector, "inox", field2, "Inox", createConsequenceMaterialeCostaLateraleEvent);
    radioButtonInputGeneratorOnChange(selector, 'ottone', field2, "Ottone", createConsequenceMaterialeCostaLateraleEvent);





}


function createConsequenceMaterialeCostaLateraleEvent() {

    $("#coloreVerniciaturaCostaLaterale").remove();
    $("#customDivColoreCostaLateraleStep3").remove();

    resetStep3LuceDirettaAndRiflessa();
    resetStep4LuceDiretta();
    resetStep5LuceDiretta();
    removeExtraFrontalino();

    if ($('#misuraCostaLaterale').length === 0) {
        createTitle('.step2', "misuraCostaLaterale", "Profondità costa laterale :");
        createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
    } else {
        removeMisuraCostaLaterale();
        createTitle('.step2', "misuraCostaLaterale", "Profondità costa laterale :");
        createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
    }

    let options = [];


    if (this.name === "Tipologia profilo") {
        switch (this.value) {
            case 'Letter form':
                options.push("37MM");
                options.push("60MM");
              saveFieldsStep2Event(this.name, this.value);

                break;
            case 'Letter box':
                options.push("60MM");
                options.push("100MM");
              saveFieldsStep2Event(this.name, this.value);
                break;
        }
    } else {
        switch (this.value) {
            case 'Alluminio':
                if (step2Storage["Categoria costa laterale"] === 'Flange') {
                    options.push("60MM");
                    options.push("80MM");
                    options.push("100MM");
                    options.push("150MM");
                    options.push("200MM");
                } else {
                    options.push("25MM");
                    options.push("40MM");
                    options.push("60MM");
                    options.push("80MM");
                    options.push("100MM");
                    options.push("150MM");
                    options.push("200MM");
                }
                break;
            case 'Inox':
            case 'Ottone':
                options.push("25MM");
                options.push("40MM");
                options.push("60MM");
                options.push("80MM");
                break;

        }
        saveFieldsStep2Event(this.name, this.value);
    }

  delete step2Storage["Extra"];

  createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2', "selectMeasureCostaLaterale", "Profondità costa laterale", options, createConsequenceMisuraCostaLateraleEvent)
    if(step2Storage["Categoria costa laterale"] === "Flange") {


      createTitle('.step2', "bordaturaCostaLaterale", "Extra (OPZIONALE) :");
    createDiv('.step2', "customDivBordaturaCostaLateraleStep2");
    let selector = '#customDivBordaturaCostaLateraleStep2';

      checkboxInputGeneratorOnChange(selector, 'cornicePerimetrale', "Extra", "Cornice perimetrale", saveOptionalFieldsStep2Event);
}
    else if(step2Storage["Categoria costa laterale"] === "Flat")
    {


      createTitle('.step2', "bordaturaCostaLaterale", "Extra (OPZIONALE) :");
      createDiv('.step2', "customDivBordaturaCostaLateraleStep2");
      let selector = '#customDivBordaturaCostaLateraleStep2';

      checkboxInputGeneratorOnChange(selector, 'bordaturaOutline', "Extra", "Bordatura outline saldata su fronte", saveOptionalFieldsStep2Event);

    }
  calculateCostaLateraleLuceDiretta(step2Storage["Categoria costa laterale"], step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"], step2Storage["Colore verniciatura costa laterale"], step2Storage["Extra"]);

}



function resetStep2LuceDirettaAndRiflessa() {
    $(".step2").empty();


}




function createConsequenceVerniciaturaEvent() {

    saveFieldsStep2Event(this.name, this.value);

    let selector = ".step2";

    if ($('#coloreVerniciaturaCostaLaterale').length === 0) {
        createTitle(selector, 'coloreVerniciaturaCostaLaterale', 'Colore verniciatura :');
        createCustomDiv(selector, "customDivColoreCostaLateraleStep3");
    }
    selector = "#customDivColoreCostaLateraleStep3";

    let options = [];
    options.push("Bianco");
    options.push("Blu");
    options.push("Rosso");
    options.push("Nero");
    options.push("Giallo");
    options.push("Verde");

    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreCostaLaterale", "Colore verniciatura costa laterale", options, createConsequenceColorVerniciaturaCostaLateraleSelected)




}

function createConsequenceColorVerniciaturaCostaLateraleSelected() {

  console.log("MI23232AAAAA: +"+ step2Storage["Extra"]);

    if (this.name !== "Colore verniciatura costa laterale") {

        $("#coloreVerniciaturaCostaLaterale").remove();
        $("#customDivColoreCostaLateraleStep3").remove();
        delete step2Storage["Colore verniciatura costa laterale"];

    }

    saveFieldsStep2Event(this.name, this.value);

  calculateCostaLateraleLuceDiretta(step2Storage["Categoria costa laterale"], step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"], step2Storage["Colore verniciatura costa laterale"], step2Storage["Extra"]);

    createStep3LuceDiretta();

    createStep4LuceDirettaAndRiflessa();
    createStep5LuceDirettaAndRiflessa();


}

function createStep3LuceDiretta() {
    resetFieldsStep3();


    resetStep3LuceDirettaAndRiflessa();


    labelActivation(".labelStep3");


    let selector = ".step3";

    let field1 = "Materiale frontalino";


    createTitle(selector, 'materialeFrontalino', 'Materiale frontalino :');
    createCustomDiv(selector, "customDivMaterialeFrontalinoStep3");

    selector = '#customDivMaterialeFrontalinoStep3';



    if (step2Storage["Categoria costa laterale"] === "Profilo estruso") {


        radioButtonInputGeneratorOnChange(selector, "plexiGlassOpale", field1, "Plexi glass opale (3MM)", createConsequenceSpessoreFrontalinoEvent);
        radioButtonInputGeneratorOnChange(selector, 'plexiGlassColorato', field1, "Plexi glass colorato (3MM)", createConsequenceMaterialeFrontalinoEvent);

    } else if (step2Storage["Categoria costa laterale"] === 'Flange') {


        radioButtonInputGeneratorOnChange(selector, "plexiGlassOpale", field1, "Plexi glass opale (3MM)", createConsequenceMaterialeFrontalinoEvent);


    } else {


        radioButtonInputGeneratorOnChange(selector, "plexiGlassOpale", field1, "Plexi glass opale", createConsequenceMaterialeFrontalinoEvent);
        radioButtonInputGeneratorOnChange(selector, 'plexiGlassColorato', field1, "Plexi glass colorato (3MM)", createConsequenceMaterialeFrontalinoEvent);


    }


}


function createConsequenceMaterialeFrontalinoEvent() {
    resetFieldsStep3();
  step3Storage["step"] = "Frontalino";

    saveFieldsStep3Event(this.name, this.value);

    let selector = ".step3";
    let options = [];

    if (this.value === "Plexi glass opale") {
        $("#customDivColoreFrontalinoStep3").remove();
        $("#coloreFrontalino").remove();
        if ($('#spessoreFrontalino').length === 0) {
            createTitle(selector, 'spessoreFrontalino', 'Spessore frontalino :');
            createCustomDiv(selector, "customDivSpessoreFrontalinoStep3");
        }
        selector = "#customDivSpessoreFrontalinoStep3";


        options.push("3MM");
        options.push("5MM");
        options.push("8MM");
       options.push("10MM");
       options.push("15MM");
      options.push("20MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectSpessoreFrontalino", "Spessore frontalino", options, createConsequenceSpessoreFrontalinoEvent)
    } else {
        $("#customDivSpessoreFrontalinoStep3").remove();
        $("#spessoreFrontalino").remove();
        if ($('#coloreFrontalino').length === 0) {
            createTitle(selector, 'coloreFrontalino', 'colore frontalino :');
            createCustomDiv(selector, "customDivColoreFrontalinoStep3");
        }
        selector = "#customDivColoreFrontalinoStep3";


        options.push("Bianco");
        options.push("Blu");
        options.push("Rosso");
        options.push("Nero");
        options.push("Giallo");
        options.push("Verde");

        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreFrontalino", "Colore frontalino", options, createConsequenceSpessoreFrontalinoEvent)
    }


  calculateFrontalino(step3Storage["Materiale frontalino"], step3Storage["Spessore frontalino"]);

}


function resetStep3LuceDirettaAndRiflessa() {
    resetFieldsStep3();
    $('.step3').empty();
}




function createConsequenceSpessoreFrontalinoEvent() {

  saveFieldsStep3Event(this.name, this.value);



    createStep4LuceDirettaAndRiflessa();
    createStep5LuceDirettaAndRiflessa();
  calculateFrontalino(step3Storage["Materiale frontalino"], step3Storage["Spessore frontalino"]);

}

function removeMisuraCostaLaterale() {
    $("#misuraCostaLaterale").remove();
    $("#customDivMisuraCostaLateraleStep2").remove();
    removeVerniciaturaCostaLaterale();
}

function removeVerniciaturaCostaLaterale() {
    $("#verniciaturaCostaLaterale").remove();
    $("#coloreVerniciaturaCostaLateraleLuceRiflessa").remove();
    $("#customDivVerniciaturaCostaLateraleStep2").remove();
  $("#customDivColoreCostaLateraleStep3LuceRiflessa").remove();

}
function removeExtraFrontalino()
{
    $("#bordaturaOutline").remove();
    $("#cornicePerimetrale").remove();
    $("#customDivBordaturaCostaLateraleStep2").remove();
    $("#bordaturaCostaLaterale").remove();
}

function createConsequenceMisuraCostaLateraleEvent() {

    saveFieldsStep2Event(this.name, this.value);



    let field4 = "Finitura costa laterale"
    let selector = '#customDivVerniciaturaCostaLateraleStep2';




    if ($('#verniciaturaCostaLaterale').length === 0) {

        createTitle('.step2', "verniciaturaCostaLaterale", "Finitura costa laterale: ");
        createCustomDiv('.step2', "customDivVerniciaturaCostaLateraleStep2");

    }
    $("#customDivVerniciaturaCostaLateraleStep2").empty();

    if (step2Storage['Materiale costa laterale'] === 'Alluminio') {

        if (step2Storage['Tipologia profilo'] === 'Letter form') {

          radioButtonInputGeneratorOnChange(selector, 'bianca', field4, "Bianca", createConsequenceColorVerniciaturaCostaLateraleSelected);
          radioButtonInputGeneratorOnChange(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent)

        } else {
            radioButtonInputGeneratorOnChange(selector, 'grezzo', field4, "Grezzo", createConsequenceColorVerniciaturaCostaLateraleSelected);
            radioButtonInputGeneratorOnChange(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);
        }


    } else if (step2Storage['Materiale costa laterale'] === 'Inox') {

        $("#verniciaturaCostaLaterale").text("Finitura costa laterale: ");

        radioButtonInputGeneratorOnChange(selector, "lucida", field4, "Lucida", createConsequenceColorVerniciaturaCostaLateraleSelected);
        radioButtonInputGeneratorOnChange(selector, 'spazzolata', field4, "Spazzolata", createConsequenceColorVerniciaturaCostaLateraleSelected);

    } else if (step2Storage['Materiale costa laterale'] === 'Ottone') {
        radioButtonInputGeneratorOnChange(selector, 'grezzo', field4, "Grezzo", createConsequenceColorVerniciaturaCostaLateraleSelected);
        radioButtonInputGeneratorOnChange(selector, 'galvanico', field4, "Galvanico", createConsequenceColorVerniciaturaCostaLateraleSelected);

    } else {
        radioButtonInputGeneratorOnChange(selector, 'grezzo', field4, "Grezzo", createConsequenceColorVerniciaturaCostaLateraleSelected);
        radioButtonInputGeneratorOnChange(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);
        radioButtonInputGeneratorOnChange(selector, 'galvanico', field4, "Galvanico", createConsequenceColorVerniciaturaCostaLateraleSelected);
    }

  console.log("MIAAAAA: +"+ step2Storage["Extra"]);

  calculateCostaLateraleLuceDiretta(step2Storage["Categoria costa laterale"], step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"], step2Storage["Colore verniciatura costa laterale"], step2Storage["Extra"]);

}

function createOptionsSelectInputGeneratorOnChangeOptional(selector, id, name, options, functionOnChange) {

    if ($('#' + id).length === 0) {
        $("<select/>", {
            class: 'custom-select',
            id: id,
            name: name,
            change: functionOnChange,
        }).appendTo(selector);

        $("<option/>", {
            text: "Elemento non selezionato",
            selected: true

        }).appendTo('#' + id);

        options.forEach(value => {

            $("<option/>", {
                value: value,
                text: value
            }).appendTo('#' + id);

        });
    }
}

function setLabelMasselloLivello1() {

    $(".labelStep2").text("Step 2, materiale massello");
    $(".labelStep3").text("");
    $(".labelStep4").text("");
    $(".labelStep5").text("");
}

function setLabelMasselloLivello2() {

    $(".labelStep2").text("Step 2, materiale massello livello posteriore");
    $(".labelStep3").text("Step 3, materiale massello livello anteriore");
    $(".labelStep4").text("");
    $(".labelStep5").text("");
}

function setLabelMasselloLivello2Retroilluminato() {

    $(".labelStep2").text("Step 2, materiale massello livello posteriore");
    $(".labelStep3").text("Step 3, materiale massello livello anteriore");
    $(".labelStep4").text("step 4, illuminazione");
    $(".labelStep5").text("");
}


function setLabelLuceRiflessa() {

    $(".labelStep2").text("Step 2, costa laterale");
    $(".labelStep3").text("");
    $(".labelStep4").text("Step 3, fondello");
    $(".labelStep5").text("Step 4, illuminazione (OPZIONALE)");

}


function setLabelLuceDiretta() {

    $(".labelStep2").text("Step 2, costa laterale");
    $(".labelStep3").text("Step 3, frontalino");
    $(".labelStep4").text("Step 4, fondello (OPZIONALE)");
    $(".labelStep5").text("Step 5, illuminazione (OPZIONALE)");

}

function createOptionsSelectInputGeneratorOnChange(selector, id, name, options, functionOnChange) {

    if ($('#' + id).length === 0) {
        $("<select/>", {
            class: 'custom-select',
            id: id,
            name: name,
            change: functionOnChange,
            required: true
        }).appendTo(selector);

        $("<option/>", {
            text: "Nessun valore selezionato",
            disabled: true,
            selected: true

        }).appendTo('#' + id);

        options.forEach(value => {

            $("<option/>", {
                value: value,
                text: value
            }).appendTo('#' + id);

        });
    }
}




function checkboxInputGeneratorOnChange(selector, id, name, value, functionOnChange) {

    $("<input/>", {
        type: 'checkbox',
        name: name,
        value: value,
        id: id,
        change: functionOnChange,
        required: true
    }).appendTo(selector);

    $("<label/>", {
        for: id,
        text: value
    }).insertAfter('#' + id);

}


function createStep0() {

    step0Storage["Step"] = "Informazioni cliente";

    let selector = ".step0";
    let field1 = "Ragione sociale/ Nominativo";
    let field2 = "P.Iva";
    let field3 = "Nome e cognome";
    let field4 = "Email";
    let field5 = "Riferimento lavoro";

    labelActivation(".labelStep0");
    textInputGeneratorOnChange(selector, field1, field1, saveFieldsStep0Event);
    textInputGeneratorOnChange(selector, field2, field2, saveFieldsStep0Event);
    textInputGeneratorOnChange(selector, field3, field3, saveFieldsStep0Event);
    emailInputGeneratorOnChange(selector, field4, field4, saveFieldsStep0Event);
    dateInputGenerator(selector);
    textInputGeneratorOnChange(selector, field5, field5, saveFieldsStep0Event);

}


function resetStep0() {
    let field1 = "Ragione sociale/ Nominativo";
    let field2 = "P.Iva";
    let field3 = "Nome e cognome";
    let field4 = "Email";
    let field5 = "Riferimento lavoro";


    resetInputFields(field1);
    resetInputFields(field2);
    resetInputFields(field3);
    resetInputFields(field4);
    resetInputFields(field5);
    resetFieldsStep0();

}

function resetStep1() {
    let field1 = "Dicitura scritta";
    let field2 = "Tipologia di font";
    let field3 = "Tipologia lavorazione";

    $('#charactersList').remove();

    resetInputFields(field1);
    resetInputRadioButtonFields(field2)
    resetInputRadioButtonFields(field3)

    resetFieldsStep1();

}

function createStep1() {


    let selector = ".step1";

    let field1 = "Lavorazione";


    createTitle(selector, "LavorazioneTitle", "Lavorazione :");
    createCustomDiv(selector, "customDivLavorazioneStep1");

    selector = '#customDivLavorazioneStep1';
    radioButtonInputGeneratorOnChange(selector, 'lettereSingoleIndipendenti', field1, "Lettere singole indipendenti", consequenceLettereSingoleIndipendenti);
    radioButtonInputGeneratorOnChange(selector, "elementoSagomato", field1, "Elemento sagomato", consequenceElementoSagomato);


}

function resetLavorazioneStep1() {
    $('input[name="Base"]').remove();
    $('input[name="Altezza"]').remove();
    $('input[name="Perimetro"]').remove();
    $('#tipologiaLetteraScatolataTitle').remove();
    $('#customDivTipologiaLetteraScatolataStep1').remove();
    $('#tipologiaDiFontTitle').remove();
    $('#customDivTipologiaDiFontStep1').remove();
    $('#dicituraScrittaTitle').remove();
    $("#customDicituraScrittaStep1").remove();
    $('input[name="Dicitura scritta"]').remove();
    $('#charactersList').remove();
    $('#labelStringNumber').remove();
    $('#lettersNumberCountDiv').remove();
    $('#eachLetterDiv').remove();
}

function consequenceElementoSagomato() {
    resetFieldsStep1();

    resetLavorazioneStep1();

    step1Storage[this.name] = this.value;

    let selector = ".step1";

    let field1 = "Base";
    let field2 = "Altezza";
    let field3 = "Perimetro";
    let field4 = "Tipologia lavorazione";




    textInputGeneratorOnChange(selector, field1, field1, calculateElementoSagomato);
    textInputGeneratorOnChange(selector, field2, field2, calculateElementoSagomato);
    textInputGeneratorOnChange(selector, field3, field3, calculateElementoSagomato);

    labelActivation(".labelStep1");


    createTitle(".step1", "tipologiaLetteraScatolataTitle", "Tipologia lavorazione :");
    createCustomDiv(".step1", "customDivTipologiaLetteraScatolataStep1");
    selector = '#customDivTipologiaLetteraScatolataStep1';
    radioButtonInputGeneratorOnChange(selector, 'luceDiretta', field4, "Luce diretta", consequenceStep1);
    radioButtonInputGeneratorOnChange(selector, "luceRiflessa", field4, "Luce riflessa", consequenceStep1);
    radioButtonInputGeneratorOnChange(selector, 'masselloSpento', field4, "Massello spento", consequenceStep1);

}

function calculateElementoSagomato()
{
    saveFieldsStep1(this.name, this.value);

    calculateHypervisorParametersElementoSagomato(step1Storage["Base"], step1Storage["Altezza"], step1Storage["Perimetro"]);

}

function resetAllTheStepsLabel() {
    $(".labelStep2").text("");
    $(".labelStep3").text("");
    $(".labelStep4").text("");
    $(".labelStep5").text("");
}

function consequenceLettereSingoleIndipendenti() {
    resetLavorazioneStep1();
    resetFieldsStep1();

    step1Storage["step"] = "Informazioni lavorazione";

    step1Storage[this.name] = this.value;

    let selector = ".step1";

    let field1 = "Dicitura scritta";
    let field2 = "Tipologia di font";

    createTitle(selector, "tipologiaDiFontTitle", "Tipologia di font :");
    createCustomDiv(selector, "customDivTipologiaDiFontStep1");
    selector = '#customDivTipologiaDiFontStep1';

    radioButtonInputGeneratorOnChange(selector, 'stampatelloSemplice', field2, "Stampatello semplice", consequenceLetterChoose);
    radioButtonInputGeneratorOnChange(selector, "elaboratoComposto", field2, "Elaborato composto", consequenceLetterChoose);
    radioButtonInputGeneratorOnChange(selector, 'corsivo', field2, "Corsivo", consequenceLetterChoose);

    createTitle('.step1', "dicituraScrittaTitle", "Frase: ");
    createCustomDiv('.step1', "customDicituraScrittaStep1");
    textInputGeneratorOnKeyUp("#customDicituraScrittaStep1", field1, field1, stringCountInputGenerator);
    createCustomDiv('.step1', "lettersNumberCountDiv");
    createCustomDiv('.step1', "eachLetterDiv");

    labelActivation(".labelStep1");

}


function consequenceLetterChoose()
{
    saveFieldsStep1(this.name, this.value);
    calculatePerimeterRelatedToEachCharacter();

    let field3 = "Tipologia lavorazione";
    if($("#tipologiaLetteraScatolataTitle").length === 0) {
        createTitle(".step1", "tipologiaLetteraScatolataTitle", "Tipologia lavorazione :");
        createCustomDiv(".step1", "customDivTipologiaLetteraScatolataStep1");
        let selector = '#customDivTipologiaLetteraScatolataStep1';
        radioButtonInputGeneratorOnChange(selector, 'luceDiretta', field3, "Luce diretta", consequenceStep1);
        radioButtonInputGeneratorOnChange(selector, "luceRiflessa", field3, "Luce riflessa", consequenceStep1);
        radioButtonInputGeneratorOnChange(selector, 'masselloSpento', field3, "Massello spento", consequenceStep1);
    }
}


function deactiveAllTheLabels() {
    $(".labelStep2").removeClass("active");
    $(".labelStep3").removeClass("active");
    $(".labelStep4").removeClass("active");
    $(".labelStep5").removeClass("active");
}

function consequenceStep1() {
    $(".step2").empty();

    deactiveAllTheLabels();
    resetMasselloFieldsStep1();

    resetFieldsStep2();
    resetFieldsStep3();
    resetFieldsStep4();
    resetFieldsStep5();

    step1Storage[this.name] = this.value;



    if (this.value === "Massello spento") {
      removeAllTheCostAndProcessFields();

        resetStep2LuceDirettaAndRiflessa();
        resetStep3LuceDirettaAndRiflessa();
        resetStep4LuceDiretta();
        resetStep5LuceDiretta();
        resetAllTheStepsLabel();
        masselloStep2();


    } else if (this.value === "Luce riflessa") {
        setLabelLuceRiflessa();
      removeAllTheCostAndProcessFields();
      createStep2LuceDirettaAndRiflessa();
        resetScritteMassello();
    } else {
      removeAllTheCostAndProcessFields();
      setLabelLuceDiretta();
        createStep2LuceDirettaAndRiflessa();
        resetScritteMassello();

        /* here is possible to calculate step 1 for LUCE DIRETTA */


    }

}

function removeMasselloStep2() {

    $('#titleScrittaMassello').remove();
    $('#divScrittaMassello').remove();

}

function removeMasselloTipiStep2() {
    $('#titleTipoMassello').remove();
    $('#divTipoMassello').remove();

}

function removeMasselloStep3Livello2() {
    $(".step3").empty();
}

function masselloStep2() {


    removeMasselloStep2();
    removeMasselloTipiStep2();
    removeStep1Masello();
    removeMasselloStep3Livello2();
    removeConsequenceStep1ColoreMasello2Livelli();
    removeConsequenceStep1ColoreMasello()

    resetFieldsStep2();
    resetFieldsStep3();
    resetFieldsStep4();
    resetFieldsStep5();

    let selector = ".step1";
    let field0 = "Scritta massello";


    createTitle(selector, "titleScrittaMassello", "Scritta massello: ");
    createCustomDiv(selector, "divScrittaMassello");
    selector = "#divScrittaMassello";

    radioButtonInputGeneratorOnChange(selector, 'sempliceSpenta', field0, "Scritta semplice 1 livello", consequenceStepScrittaMasello);
    radioButtonInputGeneratorOnChange(selector, 'dueLivelli', field0, "Scritta doppia accoppiata 2 livelli", consequenceStepScrittaMasello);
    radioButtonInputGeneratorOnChange(selector, 'retroilluminazione', field0, "Scritta doppia accoppiata 2 livelli con retroilluminazione a led", consequenceStepScrittaMasello);


}

function consequenceStepScrittaMasello() {


    removeMasselloTipiStep2();
    removeSpessoreMassello();
    removeStep1Masello();

    removeMasselloStep3Livello2();
    removeConsequenceStep1ColoreMasello2Livelli();
    removeConsequenceStep1ColoreMasello();
    removeMasselloIlluminazione();
    removeConsequenceTipoIlluminazione();


    resetFieldsStep2();
    resetFieldsStep3();
    resetFieldsStep4();
    resetFieldsStep5();


    let field1 = "Tipo materiale";

    let selector = ".step2";
    labelActivation(".labelStep2");

    saveFieldsStep1(this.name, this.value);

    createTitle(selector, "titleTipoMassello", "Tipo materiale: ");
    createCustomDiv(selector, "divTipoMassello");

    selector = "#divTipoMassello";



    if (this.value === 'Scritta semplice 1 livello') {

        step2Storage["step"] = "Massello";

        setLabelMasselloLivello1();
        radioButtonInputGeneratorOnChange(selector, 'plexiGlass', field1, "Plexi glass", consequenceStep1Masello);
        radioButtonInputGeneratorOnChange(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
        radioButtonInputGeneratorOnChange(selector, 'alluminioComposto', field1, "Alluminio composito", consequenceStep1Masello);

    } else if (this.value === 'Scritta doppia accoppiata 2 livelli') {

        step2Storage["step"] = "Massello posteriore";
        step3Storage["step"] = "Massello Anteriore";

        setLabelMasselloLivello2();
        radioButtonInputGeneratorOnChange(selector, 'plexiGlass', field1, "Plexi glass", consequenceStep1Masello);
        radioButtonInputGeneratorOnChange(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
        radioButtonInputGeneratorOnChange(selector, 'alluminioComposto', field1, "Alluminio composito", consequenceStep1Masello);
        consequenceStepScrittaMasello2Livelli();

    } else {

        step2Storage["step"] = "Massello posteriore";
        step3Storage["step"] = "Massello Anteriore";
        step4Storage["step"] = "Illuminazione";

        setLabelMasselloLivello2Retroilluminato();
        radioButtonInputGeneratorOnChange(selector, 'plexiGlass', field1, "Plexi glass", consequenceStep1Masello);
        radioButtonInputGeneratorOnChange(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
        radioButtonInputGeneratorOnChange(selector, 'alluminioComposto', field1, "Alluminio composito", consequenceStep1Masello);
        consequenceStepScrittaMasello2LivelliRetroilluminato();
    }
}

function consequenceStepScrittaMasello2LivelliRetroilluminato() {

    let field1 = "Tipo materiale fondello";

    let selector = ".step3";

    labelActivation(".labelStep3");

    createTitle(selector, "titleTipoMasselloR", "Tipo materiale Fondello: ");

    createCustomDiv(selector, "divTipoMasselloR");

    selector = "#divTipoMasselloR";

    radioButtonInputGeneratorOnChange(selector, 'plexiGlassR', field1, "Plexi glass", consequenceStep1MaselloRetroilluminato);

    $("#plexiGlassR").trigger("click");
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);


}

function consequenceStep1MaselloRetroilluminato() {

    removeStep1Masello();
    let field2 = "Colore";
    saveFieldsStep3Event(this.name, this.value);

    let selector = ".step3";

    createTitle(selector, "titleColoreMasselloR", "Colore: ");
    createCustomDiv(selector, "divColoreMasselloR");

    selector = "#divColoreMasselloR";

    radioButtonInputGeneratorOnChange(selector, 'trasparenteR', field2, "Trasparente", consequenceStep1ColoreMaselloRetroilluminato);
    radioButtonInputGeneratorOnChange(selector, 'opaleR', field2, "Opale", consequenceStep1ColoreMaselloRetroilluminato);
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}

function resetConsequenceStep1ColoreMaselloRetroilluminato() {
    $("#titleSpessoreMasselloR").remove();
    $("#divSpessoreMasselloR").remove();
}

function consequenceStep1ColoreMaselloRetroilluminato() {

    saveFieldsStep3Event(this.name, this.value);
    resetConsequenceStep1ColoreMaselloRetroilluminato();
    let selector = ".step3";

    createTitle(selector, "titleSpessoreMasselloR", "Spessore: ");
    createCustomDiv(selector, "divSpessoreMasselloR");

    selector = "#divSpessoreMasselloR";

    let options = [];


    if (step2Storage['Colore'] === 'Trasparente') {
        options.push("10MM");
        options.push("15MM");
        options.push("20MM");
    } else {
        options.push("10MM");
        options.push("15MM");
        options.push("20MM");
        options.push("30MM");

    }
    createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMasselloR", "Spessore", options, createConsequenceMisuraMasello);
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}

function createConsequenceMisuraMasello() {

    removeMasselloIlluminazione();
    removeConsequenceTipoIlluminazione();


    saveFieldsStep3Event(this.name, this.value);

    let selector = ".step4";

    let field1 = "Tipo illuminazione";

    labelActivation(".labelStep4");

    createTitle(selector, "tipoIlluminazione", "Tipo illuminazione :");
    createCustomDiv(selector, "customDivTipoIlluminazione");
    selector = '#customDivTipoIlluminazione';

    radioButtonInputGeneratorOnChange(selector, 'stripLedIp20', field1, "Strip led IP20 (per interno)", createConsequenceTipoIlluminazione);
    radioButtonInputGeneratorOnChange(selector, 'stripLedIp67', field1, "Strip led IP67 (per esterno, waterproof)", createConsequenceTipoIlluminazione);
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}

function createConsequenceTipoIlluminazione() {

    saveFieldsStep4Event(this.name, this.value);

    removeConsequenceTipoIlluminazione();

    let selector = ".step4";

    let field2 = "Extra1"
    let field3 = "Extra2"

    let options = [];

    labelActivation(".labelStep4");

    createTitle(selector, "illuminazione", "Tipo illuminazione :");
    createCustomDiv(selector, "customDiv1IlluminazioneStep5");
    selector = '#customDiv1IlluminazioneStep5';

    options.push("Bianco freddo 6500 k");
    options.push("Bianco naturale 4000 k");
    options.push("Bianco  3000 k");
    options.push("Colorato rosso");
    options.push("Colorato verde");
    options.push("Colorato blu");
    options.push("Colorato RGB");

    createOptionsSelectInputGeneratorOnChange(selector, "selectIlluminazioneMassello", "Illuminazione", options, consequenceEndIlluminazione);
createDiv(".step4","alimentatoreDiv");
    checkboxInputGeneratorOnChange("#alimentatoreDiv", "alimentatore", field2, "Alimentatore", consequenceEndIlluminazione);
  createDiv(".step4","alimentatoreDiv1");

  checkboxInputGeneratorOnChange("#alimentatoreDiv1", "alimentatore1", field3, "Controller RGB", consequenceEndIlluminazione);

}


function consequenceEndIlluminazione() {
  if(this.name === "Extra1")
  {
    if($('input[value="'+this.value+'"]').prop("checked"))
      saveFieldsStep4Event(this.name, this.value)
    else
      saveFieldsStep4Event(this.name, null)
  }
  else if(this.name === "Extra2")
  {
    if($('input[value="'+this.value+'"]').prop("checked"))
      saveFieldsStep4Event(this.name, this.value)
    else
      saveFieldsStep4Event(this.name, null)
  }
  else
  saveFieldsStep4Event(this.name, this.value);

  calculationIllumination(step4Storage["Tipo illuminazione"], step4Storage["Illuminazione"], step4Storage["Extra1"], step4Storage["Extra2"]);

}



function removeMasselloIlluminazione() {
    $('#stripLedIp20').remove();
    $('#stripLedIp67').remove();
    $('#alimentatore').remove();
    $('#customDivTipoIlluminazione').remove();
    $('#tipoIlluminazione').remove();

}

function removeConsequenceTipoIlluminazione() {
    $('#illuminazione').remove();
    $('#customDiv1IlluminazioneStep5').remove();
    $('#alimentatoreTitle').remove();

  $('#alimentatoreDiv').remove();
  $("#alimentatoreDiv1").remove();

    $('label[for=alimentatore]').remove();
  $('label[for=alimentatore1]').remove();

}


function removeStep1Masello() {
    $('#titleColoreMassello').remove();
    $('#divColoreMassello').remove();

}

function removeStep1Masello2Livelli() {
    $('#titleColoreMassello2').remove();
    $('#divColoreMassello2').remove();

}

function removeConsequenceStep1ColoreMasello2Livelli() {
    $('#titleColoreMassello2').remove();
    $('#divColoreMassello2').remove();
    $('#divColore2Massello2').remove();
    $('#titleColore2Massello2').remove();


}

function removeSpessoreMassello2Livelli() {
    $('#titleSpessoreMassello2').remove();
    $('#divSpessoreMassello2').remove();
    $('#divSpessoreMassello2').remove();
}



function consequenceStep1Masello2Livelli() {
    removeStep1Masello2Livelli();
    removeConsequenceStep1ColoreMasello2Livelli();
    removeSpessoreMassello2Livelli();



    saveFieldsStep3Event(this.name, this.value);

    let selector = ".step3";

    createTitle(selector, "titleColoreMassello2", "Colore: ");
    createCustomDiv(selector, "divColoreMassello2");

    selector = "#divColoreMassello2";



    let options = [];

    if (this.value === 'Plexi glass') {


        options.push("Trasparente");
        options.push("Opale");
        options.push("Nero");
        options.push("Rosso");
        options.push("Blu");
        options.push("Giallo");


        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello2", "Colore", options, consequenceStep1ColoreMasello2Livelli)

    } else if (this.value === 'PVC') {
        options.push("Bianco");
        options.push("Nero");
        options.push("Rosso");
        options.push("Blu");
        options.push("Giallo");
        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello2", "Colore", options, consequenceStep1ColoreMasello2Livelli)


    } else {

        options.push("Bianco");
        options.push("Nero");
        options.push("Rosso");
        options.push("Blu");
        options.push("Giallo");
        options.push("Argento spazzolato");
        options.push("Argento specchio");
        options.push("Oro specchio");
        options.push("Oro spazzolato");
        options.push("Rame spazzolato");
        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello2", "Colore", options, consequenceStep1ColoreMasello2Livelli)

    }
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}

function consequenceStep1ColoreMasello2Livelli() {

    removeSpessoreMassello2Livelli();


    saveFieldsStep3Event(this.name, this.value);

    let selector = ".step3";

    createTitle(selector, "titleSpessoreMassello2", "Spessore: ");
    createCustomDiv(selector, "divSpessoreMassello2");

    selector = "#divSpessoreMassello2";

    let options = [];

    let consequence;

    consequence = createConsequenceMisuraCostaLateraleEvent2;


    if (step3Storage['Tipo materiale fondello'] === 'Plexi glass') {
        if (this.value === "Trasparente") {
            options.push("3MM");
            options.push("5MM");
            options.push("8MM");
            options.push("10MM");
            options.push("15MM");
            options.push("20MM");

            createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", "Spessore", options, consequence)

        } else if (this.value === "Opale") {
            options.push("3MM");
            options.push("5MM");
            options.push("10MM");
            options.push("15MM");
            options.push("20MM");

            createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", "Spessore", options, consequence)

        } else {
            options.push("3MM");
            options.push("5MM");
            options.push("10MM");

            createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", "Spessore", options, consequence)



        }

    } else if (step3Storage['Tipo materiale fondello'] === 'PVC') {
        if (this.value === "Bianco") {
            options.push("3MM");
            options.push("5MM");
            options.push("10MM");
            options.push("19MM");
        } else {
            options.push("3MM");
            options.push("5MM");
        }

        createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", "Spessore", options, consequence)

    } else {
        radioButtonInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", "Spessore", "3MM", consequence)

        $("#selectMeasureSpessoreMassello2").trigger("click");
    }
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}

function consequenceStep1Masello() {



    removeStep1Masello();
    removeConsequenceStep1ColoreMasello();
    removeSpessoreMassello();


    saveFieldsStep2Event(this.name, this.value);

    let selector = ".step2";

    createTitle(selector, "titleColoreMassello", "Colore: ");
    createCustomDiv(selector, "divColoreMassello");

    selector = "#divColoreMassello";



    let options = [];

    if (this.value === 'Plexi glass') {

        options.push("Trasparente");
        options.push("Opale");
        options.push("Nero");
        options.push("Rosso");
        options.push("Blu");
        options.push("Giallo");

        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello", "Colore", options, consequenceStep1ColoreMasello)

    } else if (this.value === 'PVC') {
        options.push("Bianco");
        options.push("Nero");
        options.push("Rosso");
        options.push("Blu");
        options.push("Giallo");
        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello", "Colore", options, consequenceStep1ColoreMasello)


    } else {

        options.push("Bianco");
        options.push("Nero");
        options.push("Rosso");
        options.push("Blu");
        options.push("Giallo");
        options.push("Argento spazzolato");
        options.push("Argento specchio");
        options.push("Oro specchio");
        options.push("Oro spazzolato");
        options.push("Rame spazzolato");
        createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello", "Colore", options, consequenceStep1ColoreMasello)

    }

  calculateMasselloCost(1, step1Storage["Scritta massello"], step2Storage["Tipo materiale"], step2Storage["Colore"], step2Storage["Spessore"]);
}

function removeConsequenceStep1ColoreMasello() {
    $('#titleColoreMassello').remove();
    $('#divColoreMassello').remove();
    $('#divColore2Massello').remove();
    $('#titleColore2Massello').remove();


}

function removeSpessoreMassello() {
    $('#titleSpessoreMassello').remove();
    $('#divSpessoreMassello').remove();
}

function createConsequenceMisuraCostaLateraleEvent2() {
    saveFieldsStep3Event(this.name, this.value);

    if (this.name !== "Colore") {
        $("#titleColore2Massello2").remove();
        $("divColore2Massello2").remove();
    }
  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}


function createConsequenceMisuraCostaLateraleMasselloEvent() {
    saveFieldsStep2Event(this.name, this.value);

    if (this.name !== "Colore") {
        $("#titleColore2Massello2").remove();
        $("divColore2Massello2").remove();
    }
  calculateMasselloCost(1, step1Storage["Scritta massello"], step2Storage["Tipo materiale"], step2Storage["Colore"], step2Storage["Spessore"]);

}

function consequenceStep1ColoreMasello() {

    removeSpessoreMassello();


    saveFieldsStep2Event(this.name, this.value);
    let selector = ".step2";

    createTitle(selector, "titleSpessoreMassello", "Spessore: ");
    createCustomDiv(selector, "divSpessoreMassello");

    selector = "#divSpessoreMassello";

    let options = [];

    let consequence;

    consequence = createConsequenceMisuraCostaLateraleMasselloEvent;


    if (step2Storage['Tipo materiale'] === 'Plexi glass') {
        if (this.value === "Trasparente") {
            options.push("3MM");
            options.push("5MM");
            options.push("8MM");
            options.push("10MM");
            options.push("15MM");
            options.push("20MM");

            createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", "Spessore", options, consequence)

        } else if (this.value === "Opale") {
            options.push("3MM");
            options.push("5MM");
            options.push("10MM");
            options.push("15MM");
            options.push("20MM");

            createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", "Spessore", options, consequence)

        } else {
            options.push("3MM");
            options.push("5MM");
            options.push("10MM");

            createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", "Spessore", options, consequence)

        }

    } else if (step2Storage['Tipo materiale'] === 'PVC') {
        if (this.value === "Bianco") {
            options.push("3MM");
            options.push("5MM");
            options.push("10MM");
            options.push("19MM");
        } else {
            options.push("3MM");
            options.push("5MM");
        }

        createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", "Spessore", options, consequence)

    } else {
        radioButtonInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", "Spessore", "3MM", consequence)

        $("#selectMeasureSpessoreMassello").trigger("click");
    }

  calculateMasselloCost(1, step1Storage["Scritta massello"], step2Storage["Tipo materiale"], step2Storage["Colore"], step2Storage["Spessore"]);

}


function removeScrittaMasello2Livelli() {
    $("#titleTipoMassello2").remove();

    $("#divTipoMassello2").remove();


}


function consequenceStepScrittaMasello2Livelli() {

    let field1 = "Tipo materiale fondello";

    let selector = ".step3";

    labelActivation(".labelStep3");

    removeScrittaMasello2Livelli();

    labelActivation(selector);


    createTitle(selector, "titleTipoMassello2", "Tipo materiale fondello: ");
    createCustomDiv(selector, "divTipoMassello2");

    selector = "#divTipoMassello2";


    radioButtonInputGeneratorOnChange(selector, 'plexiGlass2', field1, "Plexi glass", consequenceStep1Masello2Livelli);
    radioButtonInputGeneratorOnChange(selector, 'pVC2', field1, "PVC", consequenceStep1Masello2Livelli);
    radioButtonInputGeneratorOnChange(selector, 'alluminioComposto2', field1, "Alluminio composito", consequenceStep1Masello2Livelli);

  calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);

}

function createDiv(selector, id) {
    $("<div/>", {
        id: id,
    }).appendTo(selector);
}

function createCustomDiv(selector, id) {
    $("<div/>", {
        id: id,
        class: 'custom-options'
    }).appendTo(selector);
}

function createTitle(selector, id, text) {
    $("<label/>", {
        id: id,
        text: text,
        css: {
            "display": "flex",
            "padding-top": "5%",
            "padding-bottom": "3%"

        }
    }).appendTo(selector);
}

function labelActivation(selector) {

    $(selector).addClass("active");
}


function radioButtonInputGeneratorOnChange(selector, id, name, value, functionOnChange) {
    $("<input/>", {
        type: 'radio',
        name: name,
        value: value,
        id: id,
        change: functionOnChange,
        required: true
    }).appendTo(selector);

    $("<label/>", {
        for: id,
        text: value
    }).insertAfter('#' + id);

}



function textInputGeneratorOnChange(selector, name, placeHolder, functionOnChange) {

    $("<input/>", {

        class: 'form-control',
        type: 'text',
        name: name,
        placeHolder: placeHolder,
        change: functionOnChange,
        required: true
    }).appendTo(selector);

}

function textInputGeneratorOnKeyUp(selector, name, placeHolder, functionOnKeyUp) {

    $("<input/>", {

        class: 'form-control',
        type: 'text',
        name: name,
        placeHolder: placeHolder,
        required: true,
        keyup: functionOnKeyUp,
        change: saveFieldsStep1Event
    }).appendTo(selector);

}

function emailInputGeneratorOnChange(selector, name, placeHolder, functionOnChange) {

    $("<input/>", {

        class: 'form-control',
        type: 'email',
        name: name,
        placeHolder: placeHolder,
        change: functionOnChange,
        required: true
    }).appendTo(selector);

}

function dateInputGenerator(selector) {

    let currentDate = getDate();

    $("<input/>", {

        class: 'form-control',
        name: 'dateElement',
        value: currentDate,
        readonly: true
    }).appendTo(selector);

    step0Storage['dateElement'] = currentDate;

}


function getDate() {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}


function resetInputFields(name) {
    $('input[name="' + name + '"]').val("");

}

function resetInputRadioButtonFields(name) {
    $('input[name="' + name + '"]').prop('checked', false);

}

function stringCountInputGenerator() {
    let selector = 'input[name="Dicitura scritta"]';
    let letterString = $(selector).val();
    let elementCreated = $('#lettersCount');
    let count = letterCount(letterString);

    saveFieldsStep1("Numero lettere", count);

    if (elementCreated.length) {
        elementCreated.val(count);

    } else {
        $("<label/>", {
            text: 'Numero lettere',
            id: 'labelStringNumber'
        }).appendTo("#lettersNumberCountDiv");

        $("<input/>", {

            class: 'form-control',
            id: 'lettersCount',
            name: 'countElement',
            value: count,
            readonly: true
        }).appendTo("#labelStringNumber");

    }
    generateInputForEachLetter(letterString);

}

function resetFieldRelatedToEachCharacter() {
    for (x in step1Storage) {
        if (x.includes("Carattere")) {
            delete step1Storage[x];
        }

    }
}


function generateInputForEachLetter(letterString) {

    letterString = spaceRemoval(letterString);
    let size = letterString.length;
    let i = 0;

    if ($('#charactersList').length !== 0) {
        resetFieldRelatedToEachCharacter();
        $('#charactersList').remove();

    }


    while (i < size) {
        let c = letterString.charAt(i);

        $("<div/>", {
            id: 'charactersList',
        }).appendTo("#eachLetterDiv");

        $("<label/>", {
            html: 'Misura altezza lettera: ' + '<strong>' + c + '</strong>',
            css: {
                'width': '50%'
            },
            id: 'character' + c + 'number' + i,
            class: '.letters'
        }).appendTo("#charactersList");

        $("<input/>", {

            class: 'form-control',
            css: {
                'width': '80%'
            },
            placeholder: 'cm',
            change: calculatePerimeterRelatedToEachCharacter,
            id: 'inputCharacter' + c + 'Number' + i,
            name: 'Carattere : ' + c + ', in posizione : ' + i
        }).appendTo('#character' + c + 'number' + i);

        i++;
    }
}



function spaceRemoval(letterString) {
    return letterString.replace(/\s+/g, '');
}

function letterCount(letterString) {

    return spaceRemoval(letterString).length;

}

function saveFieldsStep0Event() {
    step0Storage[this.name] = this.value;

}

function resetFieldsStep0() {

    for (let property in step0Storage) {

        delete step0Storage[property];

    }

}


function saveFieldsStep1Event() {

    step1Storage[this.name] = this.value;
}

function resetFieldsStep1() {

    for (let property in step1Storage) {

        delete step1Storage[property];

    }

}

function resetMasselloFieldsStep1() {
    delete step1Storage["Scritta massello"];

}

function saveFieldsStep2Event(name, value) {

    step2Storage[name] = value;

}

function saveOptionalFieldsStep2Event() {

    if (this.checked) {

        if ($('input[value="' + step2Storage[this.name] + '"]') != null)
            $('input[value="' + step2Storage[this.name] + '"]').prop('checked', false);
        step2Storage[this.name] = this.value;

    } else {
        step2Storage[this.name] = null;
    }

  calculateCostaLateraleLuceDiretta(step2Storage["Categoria costa laterale"], step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"], step2Storage["Colore verniciatura costa laterale"], step2Storage["Extra"]);

}


function resetFieldsStep2() {

    for (let property in step2Storage) {

        delete step2Storage[property];

    }

}



function saveFieldsStep3Event(name, value) {
    step3Storage[name] = value;
}

function resetFieldsStep3() {

    for (let property in step3Storage) {

        delete step3Storage[property];

    }

}


function saveFieldsStep4EventOptional(name, value) {


    if ($('input[value="' + step4Storage[name] + '"]').prop("checked")) {

        $('input[value="' + step4Storage[name] + '"]').prop('checked', false);

        step4Storage[name] = value;

    } else if (step4Storage[name] === value) {
        step4Storage[name] = null;

    } else {
        step4Storage[name] = value;
    }

}

function saveFieldsStep4Event(name, value) {


    if (value === "Elemento non selezionato") {
        step4Storage[name] = null;

    } else {
        step4Storage[name] = value;

    }

}


function resetFieldsStep4() {

    for (let property in step4Storage) {

        delete step4Storage[property];

    }

}

function saveFieldsStep1(name, value) {
    step1Storage[name] = value;
}


function saveFieldsStep5Event(name, value) {


    if (value === "Elemento non selezionato") {
        step5Storage[name] = null;

    } else {
        step5Storage[name] = value;

    }

}

function resetFieldsStep5() {

    for (let property in step5Storage) {

        delete step5Storage[property];

    }

}



    function calculatePerimeterRelatedToEachCharacter() {

        if(this.value != undefined)
            saveFieldsStep1(this.name, this.value);

        resetPerimeterAndAreaLetter();

        for (x in step1Storage) {
            if (x.includes("Carattere")) {
                /* calculate here the perimeter for each letter */
                calculateHypervisorParametersLetters(step1Storage[x], step1Storage["Tipologia di font"]);
            }

        }
        calculateAll();
    }

function calculateAll()
{
  removeAllTheCostAndProcessFields();
if(step1Storage["Tipologia lavorazione"]!== "Massello spento") {
  if (step1Storage["Tipologia lavorazione"] === "Luce diretta")
    calculateCostaLateraleLuceDiretta(step2Storage["Categoria costa laterale"], step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"], step2Storage["Colore verniciatura costa laterale"], step2Storage["Extra"]);
  else if (step1Storage["Tipologia lavorazione"] === "Luce riflessa")
    calculateCostaLateraleLuceRiflessa(step2Storage["Materiale costa laterale"], step2Storage["Profondità costa laterale"], step2Storage["Finitura costa laterale"], step2Storage["Colore verniciatura costa laterale"]);

  calculateFrontalinoLuceRiflessa(step3Storage["Materiale frontalino"], step3Storage["Spessore frontalino"]);
  calculateFondello(step4Storage["Fondello"], step4Storage["Extra"], step1Storage["Numero lettere"]);

  if (step5Storage["Illuminazione"] !== undefined)
    calculationIllumination(null, step5Storage["Illuminazione"], step5Storage["Extra1"], step5Storage["Extra2"]);
  else
    calculationIllumination(step4Storage["Tipo illuminazione"], step4Storage["Illuminazione"], step4Storage["Extra1"], step4Storage["Extra2"]);
}
else {

  if (step1Storage["Scritta massello"] === "Scritta semplice 1 livello")
    calculateMasselloCost(1, step1Storage["Scritta massello"], step2Storage["Tipo materiale"], step2Storage["Colore"], step2Storage["Spessore"]);
  else {
    calculateMasselloCost(1, step1Storage["Scritta massello"], step2Storage["Tipo materiale"], step2Storage["Colore"], step2Storage["Spessore"]);
    calculateMasselloCost(2, step1Storage["Scritta massello"], step3Storage["Tipo materiale fondello"], step3Storage["Colore"], step3Storage["Spessore"]);
  }

}
}

