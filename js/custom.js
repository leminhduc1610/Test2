// JavaScript Docum
$(document).ready(function(){
	$("#b").owlCarousel({
		items:1,
		nav:true,
		dots:true
	})
	/*$("#dm").owlCarousel({
		items:4,
		nav:true,
		dots:true,
		margin:10,
	})*/
	
		
	$("#banner").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:4000,
		loop:true,
		autoplayTimeout:5000,

		dots:false
	})
	
	$("#dm").owlCarousel({
		
		smartSpeed:1000,
		loop:true,
		autoplayTimeout:1000,
		items:3,
		margin:30,
		nav:true
			})
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


 new WOW().init();
