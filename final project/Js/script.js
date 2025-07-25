if(document.getElementsByClassName(".owl-carousel")){
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin:30,
    loop:true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        }
    },
    navText : [ '<i class="fa-solid fa-arrow-left text-white"></i>', '<i class="fa-solid fa-arrow-right text-white"></i>' ]

  });
});
}
var btn = document.getElementById('scroll-btn')
window.addEventListener('scroll' , (e)=>{
  if(document.documentElement.scrollTop>700) btn.classList.remove(d.none)
    else btn.classList.add(d.none)
})

window.addEventListener('scroll' , (e)=>{
  if(document.documentElement.scrollTop > 750){
    var ctr1 = document.getElementById('counter1')
    var i = 1000
    var s1 = setInterval(()=>{
    i+=1000
    ctr1.innerText=i
    if(i == 8000) {clearInterval(s1)}
    },200
  )
  var ctr2 = document.getElementById('counter2')
  var m =1
  var s2 = setInterval(()=>{
    m++
    ctr2.innerText = m
     if( m == 20) clearInterval(s2)
  },150)
  var ctr3 = document.getElementById('counter3')
  var n =110
  var s3 = setInterval(()=>{
    n+=100
    ctr3.innerText= n 
    if(n == 810) clearInterval(s3)
  }, 250)
   var ctr4 = document.getElementById('counter4')
   var c = 1000
   var s4 = setInterval(()=>{
    c+=100
    ctr4.innerText = c
    if(c == 2000) clearInterval(s4)
   }, 200)
  }
  
})

const filterLinks = document.querySelectorAll('#filterList a');
const cards = document.querySelectorAll('.car'); 
filterLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 

    const filterValue = link.getAttribute('data-filter');

    cards.forEach(card => {
      if (filterValue === 'all' || card.classList.contains(filterValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

