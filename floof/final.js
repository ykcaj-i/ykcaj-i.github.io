
/*toggle dark mode*/
function myFunction() {
   var element = document.body;
   var element1 = document.username;
   element.classList.toggle("dark-mode");
   element1.classList.toggle("dark-mode");
}
/*sticky navbar*/


window.onscroll = function() {
  myFunction1()
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction1() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }







function myFunction2(){

}

function myFunction3(){

}