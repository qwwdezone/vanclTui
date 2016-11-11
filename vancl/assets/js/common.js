$(function() {
    $(document).ready(function() {
      $("#btnQueDing").click(function(){
        var linkText = $("#ourTuiGuangCode").val();
        $("#newLink").append(linkText);

        $("#btnQingKongResult").click(function(){
          $("#newLink").empty();
        });

        $("#btnQingKongCode").click(function(){
          $("#ourTuiGuangCode").val("");
        });
      });
    });
});
