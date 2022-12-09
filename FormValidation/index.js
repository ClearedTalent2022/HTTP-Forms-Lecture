// Let's make sure that both a username and a password are provided in the form
// If they aren't, we need to alert the user that all fields are required,
// and not let the form submission go through

window.addEventListener("load", function () {
    // We put the rest of our code in here because we need to wait for the window to load
    // before trying to select HTML elements from the document and working with them

    // First, we need to select form from the HTML document
    // let form = document.querySelector("form");
    let form = document.getElementById("loginForm");

    // Now that we have selected our form, we need to add an event listener that triggers
    // whenever the form is submitted
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // alert("All fields required!");
        // Now that we are listening for the submit of our form, we can check to see 
        // if the form inputs have values before we allow the form to submit
        // If the form inputs don't have values, then we should alert the user that 
        // all form fields are required

        // Given that we need to check if the form inputs do have values, we need to select
        // the form inputs using the document object
        let usernameInput = document.getElementById("username");
        let passwordInput = document.getElementById("password");

        let errorMessage = document.getElementById("errorMessage");

        // Now that we have selected our inputs, we can test to see if they have values
        // and send an alert if they don't
        if (usernameInput.value === "" || passwordInput.value === "") {
            // alert("Hey! All fields required!");
            // Instead of sending an alert, what if we added text inside of the 
            // errorMessage paragraph element
            errorMessage.innerHTML = "Hey! All fields required!";
        }
    });
});