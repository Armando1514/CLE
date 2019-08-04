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

const lamieraZincata = 0.042;// ask to change



const alluminioVerniciato = 0.014;

const lamieraZincataVerniciata = 0.043;// ask to change




const alluminioMQ = 20; //20 euros for MQ
const inoxMQ = 25; //25 euros for MQ
const ottoneMQ = 70; //70 euros for MQ
const lamieraZincataMQ = 12  // 12 euros for MQ

// ask to change because are not in the functional requirements
const processCostAlluminio = 0.5; // MT/MIN
const processCostOttone = 0.8;
const processCostInox = 0.9;
const processCostLamieraZincata = 0.6;
// until here.

const letterForm37 = 3.25; // 3.25 euros for MT
const letterForm60 = 3.90; //3.90 euros for MT
const letterBox60 = 2.58; //2.58 euros for MT
const letterBox100 =4.29; //4.29 euros for MT


const processCostVerniciatura = 5; // 5 euros min/ MT

const processCostSagomaturaBender = 8; // 8 euros min/ MT

const processCostIncollaggioFrontalino = 10; // 10 euros min/ MT


const inoxFinituraLucida = 10; // 10 euros for  MT
const inoxFinituraSpazzolata = 10; // 10 euros for MT
const ottoneFinituraGalvanica = 38; // 38 euros for MT

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
const costPVC10MMBiancoFondello = 12; // 12 euros for MQ
const processCostPVC10MMBiancoFondello = 2; // 1 MT/MIN

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

    if(depth != undefined)
        depth = parseInt(depth);



  if(category === "Profilo estruso")
  {
    calculateLetterFormAndLetterBoxProfiloEstrusoMaterialCost(depth);
    if(finitura === "Verniciata")
    calculateVerniciaturaColoreARichiesta();
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
      materialsCost ["Costo letter form"] = letterForm37 * totalPerimeter;
    else
      materialsCost ["Costo letter form"] = letterForm60 * totalPerimeter;
    console.log("Costo letter form:" + materialsCost ["Costo letter form"] )
  }
  else
  {
    if(depth === 60)
      materialsCost ["Costo letter box"] = letterBox60 * totalPerimeter;
    else
      materialsCost ["Costo letter box"] = letterBox100 * totalPerimeter;

    console.log("Costo letter box:" + materialsCost ["Costo letter box"] )

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
  processCost["Sagomatura costa laterale con Bender"] = cost * (machineCost + employerCost);
  console.log("Sagomatura costa laterale con Bender : " + processCost["Sagomatura costa laterale con Bender"]);
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
            }

            costCostaLaterale = alluminioVerniciato * depth;
          }
          else {

            delete processCost["Verniciatura su richiesta"];

            costCostaLaterale = alluminio * depth;

          }
          break;
      case "Inox" :

          if(finitura === "Lucida")
          {
          materialsCost ["Costo finitura lucida"] = inoxFinituraLucida * totalPerimeter;
          console.log("Costo finitura lucida: " +  materialsCost ["Costo finitura lucida"])
          }
          else
          {

          materialsCost["Costo finitura spazzolata"] = inoxFinituraSpazzolata * totalPerimeter;
            console.log("Costo finitura spazzolata: " +  materialsCost ["Costo finitura spazzolata"])

          }
          costCostaLaterale =  inox * depth;
          break;
      case "Ottone" :

          if(finitura === "Galvanico")
          materialsCost ["Costo finitura galvanico"] = ottoneFinituraGalvanica * totalPerimeter;
        console.log("Costo finitura galvanico: " +  materialsCost ["Costo finitura galvanico"])

          costCostaLaterale =  ottone * depth;

          break;
      case "Lamiera zincata" :
        if(finitura === "Verniciata") {
          if(colore !== "Bianco" && colore !== "Nero") {
            /* Calculate processing cost :
             *  1. Verniciatura della lettera (C1) */
            calculateVerniciaturaColoreARichiesta();
          }

          costCostaLaterale = lamieraZincataVerniciata * depth;
        }
        else {

          delete processCost["Verniciatura su richiesta"];

          costCostaLaterale = lamieraZincata * depth;

        }
          break;
  }

  materialsCost["Costo "+ material] = costCostaLaterale * totalPerimeter;
  console.log("Costo " + material + ": " + materialsCost["Costo "+ material]);
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

    materialsCost["Costo  bordatura outline"] = materialCost * totalArea;

    /* Calculate processing cost :
    *  1. Taglio con fresa della bordatura Outline (A3)
    *  2. Saldatura della bordatura Outline (B3) */
    taglioConFresaBordaturaOutline(material, depth);
    saldaturaDellaBordaturaOutline(material);

    console.log("Costo Bordatura outline saldata su fronte " + materialsCost["Costo  bordatura outline"])
  }

  if(extra === "Cornice perimetrale")
  {
    let materialCost = cornicePerimetrale * depth;

    materialsCost["Costo cornice perimetrale"] = materialCost * totalPerimeter;
    console.log("Costo cornice perimetrale: " + materialsCost["Costo cornice perimetrale"]);
  }
}





/* Calculate processing cost taglio con fresa bordatura outline  (A3)*/
function saldaturaDellaBordaturaOutline()
{
  processCost["Saldatura bordatura outline"] = (processCostSaldaturaBordaturaOutline * totalPerimeter) * (employerCost + machineCost);
  console.log("Saldatura bordatura outline: " + processCost["Saldatura bordatura outline"]);
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

  processCost["Taglio con fresa bordatura outline"] = (time * machineCost) + (time * employerCost);
  console.log("Taglio con fresa bordatura outline " + processCost["Taglio con fresa bordatura outline"])

}

/* calculate process of verniciatura (C1) */
function calculateVerniciaturaColoreARichiesta()
{

  processCost["Verniciatura su richiesta"] = (processCostVerniciatura * totalPerimeter ) * employerCost ;

  console.log("Verniciatura su richeista: " + processCost["Verniciatura su richiesta"]);
}


function removeCostaLateraleFields()
{
  delete processCost["Verniciatura su richiesta"];
  delete materialsCost ["Costo finitura lucida"];
  delete materialsCost["Costo finitura spazzolata"];
  delete materialsCost ["Costo finitura galvanico"];
  delete materialsCost["Costo  bordatura outline"];
  delete processCost["Taglio con fresa bordatura outline"];
  delete materialsCost["Costo cornice perimetrale"];
  delete materialsCost ["Costo letter form"];
  delete materialsCost ["Costo letter box"];
}




/* END COSTA LATERALE CALCULATIONS*/



/* FRONTALINO LUCE DIRETTA CALCULATIONS */


function calculateFrontalino(material, depth)
{
    if(depth !== undefined)
        depth = parseInt(depth);

    calculateFrontalinoLuceDirettaMaterialsCost(material, depth);

}

function calculateFrontalinoLuceDirettaMaterialsCost(material, depth)
{
    let costFrontalino = 0;
    switch(material)
    {
        case "Plexi glass opale":
                costFrontalino = costPlexiGlassOpaleFrontalino * depth;
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

    materialsCost["Costo materiale frontalino, " + material] = costFrontalino * totalArea;
    console.log("Costo materiale frontalino, " + material + ": " + materialsCost["Costo materiale frontalino, " + material])
    /* Calculate processing cost :
    * 1. Taglio con fresa del frontalino (A1)
    * 2. Incollaggio del frontalino su costa (B2) */
    calculateTaglioConFresaDelFrontalino(material, depth);
    calculateIncollaggioDelFrontalino();
}

/* Incollaggio del frontalino su costa (B2) */
function calculateIncollaggioDelFrontalino()
{
  processCost["Incollaggio del frontalino sulla costa"] = (processCostIncollaggioFrontalino * totalPerimeter) * (machineCost + employerCost);

  console.log("Incollaggio del frontalino sulla costa: " + processCostIncollaggioFrontalino * totalPerimeter);
}

/* Taglio con fresa del frontalino (A1)*/
function calculateTaglioConFresaDelFrontalino(material, depth)
{
    let time ;
    switch(material)
    {
        case "Plexi glass opale":
            time = (totalPerimeter / processCostPlexiGlassOpaleFrontalino ) * depth;
            break
        case "Plexi glass colorato (3MM)" :
            time =  (totalPerimeter / processCostPlexiGlassColoratoFrontalino  ) * 3;
            break
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
    processCost["Taglio con fresa del frontalino"] = (time * machineCost) + (time * employerCost);
    console.log("Taglio con fresa del frontalino " + processCost["Taglio con fresa del frontalino"] )
}

function removeLuceDirettaFrontalinoFields()
{
  delete processCost["Incollaggio del frontalino sulla costa"];
  delete processCost["Taglio con fresa del frontalino"];
}
/* END FRONTALINO LUCE DIRETTA CALCULATIONS */




/* FONDELLO CALCULATIONS */

function removeFondelloFields()
{
  delete materialsCost["Costo Distanziatore Fondello"];
  delete materialsCost["Costo fondello"];
  delete processCost["Taglio con fresa del fondello"];
}

function calculateFondello(type, extra, numberOfLetters)
{
  removeFondelloFields();

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
            costFondello = costPlexiGlassOpaleFrontalino * depth;
        break;
    }

    materialsCost["Costo fondello"] = costFondello * totalArea;

    console.log("Costo fondello" + materialsCost["Costo fondello"]);

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

        materialsCost["Costo Distanziatore Fondello"] = costDistanziatoreFondello * numberOfLetters;
        console.log("Costo distanziatore fodnello: " + materialsCost["Costo Distanziatore Fondello"])
    }
}


/* Taglio con fresa del fondello (A2)*/
function calculateTaglioConFresaDelFondello(material)
{


  let time ;
  switch(material)
  {
    case "PVC 10 MM Bianco":
      time = (totalPerimeter / processCostPVC10MMBiancoFondello) * 10;
      break
    case "Alluminio composito (3MM)" :
      time =  (totalPerimeter / processCostAlluminioComposito3MMFondelloFondello) * 3;
      break
    default :// is plexiglass opale

      let numberPattern = /\d+/g;
      let depth = material.match(numberPattern)[0];

      time  = (totalPerimeter / processCostPlexiGlassOpaleFrontalino) * depth;
      break;

  }
  processCost["Taglio con fresa del fondello"] = (time * machineCost) + (time * employerCost);
  console.log("Taglio con fresa del fondello: " + processCost["Taglio con fresa del fondello"]);
}

/* END FONDELLO CALCULATIONS */

/* ILLUMINATION CALCULATIONS */

function calculationIllumination(type, illumination, extra1, extra2)
{
  removeIlluminationCost();
  console.log("extra" + extra1);
  console.log("extra" + extra2);

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
    if((extra1 !== null && extra1 !== undefined) || (extra2== null && extra2 !== undefined))
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
      case "Modulo led IP67 bianco  caldo 3000 k":
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

    materialsCost["Costo Modulo led"] = ledCost * totalPerimeter;
    console.log("Costo Modulo led " +  materialsCost["Costo Modulo led"]);


}
function calculationIlluminationMassello(type, illumination)
{

    let ledCost;
    if(type === "Strip led IP67 (per esterno, waterproof)") {
      switch (illumination) {
        case "Bianco freddo 6500 k":
        case "Bianco naturale 4000 k":
        case "Bianco  caldo 3000 k":
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
      }

      materialsCost["Costo Modulo strip led IP67"] = ledCost * totalPerimeter;
      console.log("Costo Modulo strip led IP67 " +  materialsCost["Costo Modulo strip led IP67"]);

    }
    else {
      switch (illumination) {
        case "Bianco freddo 6500 k":
        case "Bianco naturale 4000 k":
        case "Bianco  caldo 3000 k":
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
      }
      materialsCost["Costo Modulo strip led IP20"] = ledCost * totalPerimeter;
      console.log("Costo Modulo strip led IP20 " +  materialsCost["Costo Modulo strip led IP20"]);

    }
}

function calculateExtraCostIllumination(extra1, extra2)
{
  if(extra1 === "Controller RGB" || extra2 === "Controller RGB")
  {
    materialsCost["Costo Controller RGB"] = costControllerRGB;
    console.log("Costo controller RGB " + materialsCost["Costo Controller RGB"])
  }
  if(extra1 === "Alimentatore" || extra2 === "Alimentatore")
  {
    let piece = totalPerimeter / 10;
    piece = Math.ceil(piece);

    console.log("Prezzo t: " + piece);
    materialsCost["Costo Alimentatore"] = piece  * costAlimentatore;
    console.log("Costo Alimentatore" + materialsCost["Costo Alimentatore"])

  }
}

/* D1 */
function processCostAssemblaggioLed()
{
  processCost["Assemblaggio led"] = (processCostAssemblaggioLedLuceDiretta * totalPerimeter) * employerCost;
  console.log("Assemblaggio led" + processCost["Assemblaggio led"])

}

/* D2 */
function processCostAssemblaggioStripLed()
{
  processCost["Assemblaggio strip led"] = (processCostAssemblaggioLedMassello * totalPerimeter) * employerCost;
  console.log("Assemblaggio strip led" + processCost["Assemblaggio strip led"])

}

function removeIlluminationCost()
{
  delete materialsCost["Costo Alimentatore"];
  delete materialsCost["Costo Controller RGB"];
  delete materialsCost["Costo Modulo strip led IP20"];
  delete materialsCost["Costo Modulo strip led IP67"];
  delete materialsCost["Costo Modulo led"];
  delete processCost["Assemblaggio led"];
  delete processCost["Assemblaggio strip led"];

}
/* END ILLUMINATION CALCULATIONS */




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
  removeCostaLateraleFields();
  removeLuceDirettaFrontalinoFields();
  removeFondelloFields();
  removeIlluminationCost();
}
