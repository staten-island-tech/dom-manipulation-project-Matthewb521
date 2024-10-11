const DOMselectors = {
  header: document.querySelector("h2"),
  picture: document.querySelectorAll("picture"),
  description: document.querySelector(".card-desc"),
  form: document.querySelector("form"),
  cardContainer: document.querySelector(".card-container"),
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
    const cardHTML = `
      <div class="card card-ani">
        <h2>${formObject.name}</h2>
        <img class"images" src="${formObject.picture}" alt="Image of ${formObject.name}" />
        <h3>${formObject.desc}</h3>
        <button class="remove-btn">Remove</button>
      </div>
    `;
    DOMselectors.cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    console.log(formObject);
    formdata.forEach((input) => (input.value = ""));
  });

  DOMselectors.cardContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      const card = event.target.closest(".card");
      card.remove();
    }
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
