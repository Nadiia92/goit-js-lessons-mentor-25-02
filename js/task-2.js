// <!-- Друге завдання 
    // При кліку на кнопку показати alert із значенням, яке введено в input -->
    // <!--     
    // <button>Click me</button>
    // <input type="text" id="input" /> -->


    const btnElem = document.querySelector("button");
const input = document.querySelector("input");

btnElem.addEventListener("click", alertMessage);

function alertMessage() {
    alert(input.value);
}

console.dir(input);