const apiUrl = "http://localhost/api";

function getFunciton() {
 fetch(apiUrl)
 .then((r)=>r.json())
 .then((json) => {
  console.log(json);
 })
}

getFunciton();