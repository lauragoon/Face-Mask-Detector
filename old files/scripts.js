var fileUploadKNN;
var fileUploadSVM;
var fileUploadCNN;

window.onload = function () {
  var fileUploadKNN = document.getElementById('fileUpload-knn');
  fileUploadKNN.onchange = readImageKNN;
  var fileUploadSVM = document.getElementById('fileUpload-svm');
  fileUploadSVM.onchange = readImageSVM;
  var fileUploadCNN = document.getElementById('fileUpload-cnn');
  fileUploadCNN.onchange = readImageCNN;
};

function postKNN(input) {
    $.ajax({
        type: "POST",
        url: "/run_knn.py",
        data: { param: input },
        success: callbackFunc
    });

    let upload_results = document.getElementById("upload_results_element");
    let formData = new FormData(),
        xhr = new XMLHttpRequest();

    console.log("Dropped " + String(files.length) + " files.");
    for(let i=0; i<files.length; i++) {
        formData.append("file", files[i]);
    }

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            alert(xhr.responseText);
        }

        console.log(xhr.response);
        upload_results.innerHTML = this.response;
    }

    console.log("Let's upload files: ", formData);
    xhr.open('POST', 'upload_handler.py', true); // async = true
    xhr.send(formData); 
}

function callbackKNN(response) {
    // do something with the response
    console.log(response);
    var div = document.getElementById('knn-ret');
    div.innerHTML += 'YOO';
}

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

    postData(this.files[0]);

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