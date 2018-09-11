function can() {
    var c = document.getElementById("myCanvas");
    const context = c.getContext('2d');
    context.clearRect(0, 0, c.width, c.height);
    var label = c.getContext("2d");
    var h1text = "Wayne Thiebaud";
    var h1text2 = "(b. 1920)";
    var h1text3 = "River and Farms";
    var h1text4 = "1920";
    label.font = "bold 30px Arial";
    label.fillText(document.getElementById('name').value + ' ' + document.getElementById('jahr').value,20,50);
    label.font = "italic bold 30px Arial";
    label.fillText(document.getElementById('titel').value,20,100);
    label.font =  "20px Arial";
    label.fillText(document.getElementById('beschreibung').value,20,150);
}
