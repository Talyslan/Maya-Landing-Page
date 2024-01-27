const list_span = document.querySelectorAll(".span");
const list_inputs = document.querySelectorAll(".input");

const selectSpan = ({ target }) => {
    const span = target.parentNode.children[0]
    span.classList.add("selected");
}

const deselectSpan = ({ target }) => {
    const span = target.parentNode.children[0];
    if (target.value === "")
        span.classList.remove("selected");
}

list_inputs.forEach(input => input.addEventListener("focus", selectSpan));
list_inputs.forEach(input => input.addEventListener("focusout", deselectSpan));
