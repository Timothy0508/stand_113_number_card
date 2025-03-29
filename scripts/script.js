function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            console.log(sParameterName[1]);
            return sParameterName[1];
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var param = GetURLParameter('number');
    if (param) {
        var element = document.getElementById("number");
        if (element) {
            element.innerHTML = param;
        }
    }
});