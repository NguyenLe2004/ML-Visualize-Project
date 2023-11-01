var regress_forms = {
    "1" : `
        <div id="regularize" style="text-align:left;">
            <span style="margin-right:30px;">Regularize: </span>
            <input  type="radio" class="btn-check" name="regularize" id="option1" autocomplete="off" checked>
            <label class="btn" for="option1">None</label>

            <input style="width:50px;" type="radio" class="btn-check" name="regularize" id="option2" autocomplete="off">
            <label class="btn" for="option2">L1</label>

            <input type="radio" class="btn-check" name="regularize" id="option3" autocomplete="off" >
            <label class="btn" for="option3">L2</label>
            <span style="width:130px;display:inline-block;margin-left:30px;" >
                <span  class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Alpha</span>
                    <input type="text" id="alpha" class="form-control" aria-label="Username" aria-describedby="basic-addon1" disabled>
                </span>
            </span>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
            <span class="form-check form-switch form-check-reverse">
              <input name ="poly" class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
              <label class="form-check-label" for="flexSwitchCheckReverse">Polynomial Features</label>
            </span>
            </div>
            <div class="col">
              <span style="">
                <span>Degree</span>
                <input style="margin-left:10px;" aria-label="quantity" id="PolyDegree" max="10" min="2" name="" type="number" disabled>
              </span>
            </div>
          </div>
        </div>
        <div style="text-align:left; margin-top:30px;">
            <span style="margin-right:30px;">Normalize:</span>
            <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
            <label class="btn" for="option4">None</label>
            <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
            <label class="btn" for="option5">Standard Scaler</label>
            <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
            <label class="btn" for="option6">Min-Max Scaler</label>
        </div>
    `,
    "2" :`
    <div id="kernel" style="text-align:left;">
      <span style="margin-right:30px;" >Kernel: </span>
      <input  type="radio" class="btn-check" name="kernel" id="option1" autocomplete="off" checked>
      <label class="btn" for="option1">RBF</label>
      <input type="radio" class="btn-check" name="kernel" id="option2" autocomplete="off">
      <label class="btn" for="option2">Linear</label>
      <input type="radio" class="btn-check" name="kernel" id="option3" autocomplete="off" >
      <label class="btn" for="option3">Poly</label>
      <input type="radio" class="btn-check" name="kernel" id="option4" autocomplete="off" >
      <label class="btn" for="option4">Sigmoid</label>
      <span style ="margin-left :30px;">
        <span>Degree: </span>
        <input style="margin-left:10px;" aria-label="quantity" id="PolyDegree" max="10" min="2" name="" type="number" disabled>
      </span>
    </div>
    <span >
      <span  style="width:100px; margin-top:30px;" class="input-group mb-3">
          <span class="input-group-text"  id="basic-addon1">C</span>
          <input type="text" id="c_val" value="1" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
      </span>
    </span>
    <span>
        <span  style="width:140px; margin-top:30px;" class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">epsilon</span>
            <input type="text" id="epsilon" value="0.1" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </span>
    </span>
    <div style="text-align:left; margin-top:30px;">
      <span style="margin-right:30px;">Normalize:</span>
      <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off" checked>
      <label class="btn" for="option5">None</label>
      <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off">
      <label class="btn" for="option6">Standard Scaler</label>
      <input type="radio" class="btn-check" name="scale" id="option7" autocomplete="off" >
      <label class="btn" for="option7">Min-Max Scaler</label>
    </div>
    `,
    "3":`
    <div>
    <span  style="width:200px;" class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">n_neighbors</span>
      <input style="width:50px;" aria-label="quantity" id="n_neighbors" min="1" value="5" name="" type="number">
    </span>
    </div>
    <div style="text-align:left;margin-top:30px;">
      <span style="margin-right:30px;" >Weights: </span>
      <input  type="radio" class="btn-check" name="weights" id="option1" autocomplete="off" checked>
      <label class="btn" for="option1">Uniform</label>
      <input type="radio" class="btn-check" name="weights" id="option2" autocomplete="off">
      <label class="btn" for="option2">Distance</label>
    </div>
    <div style="text-align:left; margin-top:30px;">
      <span style="margin-right:30px;">Normalize:</span>
      <input type="radio" class="btn-check" name="scale" id="option3" autocomplete="off" checked>
      <label class="btn" for="option3">None</label>
      <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off">
      <label class="btn" for="option4">Standard Scaler</label>
      <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off" >
      <label class="btn" for="option5">Min-Max Scaler</label>
    </div>
    `,
    "4" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value=""  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "5" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value=""  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style= "margin-top:10px;" class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">N Estimators</span>
    <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators"  min="1" value="100" name="" type="number">
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "6" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min = "1" value = "3"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="margin-top:30px;" class="container text-center">
    <div class="row">
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">N Estimators</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators"  min="1" value="100" name="" type="number">
        </div>
      </div>
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Learning Rate</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="learning_rate"  min="0.000001" value="0.1" name="" type="number">
        </div>
      </div>
    <div class="col"> </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "7" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value="3"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="margin-top:30px;" class="container text-center">
    <div class="row">
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">N Estimators</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators"  min="1" value="50" name="" type="number">
        </div>
      </div>
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Learning Rate</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="learning_rate"  min="0.00000001" value="1.0"name="" type="number">
        </div>
      </div>
    <div class="col"> </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "8" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value="6"  name="" type="number" >
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Child Weight</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_child_weight"  min="1" value="1" name="" type="number">
        </span>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Lambda</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="lambda" min="0" value="1"  name="" type="number" >
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Alpha</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="alpha"  min="0" value="0" name="" type="number">
        </span>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
  <div style="text-align:left; margin-top:10px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="scale" id="option2" autocomplete="off">
    <label class="btn" for="option2">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Min-Max Scaler</label>
  </div>
    `,
    "9" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" value="-1"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Num Leaves</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="num_leaves"  min="1" value="31" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">N Estimators</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators" min="1" value="100" name="" type="number" >
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Child Sample</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="min_child_samples" value="5"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Reg Alpha</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="reg_alpha"  min="0" value="0" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Reg Lambda</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="reg_lambda" min="0" value="0" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
}
var classify_form = {
  "1" :`
  <span style="margin-right:30px;">Penalty: </span>
  <input  type="radio" class="btn-check" name="penalty" id="option1" autocomplete="off" >
  <label class="btn" for="option1">None</label>
  <input type="radio" class="btn-check" name="penalty" id="option2" autocomplete="off" checked>
  <label class="btn" for="option2">L2</label>
  <div style="margin-top:30px;" class="row">
    <div class="col">
      <span class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Tol</span>
        <input style = "width:100px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="tol" value="0.0001"  name="" type="number" >
      </span>
    </div>
    <div style="position:relative;right:20px;" class="col">
      <span class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">C</span>
        <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="c"  min="0" value="1" name="" type="number">
      </span>
    </div>
    <div class="col">
    </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option3" autocomplete="off" checked>
    <label class="btn" for="option3">None</label>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off">
    <label class="btn" for="option4">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off" >
    <label class="btn" for="option5">Min-Max Scaler</label>
  </div>
  `,
  "2" :`
  <div id="kernel" style="text-align:left;">
    <span style="margin-right:30px;" >Kernel: </span>
    <input  type="radio" class="btn-check" name="kernel" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">RBF</label>
    <input type="radio" class="btn-check" name="kernel" id="option2" autocomplete="off">
    <label class="btn" for="option2">Linear</label>
    <input type="radio" class="btn-check" name="kernel" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Poly</label>
    <input type="radio" class="btn-check" name="kernel" id="option4" autocomplete="off" >
    <label class="btn" for="option4">Sigmoid</label>
    <span style ="margin-left :30px;">
      <span>Degree: </span>
      <input style="margin-left:10px;" aria-label="quantity" id="PolyDegree" max="10" min="2" name="" type="number" disabled>
    </span>
  </div>
  <span >
    <span  style="width:100px; margin-top:30px;" class="input-group mb-3">
        <span class="input-group-text"  id="basic-addon1">C</span>
        <input type="text" id="c_val" value="1" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
    </span>
  </span>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off" checked>
    <label class="btn" for="option5">None</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off">
    <label class="btn" for="option6">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option7" autocomplete="off" >
    <label class="btn" for="option7">Min-Max Scaler</label>
  </div>
  `,
  "3":`
  <div>
  <span  style="width:200px;" class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">n_neighbors</span>
    <input style="width:50px;" aria-label="quantity" id="n_neighbors" min="1" value="5" name="" type="number">
  </span>
  </div>
  <div style="text-align:left;margin-top:30px;">
    <span style="margin-right:30px;" >Weights: </span>
    <input  type="radio" class="btn-check" name="weights" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">Uniform</label>
    <input type="radio" class="btn-check" name="weights" id="option2" autocomplete="off">
    <label class="btn" for="option2">Distance</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option3" autocomplete="off" checked>
    <label class="btn" for="option3">None</label>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off">
    <label class="btn" for="option4">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off" >
    <label class="btn" for="option5">Min-Max Scaler</label>
  </div>
  `,
  "4" :`
  <div style="text-align:left; margin-top:30px;">
  <span style="margin-right:30px;">Normalize:</span>
  <input type="radio" class="btn-check" name="scale" id="option3" autocomplete="off" checked>
  <label class="btn" for="option3">None</label>
  <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off">
  <label class="btn" for="option4">Standard Scaler</label>
  <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off" >
  <label class="btn" for="option5">Min-Max Scaler</label>
  </div>
  `,
  "5" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value=""  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
  `,
  "6" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value=""  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style= "margin-top:10px;" class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">N Estimators</span>
    <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators"  min="1" value="100" name="" type="number">
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "7" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min = "1" value = "3"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="margin-top:30px;" class="container text-center">
    <div class="row">
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">N Estimators</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators"  min="1" value="100" name="" type="number">
        </div>
      </div>
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Learning Rate</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="learning_rate"  min="0.000001" value="0.1" name="" type="number">
        </div>
      </div>
    <div class="col"> </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "8" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value="3"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Split</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_split"  min="1" value="2" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Samples Leaf</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_samples_leaf" min="1" value="1" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="margin-top:30px;" class="container text-center">
    <div class="row">
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">N Estimators</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators"  min="1" value="50" name="" type="number">
        </div>
      </div>
      <div class="col">
        <div style= "" class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Learning Rate</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="learning_rate"  min="0.00000001" value="1.0"name="" type="number">
        </div>
      </div>
    <div class="col"> </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">max_features:</span>
    <input type="radio" class="btn-check" name="max_features" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="max_features" id="option2" autocomplete="off">
    <label class="btn" for="option2">Sqrt</label>
    <input type="radio" class="btn-check" name="max_features" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Log2</label>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
    "9" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" min="1" value="6"  name="" type="number" >
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Child Weight</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="min_child_weight"  min="1" value="1" name="" type="number">
        </span>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Lambda</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="lambda" min="0" value="1"  name="" type="number" >
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Alpha</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="alpha"  min="0" value="0" name="" type="number">
        </span>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
  <div style="text-align:left; margin-top:10px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option1" autocomplete="off" checked>
    <label class="btn" for="option1">None</label>
    <input type="radio" class="btn-check" name="scale" id="option2" autocomplete="off">
    <label class="btn" for="option2">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option3" autocomplete="off" >
    <label class="btn" for="option3">Min-Max Scaler</label>
  </div>
    `,
    "10" : `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Max Depth</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="max_depth" value="-1"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Num Leaves</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="num_leaves"  min="1" value="31" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">N Estimators</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_estimators" min="1" value="100" name="" type="number" >
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Min Child Sample</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"  aria-label="quantity" id="min_child_samples" value="5"  name="" type="number" >
        </span>
      </div>
      <div style="position:relative;right:20px;" class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Reg Alpha</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="reg_alpha"  min="0" value="0" name="" type="number">
        </span>
      </div>
      <div class="col">
        <span class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Reg Lambda</span>
          <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="reg_lambda" min="0" value="0" name="" type="number" >
        </span>
      </div>
    </div>
  </div>
  <div style="text-align:left; margin-top:30px;">
    <span style="margin-right:30px;">Normalize:</span>
    <input type="radio" class="btn-check" name="scale" id="option4" autocomplete="off" checked>
    <label class="btn" for="option4">None</label>
    <input type="radio" class="btn-check" name="scale" id="option5" autocomplete="off">
    <label class="btn" for="option5">Standard Scaler</label>
    <input type="radio" class="btn-check" name="scale" id="option6" autocomplete="off" >
    <label class="btn" for="option6">Min-Max Scaler</label>
  </div>
    `,
}
var clusterForm ={
  "1":`
  <span class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Num Cluster</span>
    <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_clusters"  min="1" max="10" value="8" name="" type="number">
  </span>
  `,
  "2":`
  <span class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Num Cluster</span>
    <input style = "width:50px;border: 1px solid gray;border-radius:0 10px 10px 0;"   aria-label="quantity" id="n_clusters"  min="1" max="10" value="2" name="" type="number">
  </span>
  `
}