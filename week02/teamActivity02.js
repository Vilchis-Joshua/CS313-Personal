function buttonAlert() {
    alert("Clicked");
}

function changeColor() {
    //document.getElementById('hover_alert').style.color = color;
    var div_color = document.getElementById('hover_alert');

    var color_change = document.getElementById('form1').elements.namedItem('change_color_button').value;
    console.log(color_change);
    document.getElementById('hover_alert').style.backgroundColor = color_change;
}