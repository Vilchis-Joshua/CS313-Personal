function buttonAlert() {
    alert("Clicked");
}

function changeColor() {
    //document.getElementById('hover_alert').style.color = color;
    var div_to_change = document.getElementById('hover_alert');

    var color_change = document.getElementById('form1').elements.namedItem('change_color_button').value;
    div_to_change.style.backgroundColor = color_change;
}

$("#jquery_click_me_button").click(function () {
    $("#css_bold").hide();
});