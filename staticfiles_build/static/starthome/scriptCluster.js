var list_pos= []
let data={}
let color_list = ['blue','purple','brown','gray','yellow','pink','green','orange','red','black'];
Axis()
create_dot_pos_regress()
var modelSelect = document.getElementById("model-select");
var trainedButton = document.getElementById("train_btn");
modelSelect.onchange = function() {
  if (modelSelect.value !== "Choose Models") {
    trainedButton.disabled = false;
    var formContainer = document.getElementById("formContainer");
    if (formContainer) {
      formContainer.innerHTML = clusterForm[modelSelect.value];
    } else {
      var newDiv = document.createElement('div');
      newDiv.id = 'formContainer';
      document.getElementById("info").appendChild(newDiv);
      formContainer = newDiv;
      formContainer.innerHTML = clusterForm[modelSelect.value];
    }
  } else {
    trainedButton.disabled = true;
    return;
  }
};
document.getElementById('train_btn').addEventListener('click', function(event){
    let modelSelect = document.getElementById("model-select");
    data.type = modelSelect.value;
    data.list_pos = list_pos;
    switch(data.type){
      case "1":
         var n_clusters = document.getElementById('n_clusters');
         data.n_clusters = parseInt(n_clusters.value);
        break;
      case "2":
        var n_clusters = document.getElementById('n_clusters');
        data.n_clusters = parseInt(n_clusters.value);
      default:
        break;
    }
    sendDataCluster();
})
function visualCluster(clusters){
  clearDot();
  pos =  data.list_pos;
  let canvas = document.getElementById("clusterPoint");
  let context = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 500;
  context.translate(0, canvas.height);
  context.scale(1,-1);
  for(let i = 0;i<pos.length;i++ ){
    context.beginPath();
    context.arc(pos[i][0], pos[i][1], 4, 0, 2 * Math.PI);
    context.fillStyle =color_list[clusters[i]];
    context.fill()
  }
}
function sendDataCluster() {
    document.body.style.cursor="wait";
    $.ajax({
      type: 'POST',
      url: '/traincluster/',
      data: JSON.stringify(data),
      success: function(response) {
        var respondData = response.respondData;
        visualCluster(respondData)
        document.body.style.cursor = "default";
        data = {};
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  }