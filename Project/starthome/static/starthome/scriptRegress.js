var list_pos = [];
var data = {}
Axis();
create_dot_pos_regress();

function drawLine(pred){
  var r2 = pred[1]
  var prediction = pred[0]
  var r_squared = document.getElementById("r_squared");
  let canvas = document.getElementById("regressline");
  let context = canvas.getContext("2d");
  var r2_show = document.createElement("div")
  r2_show.innerText="R-Squared: " + String(r2)
  r_squared.appendChild(r2_show)
  canvas.width = 600;
  canvas.height = 500;
  context.translate(0, canvas.height);
  context.scale(1, -1);
  for(var i =0;i<prediction.length-1;i++){
    var start_X = 5*i;
    var start_y = prediction[i]
    var end_X = 5*(i+1);
    var end_y = prediction[i+1];
    context.beginPath();
    context.moveTo(start_X,start_y);
    context.lineTo(end_X,end_y);
    context.stroke();
  }
}
var modelSelect = document.getElementById("model-select");
var trainedButton = document.getElementById("train_btn");
modelSelect.onchange = function() {
  if (modelSelect.value !== "Choose Models") {
    trainedButton.disabled = false;
    var formContainer = document.getElementById("formContainer");
    if (formContainer) {
      formContainer.innerHTML = regress_forms[modelSelect.value];
    } else {
      var newDiv = document.createElement('div');
      newDiv.id = 'formContainer';
      document.getElementById("info").appendChild(newDiv);
      formContainer = newDiv;
      formContainer.innerHTML = regress_forms[modelSelect.value];
    }
  } else {
    trainedButton.disabled = true;
    return;
  }
  switch(modelSelect.value) {
    case "1":
        var regular = document.getElementsByName('regularize');
        for (var i = 0; i < regular.length; i++) {
            regular[i].onchange = function() {
              var alpha = document.getElementById("alpha");
              if (this.id === "option2" || this.id === "option3") {
                alpha.disabled = false;
                alpha.value = 1.0;
              } else {
                alpha.value = null
                alpha.disabled = true;
              }
            };
          }
        var poly = document.getElementById("flexSwitchCheckReverse")
        var degree = document.getElementById("PolyDegree");
        poly.onchange = function(){
            if(poly.checked) {
                degree.disabled = false;
                degree.value=2;
            }
            else {
                degree.value=null;
                degree.disabled=true;
            }
        }
        degree.addEventListener('input', function() {
          const value = parseInt(degree.value);
          const min = 2;
          const max = 10;
          if (value < min) degree.value = min;
          else if (value > max) degree.value = max;
          else if (value=="") degree.value =2;
        });
        break;
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
      var epsilon = document.getElementById("epsilon");
      c.addEventListener('input', function(){
        const value= parseInt(c.value);
        if (value <=0 ) c.value = 1;
      })
      epsilon.addEventListener('input', function(){
        const value= parseFloat(epsilon.value);
        if (value <=0 ) epsilon.value = 0.1;
      })
      break;
    case "3":
      break;
    default:
        console.log(typeof(modelSelect.value));
        break;
  }
  
};


document.getElementById('train_btn').addEventListener('click', function(event) {
  var r2 = document.getElementById('r_squared');
  r2.innerHTML ="";
  var modelSelect = document.getElementById("model-select");
  data.type = modelSelect.value;
  data.pos_list = list_pos;
  var norm = document.getElementsByName("scale");
  if(norm[0].checked) data.norm =null;
  else if(norm[1].checked) {
    data.norm = "standard";
  }
  else {
    data.norm = "minMax";
  }
  // console.log(modelSelect.value);
  switch (data.type){
    case "1":
      var regular = document.getElementsByName('regularize');
      if(regular[0].checked) {
        data.regularize = null;
        data.alpha = null;
      }
      else if(regular[1].checked) {
        data.regularize = "L1";
        data.alpha = document.getElementById("alpha").value;
      }
      else {
        data.regularize='L2';
        data.alpha = document.getElementById("alpha").value;
      }
      var poly = document.getElementById('flexSwitchCheckReverse');
      if (poly.checked) {
        var degree = document.getElementById("PolyDegree");
        data.isPoly = true;
        data.degree = degree.value;
      }
      else {
        data.isPoly = false;
        data.degree = null;
      }
      break;
    case "2" :
      var kernel = document.getElementsByName("kernel");
      data.degree = null;
      if (kernel[0].checked) data.kernelType = "rbf";
      else if (kernel[1].checked) data.kernelType = "linear";
      else if(kernel[3].checked) data.kernelType = "sigmoid";
      else{
        data.kernelType = "poly";
        data.degree = document.getElementById("PolyDegree").value;
      }
      var c = document.getElementById("c_val");
      var epsilon = document.getElementById("epsilon");
      data.C = c.value;
      data.epsilon = epsilon.value;
      break;
    case "3":
      var n_neighbors = document.getElementById("n_neighbors");
      data.n_neighbors = n_neighbors.value;
      var weights = document.getElementsByName("weights");
      if (weights[0].checked) data.weights = "uniform";
      else data.weights = "distance";
      break;
    case "4":
      var max_depth = document.getElementById("max_depth");
      var min_samples_split = document.getElementById("min_samples_split");
      var min_samples_leaf = document.getElementById("min_samples_leaf");
      data.max_depth = max_depth.value;
      data.min_samples_split = min_samples_split.value;
      data.min_samples_leaf = min_samples_leaf.value;
      var max_features = document.getElementsByName("max_features")
      if (max_features[0].checked) data.max_features = null;
      else if (max_features[1].checked) data.max_features = "sqrt";
      else data.max_features = "log2";
      break;
    case "5":
      var n_estimators = document.getElementById("n_estimators")
      var max_depth = document.getElementById("max_depth");
      var min_samples_split = document.getElementById("min_samples_split");
      var min_samples_leaf = document.getElementById("min_samples_leaf");
      data.n_estimators = n_estimators.value;
      data.max_depth = max_depth.value;
      data.min_samples_split = min_samples_split.value;
      data.min_samples_leaf = min_samples_leaf.value;
      var max_features = document.getElementsByName("max_features");
      if (max_features[0].checked) data.max_features = null;
      else if (max_features[1].checked) data.max_features = "sqrt";
      else data.max_features = "log2";
      break;
    case "6":
      var n_estimators = document.getElementById("n_estimators");
      var learning_rate = document.getElementById("learning_rate");
      var max_depth = document.getElementById("max_depth");
      var min_samples_split = document.getElementById("min_samples_split");
      var min_samples_leaf = document.getElementById("min_samples_leaf");
      data.n_estimators = n_estimators.value;
      data.learning_rate = learning_rate.value;
      data.max_depth = max_depth.value;
      data.min_samples_split = min_samples_split.value;
      data.min_samples_leaf = min_samples_leaf.value;
      var max_features = document.getElementsByName("max_features")
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
      data.n_estimators = n_estimators.value;
      data.learning_rate = learning_rate.value;
      data.max_depth = max_depth.value;
      data.min_samples_split = min_samples_split.value;
      data.min_samples_leaf = min_samples_leaf.value;
      var max_features = document.getElementsByName("max_features")
      if (max_features[0].checked) data.max_features = null;
      else if (max_features[1].checked) data.max_features = "sqrt";
      else data.max_features = "log2";
      break;
    case "8":
      var max_depth = document.getElementById("max_depth");
      var min_child_weight = document.getElementById("min_child_weight");
      var lambda = document.getElementById("lambda");
      var alpha = document.getElementById("alpha");
      data.max_depth = max_depth.value;
      data.min_child_weight = min_child_weight.value;
      data.lambda = lambda.value;
      data.alpha = alpha.value;
      break;
    default:
      var max_depth = document.getElementById("max_depth");
      var num_leaves = document.getElementById("num_leaves");
      var min_child_samples = document.getElementById("min_child_samples");
      var n_estimators = document.getElementById("n_estimators");
      var reg_lambda = document.getElementById("reg_lambda");
      var reg_alpha = document.getElementById("reg_alpha");
      data.max_depth = max_depth.value;
      data.num_leaves = num_leaves.value;
      data.n_estimators = n_estimators.value;
      data.min_child_samples = min_child_samples.value;
      data.reg_lambda = reg_lambda.value;
      data.reg_alpha = reg_alpha.value;
      break;
  }
  console.log(data);
  sendDataRegress();
});

function sendDataRegess() {
  $.ajax({
    type: 'POST',
    url: '/trainregress/',
    data: JSON.stringify(data),
    success: function(response) {
      var respondData = response.respondData;
      drawLine(respondData[0]);
      data = {};
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
}