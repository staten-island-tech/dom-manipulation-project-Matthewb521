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
    console.log(formdata[0].value, formdata[1].value, formdata[2].value);
  });
}

take();

function createUserObject(name, picture, desc) {
  return {
    name: name,
    picture: picture,
    desc: desc,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
}

createUserObject();
