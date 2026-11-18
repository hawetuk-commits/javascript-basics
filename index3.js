/* Part 3: JavaScript Input and Output */

/* 1. console.log() output */
/* This message appears in the browser Console, not on the webpage. */
console.log("Program started");
console.log(20);
console.log(10 + 5); /* This will show 15 */

/* 2. document.write() output */
/* This writes text directly on the webpage. */
document.write("<p>This text was written by JavaScript.</p>");

/* This function runs when the user clicks the button. */
function showInfo() {

    /* 3. prompt() input */
    /* Ask the user for their age using a pop-up box. */
    let age = prompt("Enter your age:");

    /* If the user clicks Cancel, prompt() gives null. */
    /* We stop the function if no age was entered. */
    if (age === null || age === "") {
        alert("Please enter your age.");
        return;
    }

    /* Get the name typed in the HTML input box. */
    /* .value reads what the user wrote inside the input field. */
    let name = document.getElementById("studentName").value;

    /* If the name box is empty, ask the user to write a name. */
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    /* 4. confirm() input */
    /* Ask a Yes/No question. */
    /* OK gives true, Cancel gives false. */
    let answer = confirm("Do you want to continue?");

    /* Show the answer in the Console for practice. */
    console.log("User clicked OK:", answer);

    /* If the user clicked Cancel, stop here. */
    if (answer === false) {
        alert("You clicked Cancel.");
        return;
    }

    /* 5. innerHTML output */
    /* innerHTML can understand HTML tags. */
    /* <b> makes the name bold. */
    document.getElementById("title").innerHTML = "Hello <b>" + name + "</b>!";

    /* 6. textContent output */
    /* textContent shows only plain text. */
    /* It does NOT understand HTML tags. */
    document.getElementById("result").textContent =
        "Your name is " + name + " and your age is " + age + ".";

    /* 7. alert() output */
    /* Show a final welcome message in a pop-up. */
    alert("Welcome, " + name + "!");
}