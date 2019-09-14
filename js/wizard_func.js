/*  Wizard */


jQuery(function ($) {
  "use strict";
  $('form#wrapped').attr('action', 'formContact.php');
  $("form#wrapped").submit(function(event)
  {
    event.preventDefault();

    $.post('formContact.php', { rifLavoro: step0Storage["Riferimento lavoro"],elementSelected: selectedFieldsToSend, materialCost: costToSend, processCost: processCostToSend, totalCost: totalCostToSend, specTec:specTecToSend, prices:pricesToSend }).done(function() {
      // data.redirect contains the string URL to redirect to
      window.location.href = "done.html";

    });


  });


  $("#wizard_container").wizard({
    stepsWrapper: "#wrapped",
    submit: ".submit",
    beforeSelect: function (event, state) {

      if(state.stepIndex === 6)
      {
        generatePageCosts();
      }
      if ($('input#website').val().length !== 0) {
        return false;
      }
      if (!state.isMovingForward)
        return true;
      var inputs = $(this).wizard('state').step.find(':input');
      return !inputs.length || !!inputs.valid();
    }
  }).validate({
    errorPlacement: function (error, element) {
      if (element.is(':radio') || element.is(':checkbox')) {
        error.insertBefore(element.next());
      } else {
        error.insertAfter(element);
      }
    }
  });
  //  progress bar
  $("#progressbar").progressbar();
  $("#wizard_container").wizard({
    afterSelect: function (event, state) {
      $("#progressbar").progressbar("value", state.percentComplete);
      $("#location").text("(" + state.stepsRemaining  + ")");

    }
  });

  $("#wizard_container").wizard({

    afterForward: function (event, state)
    {


      switch(step1Storage["Scritta massello"]) {

        case "Scritta semplice 1 livello" :
          if( state.stepIndex === 3 ) {
            $("#wizard_container").wizard("forward",3);
          }
          break;
        case "Scritta doppia accoppiata 2 livelli" :
          if( state.stepIndex === 4 ) {
            $("#wizard_container").wizard("forward",2);
          }
          break;
        case "Scritta doppia accoppiata 2 livelli con retroilluminazione a led" :
          if( state.stepIndex === 5 ) {
            $("#wizard_container").wizard("forward",1);
          }
          break;


      }

      if(step1Storage["Tipologia lavorazione"] === "Luce riflessa")
      {
        if( state.stepIndex === 3 ) {
          $("#wizard_container").wizard("forward",1);
        }
      }

    }
  });
  $("#wizard_container").wizard({

    afterBackward : function (event, state)
    {
      switch(step1Storage["Scritta massello"]) {

        case "Scritta semplice 1 livello" :
          if( state.stepIndex === 5  ) {
            $("#wizard_container").wizard("backward",3);
          }
          break;
        case "Scritta doppia accoppiata 2 livelli" :
          if( state.stepIndex === 5  ) {
            $("#wizard_container").wizard("backward",2);
          }
          break;
        case "Scritta doppia accoppiata 2 livelli con retroilluminazione a led" :
          if( state.stepIndex === 5   ) {
            $("#wizard_container").wizard("backward",1);
          }
          break;


      }
      if(step1Storage["Tipologia lavorazione"] === "Luce riflessa")
      {
        if( state.stepIndex === 3 ) {
          $("#wizard_container").wizard("backward",1);
        }
      }
    }
  });
  // Validate select
  $('#wrapped').validate({
    ignore: [],
    rules: {
      select: {
        required: true
      }
    },
    errorPlacement: function (error, element) {
      if (element.is('select:hidden')) {
        error.insertAfter(element.next('.nice-select'));
      } else {
        error.insertAfter(element);
      }
    }
  });
});


