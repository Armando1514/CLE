
let step0Storage = {};
let step1Storage = {};
let step2Storage = {};
let step3Storage = {};
let step4Storage = {};
let step5Storage = {};



createStep2LuceDiretta();

function createStep5LuceDiretta()
{
  let selector = ".step5";

  let field1 = "Illuminazione";

  labelActivation(".labelStep5");

  createTitle(selector, "illuminazione", "Tipo illuminazione :");
  createCustomDiv(selector, "customDiv1IlluminazioneStep5");
  selector = '#customDiv1IlluminazioneStep5';

  checkboxInputGeneratorOnChange(selector,"illuminazione1",field1,"Modulo led IP67 bianco freddo 6500 k",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione2",field1,"Modulo led IP67 bianco naturale 4000 k",saveFieldsStep5Event);

  createCustomDiv(".step5", "customDiv2lluminazioneStep5");
  selector = '#customDiv2lluminazioneStep5';

  checkboxInputGeneratorOnChange(selector,"illuminazione3",field1,"Modulo led IP67 colorato rosso",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione4",field1,"Modulo led IP67 colorato giallo",saveFieldsStep5Event);
  checkboxInputGeneratorOnChange(selector,"illuminazione5",field1,"Modulo led IP67 colorato blu",saveFieldsStep5Event);

}



function createStep4LuceDiretta()
{
  let selector = ".step4";

  let field1 = "fondello";

  labelActivation(".labelStep4");

  createTitle(selector, "categoriaFondello", "Categoria costa laterale :");
  createCustomDiv(selector, "customDivCategoriaFondelloStep4");
  selector = '#customDivCategoriaFondelloStep4';

  checkboxInputGeneratorOnChange(selector,"fondello1",field1,"PVC 10 MM Bianco",saveFieldsStep4Event);
  checkboxInputGeneratorOnChange(selector,"fondello2",field1,"Alluminio composito 3MM",saveFieldsStep4Event);

}

function resetStep4LuceDiretta()
{
  $("#categoriaFondello").remove();
  $("#customDivCategoriaFondelloStep4").remove();
}

function createStep2LuceDiretta()
{

  let selector = ".step2";

  let field1 = "Categoria costa laterale";

  labelActivation(".labelStep2");

  createTitle(selector, "categoriaCostaLaterale", "Categoria costa laterale :");
  createCustomDiv(selector, "customDivCategoriaCostaLateraleStep2");
  selector = '#customDivCategoriaCostaLateraleStep2';


  radioButtonInputGeneratorOnChage(selector,'flat', field1, "Flat", createConsequenceCategoriaCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector, "flange", field1,  "Flange", createConsequenceCategoriaCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector,'profiloEstroso', field1, "Profilo estroso", createConsequenceCategoriaCostaLateraleEvent);


}

function createConsequenceCategoriaCostaLateraleEvent()
{
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
  resetFieldsStep2();
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
  resetFieldsStep2();
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

  resetFieldsStep2();
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
  resetFieldsStep2();

  saveFieldsStep2Event(this.name,this.value);


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
  }

  createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2',"selectMeasureCostaLaterale",options,createConsequenceVerniciaturaEvent)

}

function resetStep2LuceDiretta()
{
  $("#categoriaCostaLaterale").remove();
  $("#customDivCategoriaCostaLateraleStep2").remove();
  $("#materialeCostaLaterale").remove();
  $("#customDivMaterialeCostaLateraleStep2").remove();
  $("#misuraCostaLaterale").remove();
  $("#customDivMisuraCostaLateraleStep2").remove();
}


function createConsequenceVerniciaturaEvent()
{
  saveFieldsStep2Event(this.name,this.value);

  createStep3LuceDiretta();

}


function createStep3LuceDiretta()
{
  labelActivation(".labelStep3");
  let selector = ".step3";

  let field1 ="materiale frontalino";

  createTitle(selector, 'materialeFrontalino', 'Materiale frontalino :');
  createCustomDiv(selector, "customDivMaterialeFrontalinoStep3");

  selector = '#customDivMaterialeFrontalinoStep3';
  radioButtonInputGeneratorOnChage(selector, "plexiGlassOpale", field1,  "Plexi-glass opale", createConsequenceMaterialeFrontalinoEvent);
  radioButtonInputGeneratorOnChage(selector,'plexiGlassColorato', field1, "Plexi-glass colorato (3MM)", createConsequenceMaterialeFrontalinoEvent);



}

function createConsequenceMaterialeFrontalinoEvent()
{
  resetFieldsStep3();

  saveFieldsStep3Event(this.name,this.value);

  let selector = ".step3";
  if(this.value === 'Plexi-glass opale') {
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
  else
  {
    if($('#spessoreFrontalino').length !== 0) {
      $('#spessoreFrontalino').remove();
      $('#customDivSpessoreFrontalinoStep3').remove();
    }
    }
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

  if($('#verniciaturaCostaLaterale').length === 0) {
    createTitle('.step2', "verniciaturaCostaLaterale", "Verniciatura costa laterale :");
    createCustomDiv('.step2', "customDivVerniciaturaCostaLateraleStep2");

    radioButtonInputGeneratorOnChage(selector, 'grezzo', field4, "Grezzo", createConsequenceMaterialeCostaLateraleEvent);
    radioButtonInputGeneratorOnChage(selector, "verniciata", field4, "Verniciata", createConsequenceMaterialeCostaLateraleEvent);
  }

  if(step2Storage['Materiale costa laterale'] !== 'Alluminio') {
    if($('#galvanico').length === 0)
      radioButtonInputGeneratorOnChage(selector, 'galvanico', field4, "Galvanico", createConsequenceMaterialeCostaLateraleEvent);
  }
  else
  {
    if($('#galvanico').length !== 0) {
      $('#galvanico').remove();
      $('label[for=galvanico]').remove();
    }

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
  radioButtonInputGeneratorOnChage(selector,'luceDiretta', field3, "Luce diretta", saveFieldsStep1Event);
  radioButtonInputGeneratorOnChage(selector, "luceRiflessa", field3,  "Luce riflessa", saveFieldsStep1Event);
  radioButtonInputGeneratorOnChage(selector,'massello', field3, "Massello", saveFieldsStep1Event);

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
        css: {'width':'50%', 'float':'left'},
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
  console.log(step2Storage[name])
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


  if($('input[value="'+value+'"]').checked) {

    if( $('input[value="'+value+'"]') != null)
      $('input[value="'+value+'"]').prop('checked' , false);
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
  console.log(step3Storage[name])
}

function resetFieldsStep3()
{

  for (let property in step3Storage) {

    delete step3Storage[property];

  }

}

function saveFieldsStep4Event()
{

  if(this.checked) {

   if( $('input[value="'+step4Storage[this.name]+'"]') != null)
    $('input[value="'+step4Storage[this.name]+'"]').prop('checked' , false);
    step4Storage[this.name] = this.value;

  }
  else {
    step4Storage[this.name] = null;
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


  console.log(step5Storage[this.name]);
}

function resetFieldsStep5()
{

  for (let property in step5Storage) {

    delete step5Storage[property];

  }

}
