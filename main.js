const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputBox.value === "") {
    alert("Plese enter the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    /* let span = document.createElement(span); */
    /* span.innerHTML = "\u00d7"; */
    /* li.appendChild(span); */
  }
  inputBox.value = "";
};

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.element("SPAN")) {
    e.target.classList.remove();
  }
});
