// Button changes vvisible page content

const changeButton = document.getElementById("change-button");
const message = document.getElementById("message");

changeButton.addEventListener("click", function() {
    message.textContent =
    "I am learning web development and working toward a career in cybersecurity!";
});


// Style changes while the user types

const nameInput = document.getElementById("name-input");
const typingText = document.getElementById("typingText");

nameInput.addEventListener("input", function() {

    typingText.textContent = nameInput.value;

    typingText.style.fontSize = "24px";
    typingText.style.fontWeight = "bold";

    if (nameInput.value === "") {
        typingText.textContent =
        "this text will change while you type.";

        typingText.style.fontSize = "16px";
        typingText.style.fontWeight = "normal";
    }
});


// Dynamic goal list

const goalInput = document.getElementById("goalInput");
const addGoalButton = document.getElementById("addGoalButton");
const goalList = document.getElementById("goalList");

addGoalButton.addEventListener("click", function() {

    const newGoal = goalInput.value.trim();

    if (newGoal !== "") {

        const listItem = document.createElement("li");

        listItem.textContent = newGoal;

        goalList.appendChild(listItem);

        goalInput.value = "";

    }
});

