$('#pseudo').keyup(function(){
  var pseudo = $(this).val();
  var longueur_pseudo = pseudo.length;
  if ((longueur_pseudo >= 2) && (longueur_pseudo <= 15)){
    $(this).css('border-color', 'blue');
  }else{
    $(this).css('border-color', 'red');
  }
});

$('#mail').keyup(function(){
  var mail = $(this).val();
  if (mail.includes('@')){
     $(this).css('border-color', 'blue');
  }else{
    $(this).css('border-color', 'red');
  }

});

$('#password').keyup(function(){
  var password = $(this).val();
  var longueur_password = password.length;
  if ((/\d/.test(password)) && (longueur_password >=6)){
    $(this).css('border-color', 'blue');
  }else{
    $(this).css('border-color', 'red');
  }
})
