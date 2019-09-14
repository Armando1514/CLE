var totalArea = 0 ;
var totalPerimeter = 0;


// cost for minute
const machineCost = 0.50;
const employerCost = 0.42;

/* HYPERVISOR CONSTANTS */
let materialsCost = [];
let processCost = [];

const stampatelloBaseCoefficient = 0.95 ;
const stampatelloCompostoBaseCoefficient = 0.95 ;
const corsivoBaseCoefficient = 1.1 ;

const stampatelloPerimeterCoefficient = 5 ;
const stampatelloCompostoPerimeterCoefficient = 6 ;
const corsivoPerimeterCoefficient = 7.1 ;
/* END HYPERVISOR CONSTANTS */


/* costa Laterale materials cost (MM)*/
const alluminio = 0.013;
const inox = 0.018;
const ottone = 0.056;

const lamieraZincata = 0.007;// ask to change

const costVernice = 10; // 10 euros for MQ


const alluminioVerniciato = 0.014;





const alluminioMQ = 20; //20 euros for MQ
const inoxMQ = 25; //25 euros for MQ
const ottoneMQ = 70; //70 euros for MQ
const lamieraZincataMQ = 12  // 12 euros for MQ

// ask to change because are not in the functional requirements
const processCostAlluminio = 0.5; // MT/MIN
const processCostOttone = 0.5;
const processCostInox = 0.5;
const processCostLamieraZincata = 0.5;
// until here.

const letterForm37 = 3.25; // 3.25 euros for MT
const letterForm60 = 3.90; //3.90 euros for MT
const letterBox60 = 2.58; //2.58 euros for MT
const letterBox100 =4.29; //4.29 euros for MT


const processCostVerniciatura = 5; // 5 euros min/ MT

const processCostSagomaturaBender = 8; // 8  min/ MT

const processCostIncollaggioFrontalino = 10; // 10 euros min/ MT


const inoxFinituraLucida = 10; // 10 euros for  MT

const inoxFinituraSpazzolata = 10; // 10 euros for MT

const ottoneFinituraGalvanica = 30; // 30 euros for MT

/* extra Costa laterale  */
const cornicePerimetrale = 0.013;

const processCostSaldaturaBordaturaOutline = 20; // min/ MT




/* FRONTALINO LUCE DIRETTA CONSTANTS */
const costPlexiGlassOpaleFrontalino = 5; // 5 euros for MQ
const processCostPlexiGlassOpaleFrontalino = 4; // 4 MT/MIN

const costPlexiGlassColoratoFrontalino = 7; // 7 euros for MQ
const processCostPlexiGlassColoratoFrontalino = 4; // 4 MT/MIN

/* extra Frontalino */
const bordaturaOutline = 20; // 20 EUROS FOR MQ

/* END FRONTALINO LUCE DIRETTA CONSTANTS */

/* FONDELLO  CONSTANTS */
const costPVC10MMBiancoFondello = 12; // 12 euros MQ
const processCostPVC10MMBiancoFondello = 2; // 2 MT/MIN
const processCostAlluminioComposito = 1 // 1 MT/MIN

const costAlluminioComposito3MMFondello = 10; // 10 euros for MQ

const costDistanziatoreFondello = 4; //4 euros for each letter

/* END FONDELLO CONSTANTS */


/*ILLUMINATION CONSTANTS */

const costBiancoIlluminazioneLuceDiretta = 4; // 4 euros for MT
const costColoratoIlluminazioneLuceDiretta = 4.5; // 4.50 euros for MT
const costRGBIlluminazioneLuceDiretta = 5; //5 euros for MT

const costIP20BiancoStripLed = 2.5; //2.50 euros for MT
const costIP20ColoratoStripLed = 2.70; //2.70 euros for MT
const costIP20RGBStripLed = 3.00;//3 euros for MT

const costIP67BiancoStripLed = 3; //3 euros for MT
const costIP67ColoratoStripLed = 3.20; //3.20 euros for MT
const costIP67RGBStripLed = 3.50;//3.50 euros for MT

const costControllerRGB = 60; //60 euros in total

const costAlimentatore = 30; //30 euros for each 10 meters


const processCostAssemblaggioLedLuceDiretta = 8; // 8 min/ MT

const processCostAssemblaggioLedMassello = 8; // 8 min/ MT

/* END ILLUMINATION CONSTANTS */


/* costa laterale luce diretta calculations*/
function calculateCostaLateraleLuceDiretta(category, material, depth, finitura, colore, extra)
{
  removeCostaLateraleFields();
  materialsCost["Step 2"] = [];
  processCost["Step 2"] =[];


  if(depth != undefined)
        depth = parseInt(depth);



  if(category === "Profilo estruso")
  {
    calculateLetterFormAndLetterBoxProfiloEstrusoMaterialCost(depth);
    if(finitura === "Verniciata") {
        /* Calculate processing cost :
         *  1. Verniciatura della lettera (C1) */
        calculateVerniciaturaColoreARichiesta();

      materialsCost["Step 2"].push({"Costo vernice": costVernice * totalArea});
    }
  }
  else {
    calculateCostaLateraleMaterialCost(material, depth, finitura, colore);
    calculateLuceDirettaExtraCost(material, extra, depth);
  }

     /* Calculate processing cost :
      *  1. Sagomatura costa laterale con Bender (B1) */
     calculateSagomaturaCostaLateraleConBender(category);


}

/*Costa laterale luce riflessa calculations */
function calculateCostaLateraleLuceRiflessa(material, depth, finitura, colore)
{
  removeCostaLateraleFields();
  materialsCost["Step 2"] = [];
  processCost["Step 2"] =[];

  if(depth != undefined)
    depth = parseInt(depth);

  calculateCostaLateraleMaterialCost(material, depth, finitura, colore);

  /* Calculate processing cost :
   *  1. Sagomatura costa laterale con Bender (B1) */
  calculateSagomaturaCostaLateraleConBender(null);
}


function calculateLetterFormAndLetterBoxProfiloEstrusoMaterialCost(depth)
{

  let profile = step2Storage["Tipologia profilo"];
  if(profile === "Letter form")
  {
    if(depth === 37)
      materialsCost["Step 2"].push({"Costo letter form" : letterForm37 * totalPerimeter});
    else
      materialsCost["Step 2"].push({"Costo letter form" : letterForm60 * totalPerimeter});
  }
  else
  {
    if(depth === 60)
      materialsCost["Step 2"].push({"Costo letter box" : letterBox60 * totalPerimeter});
    else
      materialsCost["Step 2"].push({"Costo letter box" : letterBox100 * totalPerimeter});


  }


}


/*Sagomatura costa laterale con Bender (B1) */
function calculateSagomaturaCostaLateraleConBender(category)
{

  let cost;
  if(category ==="Flange")
  {
   cost = (processCostSagomaturaBender * totalPerimeter) * 3;
  }
  else
  {
    cost = (processCostSagomaturaBender * totalPerimeter);
  }
  processCost["Step 2"].push({"Sagomatura costa laterale con Bender" : cost * (machineCost + employerCost)});
}


function calculateCostaLateraleMaterialCost(material, depth, finitura, colore)
{
    let costCostaLaterale = 0;

  switch(material)
    {
        case "Alluminio":
          if(finitura === "Verniciata") {
            if(colore !== "Bianco" && colore !== "Nero") {
              /* Calculate processing cost :
               *  1. Verniciatura della lettera (C1) */
              calculateVerniciaturaColoreARichiesta();
              materialsCost["Step 2"].push({"Costo vernice" : costVernice * totalArea});

            }

            costCostaLaterale = alluminioVerniciato * depth;
          }
          else {

            costCostaLaterale = alluminio * depth;

          }
          break;
      case "Inox" :

          if(finitura === "Lucida")
          {
          materialsCost ["Step 2"].push({"Costo finitura lucida": inoxFinituraLucida * totalPerimeter});
          }
          else
          {

          materialsCost["Step 2"].push({"Costo finitura spazzolata" :inoxFinituraSpazzolata * totalPerimeter});

          }
          costCostaLaterale =  inox * depth;
          break;
      case "Ottone" :

          if(finitura === "Galvanico")
          materialsCost["Step 2"].push({"Costo finitura galvanico" : ottoneFinituraGalvanica * totalPerimeter});

          costCostaLaterale =  ottone * depth;

          break;
      case "Lamiera zincata" :
        if(finitura === "Verniciata") {
          if(colore !== "Bianco" && colore !== "Nero") {
            /* Calculate processing cost :
             *  1. Verniciatura della lettera (C1) */
            calculateVerniciaturaColoreARichiesta();
            materialsCost["Step 2"].push({"Costo vernice" : costVernice * totalArea});

          }


          costCostaLaterale = lamieraZincata * depth;
        }
        else {


          costCostaLaterale = lamieraZincata * depth;

        }
          break;
  }

  let obj = {};
  obj["Costo materiale " + material + " costa laterale" ]= costCostaLaterale * totalPerimeter;
  materialsCost["Step 2"].push(obj);
}



/* Extra cost luce diretta (bordatura outline) and cornice perimetrale */
function calculateLuceDirettaExtraCost(material, extra, depth)
{


  if(extra === "Bordatura outline saldata su fronte"){

    /* Calculate material cost bordatura outline */

    let materialCost;

    switch(material)
    {
      case "Alluminio":
        materialCost = alluminioMQ;
        break;
      case "Inox" :
        materialCost = inoxMQ;
        break;
      case "Ottone" :
        materialCost = ottoneMQ ;
        break;
    }

    materialsCost["Step 2"].push({"Costo bordatura outline" : materialCost * totalArea});

    /* Calculate processing cost :
    *  1. Taglio con fresa della bordatura Outline (A3)
    *  2. Saldatura della bordatura Outline (B3) */
    taglioConFresaBordaturaOutline(material, depth);
    saldaturaDellaBordaturaOutline(material);

  }

  if(extra === "Cornice perimetrale")
  {

    let materialCost = cornicePerimetrale * depth;

    materialsCost["Step 2"].push({"Costo cornice perimetrale" : materialCost * totalPerimeter});
  }

}





/* Calculate processing cost taglio con fresa bordatura outline  (A3)*/
function saldaturaDellaBordaturaOutline()
{
  processCost["Step 2"].push({"Saldatura bordatura outline" :(processCostSaldaturaBordaturaOutline * totalPerimeter) * (employerCost + machineCost)});
}

/* Calculate processing cost taglio con fresa bordatura outline  (B3)*/
function taglioConFresaBordaturaOutline(material)
{

  let time ;
  switch(material)
  {
    case "Alluminio":
      time = ((totalPerimeter * 2) / processCostAlluminio ) ;
      break;
    case "Inox" :
      time =  ((totalPerimeter * 2) / processCostInox ) ;
      break;
    case "Ottone" :
      time =  ((totalPerimeter * 2) / processCostOttone ) ;
      break;
  }

  processCost["Step 2"].push({"Taglio con fresa bordatura outline" : (time * machineCost) + (time * employerCost)});

}

/* calculate process of verniciatura (C1) */
function calculateVerniciaturaColoreARichiesta()
{

  processCost["Step 2"].push({"Verniciatura su richiesta" :(processCostVerniciatura * totalPerimeter ) * employerCost });


}


function removeCostaLateraleFields()
{
  materialsCost["Step 2"] = [] ;
   processCost["Step 2"] = [];
}




/* END COSTA LATERALE CALCULATIONS*/



/* FRONTALINO LUCE DIRETTA CALCULATIONS */


function calculateFrontalino(material, depth)
{

  removeLuceDirettaFrontalinoFields();

    materialsCost["Step 3"] = [];
   processCost["Step 3"] = [];


    calculateFrontalinoLuceDirettaMaterialsCost(material, depth);

}


function calculateFrontalinoLuceRiflessa(material, depth)
{

  removeLuceDirettaFrontalinoFields();

  materialsCost["Step 3"] = [];
  processCost["Step 3"] = [];


  calculateFrontalinoLuceRiflessaMaterialsCost(material, depth);

}



function calculateFrontalinoLuceRiflessaMaterialsCost(material, depth)
{

  if(depth !== undefined)
    depth = parseInt(depth);

  let costFrontalino = 0;
  switch(material)
  {
    case "Plexi glass opale":
      costFrontalino = costPlexiGlassOpaleFrontalino ;
      break;
    case "Plexi glass opale (3MM)" :
      costFrontalino =  costPlexiGlassOpaleFrontalino  ;
      break;
    case "Plexi glass colorato (3MM)" :
      costFrontalino =  costPlexiGlassColoratoFrontalino  ;
      break;
    case "Alluminio":
      costFrontalino = alluminioMQ ;
      break;
    case "Ottone":
      costFrontalino =  ottoneMQ ;
      break;
    case "Inox":
      costFrontalino = inoxMQ ;
      break;
    case "Lamiera zincata":
      costFrontalino = lamieraZincataMQ;
      break;
  }

  let stringMaterial = "Costo materiale " + material + " frontalino";
  let obj = {};
  obj[stringMaterial] =  costFrontalino * totalArea;
  materialsCost["Step 3"].push(obj);
  /* Calculate processing cost :
  * 1. Taglio con fresa del frontalino (A1)
  * 2. Incollaggio del frontalino su costa (B2) */
  calculateTaglioConFresaDelFrontalinoLuceRiflessa(material, depth);
  calculateIncollaggioDelFrontalino();
}


function calculateFrontalinoLuceDirettaMaterialsCost(material, depth)
{

  if(depth !== undefined)
  depth = parseInt(depth);

    let costFrontalino = 0;
    switch(material)
    {
        case "Plexi glass opale":
                costFrontalino = costPlexiGlassOpaleFrontalino * depth;
            break;
      case "Plexi glass opale (3MM)" :
        costFrontalino =  costPlexiGlassOpaleFrontalino * 3 ;
        break;
        case "Plexi glass colorato (3MM)" :
            costFrontalino =  costPlexiGlassColoratoFrontalino * 3 ;
            break;
      case "Alluminio":
        costFrontalino = alluminioMQ * depth;
        break;
      case "Ottone":
        costFrontalino =  ottoneMQ * depth;
        break;
      case "Inox":
        costFrontalino = inoxMQ * depth;
        break;
      case "Lamiera zincata":
          costFrontalino = lamieraZincataMQ * depth;
          break;
    }

    let stringMaterial = "Costo materiale " + material + " frontalino";
    let obj = {};
    obj[stringMaterial] =  costFrontalino * totalArea;
    materialsCost["Step 3"].push(obj);
    /* Calculate processing cost :
    * 1. Taglio con fresa del frontalino (A1)
    * 2. Incollaggio del frontalino su costa (B2) */
    calculateTaglioConFresaDelFrontalino(material, depth);
    calculateIncollaggioDelFrontalino();
}

/* Incollaggio del frontalino su costa (B2) */
function calculateIncollaggioDelFrontalino()
{
  processCost["Step 3"].push({"Incollaggio del frontalino sulla costa": (processCostIncollaggioFrontalino * totalPerimeter) * ( employerCost)});

}

/* Taglio con fresa del frontalino (A1)*/
function calculateTaglioConFresaDelFrontalino(material, depth)
{
    let time ;
    switch(material)
    {
        case "Plexi glass opale":
            time = (totalPerimeter / processCostPlexiGlassOpaleFrontalino ) * depth;
            break;
      case "Plexi glass opale (3MM)":
        time = (totalPerimeter / processCostPlexiGlassOpaleFrontalino ) * 3;
        break;
        case "Plexi glass colorato (3MM)" :
            time =  (totalPerimeter / processCostPlexiGlassColoratoFrontalino  ) * 3;
            break;
      case "Alluminio":
        time = (totalPerimeter / processCostAlluminio ) * depth;
        break;
      case "Ottone":
        time = (totalPerimeter / processCostOttone ) * depth;
        break;
      case "Inox":
        time = (totalPerimeter / processCostInox ) * depth;
        break;
      case "Lamiera zincata":
        time = (totalPerimeter / processCostLamieraZincata ) * depth;
        break;
    }
    processCost["Step 3"].push({"Taglio con fresa del frontalino" : (time * machineCost) + (time * employerCost)});
}

/* Taglio con fresa del frontalino (A1)*/
function calculateTaglioConFresaDelFrontalinoLuceRiflessa(material, depth)
{


  let time ;
  switch(material)
  {
    case "Plexi glass opale":
      time = (totalPerimeter / processCostPlexiGlassOpaleFrontalino ) ;
      break;
    case "Plexi glass opale (3MM)":
      time = (totalPerimeter / processCostPlexiGlassOpaleFrontalino ) ;
      break;
    case "Plexi glass colorato (3MM)" :
      time =  (totalPerimeter / processCostPlexiGlassColoratoFrontalino  ) ;
      break;
    case "Alluminio":
      time = (totalPerimeter / processCostAlluminio ) ;
      break;
    case "Ottone":
      time = (totalPerimeter / processCostOttone ) ;
      break;
    case "Inox":
      time = (totalPerimeter / processCostInox ) ;
      break;
    case "Lamiera zincata":
      time = (totalPerimeter / processCostLamieraZincata ) ;
      break;
  }
  processCost["Step 3"].push({"Taglio con fresa del frontalino" : (time * machineCost) + (time * employerCost)});
}
function removeLuceDirettaFrontalinoFields()
{

   materialsCost["Step 3"] = [] ;
   processCost["Step 3"]  = [];
}
/* END FRONTALINO LUCE DIRETTA CALCULATIONS */




/* FONDELLO CALCULATIONS */

function removeFondelloFields()
{


  materialsCost["Step 4"] = [];
   processCost["Step 4"] =[] ;

}

function calculateFondello(type, extra, numberOfLetters)
{


  removeFondelloFields();

  materialsCost["step 4"] = [];
  processCost["step 4"] = [];

  if(type !== null && type !== undefined)
    {



      calculateFondelloMaterialsCost(type);
      calculateDistanziatoreFondelloExtraCost(extra, numberOfLetters);

    }

}

function calculateFondelloMaterialsCost(type)
{
    let costFondello = 0;
    switch(type)
    {
        case "PVC 10 MM Bianco":
            costFondello = costPVC10MMBiancoFondello ;
            break
        case "Alluminio composito 3MM" :
            costFondello =  costAlluminioComposito3MMFondello;
            break
      default : //is plexiglass opale
        let numberPattern = /\d+/g;
        let depth = type.match(numberPattern)[0];
        console.log(depth);
            costFondello = costPlexiGlassOpaleFrontalino * depth;
        console.log(costFondello);

        break;
    }

    materialsCost["Step 4"].push({"Costo fondello" : costFondello * totalArea});


    /* Calculate processing cost :
    * 1. Taglio con fresa del fondello (A2)*/
    calculateTaglioConFresaDelFondello(type);
}


function calculateDistanziatoreFondelloExtraCost(extra, numberOfLetters)
{
    if (extra === null || extra === undefined)
    {
        delete materialsCost["Costo Distanziatore Fondello"];
    }
    else {

      if(numberOfLetters === undefined || numberOfLetters === null)
         numberOfLetters = 1;


        materialsCost["Step 4"].push({"Costo Distanziatore Fondello" : costDistanziatoreFondello * numberOfLetters});
    }
}


/* Taglio con fresa del fondello (A2)*/
function calculateTaglioConFresaDelFondello(material)
{


  let time ;
  switch(material)
  {
    case "PVC 10 MM Bianco":
      time = (totalPerimeter / processCostPVC10MMBiancoFondello) ;
      break
    case "Alluminio composito (3MM)" :
      time =  (totalPerimeter / processCostAlluminioComposito3MMFondelloFondello) ;
      break
    default :// is plexiglass opale

      let numberPattern = /\d+/g;
      let depth = material.match(numberPattern)[0];

      time  = (totalPerimeter / processCostPlexiGlassOpaleFrontalino) * depth ;
      break;

  }
  processCost["Step 4"].push({"Taglio con fresa del fondello": (time * machineCost) + (time * employerCost)});
}

/* END FONDELLO CALCULATIONS */

/* ILLUMINATION CALCULATIONS */

function calculationIllumination(type, illumination, extra1, extra2)
{
  removeIlluminationCost();
    materialsCost["step 5"] = [];
    processCost["step 5"] = [];

  if(illumination !== undefined && illumination !== null)
  {
    if(type === null)
    {
      calculationIlluminationLuceDirettaAndRiflessa(illumination);
      processCostAssemblaggioLed();
    }
    else
    {
      calculationIlluminationMassello(type, illumination);
      processCostAssemblaggioStripLed();
    }
    if((extra1 !== null && extra1 !== undefined) || (extra2 !== null && extra2 !== undefined))
    {
      calculateExtraCostIllumination(extra1, extra2);
    }
  }
}

function calculationIlluminationLuceDirettaAndRiflessa(illumination)
{

    let ledCost;
    switch(illumination)
    {
      case "Modulo led IP67 bianco freddo 6500 k":
      case "Modulo led IP67 bianco naturale 4000 k":
      case "Modulo led IP67 bianco caldo 3000 k":
        ledCost = costBiancoIlluminazioneLuceDiretta;
        break;

      case "Modulo led IP67 colorato rosso":
      case "Modulo led IP67 colorato verde":
      case "Modulo led IP67 colorato blu":
        ledCost = costColoratoIlluminazioneLuceDiretta;

        break;
      case "Modulo led IP67 colorato RGB":
        ledCost = costRGBIlluminazioneLuceDiretta;
        break;
    }

    materialsCost["Step 5"].push({"Costo Modulo led": ledCost * totalPerimeter});


}

function calculateExtraCostIllumination(extra1, extra2)
{
  if(extra1 === "Controller RGB" || extra2 === "Controller RGB")
  {
    materialsCost["Step 5"].push({"Costo Controller RGB": costControllerRGB});

  }
  if(extra1 === "Alimentatore" || extra2 === "Alimentatore")
  {
    let piece = totalPerimeter / 10;
    piece = Math.ceil(piece);

    materialsCost["Step 5"].push({"Costo Alimentatore" : piece  * costAlimentatore});

  }
}

/* D1 */
function processCostAssemblaggioLed()
{
  processCost["Step 5"].push({"Assemblaggio led" : (processCostAssemblaggioLedLuceDiretta * totalPerimeter) * employerCost});

}

/* D2 */
function processCostAssemblaggioStripLed()
{
  processCost["Step 4"].push({"Assemblaggio strip led": (processCostAssemblaggioLedMassello * totalPerimeter) * employerCost});

}

function removeIlluminationCost()
{

  materialsCost["Step 5"] = [];
  processCost["Step 5"] = [];


}

function removeIlluminationCostMassello()
{

  materialsCost["Step 4"] = [];
  processCost["Step 4"] = [];


}
/* END ILLUMINATION CALCULATIONS */


/* MASSELLO CALCULATIONS */
function removeMasselloLivello2()
{

  materialsCost["Step 3"] = [];
  processCost["Step 3"] = [];

}

function removeMasselloLivello1()
{

   materialsCost["Step 2"] = [];
   processCost["Step 2"] = [];

}
function calculateMasselloCost(level, type, material, color, depth)
{
  if(type !== undefined && type !== null && material !== undefined && material !== null)
  {

    if(type === "Scritta semplice 1 livello") {

      materialsCost["Step 2"] = [];
      processCost["Step 2"] = [];

      removeMasselloLivello2();
      removeIlluminationCostMassello();
      removeMasselloLivello1();
      calculateMasselloSemplice(1,material, color, depth);

    }

    else
    {

      if(level === 1)
      {

        if(materialsCost["Step 2"] === undefined) {
          console.log("sdsadsaadsAA");
          materialsCost["Step 2"] = [];
          processCost["Step 2"] = [];
          materialsCost["Step 4"] = [];
          processCost["Step 4"] = [];
          materialsCost["Step 3"] = [];
          processCost["Step 3"] = [];
        }
        removeMasselloLivello1();
        removeIlluminationCostMassello();

        calculateIncollaggioDelFrontalino();
        calculateMasselloSemplice(1, material, color, depth);

      }

      if(level === 2) {

        removeMasselloLivello2();
        calculateMasselloSemplice(2, material, color, depth);
      }
    }
  }

}

function calculateMasselloSemplice(level, material, color, depth)
{

  depth = parseInt(depth);
 let stepLevel = "Step " + (level + 1);

  let materialCost;
  switch(material)
  {
    case "Plexi glass":
      if(color === "Opale" || color === "Trasparente")
        materialCost = costPlexiGlassOpaleFrontalino * depth ;
      else {


        materialCost = costPlexiGlassColoratoFrontalino * depth;
      }
      break;
    case "PVC":
        if(color !=="Bianco") {
          let masselloString = "Verniciatura su richiesta, livello " + level;
          let result = calculateVerniciaturaColoreARichiestaMassello();
          let obj = {};
          obj[masselloString] = result;

          processCost[stepLevel].push(obj);

          materialsCost[stepLevel].push({"Costo vernice" : costVernice * totalArea});


        }
      materialCost = costPVC10MMBiancoFondello * depth ;
      break;
    case "Alluminio composito":

      if(color !== "Bianco" && color !== "Nero") {
        let masselloString = "Verniciatura su richiesta, livello " + level;
        let result = calculateVerniciaturaColoreARichiestaMassello();
        let obj = {};
        obj[masselloString] = result;
        processCost[stepLevel].push(obj);
        materialsCost[stepLevel].push({"Costo vernice" : costVernice * totalArea});
        materialCost = costPlexiGlassColoratoFrontalino * depth ;

      }
      if(color === "Argento spazzolato" || color === "Oro spazzolato" || color === "Rame spazzolato")
      {
        let masselloString = "Costo finitura spazzolata, livello " + level;
        let obj = {};
        obj[masselloString] = inoxFinituraSpazzolata * totalPerimeter;
        materialsCost[stepLevel].push(obj);


      }

      materialCost = costAlluminioComposito3MMFondello * depth ;
        break;
  }

  let masselloString = "Costo " + material + ", livello "+ level;
  let obj = {};
  obj[masselloString] = materialCost * totalArea;
  materialsCost[stepLevel].push(obj);;

  calculateTaglioConFresaDelFrontalinoMassello(level, material, depth);

}


/* Taglio con fresa del frontalino (A1)*/
function calculateTaglioConFresaDelFrontalinoMassello(level, material, depth)
{
  let stepLevel = "Step " + (level + 1);

  depth = parseInt(depth);

  let time ;
  switch(material)
  {
    case "Plexi glass":
      time = (totalPerimeter / processCostPlexiGlassOpaleFrontalino ) * depth;
      break
    case "PVC" :
      time =  (totalPerimeter / processCostPVC10MMBiancoFondello  ) ;
      break
    case "Alluminio composito":
      time = (totalPerimeter / processCostAlluminioComposito ) ;
      break;
  }
  let masselloString = "Taglio con fresa del frontalino, livello "+level;
  let value = (time * machineCost) + (time * employerCost);
  let obj = {};
  obj[masselloString] = value;
    processCost[stepLevel].push(obj);
}


function calculationIlluminationMassello(type, illumination)
{


removeIlluminationCostMassello();


  let ledCost;
  if(type === "Strip led IP67 (per esterno, waterproof)") {
    switch (illumination) {
      case "Bianco freddo 6500 k":
      case "Bianco naturale 4000 k":
      case "Bianco caldo 3000 k":
      case "Bianco 3000 k":
        ledCost = costIP67BiancoStripLed;
        break;

      case "Colorato rosso":
      case "Colorato verde":
      case "Colorato blu":
        ledCost = costIP67ColoratoStripLed;

        break;
      case "Colorato RGB":
        ledCost = costIP67RGBStripLed;
        break;
      default:
        ledCost = costIP67BiancoStripLed;
    }

    materialsCost["Step 4"].push({"Costo Modulo strip led IP67" : ledCost * totalPerimeter});

  }
  else {
    switch (illumination) {
      case "Bianco freddo 6500 k":
      case "Bianco naturale 4000 k":
      case "Bianco caldo 3000 k":
      case "Bianco 3000 k":
        ledCost = costIP20BiancoStripLed;
        break;

      case "Colorato rosso":
      case "Colorato verde":
      case "Colorato blu":
        ledCost = costIP20ColoratoStripLed;

        break;
      case "Colorato RGB":
        ledCost = costIP20RGBStripLed;
        break;
      default:
        ledCost = costIP20BiancoStripLed;

    }
    materialsCost["Step 4"].push({"Costo Modulo strip led IP20" : ledCost * totalPerimeter});


  }
}

/* calculate process of verniciatura (C1) */
function calculateVerniciaturaColoreARichiestaMassello()
{

  return (processCostVerniciatura * totalPerimeter ) * employerCost ;


}

/* END MASSELLO CALCULATIONS */


/* HYPERVISOR PARAMETERS, AREA AND PERIMETER*/

function calculateHypervisorParametersLetters(h, font)
{

        areaLetterCalculation(h, font);
        perimeterLetterCalculation(h, font);

}

function calculateHypervisorParametersElementoSagomato(b, h, p)
{
    areaElementoSagomato(b, h);
    setPerimeterElementoSagomato(p);

}

function baseLetterCalculation(h, font)
{

   switch(font)
   {
       case "Stampatello semplice":
           return h * stampatelloBaseCoefficient;
           break
       case "Elaborato composto" :
           return h * stampatelloCompostoBaseCoefficient;
           break
       case "Corsivo" :
           return h * corsivoBaseCoefficient;
           break
   }

}

function areaLetterCalculation(h, font)
{
    h = centimetersToMeters(h);

    let base = baseLetterCalculation(h, font);

   totalArea = totalArea +  base * h;
   console.log("Area: " + totalArea);
}

function perimeterLetterCalculation(h, font)
{
    h = centimetersToMeters(h);
    let tmp = totalPerimeter;
    switch(font)
    {
        case "Stampatello semplice":
            totalPerimeter =  tmp + (h * stampatelloPerimeterCoefficient);
            break
        case "Elaborato composto" :
            totalPerimeter = tmp + (h * stampatelloCompostoPerimeterCoefficient);
            break
        case "Corsivo" :
            totalPerimeter = tmp + (h * corsivoPerimeterCoefficient);
            break
    }
    console.log("Perimetro: " + totalPerimeter);

}

function resetPerimeterAndAreaLetter()
{
    totalPerimeter = 0;
    totalArea = 0;
}


function areaElementoSagomato(b, h)
{
    h = centimetersToMeters(h);
    b = centimetersToMeters(b);

    totalArea = b * h;
    console.log("Area: " + totalArea);

}

function setPerimeterElementoSagomato(p)
{
    totalPerimeter =  centimetersToMeters(p);
    console.log("Perimetro: " + totalPerimeter);

}


function centimetersToMeters(number)
{
    meter = number / 100;
    return meter.toFixed(2);
}
/* END HYPERVISOR PARAMETERS */


function removeAllTheCostAndProcessFields()
{

  for (x in processCost)
  {
    delete processCost[x];
  }
  for(x in materialsCost)
  {
    delete materialsCost[x];
  }
}
