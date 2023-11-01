var list_pos = [];
var data = {}
var isClick = false;
var color_list = ['red','blue','purple','brown','gray'];
Axis();
var classCount =0;
var addClass = document.getElementById("addClass");
var addClassBtn = document.getElementById("addClassBtn");
addButton(0);

addClassBtn.addEventListener("click",()=>{
  if(!isClick){
    alert("Please Add Point");
    return;
  }
    addButton(classCount);
    if(classCount>=5) addClassBtn.disabled=true;
})
function addButton(num){
  var newBtn = document.createElement("button");
  newBtn.style.backgroundColor = color_list[num];
  isClick = false;
  create_dot_pos_classify(color_list[num]);
  newBtn.type = "button";
  newBtn.textContent = "Class " + (classCount+1);
  newBtn.id = "classButton";
  newBtn.className = "btn btn-primary btn-lg";
  newBtn.style.marginLeft="10px";
  let addClassBtn = document.getElementById("classBtn");
  addClassBtn.appendChild(newBtn);
  classCount++;
}
function drawBoundary(pred){
  let canvas = document.getElementById("classifyBoundary");
  let plot = document.getElementById("classifyBoundary")
  let context = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 500;
  context.translate(0,canvas.height);
  context.scale(1,-1); 
  let predIndex =0;
  for (let y = 0; y < 501; y++) {
    for (let x = 0; x < 601; x++) {
      let predict_proba = pred[1][predIndex];
      if (predict_proba < 0.6) alpha = 0;
      else if (predict_proba <= 0.7) alpha=0.3;
      else if(predict_proba<=0.85) alpha = 0.5
      else  alpha = 0.7;
      context.globalAlpha = alpha;
      context.fillStyle = color_list[pred[0][predIndex]];
      context.fillRect(x, y, 1, 1);
      predIndex++;
    }
  }
}
var modelSelect = document.getElementById("model-select");
var trainedButton = document.getElementById("train_btn");
modelSelect.onchange = function() {
    if (modelSelect.value !== "Choose Models") {
      trainedButton.disabled = false;
      var formContainer = document.getElementById("formContainer");
      if (formContainer) {
        formContainer.innerHTML = classify_form[modelSelect.value];
      } else {
        var newDiv = document.createElement('div');
        newDiv.id = 'formContainer';
        document.getElementById("info").appendChild(newDiv);
        formContainer = newDiv;
        formContainer.innerHTML = classify_form[modelSelect.value];
      }
    } else {
      trainedButton.disabled = true;
      return;    
    }
    switch(modelSelect.value){
      case "2":
        var kernel = document.getElementsByName("kernel");
        for (var i = 0 ;i<kernel.length ;i++){
          kernel[i].onchange = function(){
            var degree = document.getElementById("PolyDegree");
            if (this.id == "option3") {
              degree.disabled = false;
              degree.value =2;
            }
            else{
              degree.disabled = true;
              degree.value=null;
            }
          }
        }
        var degree = document.getElementById("PolyDegree");
        degree.addEventListener('input', function() {
          const value = parseInt(degree.value);
          const min = 2;
          const max = 10;
          if (value < min) degree.value = min;
          else if (value > max) degree.value = max;
          else if (value=="") degree.value =2;
        });
        var c = document.getElementById('c_val');
        c.addEventListener('input', function(){
          const value= parseInt(c.value);
          if (value <=0 ) c.value = 1;
        })
        break;
      default:
        break;
    }
}
document.getElementById("train_btn").addEventListener('click',()=>{
  var modelSelect = document.getElementById('model-select');
  data.type = modelSelect.value;
  data.list_pos = list_pos;
  var norm = document.getElementsByName("scale");
  if(norm[0].checked) data.norm =null;
  else if(norm[1].checked) {
    data.norm = "standard";
  }
  else {
    data.norm = "minMax";
  }
  switch (data.type){
    case "1":
      var penalty = document.getElementsByName("penalty");
      var tol = document.getElementById("tol");
      var c = document.getElementById("c");
      if (penalty[0].checked) data.penalty = null;
      else data.penalty="l2";
      data.c = c.value;
      data.tol = tol.value;
      break;
    case "2":
      var kernel = document.getElementsByName("kernel");
      data.degree = 0;
      if (kernel[0].checked) data.kernelType = "rbf";
      else if (kernel[1].checked) data.kernelType = "linear";
      else if(kernel[3].checked) data.kernelType = "sigmoid";
      else{
        data.kernelType = "poly";
        data.degree = document.getElementById("PolyDegree").value;
      }
      var c = document.getElementById("c_val");
      data.c = c.value;
      break;
    case "3":
      var n_neighbors = document.getElementById("n_neighbors");
      data.n_neighbors = n_neighbors.value;
      var weights = document.getElementsByName("weights");
      if (weights[0].checked) data.weights = "uniform";
      else data.weights = "distance";
      break;
    case "5":
        var max_depth = document.getElementById("max_depth");
        var min_samples_split = document.getElementById("min_samples_split");
        var min_samples_leaf = document.getElementById("min_samples_leaf");
        data.max_depth = max_depth.value == '' ? null : parseInt(max_depth.value);
        data.min_samples_split = parseInt(min_samples_split.value);
        data.min_samples_leaf = parseInt(min_samples_leaf.value);
        var max_features = document.getElementsByName("max_features")
        if (max_features[0].checked) data.max_features = null;
        else if (max_features[1].checked) data.max_features = "sqrt";
        else data.max_features = "log2";
        break;
    case "6":
      var n_estimators = document.getElementById("n_estimators")
      var max_depth = document.getElementById("max_depth");
      var min_samples_split = document.getElementById("min_samples_split");
      var min_samples_leaf = document.getElementById("min_samples_leaf");
      data.n_estimators = parseInt(n_estimators.value);
      data.max_depth = max_depth =='' ? null:parseInt(max_depth.value); 
      data.min_samples_split = parseInt(min_samples_split.value);
      data.min_samples_leaf = parseInt(min_samples_leaf.value);
      var max_features = document.getElementsByName("max_features");
      if (max_features[0].checked) data.max_features = null;
      else if (max_features[1].checked) data.max_features = "sqrt";
      else data.max_features = "log2";
      break;
    case "7":
      var n_estimators = document.getElementById("n_estimators");
      var learning_rate = document.getElementById("learning_rate");
      var max_depth = document.getElementById("max_depth");
      var min_samples_split = document.getElementById("min_samples_split");
      var min_samples_leaf = document.getElementById("min_samples_leaf");
      data.n_estimators = parseInt(n_estimators.value);
      data.learning_rate = parseFloat(learning_rate.value);
      data.max_depth = max_depth =='' ? null:parseInt(max_depth.value); 
      data.min_samples_split = parseInt(min_samples_split.value);
      data.min_samples_leaf =parseInt( min_samples_leaf.value);
      var max_features = document.getElementsByName("max_features")
      if (max_features[0].checked) data.max_features = null;
      else if (max_features[1].checked) data.max_features = "sqrt";
      else data.max_features = "log2";
      break;
    case "8":
      var n_estimators = document.getElementById("n_estimators");
      var learning_rate = document.getElementById("learning_rate");
      var max_depth = document.getElementById("max_depth");
      var min_samples_split = document.getElementById("min_samples_split");
      var min_samples_leaf = document.getElementById("min_samples_leaf");
      data.n_estimators = parseInt(n_estimators.value);
      data.learning_rate = parseFloat(learning_rate.value);
      data.max_depth = max_depth =='' ? null:parseInt(max_depth.value); 
      data.min_samples_split = parseInt(min_samples_split.value);
      data.min_samples_leaf =parseInt( min_samples_leaf.value);
      var max_features = document.getElementsByName("max_features")
      if (max_features[0].checked) data.max_features = null;
      else if (max_features[1].checked) data.max_features = "sqrt";
      else data.max_features = "log2";
      break;
    case "9":
      var max_depth = document.getElementById("max_depth");
      var min_child_weight = document.getElementById("min_child_weight");
      var lambda = document.getElementById("lambda");
      var alpha = document.getElementById("alpha");
      data.max_depth = parseInt(max_depth.value); 
      data.min_child_weight = parseInt(min_child_weight.value);
      data.lambda = parseFloat(lambda.value);
      data.alpha = parseFloat(alpha.value);
      break;
    default:
      var max_depth = document.getElementById("max_depth");
      var num_leaves = document.getElementById("num_leaves");
      var min_child_samples = document.getElementById("min_child_samples");
      var n_estimators = document.getElementById("n_estimators");
      var reg_lambda = document.getElementById("reg_lambda");
      var reg_alpha = document.getElementById("reg_alpha");
      data.max_depth = parseInt(max_depth.value);
      data.num_leaves = parseInt(num_leaves.value);
      data.n_estimators = parseInt(n_estimators.value);
      data.min_child_samples =parseInt(min_child_samples.value);
      data.reg_lambda = parseFloat(reg_lambda.value);
      data.reg_alpha = parseFloat(reg_alpha.value);
      break;
  }
  sendDataClassify();
})
function sendDataClassify(){
  document.body.style.cursor="wait";
  $.ajax({    
    type: 'POST',
    url: '/trainclassify/',
    data: JSON.stringify(data),
    success: function(response) {
      var respondData = response.respondData;
      drawBoundary(respondData);
      console.log(respondData)
      document.body.style.cursor = "default";
      data ={};
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
}