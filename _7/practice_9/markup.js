const urls = [
 {
  name: "Facebook",
  url: "https://www.facebook.com"
 },
 {
  name: "Twitter",
  url: "https://www.twitter.com"
 },
 {
  name: "Youtube",
  url: "https://www.youtube.com"
 },
 {
  name: "Google",
  url: "https://www.google.com"
 },
];

let template = `<ul>{{template}}</ul>`;

let markup = urls.reduce((acc, cur)=> {
 return acc+=`<li><a href="${cur.url}">${cur.name}</a></li>`;
}, '');
template = template.replace("{{template}}", markup);
document.write(template);