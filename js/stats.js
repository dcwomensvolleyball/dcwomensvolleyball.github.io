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
  
  for (var i = 0; i < coll.length; i++) {
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

let slideIndex = 1;
let antSlideIndex = 1;

showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

antShowSlides(antSlideIndex);

function antNextSlide(n) {
  antShowSlides(antSlideIndex += n);
}

function antShowSlides(n) {
  var slides = document.getElementsByClassName("antSlide");
  if (n > slides.length) {antSlideIndex = 1}
  if (n < 1) {antSlideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[antSlideIndex-1].style.display = "block";
}