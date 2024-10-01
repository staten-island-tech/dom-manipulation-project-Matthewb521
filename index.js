const DOMselectors = {
  header: document.querySelector("h1"),
  description: document.querySelector("card-desc"),
  items: document.querySelector("li"),
};

console.log(DOMselectors.header);
function take() {
  let form = document.querySelector("name");
  form.addEventListener("enter", function (event) {
    event.preventDefault();
    console.log(event.target);
  });
}
take();
