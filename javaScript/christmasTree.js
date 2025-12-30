// document.addEventListener("DOMContentLoaded", () => {

//     console.log("DOM fully loaded");

//     const dialogueStages = [
//         [
//             "HELLO THIS IS FIRST VIIST TEXT",
//             "YEAH YEAH YEAH YEAH"
//         ],
//         [
//             "IM BACK BITCH SECOND VISIT TEST",
//             "YAY YAY YAY YAY"
//         ]
//     ];

//     let stage = parseInt(localStorage.getItem("christmasTreeDialogueStage")) || 0;

//     if (stage < dialogueStages.length) {
//         playDialogue(dialogueStages[stage]);
//         localStorage.setItem("christmasTreeDialogueStage", stage + 1);
//     }
//     let ballball = 0;
//     let baubleCount = parseInt(localStorage.getItem("baubles")) || 0;

//     const treeImages = [
//         "../Images/christmasTree/undecoratedChristmasTree.png",
//         "../Images/christmasTree/oneBallChristmasTree.png",
//         "../Images/christmasTree/twoBallChristmasTree.png",
//         "../Images/christmasTree/threeBallChristmasTree.png",
//         "../Images/christmasTree/fourBallChristmasTree.png",
//         "../Images/christmasTree/fullyDecoratedChristmasTree.png"
//     ];



//     const treeImg = document.getElementById("treeImg");
//     const btn = document.getElementById("btn");

//     btn.addEventListener("click", () => {
//         ballball++;
//         // Reduce dialogue stage by 1, minimum 0
//         let stage = parseInt(localStorage.getItem("christmasTreeDialogueStage")) || 0;
//         stage = Math.max(stage - 1, 0);
//         localStorage.setItem("christmasTreeDialogueStage", stage);

//         // Play dialogue for that stage
//         playDialogue(dialogueStages[stage], document.getElementById("dialogueBox"), document.getElementById("dialogueText"), btn);


//         if (ballball < treeImages.length) {
//             treeImg.src = treeImages[ballball];
//         }
//     });
//     localStorage.removeItem("treeDialogueStage");
//     console.log(dialogueStages);

// })


// function playDialogue(messages) {

//     const dialogueBox = document.getElementById("dialogueBox");
//     const dialogueText = document.getElementById("dialogueText");

//     let messageIndex = 0;
//     let charIndex = 0;


//     dialogueBox.style.display = "block";
//     dialogueText.textContent = "";

//     function typeText() {
//         if (charIndex < messages[messageIndex].length) {
//             dialogueText.textContent += messages[messageIndex][charIndex];
//             charIndex++;
//             setTimeout(typeText, 40);
//         } else {
//             setTimeout(nextMessage, 1200);
//         }
//     }

//     function nextMessage() {
//         charIndex = 0;
//         messageIndex++;

//         if (messageIndex < messages.length) {
//             dialogueText.textContent = "";
//             typeText();

//         } else {
//             setTimeout(() => {
//                 dialogueBox.style.display = "none";
//             }, 800);
//         }
//     }

//     typeText();
// }

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded");
    const dialogueBox = document.getElementById("dialogueBox");
    const dialogueText = document.getElementById("dialogueText");
    const plane = document.getElementById("plane");
    dialogueBox.style.display = "block"; // make it visible

    const secretButton = document.getElementById("secretButton");

    secretButton.addEventListener("click", () => {
        // Load current baubles
        let baubleCount = parseInt(localStorage.getItem("baubles")) || 0;

        // Subtract 1, but don't go below 0
        baubleCount = Math.max(0, baubleCount - 1);

        // Save updated count
        localStorage.setItem("baubles", baubleCount);

        // Update the tree image immediately
        treeImg.src = treeImages[Math.min(baubleCount, treeImages.length - 1)];

        // Optional: show a quick message
        alert("Secret! -1 bauble");
    });

    secretButton2.addEventListener("click", () => {
        // Load current baubles
        let baubleCount = parseInt(localStorage.getItem("baubles")) || 0;

        // Subtract 1, but don't go below 0
        baubleCount = Math.max(0, baubleCount + 1);

        // Save updated count
        localStorage.setItem("baubles", baubleCount);

        // Update the tree image immediately
        treeImg.src = treeImages[Math.min(baubleCount, treeImages.length - 1)];

        // Optional: show a quick message
        alert("Secret! +1 bauble");
    });

    if (!dialogueBox || !dialogueText) {
        console.error("Dialogue box or text not found!");
        return;
    }


    //-----------------------------------------
    // Load baubles earned from other pages
    //-----------------------------------------
    let baubleCount = parseInt(localStorage.getItem("baubles")) || 0;

    //-----------------------------------------
    // Dialogue depending on page visit count
    //-----------------------------------------
    const dialogueStages = [
        [
            "HELLO THIS IS FIRST VISIT TEXT",
            "YEAH YEAH YEAH YEAH"
        ],

        [
            "IM BACK SECOND VISIT TEST",
            "YAY YAY YAY YAY"
        ],

        // Add more if you want later
    ];

    let dialogueToPlay;

    if (baubleCount === 0) {
        dialogueToPlay = ["Welcome! My Chrismas Friends", "I cans ee you guys are the chrismas miracle type of people", "If you would be so kind, Im in a bit of a connudrum", "As you can see I have lost all my christmas Decorations!!!!", "These are no ordinary chirstmas decorations, for these decorations contain all the chirstmas spirit in the entire world!!!", "So please help me gather these decorations again and hep Save Chtismas!!", "This journey will be treacherous and full of treachery", "Take my private jet in the back to the first Decoration, and godspeed"];
    } else if (baubleCount === 1) {
        dialogueToPlay = ["Congratulations on getting back one of the decorations.", "And whats that you made a new button freind as well, sure hope nothing bad happens to him", "good guy that one is", "Well theres still a few more decorations to go and the next ones, lets say your gonna have to roll the dice", "Hop on my private jet to the next chrismstas decoration"];
    } else {
        dialogueToPlay = ["Wow! Multiple baubles!", "Your tree looks great!"];
    }

    playDialogue(dialogueToPlay, () => {
        const updatedBaubleCount = parseInt(localStorage.getItem("baubles")) || 0;
        treeImg.src = treeImages[Math.min(updatedBaubleCount, treeImages.length - 1)];
        if (baubleCount === 0) {
            plane.style.display = "block";
        }

    });

    plane.addEventListener("click", () => {
        window.location.href = "../Pages/buttongame.html"
    })






    // // Play dialogue depending on visit count
    // if (stage < dialogueStages.length) {
    //     playDialogue(dialogueStages[stage]);
    //     localStorage.setItem("christmasTreeDialogueStage", stage + 1);
    // }


    //-----------------------------------------
    // Tree image depending on bauble count
    //-----------------------------------------
    const treeImages = [
        "../Images/christmasTree/undecoratedChristmasTree.png",     // 0 baubles
        "../Images/christmasTree/oneBallChristmasTree.png",         // 1
        "../Images/christmasTree/twoBallChristmasTree.png",         // 2
        "../Images/christmasTree/threeBallChristmasTree.png",       // 3
        "../Images/christmasTree/fourBallChristmasTree.png",        // 4
        "../Images/christmasTree/fullyDecoratedChristmasTree.png"   // 5+
    ];

    const treeImg = document.getElementById("treeImg");

    // Display correct tree image on load


    console.log("Baubles:", baubleCount);
});


//-------------------------------------------------------
// Typewriter Dialogue System (unchanged from your version)
//-------------------------------------------------------
function playDialogue(messages, callback) {

    const dialogueBox = document.getElementById("dialogueBox");
    const dialogueText = document.getElementById("dialogueText");

    let messageIndex = 0;
    let charIndex = 0;

    dialogueBox.style.display = "block";
    dialogueText.textContent = "";

    function typeText() {
        if (charIndex < messages[messageIndex].length) {
            dialogueText.textContent += messages[messageIndex][charIndex];
            charIndex++;
            setTimeout(typeText, 55);
        } else {
            setTimeout(nextMessage, 2000); // delay before next text
        }
    }

    function nextMessage() {
        charIndex = 0;
        messageIndex++;

        if (messageIndex < messages.length) {
            dialogueText.textContent = "";
            typeText();
        } else {
            setTimeout(() => {
                dialogueBox.style.display = "none";
                if (callback) callback();
            }, 800);
        }
    }

    typeText();
}
