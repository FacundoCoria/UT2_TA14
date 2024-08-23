const btn = document.getElementById("btnAñadir");
const input = document.getElementById("input");
const list = document.getElementById("lst");

btn.addEventListener("click", () => {
    const inputText = input.value

    if (inputText !== "") { 
        const listItem = document.createElement("li"); 
        listItem.textContent = inputText; 
        list.appendChild(listItem); 
        input.value = ""; 
    }
});
