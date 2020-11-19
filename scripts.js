var fileUpload;

window.onload = function () {
    var fileUpload = document.getElementById('fileUpload');
};

function readImage() {
    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
           var img = new Image();
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
        
        var div = document.getElementById('tester');
        div.innerHTML += 'HI';
    }
}

if (fileUpload) {
  fileUpload.onchange = readImage;   
}