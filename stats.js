function openTab(tabName, otherIds) {
  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for(var i = 0; i < otherIds.length; i++)
  {
    document.getElementById(otherIds[i]).style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function showImage(imageId, otherIds) {
  for(var i = 0; i < otherIds.length; i++)
  {
    document.getElementById(otherIds[i]).style.display = "none";
  }
  document.getElementById(imageId).style.display = "block";
}

