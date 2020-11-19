function readUrlKNN(input) {
  
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
      console.log(e.target.result);
      console.log(imgName);
    }
    reader.readAsDataURL(input.files[0]);

    $("<p id="knn-p">Result: </p>").appendTo("HELLO")

  }

}

function readUrlSVM(input) {
  
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
      console.log(e.target.result);
      console.log(imgName);
    }
    reader.readAsDataURL(input.files[0]);

    
  }

}

function readUrlCNN(input) {
  
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
      console.log(e.target.result);
      console.log(imgName);
    }
    reader.readAsDataURL(input.files[0]);

    
  }

}