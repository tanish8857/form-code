// Emthod to inssert data with api
var form = document.getElementById('feedbackForm');
form.addEventListener("submit", e => {
e.preventDefault();
fetch(form.action, {
  method : "POST",
  body: new FormData(document.getElementById("feedbackForm")),
}).then(
  response => response.json()
).then((html) => {
// you can put any JS code here
// window.open('index.html', '_blank');
response.render("./registration.html");
});
});