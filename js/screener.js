 $(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(".container").mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((6 * mouseX) / 570) + 40;
    traY = ((6 * mouseY) / 570) + 50;
    console.log(traX);
    $(".titleScreener").css({"background-position": traX + "%" + traY + "%"});
  });
});