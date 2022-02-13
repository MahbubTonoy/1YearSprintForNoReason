function getRandomColor() {
 let colorNumber = () => Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${colorNumber()},${colorNumber()},${colorNumber()})`;;
}
window.onload = function(){
 getRandomColor();
};
document.getElementById("colorBtn").addEventListener("click", function(){
 getRandomColor();
})