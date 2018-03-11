$(document).ready(function(){
 var userName = prompt("Var snäll och skriv ditt namn:");
 alert("Välkommen " + userName + ". Du är bäst.");
    
$('#bgForm').submit(function(event){
  event.preventDefault();
  var color = $('#bgColor').val();
$('body').css('background-color', color);
});
  
$('#btn-show').click(function(event){
  event.preventDefault();
$('#hidden').toggle();
}); 
  
$('#removeDiv').submit(function(event){
  event.preventDefault();
  $('#removeThis').remove();
});
});