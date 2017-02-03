$(document).ready(function(){

  function updateTemperature() {
    $('#Temperature').text(thermostat.temperature);
    $('#energyUsage').attr('class', thermostat.energyUsage());
  }

  updateTemperature()
  $('#energyUsage').text(thermostat.energyUsage())


$('#Up').on("click", function (){
  thermostat.increase()
  updateTemperature()
  $('#energyUsage').text(thermostat.energyUsage())

});

$('#Down').on("click", function (){
  thermostat.decrease()
  updateTemperature()
  $('#energyUsage').text(thermostat.energyUsage())
});

$('#Reset').on("click", function (){
  thermostat.reset()
  updateTemperature()
  $('#energyUsage').text(thermostat.energyUsage())});

$('#powerStatus').change(function (){
  if($(this).val() == "powerSaverOn") {
    thermostat.powerSaverOn()
    $('#PowerSavingStatus').text('Power Saving Mode - On')
  }
  if($(this).val() == "powerSaverOff") {
    thermostat.powerSaverOff()
    $('#PowerSavingStatus').text('Power Saving Mode - Off')
  }
  });
});
