
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



skillInput.addEventListener("input", function () {


    if (skillInput.value !== "") {
        skillInput.style.fontWeight = "bold";
        skillInput.style.fontSize = "18px";
    } else {
        skillInput.style.fontWeight = "normal";
        skillInput.style.fontSize = "16px";
    }
});

// ==========================
// CONTACT FORM VALIDATION
// ==========================

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    // Check name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Check email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Check phone
    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    }

    // Check message
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    // If everything is correct
    if (isValid) {
        formSuccess.textContent = "Your message was submitted successfully!";
    }
});

emailInput.addEventListener("input", function() {
    if (emailInput.value.includes("@")) {
        emailError.textContent = "";
    }
});

// ==========================
// BONUS API FETCH
// ==========================

const adviceButton = document.getElementById("adviceButton");
const adviceResult = document.getElementById("adviceResult");
const apiError = document.getElementById("apiError");

adviceButton.addEventListener("click", function () {

    adviceResult.textContent = "Loading...";
    apiError.textContent = "";

    fetch("https://jsonplaceholder.typicode.com/todos/1")


        .then(function (response) {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })

        .then(function (data) {

            adviceResult.textContent = "API Result: " + data.title;
        })

        .catch(function (error) {

            adviceResult.textContent = "";
            apiError.textContent = "Sorry, the advice could not be loaded.";

            console.error(error);
        });

});
