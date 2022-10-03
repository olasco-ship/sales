function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

 // function myfunction() {
    //  jump = document.getElementById("firm").readonly = false;
     // return jump;
  //}

  $(document).ready(function()
{
 $('#btnEdit').click(function()
 {
   $("input[name='fiscal_year'],[name='tax_period'],[name='relief'],[name='gross']").removeAttr("readonly");  
 });

 });

 $(document).ready(function()
{
 $('#btnEdt').click(function()
 {
   $("input[name='auto'],[name='promo'],[name='red']").removeAttr("readonly");  
 });

 });

 $('#btnEdit, #btnEdt').click(function() {
  $(this).hide();
  $('#savebtn, #cancelbtn, #savbtn, #cancebtn').show();
});

$('#cancelbtn, #cancebtn').click(function() {
  $('#btnEdit, #btnEdt').show();
  $('#savebtn, #cancelbtn, #savbtn, #cancebtn').hide();
});