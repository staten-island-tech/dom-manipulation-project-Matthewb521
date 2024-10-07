const DOMselectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
  form: document.querySelector("form"),
};

function take() {
  let form = DOMselectors.form;
  let formdata = [
    document.querySelector("#inputv"),
    document.querySelector("#inputx"),
    document.querySelector("#inputz"),
  ];
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    for (let i = 0; i < 4; i++) {
      console.log(formdata[i - 1].value);
    }
  });
}

take();
