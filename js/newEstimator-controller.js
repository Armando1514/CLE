
let step0Storage = {};
let step1Storage = {};
let step2Storage = {};



createStep2LuceDiretta();

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
      createMaterialeCostaLateraleStep2()
      break;
    case 'Flange':

      break;

    case 'Profilo estroso':

        break;
  }
}


function createMaterialeCostaLateraleStep2()
{
  let field2 = "Materiale costa laterale";
  let field3 = "Bordatura Outline";

  step2Storage[field3] = null;

  createTitle('.step2', "materialeCostaLaterale", "Materiale costa laterale :");
  createCustomDiv('.step2', "customDivMaterialeCostaLateraleStep2");
  let selector = '#customDivMaterialeCostaLateraleStep2';

  radioButtonInputGeneratorOnChage(selector,'alluminio', field2, "Alluminio", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector, "inox", field2,  "Inox", createConsequenceMaterialeCostaLateraleEvent);
  radioButtonInputGeneratorOnChage(selector,'ottone', field2, "Ottone", createConsequenceMaterialeCostaLateraleEvent);


  createTitle('.step2', "bordaturaCostaLaterale", "Bordatura outline costa laterale (OPZIONALE) :");
  createCustomDiv('.step2', "customDivBordaturaCostaLateraleStep2");
  selector = '#customDivBordaturaCostaLateraleStep2';
  checkboxInputGeneratorOnChange(selector,'bordaturaOutline', field3, "Bordatura outline", saveOptionalFieldsStep2Event);

}

function createConsequenceMaterialeCostaLateraleEvent()
{
  saveFieldsStep2Event(this.name,this.value);
  if($('#misuraCostaLaterale').length === 0) {
    createTitle('.step2', "misuraCostaLaterale", "Misura costa laterale :");
    createCustomDiv('.step2', "customDivMisuraCostaLateraleStep2");
  }

    let options = [];
    options.push("25MM");
    options.push("40MM");
    options.push("60MM");
    options.push("80MM");
    options.push("100MM");
    options.push("150MM");
    options.push("200MM");


  createOptionsSelectInputGeneratorOnChange('#customDivMisuraCostaLateraleStep2',"selectMeasureCostaLaterale",options,createConsequenceMisuraCostaLateraleEvent)

}

function createConsequenceMisuraCostaLateraleEvent()
{
  saveFieldsStep2Event(this.name,this.value);

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

  if(this.checked)
  step2Storage[this.name] = this.value;
  else
    step2Storage[this.name] = null;

  console.log(step2Storage[this.name])
}


function resetFieldsStep2()
{

  for (let property in step2Storage) {

    delete step2Storage[property];

  }

}
