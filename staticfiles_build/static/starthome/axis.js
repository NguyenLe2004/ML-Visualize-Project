function Axis() {
    var canvas = document.getElementById("axis");
    var context = canvas.getContext("2d");
    canvas.width=600;
    canvas.height = 500;
    var width = canvas.width;
    var height = canvas.height;
    context.translate(0, canvas.height);
    context.scale(1, -1);
    context.beginPath();
    context.lineWidth = 7;
    context.moveTo(0, 0);
    context.lineTo(0, height); 
    context.stroke();
    context.beginPath();
    context.lineWidth = 6;
    context.moveTo(0, 0);
    context.lineTo(width, 0); 
    context.stroke();
}
function create_dot_pos_regress() {
    var x, y;
    var axis = document.getElementById('axis');
    var context = axis.getContext('2d')
    axis.addEventListener('click', function(event) {
      isClick =true;
      var rect = axis.getBoundingClientRect();
      var x = event.clientX - 45;
      var y = 772 - event.clientY;
      context.beginPath();
      context.arc(x, y, 4, 0, 2 * Math.PI);
      context.fillStyle = "red";
      context.fill();
      list_pos.push([x, y]);
    });
}
function clearDot(){
  var axis = document.getElementById('axis');
  var context = axis.getContext('2d');
  context.clearRect(0, 0, axis.width, axis.height);
  Axis();
}
function create_dot_pos_classify(color) {
  var x, y;
  var axis = document.getElementById('axis');
  var context = axis.getContext('2d')
  axis.addEventListener('click', function(event) {
    isClick =true;
    var rect = axis.getBoundingClientRect();
    var x = event.clientX - 45;
    var y = 772 - event.clientY;
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    list_pos.push([[x,y],classCount]);
  });
}