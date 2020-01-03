// total spins in 100% height
var spins = 2.5;

$( window ).scroll(function(event){
  let lambdaHeight = $(document).height()-$(window).height();
  let deg = window.scrollY * (spins*360/lambdaHeight);
  $("#brand-logo").css({'transform':'rotate(' + deg + 'deg)'});
  console.log(deg);
});
