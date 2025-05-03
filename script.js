const remainder = document.getElementById("remainder");
const button = document.getElementById("button");
const inputtext = document.getElementById("inputtext")

button.addEventListener('click', () => {
    const task = inputtext.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    };

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskItem");

    const taskContent = document.createElement("span");
    taskContent.innerText = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.onclick = () => taskDiv.remove();

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteBtn);

    remainder.appendChild(taskDiv);
    inputField.value = "";
});
