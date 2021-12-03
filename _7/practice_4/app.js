const apiUrl = "demo.txt";

function getFunciton() {
 fetch(apiUrl)
 .then(x=> x.text())
 .then(y => console.log(y));
}

getFunciton();