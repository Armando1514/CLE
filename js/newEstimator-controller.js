
let step0Storage = {};
let step1Storage = {};
let step2Storage = {};
let step3Storage = {};
let step4Storage = {};
let step5Storage = {};



createStep0();
createStep1();


function createStep5LuceDiretta()
{
  resetFieldsStep5();

  resetStep5LuceDiretta();

  let selector = ".step5";

  let field1 = "Illuminazione";
  let field2 = "alimentatore"

  labelActivation(".labelStep5");

  createTitle(selector, "illuminazione", "Tipo illuminazione :");
  createCustomDiv(selector, "customDiv1IlluminazioneStep5");
  selector = '#customDiv1IlluminazioneStep5';

  checkboxInputGeneratorOnChange(selector,"illuminazione1",field1,"Modulo led IP67 bianco freddo 6500 k",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione2",field1,"Modulo led IP67 bianco naturale 4000 k",saveFieldsStep5Event);

  createCustomDiv(".step5", "customDiv2IlluminazioneStep5");
  selector = '#customDiv2IlluminazioneStep5';

  checkboxInputGeneratorOnChange(selector,"illuminazione3",field1,"Modulo led IP67 colorato rosso",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione4",field1,"Modulo led IP67 colorato verde",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione5",field1,"Modulo led IP67 colorato blu",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione6",field1,"Modulo led IP67 colorato RGB (Con controller RGB)",saveFieldsStep5Event);

  createTitle('.step5', "alimentatoreTitle", "Alimentatore :");
  createCustomDiv(".step5", "divina");

  checkboxInputGeneratorOnChange("#divina","alimentatore",field2,"Alimentatore IP67",saveFieldsStep5Event);


}



function createStep4LuceDiretta()
{
  resetFieldsStep4();
  resetStep4LuceDiretta();

  let selector = ".step4";

  let field1 = "fondello";

  labelActivation(".labelStep4");

  createTitle(selector, "categoriaFondello", "Categoria fondello :");
  createCustomDiv(selector, "customDivCategoriaFondelloStep4");
  selector = '#customDivCategoriaFondelloStep4';

  if(step1Storage["Tipologia lettera scatolata"] === "Luce diretta") {
    checkboxInputGeneratorOnChange(selector, "fondello1", field1, "PVC 10 MM Bianco", consequenceFondello);
    checkboxInputGeneratorOnChange(selector, "fondello2", field1, "Alluminio composito 3MM", consequenceFondello);
  }
  else
  {

    checkboxInputGeneratorOnChange(selector, "distaziatoraFondello", field1, "Distanziatore fondello", consequenceFondello);
    checkboxInputGeneratorOnChange(selector, "plexiGlassOpale3MM", field1, "Plexi-glass Opale 3MM", consequenceFondello);
   createCustomDiv(".step4", "divFondello");
   selector = "#divFondello";
    checkboxInputGeneratorOnChange(selector, "plexiGlassOpale5MM", field1, "Plexi-glass Opale 5MM", consequenceFondello);
    checkboxInputGeneratorOnChange(selector, "plexiGlassOpale8MM", field1, "Plexi-glass Opale 8MM", consequenceFondello);
    checkboxInputGeneratorOnChange(selector, "plexiGlassOpale10MM", field1, "Plexi-glass Opale 10MM", consequenceFondello);

  }

}

function consequenceFondello()
{
  createStep5LuceDiretta();
  saveFieldsStep4Event(this.name, this.value);
}

function resetStep4LuceDiretta()
{
  resetFieldsStep4();
  $('.labelStep4 ').removeClass('active');
  $("#categoriaFondello").remove();
  $("#customDivCategoriaFondelloStep4").remove();
  $("#divFondello").remove();
}

function resetStep5LuceDiretta()
{
  resetFieldsStep5();
  $('.labelStep5 ').removeClass('active');
  $("#illuminazione").remove();
  $("#customDiv1IlluminazioneStep5").remove();
  $("#customDiv2IlluminazioneStep5").remove();
  $("#divina").remove();
  $("#alimentatoreTitle").remove();
}


function createStep2LuceDirettaAndRiflessa()
{

  resetFieldsStep2();
  resetStep2LuceDirettaAndRiflessa();

  let selector = ".step2";

  let field1 = "Categoria costa laterale";

  labelActivation(".labelStep2");

  createTitle(selector, "categoriaCostaLaterale", "Categoria costa laterale :");
  createCustomDiv(selector, "customDivCategoriaCostaLateraleStep2");
  selector = '#customDivCategoriaCostaLateraleStep2';



  radioButtonInputGeneratorOnChage(selector,'flat', field1, "Flat", createConsequenceCategoriaCostaLateraleEvent);

 if(step1Storage['Tipologia lettera scatolata'] === 'Luce diretta') {
   radioButtonInputGeneratorOnChage(selector, "flange", field1, "Flange", createConsequenceCategoriaCostaLateraleEvent);
   radioButtonInputGeneratorOnChage(selector, 'profiloEstroso', field1, "Profilo estroso", createConsequenceCategoriaCostaLateraleEvent);
 }
 if(step1Storage['Tipologia lettera scatolata'] === 'Luce riflessa')
   $('#flat').trigger("click");
}

function createConsequenceCategoriaCostaLateraleEvent()
{

  resetStep3LuceDirettaAndRiflessa();
  resetStep4LuceDiretta();
  resetStep5LuceDiretta();

  saveFieldsStep2Event(this.name, this.value);

  switch(this.value)
  {
    case 'Flat':
      createMaterialeCostaLateraleFlatStep2();
      break;
    case 'Flange':
      createMaterialeCostaLateraleFlangeStep2();
      break;

    case 'Profilo estroso':
      createMaterialeCostaLateraleProfiloEstrosoStep2();
      break;
  }
}




function createMaterialeCostaLateraleProfiloEstrosoStep2()
{
  removeMaterialeCostaLaterale();

  let field2 = "Materiale costa laterale";
  let field3 = "Tipologia profilo";

  step2Storage[field2] = "Alluminio";
  step2Storage[field3] = null;


  createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
  createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
  let selector = '#customDivMaterialeCostaLateraleStep2';

  radioButtonInputGeneratorOnChage(selector,'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "Tipologia profilo (OPZIONALE) :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  checkboxInputGeneratorOnChange(selector,'letterForm', field3, "Letter form", createConsequenceMaterialeCostaLateraleEvent);
  checkboxInputGeneratorOnChange(selector,'letterBox', field3, "Letter box", createConsequenceMaterialeCostaLateraleEvent);


  $("#alluminio").trigger("click");


}



function createMaterialeCostaLateraleFlangeStep2()
{
  removeMaterialeCostaLaterale();

  let field2 = "Materiale costa laterale";
  let field3 = "Cornice perimetrale";

  step2Storage[field2] = "Alluminio";
  step2Storage[field3] = null;

  createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
  createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
  let selector = '#customDivMaterialeCostaLateraleStep2';

  radioButtonInputGeneratorOnChage(selector,'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "cornice perimetrale (OPZIONALE) :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  checkboxInputGeneratorOnChange(selector,'bordaturaOutline', field3, "cornice perimetrale", saveOptionalFieldsStep2Event);
  $("#alluminio").trigger("click");


}

function removeMaterialeCostaLaterale()
{
  $("#materialeCostaLaterale").remove();
  $("#bordaturaOutline").remove();
  $("#customDivBordaturaCostaLateraleStep2").remove();
  $("#bordaturaCostaLaterale").remove();
  $("#customDivMaterialeCostaLateraleStep2").remove();
  $("#letterForm").remove();
  $("#letterBox").remove();
  removeMisuraCostaLaterale();
}

function createMaterialeCostaLateraleFlatStep2()
{

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

  radioButtonInputGeneratorOnChage(selector,'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector, "inox", field2,  "Inox", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector,'ottone', field2, "Ottone", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "Bordatura outline saldata su fronte costa laterale (OPZIONALE) :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  checkboxInputGeneratorOnChange(selector,'bordaturaOutline', field3, "Bordatura outline saldata su fronte", saveOptionalFieldsStep2Event);


}

function createConsequenceMaterialeCostaLateraleEvent()
{
  resetStep3LuceDirettaAndRiflessa();
  resetStep4LuceDiretta();
  resetStep5LuceDiretta();


  if($('#misuraCostaLaterale').length === 0) {
    createTitle('.step2', "misuraCostaLaterale", "Misura costa laterale :");
    createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
  }
  else
  {
    removeMisuraCostaLaterale();
    createTitle('.step2', "misuraCostaLaterale", "Misura costa laterale :");
    createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
  }

    let options = [];


  if(this.name === "Tipologia profilo")
  {
    switch (this.value) {
      case 'Letter form':
        options.push("37MM");
        options.push("60MM");
        saveOptionalFieldsStep2EventLetterFormLetterBox(this.name,this.value);

        break;
      case 'Letter box':
        options.push("60MM");
        options.push("100MM");
        saveOptionalFieldsStep2EventLetterFormLetterBox(this.name,this.value);
        break;
    }
  }
  else {
    switch (this.value) {
      case 'Alluminio':
        options.push("25MM");
        options.push("40MM");
        options.push("60MM");
        options.push("80MM");
        options.push("100MM");
        options.push("150MM");
        options.push("200MM");
        break;
      case 'Inox':
      case 'Ottone':
        options.push("25MM");
        options.push("40MM");
        options.push("60MM");
        options.push("80MM");
        break;

    }
    saveFieldsStep2Event(this.name,this.value);

  }

  createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2',"selectMeasureCostaLaterale",options,createConsequenceMisuraCostaLateraleEvent)

}

function resetStep2LuceDirettaAndRiflessa()
{
  $("#categoriaCostaLaterale").remove();
  $("#customDivCategoriaCostaLateraleStep2").remove();
  $("#materialeCostaLaterale").remove();
  $("#customDivMaterialeCostaLateraleStep2").remove();
  $("#misuraCostaLaterale").remove();
  $("#customDivMisuraCostaLateraleStep2").remove();
  $("#bordaturaCostaLaterale").remove();
  $("#bordaturaOutline").remove();
  $('label[for="bordaturaOutline"]').remove();

}


function createConsequenceVerniciaturaEvent()
{
  saveFieldsStep2Event(this.name,this.value);


  createStep3LuceDirettaAndRiflessa();

}


function createStep3LuceDirettaAndRiflessa()
{
  resetFieldsStep3();
  resetStep3LuceDirettaAndRiflessa();

  labelActivation(".labelStep3");

  let selector = ".step3";

  let field1 = "Materiale frontalino";


  createTitle(selector, 'materialeFrontalino', 'Materiale frontalino :');
  createCustomDiv(selector, "customDivMaterialeFrontalinoStep3");

  selector = '#customDivMaterialeFrontalinoStep3';

   if(step1Storage["Tipologia lettera scatolata"] !== "Luce riflessa") {

    if (step2Storage["Categoria costa laterale"] === "Profilo estroso")
      radioButtonInputGeneratorOnChage(selector, "plexiGlassOpale", field1, "Plexi-glass opale (3MM)", createConsequenceSpessoreFrontalinoEvent);
    else
      radioButtonInputGeneratorOnChage(selector, "plexiGlassOpale", field1, "Plexi-glass opale", createConsequenceMaterialeFrontalinoEvent);

    radioButtonInputGeneratorOnChage(selector, 'plexiGlassColorato', field1, "Plexi-glass colorato (3MM)", createConsequenceSpessoreFrontalinoEvent);

  }
  else
  {
    radioButtonInputGeneratorOnChage(selector, "frontalinoAlluminio", field1, "Alluminio (1.2MM)", createConsequenceSpessoreFrontalinoEvent);
    radioButtonInputGeneratorOnChage(selector, "frontalinoInox", field1, "Inox (1MM)", createConsequenceSpessoreFrontalinoEvent);

    createCustomDiv(".step3", "frontalino2")

    selector = "#frontalino2";

    radioButtonInputGeneratorOnChage(selector, "frontalinoOttone", field1, "Ottone (1MM) ", createConsequenceSpessoreFrontalinoEvent);
    radioButtonInputGeneratorOnChage(selector, "frontalinoLamieraZincata", field1, "Lamiera zincata (1MM)", createConsequenceSpessoreFrontalinoEvent);


  }


}

function resetStep3LuceDirettaAndRiflessa()
{
  resetFieldsStep4();
  $('.labelStep3 ').removeClass('active');
  $('#materialeFrontalino').remove();
  $('#spessoreFrontalino').remove();
  $('#customDivSpessoreFrontalinoStep3').remove();
  $('#customDivMaterialeFrontalinoStep3').remove();
  $('#plexiGlassOpale').remove();
  $('#plexiGlassColorato').remove();
  $('#frontalino2').remove();
}





function createConsequenceMaterialeFrontalinoEvent()
{
  resetFieldsStep3();

  saveFieldsStep3Event(this.name,this.value);

  let selector = ".step3";



    if($('#spessoreFrontalino').length === 0) {
      createTitle(selector, 'spessoreFrontalino', 'Spessore frontalino :');
      createCustomDiv(selector, "customDivSpessoreFrontalinoStep3");
    }
    selector = "#customDivSpessoreFrontalinoStep3";

     let options = [];
     options.push("3MM");
     options.push("5MM");
     options.push("8MM");
     createOptionsSelectInputGeneratorOnChange(selector, "selectSpessoreFrontalino", options,createConsequenceSpessoreFrontalinoEvent)



}

function createConsequenceSpessoreFrontalinoEvent()
{
  saveFieldsStep3Event(this.name, this.value);
  createStep4LuceDiretta();
}

function removeMisuraCostaLaterale()
{
  $("#misuraCostaLaterale").remove();
  $("#customDivMisuraCostaLateraleStep2").remove();
  removeVerniciaturaCostaLaterale();
}

function removeVerniciaturaCostaLaterale()
{
  $("#verniciaturaCostaLaterale").remove();
  $("#customDivVerniciaturaCostaLateraleStep2").remove();
}
function createConsequenceMisuraCostaLateraleEvent()
{

  saveFieldsStep2Event(this.name,this.value);

  let field4 = "verniciatura costa laterale"
  let selector = '#customDivVerniciaturaCostaLateraleStep2';
  if(step2Storage['Materiale costa laterale'] === 'Inox') {
    field4 = "Finitura";
  }


  if($('#verniciaturaCostaLaterale').length === 0) {

      createTitle('.step2', "verniciaturaCostaLaterale", "Verniciatura costa laterale: ");
      createCustomDiv('.step2', "customDivVerniciaturaCostaLateraleStep2");

  }
  $("#customDivVerniciaturaCostaLateraleStep2").empty();

  if(step2Storage['Materiale costa laterale'] === 'Alluminio') {

    if (step2Storage['Tipologia profilo'] === 'Letter form') {

      radioButtonInputGeneratorOnChage(selector, 'bianca', field4, "Bianca", createConsequenceVerniciaturaEvent);

      radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);

    }
    else {
      radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
      radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);
    }


  }
  else if(step2Storage['Materiale costa laterale'] === 'Inox'){

    $("#verniciaturaCostaLaterale").text("Finitura costa laterale: ");

      radioButtonInputGeneratorOnChage(selector, "lucida", field4, "Lucida", createConsequenceVerniciaturaEvent);
      radioButtonInputGeneratorOnChage(selector, 'spazzolata', field4, "Spazzolata", createConsequenceVerniciaturaEvent);

  }
  else if(step2Storage['Materiale costa laterale'] === 'Ottone'){
      radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
      radioButtonInputGeneratorOnChage(selector, 'galvanico', field4, "Galvanico", createConsequenceVerniciaturaEvent);

  }
  else if(step2Storage['Materiale costa laterale'] === 'Lamiera zingata')
  {
    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
    radioButtonInputGeneratorOnChage(selector, 'verniciata', field4, "Verniciata", createConsequenceVerniciaturaEvent);

  }
  else
  {
      radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceVerniciaturaEvent);
      radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceVerniciaturaEvent);
      radioButtonInputGeneratorOnChage(selector, 'galvanico', field4, "Galvanico", createConsequenceVerniciaturaEvent);
}



}




function createOptionsSelectInputGeneratorOnChange( selector, id, options, functionOnChange)
{

  if($('#' + id).length === 0) {
    $("<select/>", {
        class: 'custom-select',
        id: id,
        change: functionOnChange,
        required: true
      }
    ).appendTo(selector);

    $("<option/>", {
        text: "Nessun valore selezionato",
        disabled: true,
        selected: true

      }
    ).appendTo('#' + id);

    options.forEach(value => {

      $("<option/>", {
          value: value,
          text: value
        }
      ).appendTo('#' + id);

    });
  }
}




function checkboxInputGeneratorOnChange(selector, id, name, value, functionOnChange)
{

  $("<input/>", {
      type : 'checkbox',
      name : name,
      value: value,
      id : id,
      change : functionOnChange,
      required : true
    }
  ).appendTo(selector);

  $("<label/>", {
      for : id,
      text : value
    }
  ).insertAfter('#'+id);

}


function createStep0()
{

  let selector = ".step0";
  let field1 = "Ragione sociale/ Nominativo";
  let field2 = "P.Iva";
  let field3 = "Nome e cognome";
  let field4 = "Email";
  let field5 = "Riferimento";

  labelActivation(".labelStep0");
  textInputGeneratorOnChange(selector, field1, field1, saveFieldsStep0Event);
  textInputGeneratorOnChange(selector, field2, field2, saveFieldsStep0Event);
  textInputGeneratorOnChange(selector, field3, field3, saveFieldsStep0Event);
  emailInputGeneratorOnChange(selector,field4, field4, saveFieldsStep0Event);
  dateInputGenerator(selector);
  textInputGeneratorOnChange(selector, field5, field5, saveFieldsStep0Event);

}


function resetStep0()
{
  let field1 = "Ragione sociale/ Nominativo";
  let field2 = "P.Iva";
  let field3 = "Nome e cognome";
  let field4 = "Email";
  let field5 = "Riferimento";


  resetInputFields(field1);
  resetInputFields(field2);
  resetInputFields(field3);
  resetInputFields(field4);
  resetInputFields(field5);
  resetFieldsStep0();

}

function resetStep1()
{
  let field1 = "Dicitura scritta";
  let field2 = "Tipologia di font";
  let field3 = "Tipologia lettera scatolata";

  $('#charactersList').remove();

  resetInputFields(field1);
  resetInputRadioButtonFields(field2)
  resetInputRadioButtonFields(field3)

  resetFieldsStep1();

}


function createStep1()
{

  let selector = ".step1";
  let field1 = "Dicitura scritta";
  let field2 = "Tipologia di font";
  let field3 = "Tipologia lettera scatolata";

  labelActivation(".labelStep1");
  createTitle(selector, "DicituraScrittaTitle", "Dicitura scritta :");
  textInputGeneratorOnKeyUp(selector, field1, field1, stringCountInputGenerator);



  createTitle(selector, "tipologiaDiFontTitle", "Tipologia di font :");
  createCustomDiv(selector, "customDivTipologiaDiFontStep1");
  selector = '#customDivTipologiaDiFontStep1';
  radioButtonInputGeneratorOnChage(selector,'stampatelloSemplice', field2, "Stampatello semplice", saveFieldsStep1Event);
  radioButtonInputGeneratorOnChage(selector, "elaboratoComposto", field2,  "Elaborato composto", saveFieldsStep1Event);
  radioButtonInputGeneratorOnChage(selector,'corsivo', field2, "Corsivo", saveFieldsStep1Event);


  createTitle(".step1", "tipologiaLetteraScatolataTitle", "Tipologia lettera scatolata :");
  createCustomDiv(".step1", "customDivTipologiaLetteraScatolataStep1");
  selector = '#customDivTipologiaLetteraScatolataStep1';
  radioButtonInputGeneratorOnChage(selector,'luceDiretta', field3, "Luce diretta", consequenceStep1);
  radioButtonInputGeneratorOnChage(selector, "luceRiflessa", field3,  "Luce riflessa", consequenceStep1);
  radioButtonInputGeneratorOnChage(selector,'masselloSpento', field3, "Massello spento", consequenceStep1);

}

function consequenceStep1()
{
  $(".step2").empty();

  step1Storage[this.name] = this.value;
  if(this.value === "Massello spento")
  {
    masselloStep2();
  }
  else
  createStep2LuceDirettaAndRiflessa();

}
function removeMasselloStep2()
{
  $('#titleTipoMasello').remove();
  $('#divTipoMasello').remove();
  $('#titleScrittaMasello').remove();
  $('#divScrittaMasello').remove();

}

function masselloStep2()
{
  removeMasselloStep2();
  let selector = ".step2";
  let field0 = "Scritta Massello"


  createTitle(selector,"titleScrittaMassello","Scritta massello: ");
  createCustomDiv(selector,"divScrittaMassello");
  selector = "#divScrittaMassello";

  radioButtonInputGeneratorOnChage(selector,'sempliceSpenta', field0, "Semplice spenta", consequenceStepScrittaMasello);
  radioButtonInputGeneratorOnChage(selector,'retroilluminazione', field0, "Con retroilluminazione", consequenceStepScrittaMasello);


}

function consequenceStepScrittaMasello()
{
  let field1 = "Tipo materiale";

  let selector = ".step2";

  saveFieldsStep2Event(this.name,this.value);

  createTitle(selector,"titleTipoMassello","Tipo materiale: ");
  createCustomDiv(selector,"divTipoMassello");

  selector = "#divTipoMassello";

  if( this.value === 'Semplice spenta') {
    radioButtonInputGeneratorOnChage(selector, 'plexiGlass', field1, "Plexi-glass", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'pVC', field1, "PVC", consequenceStep1Masello);
    radioButtonInputGeneratorOnChage(selector, 'alluminioComposto', field1, "Alluminio composto", consequenceStep1Masello);
  }
  else
  {
    radioButtonInputGeneratorOnChage(selector, 'plexiGlass', field1, "Plexi-glass", consequenceStep1MaselloRetroilluminato);
    $("#plexiGlass").trigger("click");
  }
}


function consequenceStep1MaselloRetroilluminato() {
  removeStep1Masello();
  let field2 = "colore";
  saveFieldsStep2Event(this.name, this.value);

  let selector = ".step2";

  createTitle(selector, "titleColoreMassello", "Colore: ");
  createCustomDiv(selector, "divColoreMassello");

  selector = "#divColoreMassello";

  radioButtonInputGeneratorOnChage(selector, 'trasparente', field2, "Trasparente", consequenceStep1ColoreMaselloRetroilluminato);
  radioButtonInputGeneratorOnChage(selector, 'opale', field2, "Opale", consequenceStep1ColoreMaselloRetroilluminato);
}

function consequenceStep1ColoreMaselloRetroilluminato() {

  saveFieldsStep2Event(this.name, this.value);

  let selector = ".step2";

  createTitle(selector, "titleSpessoreMassello", "Spessore: ");
  createCustomDiv(selector, "divSpessoreMassello");

  selector = "#divSpessoreMassello";

  let options = [];


  if (step2Storage['Tipo materiale'] === 'Plexi-glass') {
    options.push("15MM");
    options.push("20MM");
    options.push("30MM");

    createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, createConsequenceMisuraMasello);

  }
}

function createConsequenceMisuraMasello()
{
  saveFieldsStep2Event(this.name,this.value);

  let selector = ".step3";

  let field1 = "Illuminazione";
  let field2 = "alimentatore"

  labelActivation(".labelStep3");

  createTitle(selector, "illuminazione", "Tipo illuminazione :");
  createCustomDiv(selector, "customDiv1IlluminazioneStep5");
  selector = '#customDiv1IlluminazioneStep5';

  checkboxInputGeneratorOnChange(selector,"illuminazione1",field1,"Modulo led IP67 bianco freddo 6500 k",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione2",field1,"Modulo led IP67 bianco naturale 4000 k",saveFieldsStep5Event);

  createCustomDiv(".step3", "customDiv2IlluminazioneStep5");
  selector = '#customDiv2IlluminazioneStep5';

  checkboxInputGeneratorOnChange(selector,"illuminazione3",field1,"Modulo led IP67 colorato rosso",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione4",field1,"Modulo led IP67 colorato verde",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione5",field1,"Modulo led IP67 colorato blu",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione6",field1,"Modulo led IP67 colorato RGB (Con controller RGB)",saveFieldsStep5Event);

  createTitle('.step3', "alimentatoreTitle", "Alimentatore :");
  createCustomDiv(".step3", "divina");

  checkboxInputGeneratorOnChange("#divina","alimentatore",field2,"Alimentatore IP67",saveFieldsStep5Event);

  createTitle('.step3', "masselloOpzionale", "Secondo Massello in sovrapposizione (OPZIONALE) :");
  createCustomDiv(".step3", "divina1");
  checkboxInputGeneratorOnChange("#divina1","secondoMassello",field2,"Secondo massello", consequenceSecondoMassello);

}

function consequenceSecondoMassello()
{
  removeStep1Masello();
  let field2 = "colore";
  saveFieldsStep2Event(this.name, this.value);

  let selector = ".step4";

  createTitle(selector, "titleColoreMassello", "Colore: ");
  createCustomDiv(selector, "divColoreMassello");

  selector = "#divColoreMassello";

  radioButtonInputGeneratorOnChage(selector, 'trasparente', field2, "Trasparente", consequenceStep1ColoreMaselloRetroilluminatoOptional);
  radioButtonInputGeneratorOnChage(selector, 'opale', field2, "Opale", consequenceStep1ColoreMaselloRetroilluminatoOptional);
}

function consequenceStep1ColoreMaselloRetroilluminatoOptional() {

  saveFieldsStep3Event(this.name, this.value);

  let selector = ".step4";

  createTitle(selector, "titleSpessore2Massello", "Spessore: ");
  createCustomDiv(selector, "divSpessore2Massello");

  selector = "#divSpessore2Massello";

  let options = [];


    options.push("15MM");
    options.push("20MM");
    options.push("30MM");

    createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello2", options, createConsequenceMisuraMaselloOptional);


}

function createConsequenceMisuraMaselloOptional()
{
  saveFieldsStep2Event(this.name,this.value);

  let selector = ".step5";

  let field1 = "Illuminazione";
  let field2 = "alimentatore"

  labelActivation(".labelStep5");

  createTitle(selector, "illuminazione2", "Tipo illuminazione :");
  createCustomDiv(selector, "customDiv1Illuminazione2Step5");
  selector = '#customDiv1Illuminazione2Step5';

  checkboxInputGeneratorOnChange(selector,"illuminazione12",field1,"Modulo led IP67 bianco freddo 6500 k",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione22",field1,"Modulo led IP67 bianco naturale 4000 k",saveFieldsStep5Event);

  createCustomDiv(".step5", "customDiv2Illuminazione2Step5");
  selector = '#customDiv2Illuminazione2Step5';

  checkboxInputGeneratorOnChange(selector,"illuminazione33",field1,"Modulo led IP67 colorato rosso",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione43",field1,"Modulo led IP67 colorato verde",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione53",field1,"Modulo led IP67 colorato blu",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione63",field1,"Modulo led IP67 colorato RGB (Con controller RGB)",saveFieldsStep5Event);

  createTitle('.step5', "alimentatore2Title", "Alimentatore :");
  createCustomDiv(".step5", "divina2");

  checkboxInputGeneratorOnChange("#divina2","alimentatore2",field2,"Alimentatore IP67",saveFieldsStep5Event);


}
function removeStep1Masello()
{
  $('#titleColoreMassello').remove();
  $('#divColoreMassello').remove();
  $('#colorDIV').remove();
  $('#colorDIV1').remove();
  $('#colorDIV2').remove();
  $('#colorDIV3').remove();
}

function consequenceStep1Masello()
{
  removeStep1Masello();
  let field2 = "colore";


  saveFieldsStep2Event(this.name,this.value);

  let selector = ".step2";

  createTitle(selector,"titleColoreMassello","Colore: ");
  createCustomDiv(selector,"divColoreMassello");

  selector = "#divColoreMassello";

  if(this.value === 'Plexi-glass')
  {
    radioButtonInputGeneratorOnChage(selector,'trasparente', field2, "Trasparente", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'opale', field2, "Opale", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'colorato', field2, "Colorato composto", consequenceStep1ColoreMasello);

  }
  else if(this.value === 'PVC')
  {
    radioButtonInputGeneratorOnChage(selector,'bianco', field2, "Bianco", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'nero', field2, "Nero", consequenceStep1ColoreMasello);
    createCustomDiv(".step2", "colorDIV");
    selector = "#colorDIV";
    radioButtonInputGeneratorOnChage(selector,'rosso', field2, "Rosso", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'blu', field2, "Blu", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'giallo', field2, "Giallo", consequenceStep1ColoreMasello);

  }
  else {
    radioButtonInputGeneratorOnChage(selector,'rosso', field2, "Rosso", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'bianco', field2, "Bianco", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'blu', field2, "Blu", consequenceStep1ColoreMasello);
    createCustomDiv(".step2", "colorDIV1");
    selector = "#colorDIV1";
    radioButtonInputGeneratorOnChage(selector,'argentoSpazzolato', field2, "Argento spazzolato", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'argentoSpecchio', field2, "Argento specchio", consequenceStep1ColoreMasello);
    createCustomDiv(".step2", "colorDIV2");
    selector = "#colorDIV2";
    radioButtonInputGeneratorOnChage(selector,'oroSpecchio', field2, "Oro specchio", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'oroSpazzolato', field2, "Oro spazzolato", consequenceStep1ColoreMasello);
    createCustomDiv(".step2", "colorDIV3");
    selector = "#colorDIV3";
    radioButtonInputGeneratorOnChage(selector,'giallo', field2, "Giallo", consequenceStep1ColoreMasello);
    radioButtonInputGeneratorOnChage(selector,'rameSpazzolato', field2, "Rame spazzolato", consequenceStep1ColoreMasello);
  }
}

function removeConsequenceStep1ColoreMasello(){
  $('#titleSpessoreMassello').remove();
  $('#divSpessoreMassello').remove();
  $('#titleColore2Massello').remove();
  $('#divColore2Massello').remove();

}

function createConsequenceMisuraCostaLateraleEvent2()
{
  console.log("send");
}

function consequenceStep1ColoreMasello()
{

  removeConsequenceStep1ColoreMasello();
  let field4 = "Colore desiderato";

  saveFieldsStep2Event(this.name,this.value);

  let selector = ".step2";

  createTitle(selector,"titleSpessoreMassello","Spessore: ");
  createCustomDiv(selector,"divSpessoreMassello");

  selector = "#divSpessoreMassello";

  let options = [];



  if(step2Storage['Tipo materiale'] === 'Plexi-glass') {
    if (this.value === "Trasparente") {
      options.push("3MM");
      options.push("5MM");
      options.push("8MM");
      options.push("10MM");
      options.push("15MM");
      options.push("20MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, createConsequenceMisuraCostaLateraleEvent2)

    } else if (this.value === "Opale") {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");
      options.push("15MM");
      options.push("20MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, createConsequenceMisuraCostaLateraleEvent2)

    } else {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");

      createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, createConsequenceMisuraCostaLateraleEvent2)

      createTitle(".step2", "titleColore2Massello", "Colore desiderato: ");

      createCustomDiv(".step2", "divColore2Massello");

      selector = "#divColore2Massello";


      textInputGeneratorOnChange(selector, field4, "Colore desiderato", createConsequenceMisuraCostaLateraleEvent2)
    }

  }
  else if(step2Storage['Tipo materiale'] === 'PVC')
  {
    if(this.value === "Bianco") {
      options.push("3MM");
      options.push("5MM");
      options.push("10MM");
      options.push("19MM");
    }
    else
    {
      options.push("3MM");
      options.push("5MM");
    }

    createOptionsSelectInputGeneratorOnChange(selector, "selectMeasureSpessoreMassello", options, createConsequenceMisuraCostaLateraleEvent2)

  }
  else
  {
    radioButtonInputGeneratorOnChage(selector, "selectMeasureSpessoreMassello", "Spessore", "3MM", createConsequenceMisuraCostaLateraleEvent2)

    $("#selectMeasureSpessoreMassello").trigger("click");
  }
}


function createCustomDiv(selector, id)
{
  $("<div/>", {
      id : id,
      class: 'custom-options'
    }
  ).appendTo(selector);
}

function createTitle(selector, id, text)
{
  $("<label/>", {
     id : id,
     text: text,
     css : {"display":"flex"}
    }
  ).appendTo(selector);
}

function labelActivation(selector)
{

  $(selector).addClass("active");
}


function radioButtonInputGeneratorOnChage(selector, id, name, value, functionOnChange)
{
  $("<input/>", {
      type : 'radio',
      name : name,
      value: value,
      id : id,
      change : functionOnChange,
      required : true
    }
  ).appendTo(selector);

  $("<label/>", {
      for : id,
      text : value
    }
  ).insertAfter('#'+id);

}



function textInputGeneratorOnChange(selector, name, placeHolder, functionOnChange)
{

 $("<input/>", {

     class : 'form-control',
     type : 'text',
     name : name,
     placeHolder : placeHolder,
     change : functionOnChange,
     required : true
    }
  ).appendTo(selector);

}

function textInputGeneratorOnKeyUp(selector, name, placeHolder, functionOnKeyUp)
{

  $("<input/>", {

      class : 'form-control',
      type : 'text',
      name : name,
      placeHolder : placeHolder,
      required : true,
      keyup : functionOnKeyUp,
      change : saveFieldsStep1Event
    }
  ).appendTo(selector);

}

function emailInputGeneratorOnChange(selector, name, placeHolder, functionOnChange)
{

  $("<input/>", {

      class : 'form-control',
      type : 'email',
      name : name,
      placeHolder : placeHolder,
      change: functionOnChange,
      required : true
    }
  ).appendTo(selector);

}

function dateInputGenerator(selector)
{

  let currentDate = getDate();

  $("<input/>", {

      class : 'form-control',
      name : 'dateElement',
      value : currentDate,
      readonly: true
    }
  ).appendTo(selector);

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


function resetInputFields(name)
{
  $('input[name="'+name+'"]').val("");

}

function resetInputRadioButtonFields(name)
{
  $('input[name="'+name+'"]').prop('checked' , false);

}
function stringCountInputGenerator()
{
  let selector = 'input[name="Dicitura scritta"]';
  let letterString = $(selector).val();
  let elementCreated = $('#lettersCount');
  let count = letterCount(letterString) ;

  if ( elementCreated.length )
  {
    elementCreated.val(count);

  }
  else
    {
      $("<label/>", {
          text: 'Numero lettere',
          id : 'labelStringNumber'
        }
      ).appendTo(".step1");

    $("<input/>", {

        class: 'form-control',
        id: 'lettersCount',
        name: 'countElement',
        value: count,
        readonly: true
      }
    ).appendTo("#labelStringNumber");

    }
  generateInputForEachLetter(letterString);

}

function generateInputForEachLetter(letterString)
{

  letterString = spaceRemoval(letterString);
  let size = letterString.length;
  let i = 0;
  $('#charactersList').remove();

  while (i < size)
  {
    let c =  letterString.charAt(i);

    $("<div/>", {
        id : 'charactersList',
      }
    ).appendTo(".step1");

    $("<label/>", {
        html: 'Misura altezza lettera: '+ '<strong>' + c.toUpperCase() +'</strong>',
        css: {'width':'50%'},
        id : 'character'+ c +'number'+ i,
        class :'.letters'
      }
    ).appendTo("#charactersList");

    $("<input/>", {

        class: 'form-control',
        css: {'width':'80%'},
        placeholder : 'cm',
        change: saveFieldsStep1Event,
        id : 'inputCharacter'+ c.toUpperCase() +'Number'+ i,
        name: 'inputCharacter'+ c.toUpperCase() +'Number'+ i
      }
    ).appendTo('#character'+ c +'number'+ i);

    i++;
  }
}



function spaceRemoval(letterString)
{
  return letterString.replace(/\s+/g, '');
}

function letterCount(letterString)
{

 return spaceRemoval(letterString).length ;

}

function saveFieldsStep0Event()
{
  step0Storage[this.name] = this.value;

}

function resetFieldsStep0()
{

  for (let property in step0Storage) {

    delete step0Storage[property];

  }

}


function saveFieldsStep1Event()
{

  step1Storage[this.name] = this.value;
}

function resetFieldsStep1()
{

  for (let property in step1Storage) {

    delete step1Storage[property];

  }

}


function saveFieldsStep2Event(name,value)
{

  step2Storage[name] = value;
  console.log(step2Storage[name] )
}

function saveOptionalFieldsStep2Event()
{


  if(this.checked) {

    if( $('input[value="'+step2Storage[this.name]+'"]') != null)
      $('input[value="'+step2Storage[this.name]+'"]').prop('checked' , false);
    step2Storage[this.name] = this.value;

  }
  else {
    step2Storage[this.name] = null;
  }


}
function saveOptionalFieldsStep2EventLetterFormLetterBox(name, value)
{


  if($('input[value="'+value+'"]').prop("checked")) {

      $('input[value="'+ step2Storage[name]+'"]').prop('checked' , false);

    step2Storage[name] = value;

  }
  else {
    step2Storage[name] = null;
  }

}

function resetFieldsStep2()
{

  for (let property in step2Storage) {

    delete step2Storage[property];

  }

}

function saveFieldsStep3Event(name,value)
{

  step3Storage[name] = value;
}

function resetFieldsStep3()
{

  for (let property in step3Storage) {

    delete step3Storage[property];

  }

}

function saveFieldsStep4Event(name, value)
{

  if($('input[name="'+name+'"]').prop("checked")) {

    $('input[value="'+step4Storage[name]+'"]').prop('checked' , false);

    step4Storage[name] = value;

  }
  else {
    step4Storage[name] = null;
  }

}

function resetFieldsStep4()
{

  for (let property in step4Storage) {

    delete step4Storage[property];

  }

}

function saveFieldsStep5Event()
{

  if(this.checked) {

    if( $('input[value="'+step5Storage[this.name]+'"]') != null)
      $('input[value="'+step5Storage[this.name]+'"]').prop('checked' , false);
    step5Storage[this.name] = this.value;

  }
  else {
    step5Storage[this.name] = null;
  }


}

function resetFieldsStep5()
{

  for (let property in step5Storage) {

    delete step5Storage[property];

  }

}
