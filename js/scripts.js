var age;
var gender;
var genre;


$(document).ready(function() {
  $('#ryanreynolds').hide();
  $('#dwainetherockjohnson').hide();
  $('#jackblack').hide();
  $('#keanureeves').hide();
  $('#sorry').hide();
  $("form#infoinput").submit(function(event) {
    age = $("input#age").val();
    gender = $("select#gender").val();
    genre = $("select#genre").val();

  $("#result").show();

if (parseInt(age) >= 20 && (gender === 'female') && (genre === 'comedy')) {
  $('#ryanreynolds').show();
}

if (parseInt(age) >= 20 && (gender === 'female') && (genre === 'action')) {
  $('#keanureeves').show();
}

if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'comedy')) {
  $('#jackblack').show();
}

if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'action')) {
  $('#dwainetherockjohnson').show();
}

if (parseInt(age) < 20) {
  $('#sorry').show();
}

event.preventDefault();

});
});
