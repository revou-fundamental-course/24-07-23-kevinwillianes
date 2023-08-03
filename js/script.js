let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function validateForm(){
    var name = document.forms["form_contact_us"]["fname"].value;
    var email = document.forms["form_contact_us"]["email"].value;
    var interested = document.forms["form_contact_us"]["interested"].value;

    if(name == ""){
        alert("Name cannot be empty");
        return false;
    }else if(email == ""){
        alert("Email cannot be empty");
        return false;
    }else if(interested == ""){
        alert("Selection cannot be empty");
        return false;
    }else{
        alert("Thankyou, please wait until we contact you");
        return true;
    }

    document.getElementById("fname").innerText = name;
    document.getElementById("email").innerText = email;
    document.getElementById("interested").innerText = interested;
    return false;
}