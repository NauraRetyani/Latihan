function isiData(){

  var nama = document.getElementById("input-name").value;
  var desc = document.getElementById("input-desc").value;
//  var img = $("#input-img").val();
//  console.log(img);


  document.getElementById("nama").innerHTML = nama;
  document.getElementById("desc").innerHTML = desc;
//  document.getElementById("img-data").setAttribute("src", img);

  var input = document.getElementById("input-img");
  var fReader = new FileReader();
  fReader.readAsDataURL(input.files[0]);
  fReader.onloadend = function(event){
      var img = document.getElementById("img-data");
      img.src = event.target.result;
  }
}
