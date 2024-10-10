const DOMselectors = {
  header: document.querySelector("h2"),
  picture: document.querySelectorAll("picture"),
  description: document.querySelector(".card-desc"),
  form: document.querySelector("form"),
};

function take() {
  const form = DOMselectors.form;
  const formdata = [
    document.querySelector("#inputv"),
    document.querySelector("#inputx"),
    document.querySelector("#inputz"),
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = formdata[0].value;
    const picture = formdata[1].value;
    const desc = formdata[2].value;
    const formObject = createObject(name, picture, desc);
    console.log(formObject);
  });
}

function createObject(name, picture, desc) {
  return {
    name: name,
    picture: picture,
    desc: desc,
  };
}

document.addEventListener("DOMContentLoaded", take);
