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
        $(".tester").append("hi");
    }
}

if (fileUpload) {
  fileUpload.onchange = readImage;   
}