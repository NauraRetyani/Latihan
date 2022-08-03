function isiData(){

  var nama = document.getElementById("input-name").value;
  var desc = document.getElementById("input-desc").value;
  var img = document.getElementById("input-img").value;


  document.getElementById("nama").innerHTML = nama;
  document.getElementById("desc").innerHTML = desc;
  document.getElementById("img-data").setAttribute("src", img);
  document.getElementById("img-data").src="newSource.png";
}
