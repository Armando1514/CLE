var totalArea = 0 ;
var totalPerimeter = 0;


// cost for minute
const machineCost = 0.50;
const employerCost = 0.40;

/* HYPERVISOR CONSTANTS */
let materialsCost = [];
let processCost = [];

const stampatelloBaseCoefficient = 0.95 ;
const stampatelloCompostoBaseCoefficient = 0.95 ;
const corsivoBaseCoefficient = 1.1 ;

const stampatelloPerimeterCoefficient = 3.6 ;
const stampatelloCompostoPerimeterCoefficient = 5.2 ;
const corsivoPerimeterCoefficient = 7.1 ;
/* END HYPERVISOR CONSTANTS */


/* COSTA LATERALE CONSTANTS */
/* costa Laterale materials cost (MM)*/
const alluminio = 0.013;
const inox = 0.018;
const ottone = 0.056;
const lamieraZincata = 0;

const alluminioVerniciato = 0.014;

/* extra Costa laterale  */
const cornicePerimetrale = 0.013;

/* END COSTA LATERALE CONSTANTS */

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
const processCostAlluminioComposito3MMFondello = 1; // 1 MT/MIN

const costDistanziatoreFondello = 4; //4 euros for each letter

/* END FONDELLO CONSTANTS */






/* COSTA LATERALE CALCULATIONS*/
function calculateCostaLaterle(material, depth, finitura, extra)
{
    if(depth != undefined)
        depth = parseInt(depth);
    calculateCostaLateraleMaterialCost(material, depth, finitura);
    calculateCornicePerimetraleCostaLateraleCost(extra, depth);
}

function calculateCostaLateraleMaterialCost(material, depth, finitura)
{

    let costCostaLaterale = 0;
    switch(material)
    {
        case "Alluminio":
            if(finitura === "Verniciata")
                costCostaLaterale = alluminioVerniciato * depth;
            else
                 costCostaLaterale = alluminio * depth;
            break
        case "Inox" :
            costCostaLaterale =  inox * depth;
            break
        case "Ottone" :
            costCostaLaterale =  ottone * depth;
            break
        case "Lamiera zincata" :
            costCostaLaterale = lamieraZincata * depth;
            break
    }

    materialsCost["Costo "+ material] = costCostaLaterale * totalPerimeter;
    console.log("Costo " + material + ": " + materialsCost["Costo "+ material]);
}

function calculateCornicePerimetraleCostaLateraleCost(extra, depth)
{
    if(extra === null || extra === undefined)
    {
        delete materialsCost["Costo cornice perimetrale"];

    }
    else {
        costExtraCostaLaterale = cornicePerimetrale * depth;

        materialsCost["Costo cornice perimetrale"] = costExtraCostaLaterale * totalPerimeter;
        console.log("Costo cornice perimetrale: " + materialsCost["Costo cornice perimetrale"]);

    }
}


/* END COSTA LATERALE CALCULATIONS*/




/* FRONTALINO LUCE DIRETTA CALCULATIONS */

function calculateFrontalino(material, depth, extra)
{
    if(depth !== undefined)
        depth = parseInt(depth);

    calculateFrontalinoLuceDirettaMaterialsCost(material, depth);
    calculateFrontalinoLuceDirettaExtraCost(material, extra, depth);

}

function calculateFrontalinoLuceDirettaMaterialsCost(material, depth)
{
    let costFrontalino = 0;
    switch(material)
    {
        case "Plexi glass opale":
                costFrontalino = costPlexiGlassOpaleFrontalino * depth;
            break
        case "Plexi glass colorato (3MM)" :
            costFrontalino =  costPlexiGlassColoratoFrontalino;
            break

    }

    materialsCost["Costo materiale frontalino, " + material] = costFrontalino * totalArea;
    console.log("Costo materiale frontalino, " + material + ": " + materialsCost["Costo materiale frontalino, " + material])
    /* Calculate processing cost :
    * 1. Taglio con fresa del frontalino
    * 2. Incollaggio del frontalino */
    calculateTaglioConFresaDelFrontalino(material, depth);
}

function calculateFrontalinoLuceDirettaExtraCost(material, extra, depth)
{
    if (extra === null || extra === undefined)
    {
        delete materialsCost["Costo Bordatura outline saldata su fronte"];
        delete processCost["Taglio con fresa del frontalino"];
    }
    else {

                costExtraFrontalino = bordaturaOutline * totalArea;
                /* Calculate processing cost :
                *  1. Taglio con fresa della bordatura Outline
                *  2. Saldatura della bordatura Outline */
                taglioConFresaBordaturaOutline(material, depth);

        materialsCost["Costo Bordatura outline saldata su fronte"] = costExtraFrontalino * totalPerimeter;
        console.log("Costo Bordatura outline saldata su fronte " + materialsCost["Costo Bordatura outline saldata su fronte"])
    }
}


/* Calculate processing cost Frontalino */
function taglioConFresaBordaturaOutline(material, depth)
{

    let time ;
    switch(material)
    {
        case "Plexi glass opale":
            time = ((totalPerimeter * 2) / processCostPlexiGlassOpaleFrontalino ) / depth;
            break
        case "Plexi glass colorato (3MM)" :
            time =  ((totalPerimeter * 2) / processCostPlexiGlassColoratoFrontalino)  / 3;
            break

    }

    processCost["Taglio con fresa bordatura outline"] = (time * machineCost) + (time * employerCost);
    console.log("Taglio con fresa bordatura outline " + processCost["Taglio con fresa bordatura outline"])

}

function calculateTaglioConFresaDelFrontalino(material, depth)
{
    let time ;
    switch(material)
    {
        case "Plexi glass opale":
            time = totalPerimeter / processCostPlexiGlassOpaleFrontalino / depth;
            break
        case "Plexi glass colorato (3MM)" :
            time =  totalPerimeter / processCostPlexiGlassColoratoFrontalino / 3;
            break

    }
    processCost["Taglio con fresa del frontalino"] = (time * machineCost) + (time * employerCost);
    console.log("Taglio con fresa del frontalino " + processCost["Taglio con fresa del frontalino"] )
}

/* END FRONTALINO LUCE DIRETTA CALCULATIONS */




/* FONDELLO CALCULATIONS */


function calculateFondello(type, extra, numberOfLetters)
{
    if(type === null)
    {
        delete materialCosts["Costo Distanziatore Fondello"];
        delete materialCosts["Costo fondello"];
        delete processingCost["Taglio con fresa del fondello"];

    }
    else {
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

    }

    materialCosts["Costo fondello"] = costFondello * totalArea;
    /* Calculate processing cost :
    * 1. Taglio con fresa del fondello */

    calculateTaglioConFresaDelFondello(material);
}

function calculateDistanziatoreFondelloExtraCost(extra, numberOfLetters)
{
    if (extra === null)
    {
        delete materialCosts["Costo Distanziatore Fondello"];
    }
    else {

        materialCosts["Costo Distanziatore Fondello"] = costDistanziatoreFondello * numberOfLetters;
    }
}


/* Calculate processing cost Frontalino */

function calculateTaglioConFresaDelFondello(material)
{
    let time ;
    switch(material)
    {
        case "PVC 10 MM Bianco":
            time = totalPerimeter / processCostPVC10MMBiancoFondello / 10;
            break
        case "Alluminio composito (3MM)" :
            time =  totalPerimeter / processCostAlluminioComposito3MMFondelloFondello / 3;
            break

    }
    processingCost["Taglio con fresa del fondello"] = (time * machineCost) + (time * employerCost);
}

/* END FONDELLO CALCULATIONS */




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