let step0Storage = {};
let step1Storage = {};
let step2Storage = {};
let step3Storage = {};
let step4Storage = {};
let step5Storage = {};



createStep0();
createStep1();


function createStep5LuceDiretta() {

  resetFieldsStep5();

  resetStep5LuceDiretta();

  let selector = ".step5";

  let field1 = "Illuminazione";
  let field2 = "alimentatore"

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
  options.push("Modulo led IP67 colorato RGB (Con controller RGB)");

  createOptionsSelectInputGeneratorOnChangeOptional(selector, "selectIlluminazioneStep5", options, consequenceEndIlluminazioneStep5);
}




function consequenceEndIlluminazioneStep5()
{

  saveFieldsStep5Event(this.name,this.value);


}


function createStep4LuceDiretta() {
  resetFieldsStep4();
  resetStep4LuceDiretta();

  let selector = ".step4";

  let field1 = "fondello";
  let field2 = "Distanziatore fondello"

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

    saveFieldsStep2Event(this.name, this.value);


    createOptionsSelectInputGeneratorOnChangeOptional(selector, "selectFondelloLuceRiflessa", options, consequenceFondello)

    createTitle('.step4', "distanziatore", "Distanziatore fondello (OPZIONALE):");

    checkboxInputGeneratorOnChange('#distanziatore', "distanziatoreFondello", field2, "Distanziatore fondello", consequenceFondello);


  }

}

function consequenceFondello() {

  if(this.value === "Distanziatore fondello")
  {
    saveFieldsStep4EventOptional(this.name, this.value);

  }
  else
  {
    saveFieldsStep4Event(this.name, this.value);

  }
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

    createTitle(selector, "categoriaCostaLaterale", "Categoria costa laterale :");
    createCustomDiv(selector, "customDivCategoriaCostaLateraleStep2");
    selector = '#customDivCategoriaCostaLateraleStep2';

    radioButtonInputGeneratorOnChage(selector, 'flat', field1, "Flat", createConsequenceCategoriaCostaLateraleEvent);
    radioButtonInputGeneratorOnChage(selector, "flange", field1, "Flange", createConsequenceCategoriaCostaLateraleEvent);
    radioButtonInputGeneratorOnChage(selector, 'profiloEstroso', field1, "Profilo estruso", createConsequenceCategoriaCostaLateraleEvent);
  }
  if (step1Storage['Tipologia lavorazione'] === 'Luce riflessa')
    createConsequenceCategoriaCostaLateraleEvent();
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

  labelActivation(".labelStep2");

  let selector = ".step2";

  let field1 = "Materiale lettera";

  if ($('#materialeLettere').length === 0) {
    createTitle(selector, 'materialeLettere', 'Materiale lettera :');
    createCustomDiv(selector, "customDivMaterialeLettereStep2");
  }

  selector = '#customDivMaterialeLettereStep2';

  radioButtonInputGeneratorOnChage(selector, "letteraAlluminio", field1, "Alluminio", createConsequenceMaterialeLuceRiflessa);
  radioButtonInputGeneratorOnChage(selector, "letteraInox", field1, "Inox", createConsequenceMaterialeLuceRiflessa);

  createCustomDiv(".step2", "lettera2");

  selector = "#lettera2";

  radioButtonInputGeneratorOnChage(selector, "letteraOttone", field1, "Ottone", createConsequenceMaterialeLuceRiflessa);
  radioButtonInputGeneratorOnChage(selector, "letteraLamieraZincata", field1, "Lamiera zincata", createConsequenceMaterialeLuceRiflessa);


}

function createConsequenceMaterialeLuceRiflessa() {

  resetStep3LuceDirettaAndRiflessa();


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
      case 'Lamiera zincata':
      {
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


  createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2', "selectMeasureCostaLateraleLuceRiflessa", options, createConsequenceMisuraCostaLateraleLuceRiflessaEvent)

}

function createConsequenceMisuraCostaLateraleLuceRiflessaEvent() {

  let field4 = "Finitura "
  let selector = '#customDivVerniciaturaCostaLateraleStep2';



  if ($('#verniciaturaCostaLaterale').length === 0) {

    createTitle('.step2', "verniciaturaCostaLaterale", "Finitura : ");
    createCustomDiv('.step2', "customDivVerniciaturaCostaLateraleStep2");

  }
  saveFieldsStep2Event(this.name, this.value);

  $("#customDivVerniciaturaCostaLateraleStep2").empty();

  if (step2Storage['Materiale lettera'] === 'Alluminio') {
    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaLuceRiflessaEvent);
    radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaLuceRiflessaEvent);
  } else if (step2Storage['Materiale lettera'] === 'Inox') {

    $("#verniciaturaCostaLaterale").text("Finitura costa laterale: ");

    radioButtonInputGeneratorOnChage(selector, "lucida", field4, "Lucida", createConsequenceVerniciaturaLuceRiflessaEvent);
    radioButtonInputGeneratorOnChage(selector, 'spazzolata', field4, "Spazzolata", createConsequenceVerniciaturaLuceRiflessaEvent);

  } else if (step2Storage['Materiale lettera'] === "Ottone") {
    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaLuceRiflessaEvent);
    radioButtonInputGeneratorOnChage(selector, 'galvanico', field4, "Galvanico", createConsequenceVerniciaturaLuceRiflessaEvent);

  } else {
    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaLuceRiflessaEvent);
    radioButtonInputGeneratorOnChage(selector, 'verniciata', field4, "Verniciata", createConsequenceVerniciaturaLuceRiflessaEvent);

  }

}




function createConsequenceVerniciaturaLuceRiflessaEvent() {
  createStep4LuceDiretta();
  createStep5LuceDiretta();

  saveFieldsStep2Event(this.name, this.value);

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

  radioButtonInputGeneratorOnChage(selector, 'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "Tipologia profilo :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  radioButtonInputGeneratorOnChage(selector, 'letterForm', field3, "Letter form", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector, 'letterBox', field3, "Letter box", createConsequenceMaterialeCostaLateraleEvent);


  $("#alluminio").trigger("click");


}



function createMaterialeCostaLateraleFlangeStep2() {
  removeMaterialeCostaLaterale();

  let field2 = "Materiale costa laterale";
  let field3 = "Cornice perimetrale";

  step2Storage[field2] = "Alluminio";
  step2Storage[field3] = null;

  createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
  createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
  let selector = '#customDivMaterialeCostaLateraleStep2';

  radioButtonInputGeneratorOnChage(selector, 'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "cornice perimetrale (OPZIONALE) :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  checkboxInputGeneratorOnChange(selector, 'bordaturaOutline', field3, "cornice perimetrale", saveOptionalFieldsStep2Event);
  $("#alluminio").trigger("click");


}

function removeMaterialeCostaLaterale() {
  $("#materialeCostaLaterale").remove();
  $("#bordaturaOutline").remove();
  $("#customDivBordaturaCostaLateraleStep2").remove();
  $("#bordaturaCostaLaterale").remove();
  $("#customDivMaterialeCostaLateraleStep2").remove();
  $("#letterForm").remove();
  $("#letterBox").remove();
  removeMisuraCostaLaterale();
}

function createMaterialeCostaLateraleFlatStep2() {

  resetStep3LuceDirettaAndRiflessa();
  resetStep4LuceDiretta();
  resetStep5LuceDiretta();
  removeMaterialeCostaLaterale();

  let field2 = "Materiale costa laterale";
  let field3 = "Bordatura outline saldata su fronte";

  step2Storage[field3] = null;


  createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
  createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
  let selector = '#customDivMaterialeCostaLateraleStep2';

  radioButtonInputGeneratorOnChage(selector, 'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector, "inox", field2, "Inox", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector, 'ottone', field2, "Ottone", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "Bordatura outline saldata su fronte costa laterale (OPZIONALE) :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  checkboxInputGeneratorOnChange(selector, 'bordaturaOutline', field3, "Bordatura outline saldata su fronte", saveOptionalFieldsStep2Event);


}

function createConsequenceMaterialeCostaLateraleEvent() {
  resetStep3LuceDirettaAndRiflessa();
  resetStep4LuceDiretta();
  resetStep5LuceDiretta();


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
        saveOptionalFieldsStep2EventLetterFormLetterBox(this.name, this.value);

        break;
      case 'Letter box':
        options.push("60MM");
        options.push("100MM");
        saveOptionalFieldsStep2EventLetterFormLetterBox(this.name, this.value);
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

  createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2', "selectMeasureCostaLaterale", options, createConsequenceMisuraCostaLateraleEvent)

}

function resetStep2LuceDirettaAndRiflessa() {
  $(".step2").empty();


}


function createConsequenceVerniciaturaEvent() {
  saveFieldsStep2Event(this.name, this.value);


  createStep3LuceDirettaAndRiflessa();

}


function createStep3LuceDirettaAndRiflessa() {
  resetFieldsStep3();
  resetStep3LuceDirettaAndRiflessa();

  labelActivation(".labelStep3");

  let selector = ".step3";

  let field1 = "Materiale frontalino";


  createTitle(selector, 'materialeFrontalino', 'Materiale frontalino :');
  createCustomDiv(selector, "customDivMaterialeFrontalinoStep3");

  selector = '#customDivMaterialeFrontalinoStep3';



  if (step2Storage["Categoria costa laterale"] === "Profilo estruso") {
    radioButtonInputGeneratorOnChage(selector, "plexiGlassOpale", field1, "Plexi glass opale (3MM)", createConsequenceSpessoreFrontalinoEvent);
    radioButtonInputGeneratorOnChage(selector, 'plexiGlassColorato', field1, "Plexi glass colorato (3MM)", createConsequenceSpessoreFrontalinoEvent);

  } else if (step2Storage["Categoria costa laterale"] === 'Flange') {
    radioButtonInputGeneratorOnChage(selector, "plexiGlassOpale", field1, "Plexi glass opale (3MM)", createConsequenceSpessoreFrontalinoEvent);

  } else {
    radioButtonInputGeneratorOnChage(selector, "plexiGlassOpale", field1, "Plexi glass opale", createConsequenceMaterialeFrontalinoEvent);
    radioButtonInputGeneratorOnChage(selector, 'plexiGlassColorato', field1, "Plexi glass colorato (3MM)", createConsequenceSpessoreFrontalinoEvent);

  }


}

function resetStep3LuceDirettaAndRiflessa() {
  resetFieldsStep3();
  $('.step3').empty();
}




function createConsequenceMaterialeFrontalinoEvent() {
  resetFieldsStep3();

  saveFieldsStep3Event(this.name, this.value);

  let selector = ".step3";



  if ($('#spessoreFrontalino').length === 0) {
    createTitle(selector, 'spessoreFrontalino', 'Spessore frontalino :');
    createCustomDiv(selector, "customDivSpessoreFrontalinoStep3");
  }
  selector = "#customDivSpessoreFrontalinoStep3";

  let options = [];
  options.push("3MM");
  options.push("5MM");
  options.push("8MM");
  createOptionsSelectInputGeneratorOnChange(selector, "selectSpessoreFrontalino", options, createConsequenceSpessoreFrontalinoEvent)



}

function createConsequenceSpessoreFrontalinoEvent() {
  saveFieldsStep3Event(this.name, this.value);
  createStep4LuceDiretta();
  createStep5LuceDiretta();

}

function removeMisuraCostaLaterale() {
  $("#misuraCostaLaterale").remove();
  $("#customDivMisuraCostaLateraleStep2").remove();
  removeVerniciaturaCostaLaterale();
}

function removeVerniciaturaCostaLaterale() {
  $("#verniciaturaCostaLaterale").remove();
  $("#customDivVerniciaturaCostaLateraleStep2").remove();
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

      radioButtonInputGeneratorOnChage(selector, 'bianca', field4, "Bianca", createConsequenceVerniciaturaEvent);

      radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);

    } else {
      radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
      radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);
    }


  } else if (step2Storage['Materiale costa laterale'] === 'Inox') {

    $("#verniciaturaCostaLaterale").text("Finitura costa laterale: ");

    radioButtonInputGeneratorOnChage(selector, "lucida", field4, "Lucida", createConsequenceVerniciaturaEvent);
    radioButtonInputGeneratorOnChage(selector, 'spazzolata', field4, "Spazzolata", createConsequenceVerniciaturaEvent);

  } else if (step2Storage['Materiale costa laterale'] === 'Ottone') {
    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
    radioButtonInputGeneratorOnChage(selector, 'galvanico', field4, "Galvanico", createConsequenceVerniciaturaEvent);

  } else {
    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
    radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);
    radioButtonInputGeneratorOnChage(selector, 'galvanico', field4, "Galvanico", createConsequenceVerniciaturaEvent);
  }



}

function createOptionsSelectInputGeneratorOnChangeOptional(selector, id, options, functionOnChange) {

  if ($('#' + id).length === 0) {
    $("<select/>", {
      class: 'custom-select',
      id: id,
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



function createOptionsSelectInputGeneratorOnChange(selector, id, options, functionOnChange) {

  if ($('#' + id).length === 0) {
    $("<select/>", {
      class: 'custom-select',
      id: id,
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
    radioButtonInputGeneratorOnChage(selector, 'lettereSingoleIndipendenti', field1, "Lettere singole indipendenti", consequenceLettereSingoleIndipendenti);
    radioButtonInputGeneratorOnChage(selector, "elementoSagomato", field1, "Elemento sagomato", consequenceElementoSagomato);


}

function resetLavorazioneStep1()
{
  $('input[name="Base"]').remove();
  $('input[name="Altezza"]').remove();
  $('input[name="Perimetro"]').remove();
  $('#tipologiaLetteraScatolataTitle').remove();
  $('#customDivTipologiaLetteraScatolataStep1').remove();
  $('#tipologiaDiFontTitle').remove();
  $('#customDivTipologiaDiFontStep1').remove();
  $('#DicituraScrittaTitle').remove();
  $('input[name="Dicitura scritta"]').remove();
  $('#charactersList').remove();
  $('#labelStringNumber').remove();
}

function consequenceElementoSagomato()
{
  resetLavorazioneStep1();

  step1Storage[this.name] = this.value;

  let selector = ".step1";

  let field1 = "Base";
  let field2 = "Altezza";
  let field3 = "Perimetro";
  let field4 = "Tipologia lavorazione";




  textInputGeneratorOnChange(selector, field1, field1, saveFieldsStep0Event);
  textInputGeneratorOnChange(selector, field2, field2, saveFieldsStep0Event);
  textInputGeneratorOnChange(selector, field3, field3, saveFieldsStep0Event);

  labelActivation(".labelStep1");


  createTitle(".step1", "tipologiaLetteraScatolataTitle", "Tipologia lavorazione :");
  createCustomDiv(".step1", "customDivTipologiaLetteraScatolataStep1");
  selector = '#customDivTipologiaLetteraScatolataStep1';
  radioButtonInputGeneratorOnChage(selector, 'luceDiretta', field4, "Luce diretta", consequenceStep1);
  radioButtonInputGeneratorOnChage(selector, "luceRiflessa", field4, "Luce riflessa", consequenceStep1);
  radioButtonInputGeneratorOnChage(selector, 'masselloSpento', field4, "Massello spento", consequenceStep1);

}


function consequenceLettereSingoleIndipendenti()
{
  resetLavorazioneStep1();

  step1Storage[this.name] = this.value;

  let selector = ".step1";

  let field1 = "Dicitura scritta";
  let field2 = "Tipologia di font";
  createTitle(selector, "DicituraScrittaTitle", "Dicitura scritta :");
  textInputGeneratorOnKeyUp(selector, field1, field1, stringCountInputGenerator);



  createTitle(selector, "tipologiaDiFontTitle", "Tipologia di font :");
  createCustomDiv(selector, "customDivTipologiaDiFontStep1");
  selector = '#customDivTipologiaDiFontStep1';
  radioButtonInputGeneratorOnChage(selector, 'stampatelloSemplice', field2, "Stampatello semplice", saveFieldsStep1Event);
  radioButtonInputGeneratorOnChage(selector, "elaboratoComposto", field2, "Elaborato composto", saveFieldsStep1Event);
  radioButtonInputGeneratorOnChage(selector, 'corsivo', field2, "Corsivo", saveFieldsStep1Event);

  let field3 = "Tipologia lavorazione";




  labelActivation(".labelStep1");





  createTitle(".step1", "tipologiaLetteraScatolataTitle", "Tipologia lavorazione :");
  createCustomDiv(".step1", "customDivTipologiaLetteraScatolataStep1");
  selector = '#customDivTipologiaLetteraScatolataStep1';
  radioButtonInputGeneratorOnChage(selector, 'luceDiretta', field3, "Luce diretta", consequenceStep1);
  radioButtonInputGeneratorOnChage(selector, "luceRiflessa", field3, "Luce riflessa", consequenceStep1);
  radioButtonInputGeneratorOnChage(selector, 'masselloSpento', field3, "Massello spento", consequenceStep1);

}




function consequenceStep1() {
  $(".step2").empty();

  step1Storage[this.name] = this.value;
  if (this.value === "Massello spento") {
    resetFieldsStep2();
    resetStep2LuceDirettaAndRiflessa();
    resetStep3LuceDirettaAndRiflessa();
    resetStep4LuceDiretta();
    resetStep5LuceDiretta();
    masselloStep2();

  } else
    createStep2LuceDirettaAndRiflessa();

}

function removeMasselloStep2() {

  $('#titleScrittaMassello').remove();
  $('#divScrittaMassello').remove();

}

function removeMasselloTipiStep2() {
  $('#titleTipoMassello').remove();
  $('#divTipoMassello').remove();

}
function removeMasselloStep3Livello2()
{
  $(".step3").empty();
}

function masselloStep2() {
  removeMasselloStep2();
  removeMasselloTipiStep2();
  removeStep1Masello();
  removeMasselloStep3Livello2();
  removeConsequenceStep1ColoreMasello2Livelli();
  removeConsequenceStep1ColoreMasello();
  resetFieldsStep2();

  let selector = ".step2";
  let field0 = "Scritta Massello";


  createTitle(selector, "titleScrittaMassello", "Scritta massello: ");
  createCustomDiv(selector, "divScrittaMassello");
  selector = "#divScrittaMassello";

  radioButtonInputGeneratorOnChage(selector, 'sempliceSpenta', field0, "Scritta semplice 1 livello", consequenceStepScrittaMasello);
  radioButtonInputGeneratorOnChage(selector, 'dueLivelli', field0, "Scritta doppia accoppiata 2 livelli", consequenceStepScrittaMasello);
  radioButtonInputGeneratorOnChage(selector, 'retroilluminazione', field0, "Scritta doppia accoppiata 2 livelli con retroilluminazione a led", consequenceStepScrittaMasello);


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

  let field1 = "Tipo materiale";

  let selector = ".step2";

  saveFieldsStep2Event(this.name, this.value);


  createTitle(selector, "titleTipoMassello", "Tipo materiale: ");
  createCustomDiv(selector, "divTipoMassello");

  selector = "#divTipoMassello";

  if (this.value === 'Scritta semplice 1 livello') {
    radioButtonInputGeneratorOnChage(selector, 'plexiGlass', field1, "Plexi glass", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'alluminioComposto', field1, "Alluminio composito", consequenceStep1Masello);
  } else if (this.value === 'Scritta doppia accoppiata 2 livelli') {
    radioButtonInputGeneratorOnChage(selector, 'plexiGlass', field1, "Plexi glass", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'alluminioComposto', field1, "Alluminio composito", consequenceStep1Masello);
    consequenceStepScrittaMasello2Livelli();
  } else {
    radioButtonInputGeneratorOnChage(selector, 'plexiGlass', field1, "Plexi glass", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'alluminioComposto', field1, "Alluminio composito", consequenceStep1Masello);
    consequenceStepScrittaMasello2LivelliRetroilluminato();
  }
}
function consequenceStepScrittaMasello2LivelliRetroilluminato()
{
  let field1 = "Tipo materiale fondello";

  let selector =".step3";

  createTitle(selector, "titleTipoMasselloR", "Tipo materiale Fondello: ");

  createCustomDiv(selector, "divTipoMasselloR");

  selector = "#divTipoMasselloR";

  radioButtonInputGeneratorOnChage(selector, 'plexiGlassR', field1, "Plexi glass", consequenceStep1MaselloRetroilluminato);
  $("#plexiGlassR").trigger("click");
}

function consequenceStep1MaselloRetroilluminato() {
  removeStep1Masello();
  let field2 = "Colore";
  saveFieldsStep2Event(this.name, this.value);

  let selector = ".step3";

  createTitle(selector, "titleColoreMasselloR", "Colore: ");
  createCustomDiv(selector, "divColoreMasselloR");

  selector = "#divColoreMasselloR";

  radioButtonInputGeneratorOnChage(selector, 'trasparenteR', field2, "Trasparente", consequenceStep1ColoreMaselloRetroilluminato);
  radioButtonInputGeneratorOnChage(selector, 'opaleR', field2, "Opale", consequenceStep1ColoreMaselloRetroilluminato);

}

function resetConsequenceStep1ColoreMaselloRetroilluminato()  {
  $("#titleSpessoreMasselloR").remove();
  $("#divSpessoreMasselloR").remove();
}

function consequenceStep1ColoreMaselloRetroilluminato() {

  saveFieldsStep2Event(this.name, this.value);
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
  }
  else
  {
    options.push("10MM");
    options.push("15MM");
    options.push("20MM");
    options.push("30MM");

  }
  createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMasselloR", options, createConsequenceMisuraMasello);

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

  radioButtonInputGeneratorOnChage(selector, 'stripLedIp20', field1, "Strip led IP20 (per interno)", createConsequenceTipoIlluminazione);
  radioButtonInputGeneratorOnChage(selector, 'stripLedIp67', field1, "Strip led IP67 (per esterno, waterproof)", createConsequenceTipoIlluminazione);


}

function createConsequenceTipoIlluminazione()
{
  removeConsequenceTipoIlluminazione();
  let selector = ".step4";

  let field2  = "Alimentatore"

  saveFieldsStep3Event(this.name, this.value);


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
  options.push("Colorato RGB (Con controller RGB)");

  createOptionsSelectInputGeneratorOnChange(selector, "selectIlluminazioneMassello", options, saveFieldsStep3Event);

  checkboxInputGeneratorOnChange(".step4", "alimentatore", field2, "Alimentatore per illuminazione", consequenceEndIlluminazione);
}


function consequenceEndIlluminazione()
{

    saveFieldsStep4Event(this.name,this.value);


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
  $('#alimentatore').remove();
  $('label[for=alimentatore]').remove();
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
function removeSpessoreMassello2Livelli()
{
  $('#titleSpessoreMassello2').remove();
  $('#divSpessoreMassello2').remove();
  $('#divSpessoreMassello2').remove();
}



function consequenceStep1Masello2Livelli()
{
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
    options.push("Colorato");


    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello2", options, consequenceStep1ColoreMasello2Livelli)

  } else if (this.value === 'PVC') {
    options.push("Bianco");
    options.push("Nero");
    options.push("Rosso");
    options.push("Blu");
    options.push("Giallo");
    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello2", options, consequenceStep1ColoreMasello2Livelli)


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
    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello2", options, consequenceStep1ColoreMasello2Livelli)

  }
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

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", options, consequence)

    } else if (this.value === "Opale") {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");
      options.push("15MM");
      options.push("20MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", options, consequence)

    } else {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", options, "")

      createTitle(".step2", "titleColore2Massello2", "Colore desiderato: ");

      createCustomDiv(".step2", "divColore2Massello2");

      selector = "#divColore2Massello2";

      let optionsColore = [];
      optionsColore.push("Bianco");
      optionsColore.push("Nero");
      optionsColore.push("Rosso");
      optionsColore.push("Blu");
      optionsColore.push("Giallo");

      createOptionsSelectInputGeneratorOnChange(selector, "selectColoreDesideratoMassello2", optionsColore, consequence);

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

    createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", options, consequence)

  } else {
    radioButtonInputGeneratorOnChage(selector, "selectMeasureSpessoreMassello2", "Spessore", "3MM", consequence)

    $("#selectMeasureSpessoreMassello2").trigger("click");
  }
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
      options.push("Colorato");


      createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello", options, consequenceStep1ColoreMasello)

  } else if (this.value === 'PVC') {
    options.push("Bianco");
    options.push("Nero");
    options.push("Rosso");
    options.push("Blu");
    options.push("Giallo");
    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello", options, consequenceStep1ColoreMasello)


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
    createOptionsSelectInputGeneratorOnChange(selector, "selectColoreMassello", options, consequenceStep1ColoreMasello)

  }
}

function removeConsequenceStep1ColoreMasello() {
  $('#titleColoreMassello').remove();
  $('#divColoreMassello').remove();
  $('#divColore2Massello').remove();
  $('#titleColore2Massello').remove();


}
function removeSpessoreMassello()
{
  $('#titleSpessoreMassello').remove();
  $('#divSpessoreMassello').remove();
}



function createConsequenceMisuraCostaLateraleEvent2() {
  console.log("send");
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

  consequence = createConsequenceMisuraCostaLateraleEvent2;


  if (step2Storage['Tipo materiale'] === 'Plexi glass') {
    if (this.value === "Trasparente") {
      options.push("3MM");
      options.push("5MM");
      options.push("8MM");
      options.push("10MM");
      options.push("15MM");
      options.push("20MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, consequence)

    } else if (this.value === "Opale") {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");
      options.push("15MM");
      options.push("20MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, consequence)

    } else {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, "")

      createTitle(".step2", "titleColore2Massello", "Colore desiderato: ");

      createCustomDiv(".step2", "divColore2Massello");

      selector = "#divColore2Massello";

      let optionsColore = [];
      optionsColore.push("Bianco");
      optionsColore.push("Nero");
      optionsColore.push("Rosso");
      optionsColore.push("Blu");
      optionsColore.push("Giallo");

      createOptionsSelectInputGeneratorOnChange(selector, "selectColoreDesideratoMassello", optionsColore, consequence);

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

    createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, consequence)

  } else {
    radioButtonInputGeneratorOnChage(selector, "selectMeasureSpessoreMassello", "Spessore", "3MM", consequence)

    $("#selectMeasureSpessoreMassello").trigger("click");
  }
}


function removeScrittaMasello2Livelli() {
  $("#titleTipoMassello2").remove();

  $("#divTipoMassello2").remove();


}


function consequenceStepScrittaMasello2Livelli() {

  let field1 = "Tipo materiale fondello";

  let selector = ".step3";

  removeScrittaMasello2Livelli();

  labelActivation(selector);

  saveFieldsStep3Event(this.name, this.value);

  createTitle(selector, "titleTipoMassello2", "Tipo materiale fondello: ");
  createCustomDiv(selector, "divTipoMassello2");

  selector = "#divTipoMassello2";


  radioButtonInputGeneratorOnChage(selector, 'plexiGlass2', field1, "Plexi glass", consequenceStep1Masello2Livelli);
  radioButtonInputGeneratorOnChage(selector, 'pVC2', field1, "PVC", consequenceStep1Masello2Livelli);
  radioButtonInputGeneratorOnChage(selector, 'alluminioComposto2', field1, "Alluminio composito", consequenceStep1Masello2Livelli);


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


function radioButtonInputGeneratorOnChage(selector, id, name, value, functionOnChange) {
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

  if (elementCreated.length) {
    elementCreated.val(count);

  } else {
    $("<label/>", {
      text: 'Numero lettere',
      id: 'labelStringNumber'
    }).appendTo(".step1");

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

function generateInputForEachLetter(letterString) {

  letterString = spaceRemoval(letterString);
  let size = letterString.length;
  let i = 0;
  $('#charactersList').remove();

  while (i < size) {
    let c = letterString.charAt(i);

    $("<div/>", {
      id: 'charactersList',
    }).appendTo(".step1");

    $("<label/>", {
      html: 'Misura altezza lettera: ' + '<strong>' + c.toUpperCase() + '</strong>',
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
      change: saveFieldsStep1Event,
      id: 'inputCharacter' + c.toUpperCase() + 'Number' + i,
      name: 'inputCharacter' + c.toUpperCase() + 'Number' + i
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


function saveFieldsStep2Event(name, value) {

  step2Storage[name] = value;
  console.log(step2Storage[name])
}

function saveOptionalFieldsStep2Event() {


  if (this.checked) {

    if ($('input[value="' + step2Storage[this.name] + '"]') != null)
      $('input[value="' + step2Storage[this.name] + '"]').prop('checked', false);
    step2Storage[this.name] = this.value;

  } else {
    step2Storage[this.name] = null;
  }


}

function saveOptionalFieldsStep2EventLetterFormLetterBox(name, value) {


  if ($('input[value="' + value + '"]').prop("checked")) {

    $('input[value="' + step2Storage[name] + '"]').prop('checked', false);

    step2Storage[name] = value;

  } else {
    step2Storage[name] = null;
  }

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

  if ($('input[name="' + name + '"]').prop("checked")) {

    $('input[value="' + step4Storage[name] + '"]').prop('checked', false);

    step4Storage[name] = value;

  } else {
    step4Storage[name] = null;
  }
  console.log(step4Storage[name]);

}

function saveFieldsStep4Event(name, value) {

  if(value === "Elemento non selezionato")
  {
    step4Storage[name] = null;

  }
  else {
    step4Storage[name] = value;

  }
  console.log(step4Storage[name]);

}


function resetFieldsStep4() {

  for (let property in step4Storage) {

    delete step4Storage[property];

  }

}




function saveFieldsStep5Event(name, value) {

  if(value === "Elemento non selezionato")
  {
    step5Storage[name] = null;

  }
  else {
        step5Storage[name] = value;

  }
  console.log(step5Storage[name]);

}

function resetFieldsStep5() {

  for (let property in step5Storage) {

    delete step5Storage[property];

  }

}
