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

function sosPopup(popupId, otherIds) {
  for(var i = 0; i < otherIds.length; i++)
  {
    document.getElementById("sos_popup" + otherIds[i]).classList.remove("show");
  }
  if (document.getElementById("sos_popup" + popupId).classList.contains("show")) {
    document.getElementById("sos_popup" + popupId).classList.remove("show");
  } else {
    document.getElementById("sos_popup" + popupId).classList.add("show");
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

function toggle_row(btnID, eIDs) {
  // Feed the list of ids as a selector
  var theRows = document.querySelectorAll(eIDs);
  // Get the button that triggered this
  var theButton = document.getElementById(btnID);
  // Get the icon that triggered this
  var theIcon = document.getElementById(`icon-${btnID}`);

  // SVG for Minus icon
  const minusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  `;
 
  // SVG for Plus icon
  const plusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  `;

  // If the button is not expanded...
  if (theButton.getAttribute("aria-expanded") == "false") {
    // Loop through the rows and show them
    for (var i = 0; i < theRows.length; i++) {
      theRows[i].classList.add("shown");
      theRows[i].classList.remove("hidden");
    }
    // Now set the button to expanded
    theButton.setAttribute("aria-expanded", "true");
    theIcon.innerHTML = minusSVG;
  // Otherwise button is not expanded...
  } else {
    // Loop through the rows and hide them
    for (var i = 0; i < theRows.length; i++) {
      theRows[i].classList.add("hidden");
      theRows[i].classList.remove("shown");
    }
    // Now set the button to collapsed
    theButton.setAttribute("aria-expanded", "false");
    theIcon.innerHTML = plusSVG;
  }
}