// =========================
// ABOUT ME
// =========================


const aboutButton = document.getElementById("aboutButton");
const aboutText = document.getElementById("aboutText");


aboutButton.addEventListener("click", function () {


    if (aboutText.classList.contains("hidden")) {


        aboutText.classList.remove("hidden");
        aboutButton.textContent = "Hide About Me";


    } else {


        aboutText.classList.add("hidden");
        aboutButton.textContent = "Show About Me";
    }


});




// =========================
// SKILLS
// =========================


const skillInput = document.getElementById("skillInput");
const addSkillButton = document.getElementById("addSkillButton");
const skillList = document.getElementById("skillList");


addSkillButton.addEventListener("click", function () {


    const skill = skillInput.value.trim();


    if (skill !== "") {


        const listItem = document.createElement("li");


        listItem.textContent = skill + " ";


        const removeButton = document.createElement("button");


        removeButton.textContent = "Remove";
        removeButton.classList.add("removeButton");


        removeButton.addEventListener("click", function () {
            listItem.remove();
        });


        listItem.appendChild(removeButton);


        skillList.appendChild(listItem);


        skillInput.value = "";
    }
});




// =========================
// GOALS
// =========================


const goalInput = document.getElementById("goalInput");
const addGoalButton = document.getElementById("addGoalButton");
const goalList = document.getElementById("goalList");


addGoalButton.addEventListener("click", function () {


    const goal = goalInput.value.trim();


    if (goal !== "") {


        const listItem = document.createElement("li");


        listItem.textContent = goal + " ";


        const removeButton = document.createElement("button");


        removeButton.textContent = "Remove";
        removeButton.classList.add("removeButton");


        removeButton.addEventListener("click", function () {
            listItem.remove();
        });


        listItem.appendChild(removeButton);


        goalList.appendChild(listItem);


        goalInput.value = "";
    }
});




// =========================
// REMOVE ORIGINAL ITEMS
// =========================


const removeButtons = document.querySelectorAll(".removeButton");


removeButtons.forEach(function (button) {


    button.addEventListener("click", function () {


        button.parentElement.remove();


    });


});



