let totalArea = 0 ;
let totalPerimeter = 0;


// cost for minute
const machineCost = 0.50;
const employerCost = 0.40;

let materialsCost = [];

const stampatelloBaseCoefficient = 0.95 ;
const stampatelloCompostoBaseCoefficient = 0.95 ;
const corsivoBaseCoefficient = 1.1 ;

const stampatelloPerimeterCoefficient = 3.6 ;
const stampatelloCompostoPerimeterCoefficient = 5.2 ;
const corsivoPerimeterCoefficient = 7.1 ;


/* costa Laterale materials cost (MM)*/
const alluminio = 0.014;
const inox = 0.018;
const ottone = 0.056;
const lamieraZincata = 0;

/* extra Costa laterale */
const cornicePerimetrale = 0.013;
const bordaturaOutline = 0;


function calculateCostaLateraleMaterialCost(material, depth)
{
    let costCostaLaterale = 0;
    switch(material)
    {
        case "Alluminio":
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

    materialCosts["Costo costa laterale"] = costCostaLaterale * totalPerimeter;
}




function calculateCostaLateraleExtraCost(extra, depth)
{
    let costExtraCostaLaterale = 0;

    switch(extra)
    {
        case "Cornice perimetrale":
            costExtraCostaLaterale = cornicePerimetrale * depth;
            break
        case "Bordatura outline saldata su fronte" :
            costExtraCostaLaterale =  bordaturaOutline * depth;
            break
    }
    materialCosts["Costo extra costa laterale"] = costExtraCostaLaterale * totalPerimeter;

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
}

function perimeterLetterCalculation(h, font)
{
    h = centimetersToMeters(h);

    switch(font)
    {
        case "Stampatello semplice":
            totalPerimeter += h * stampatelloPerimeterCoefficient;
            break
        case "Elaborato composto" :
            totalPerimeter += h * stampatelloCompostoPerimeterCoefficient;
            break
        case "Corsivo" :
            totalPerimeter += h * corsivoPerimeterCoefficient;
            break
    }
}

function areaElementoSagomato(b, h)
{
    h = centimetersToMeters(h);

    totalArea = b * h;
}

function setPerimeterElementoSagomato(p)
{
    totalPerimeter =  centimetersToMeters(p);
}


function centimetersToMeters(number)
{
    meter = number / 100;
    return meter.toFixed(2);
}
