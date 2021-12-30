$(document).ready(()=>{
 $("#fullpage").fullpage({
  anchors: ['page1', 'page2','page3','page4'],
 });
 for(let i=0; i<4; i++) {
  $(".section_"+i).css({
   backgroundColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
  });
 }
});
