var fileUploadKNN;
var fileUploadSVM;
var fileUploadCNN;

window.onload = function () {
  var fileUploadKNN = document.getElementById('fileUpload-knn');
  fileUploadKNN.onchange = readImageKNN;
  var fileUploadKNN = document.getElementById('fileUpload-svm');
  fileUploadSVM.onchange = readImageSVM;
  var fileUploadKNN = document.getElementById('fileUpload-cnn');
  fileUploadCNN.onchange = readImageCNN;
};

function readImageKNN() {
  console.log("HERE 1");

  if ( this.files && this.files[0] ) {
    console.log("HERE 2");

    var FR= new FileReader();
    FR.onload = function(e) {
     var img = new Image();
     img.src = e.target.result;
    };       
    FR.readAsDataURL( this.files[0] );

    console.log("HERE 3");
    
    var div = document.getElementById('knn-ret');
    div.innerHTML += 'HI';

    console.log("DID THIS")
  }
}

function readImageSVM() {
  console.log("HERE 1");

  if ( this.files && this.files[0] ) {
    console.log("HERE 2");

    var FR= new FileReader();
    FR.onload = function(e) {
     var img = new Image();
     img.src = e.target.result;
    };       
    FR.readAsDataURL( this.files[0] );

    console.log("HERE 3");
    
    var div = document.getElementById('svm-ret');
    div.innerHTML += 'HI';

    console.log("DID THIS")
  }
}

function readImageCNN() {
  console.log("HERE 1");

  if ( this.files && this.files[0] ) {
    console.log("HERE 2");

    var FR= new FileReader();
    FR.onload = function(e) {
     var img = new Image();
     img.src = e.target.result;
    };       
    FR.readAsDataURL( this.files[0] );

    console.log("HERE 3");
    
    var div = document.getElementById('cnn-ret');
    div.innerHTML += 'HI';

    console.log("DID THIS")
  }
}