var fileUpload;

window.onload = function () {
  var fileUpload = document.getElementById('fileUpload');
  fileUpload.onchange = readImage;
};

function readImage() {
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
    
    var div = document.getElementById('tester');
    div.innerHTML += 'HI';

    console.log("DID THIS")
  }
}