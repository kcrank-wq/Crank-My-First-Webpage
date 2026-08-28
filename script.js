// ==========================
// SHOW ABOUT ME
// ==========================


const aboutButton = document.getElementById("aboutButton");


aboutButton.addEventListener("click", function () {


    window.location.href = "#about";


});




// ==========================
// ADD SKILLS
// ==========================


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


        removeButton.addEventListener("click", function () {
            listItem.remove();
        });


        listItem.appendChild(removeButton);
        skillList.appendChild(listItem);


        skillInput.value = "";
    }


});




// ==========================
// ADD GOALS
// ==========================


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


        removeButton.addEventListener("click", function () {
            listItem.remove();
        });


        listItem.appendChild(removeButton);
        goalList.appendChild(listItem);


        goalInput.value = "";
    }


});






