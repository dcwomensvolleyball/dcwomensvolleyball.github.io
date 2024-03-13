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

function collapseTab() {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }
}