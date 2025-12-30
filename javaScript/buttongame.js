
// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("redButton");
//     const timerDisplay = document.getElementById("timer");
//     const clickDisplay = document.getElementById("clickCount");
//     const roundInfo = document.getElementById("roundInfo");
//     const instructions = document.getElementById("instructions");
//     const gameMessage = document.getElementById("gameMessage");
//     const audio1 = new Audio("../Audio/gun-reload-2-395177.mp3")
//     const audio2 = new Audio("../Audio/gun-shot-sound-effect-224087.mp3")
//     const cutsceneoverlay = document.getElementById("cutsceneOverlay");
//     const cutsceneImage = document.getElementById("cutsceneImage");

//     const CUTSCENE_PAUSE_TIME = 10000;

//     const rounds = [
//         {
//             instruction: "Press the button 1 time in 10 seconds!",
//             requiredClicks: 1,
//             timeLimit: 3,
//             type: "normal" // normal button round
//         },
//         {
//             instruction: "Do NOT press the button when the cat appears!",
//             requiredClicks: 0,
//             timeLimit: 3,
//             type: "image",
//             images: [
//                 { src: "cat.png" }
//             ]
//         },
//         {
//             instruction: "Each Santa image is 2 clicks. There are 2 Santas. Press the button accordingly!",
//             requiredClicks: 6,
//             timeLimit: 12,
//             type: "image",
//             images: [
//                 { src: "santa.png" },
//                 { src: "santa.png" },
//                 { src: "santa.png" }

//             ]
//         }
//     ];


//     let round = 1;
//     let requiredClicks = [];
//     let totalRounds = requiredClicks.length;
//     let timeLimit = 10;
//     let clickCount = 0;
//     let timeLeft;
//     let timerInterval;
//     let progressiveMode = false;
//     let progressiveRound = 1;
//     let maxProgressiveClicks = 20;
//     let questionInterval = 10;

//     function startRound() {

//         const currentRound = rounds[round - 1];
//         clickCount = 0;
//         timeLeft = currentRound.timeLimit;
//         clickDisplay.textContent = `Clicks: ${clickCount}`;
//         timerDisplay.textContent = `Time: ${timeLeft}`;
//         roundInfo.textContent = `Round ${round}`;
//         instructions.textContent = currentRound.instruction;
//         gameMessage.textContent = "";

//         // const existingImg = document.getElementById("roundImage");
//         const existingImg = document.querySelectorAll(".roundImage");
//         existingImg.forEach(img => img.remove());

//         if (currentRound.type === "image" && currentRound.images) {
//             currentRound.images.forEach((imgObj, index) => {
//                 const img = document.createElement("img");
//                 img.className = "roundImage";
//                 img.src = `../Images/buttonGame/${imgObj.src}`;
//                 img.style.width = "150px";
//                 img.style.height = "auto";
//                 document.getElementById("gameContainer").appendChild(img);
//             });
//         }

//         clearInterval(timerInterval);
//         timerInterval = setInterval(() => {
//             timeLeft--;
//             timerDisplay.textContent = `Time: ${timeLeft}`;

//             if (timeLeft <= 0) {
//                 clearInterval(timerInterval);
//                 checkRound();
//             }
//         }, 1000);

//         //start tiome

//         // timerInterval = setInterval(() => {
//         //     timeLeft--;
//         //     timerDisplay.textContent = `Time: ${timeLeft}`;

//         //     if (timeLeft <= 0) {
//         //         clearInterval(timerInterval);
//         //         checkRound();
//         //     }
//         // }, 1000);

//     }

//     button.addEventListener("click", () => {
//         clickCount++;
//         clickDisplay.textContent = `Clicks: ${clickCount}`;
//     });

//     function checkRound() {
//         if (!progressiveMode) {
//             const currentRound = rounds[round - 1];
//             const required = currentRound.requiredClicks;
//             if (clickCount === required) {
//                 gameMessage.textContent = "You did it this time, moving on";
//                 round++;
//                 if (round <= rounds.length) {
//                     setTimeout(startRound, 1500);
//                 } else {
//                     progressiveMode = true;
//                     progressiveRound = 1;
//                     setTimeout(startProgressiveRound, 1500);
//                 }
//             } else {
//                 gameMessage.textContent = "FAILED, RESETIIGN";
//                 round = 1;
//                 setTimeout(startRound, 2000);
//             }
//         } else {
//             handleProgressiveRound();
//         }

//     }

//     function startProgressiveRound() {
//         clickCount = 0;
//         document.querySelectorAll(".roundImage").forEach(img => img.remove());

//         if (progressiveRound % questionInterval === 0){
//             instructions.textContent = "Is this button pushing game getting boring yet? 1 Click for Yes, 2 Clicks for No";
//         } else {
//             instructions.textContent = `Press the button ${progressiveRound} time${progressiveRound}`;
//         }

//         clickDisplay.textContent = `Clicks: ${clickCount}`;
//         gameMessage.textContent = "";
//         roundInfo.textContent = `Round ${rounds.length + progressiveRound}`;


//         let timeLeft = 3
//         timerDisplay.textContent = `Time: ${timeLeft}`;
//         clearInterval(timerInterval);

//         timerInterval = setInterval(() => {
//             timeLeft--;
//             timerDisplay.textContent = `Time: ${timeLeft}`;

//             if (timeLeft <= 0) {
//                 clearInterval(timerInterval);
//                 handleProgressiveRound();

//             }
//         }, 1000);
//     }

//     function handleProgressiveRound() {
//         if (progressiveRound % questionInterval === 0) {
//             if (clickCount === 1) {
//                 let video = document.getElementById("myVideo");

//                 video.style.display = "block";
//                 video.play();
//                 return;
//             } else if (clickCount === 2){
//                 gameMessage.textContent = "Really!? THANKS let keep going";

//             } else {
//                 gameMessage.textContent = "Thats not an answer, please be honest i can take it";
//                 progressiveRound = Math.max(1,progressiveRound - 1);
//             }

//         } else {
//             if (clickCount !== progressiveRound) {
//                 gameMessage.textContent = "Please follwo the guidlines :(";
//                 setTimeout(startProgressiveRound, 1500);
//                 return;
//             }
//         }

//         progressiveRound++;
//         if (progressiveRound <= maxProgressiveClicks) {
//             setTimeout(startProgressiveRound, 1500);
//         } else {
//             gameMessage.textContent = "Its finished lil bro";

//         }
//     }



// // document.getElementById("redButton").addEventListener("click", () => {
// //     console.log("Button pressed!");
// //     // Do something here when pressed
// });






document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("redButton");
    const timerDisplay = document.getElementById("timer");
    const clickDisplay = document.getElementById("clickCount");
    const roundInfo = document.getElementById("roundInfo");
    const instructions = document.getElementById("instructions");
    const gameMessage = document.getElementById("gameMessage");
    const audio1 = new Audio("../Audio/gun-reload-2-395177.mp3");
    const audio2 = new Audio("../Audio/gun-shot-sound-effect-224087.mp3");
    const preGameDialogue = [
        "So youve come for my baubel huh..",
        "Your gonna have to earn it",
        "Pass My Trial and lets see if you can even pass my trial"
    ];

    playDialogue(preGameDialogue, () => {
        // Start the game AFTER dialogue finishes
        startRound();
    });

    const rounds = [
        {
            //round 1
            instruction: "Press the button 1 time",
            requiredClicks: 1,
            timeLimit: 5,
            type: "normal"
        },
        {
            //round 2
            instruction: "Do NOT press the button you see a cat",
            requiredClicks: 0,
            timeLimit: 5,
            type: "image",
            images: [
                { src: "cat.png" }
            ]
        },
        {
            //round 3
            instruction: "Each santa you see is 2 additonal button CLICKS. PRess Correcetley",
            requiredClicks: 6,
            timeLimit: 8,
            type: "image",
            images: [
                { src: "santa.png" },
                { src: "santa.png" },
                { src: "santa.png" }
            ]
        },
        {
            //round 4
            instruction: "Hold the button down for 2 - 3 seconds",
            holdTime: 2000,
            timeLimit: 5,
            type: "hold"
        },
        {
            //round: 5
            instruction: "The next Insrtuction is a Lie",
            requiredClicks: 0,
            timeLimit: 5,
            type: "normal",
        },
        {
            //round: 6
            instruction: "The next Insrtuction is a wrong",
            requiredClicks: 0,
            timeLimit: 5,
            type: "normal",
        },
        {
            //round 6
            instruction: "Press the button ",
            requiredClicks: 1,
            timeLimit: 5,
            type: "normal",
        },
        {
            //round 7
            instruction: "Whenever you see the Grinch, press the button 3 additional Times",
            requiredClicks: 3,
            timeLimit: 8,
            type: "image",
            images: [
                { src: "grinch.png" }
            ]
        },
        {
            //round 8
            instruction: "Press the button the same amount fo times equal to X. \n 2X/5 - 3 = 7",
            requiredClicks: 25,
            timeLimit: 12,
            type: "normal",

        },
        {
            //round 9
            instruction: "Press the Button Please ",
            requiredClicks: 12,
            timeLimit: 12,
            type: "image",
            images: [
                { src: "santa.png" },
                { src: "grinch.png" },
                { src: "santa.png" },
                { src: "grinch.png" },
                { src: "santa.png" }
            ]
        },
        {
            //round 10
            instruction: "Press the button for each word in this sentance",
            requiredClicks: 0,
            timeLimit: 8,
            type: "image",
            images: [
                { src: "cat.png" }
            ]
        },
        {
            //round 11
            instruction: "The cat now equates to -1 button presses",
            requiredClicks: 2,
            timeLimit: 8,
            type: "image",
            images: [
                { src: "grinch.png" },
                { src: "cat.png" }
            ]
        },
        {
            //round 12
            instruction: "The next time you see the grinch press the button 10 times after that back to normal",
            requiredClicks: 2,
            timeLimit: 8,
            type: "image",
            images: [
                { src: "santa.png" }
            ]
        },
        {
            //round 13
            instruction: "Hold the button for at least 5 seconds but no longer than 7 ",
            holdTime: 5000,
            timeLimit: 10,
            type: "hold",

        },
        {
            //round 14
            instruction: "When you next see the cat you can add 1 click instead of subratcing \n back to normal after that",
            requiredClicks: 10,
            timeLimit: 10,
            type: "image",
            images: [
                { src: "grinch.png" }
            ]
        },
        {
            //round 15
            instruction: "Whenever you see an elf add 1 additional click, \n if you see an elf with Santa add 2 additonal clicks for each elf",
            requiredClicks: 10,
            timeLimit: 12,
            type: "image",
            images: [
                { src: "elf.png" },
                { src: "elf.png" },
                { src: "elf.png" },
                { src: "elf.png" },
                { src: "santa.png" }
            ]
        },
        {
            //round 16
            instruction: "The grinch has stolen santas moonshine, press 5 times every time you see the Grinch now",
            requiredClicks: 4,
            timeLimit: 12,
            type: "image",
            images: [
                { src: "elf.png" },
                { src: "elf.png" },
                { src: "elf.png" },
                { src: "cat.png" }

            ]
        },
        {
            //round 17
            instruction: "I have a drinking problem lend me 15 clicks so i can but more aclhold",
            requiredClicks: 15,
            timeLimit: 10,
            type: "normal",

        },
        {
            //round 18
            instruction: "The elfs are causing trouble, every elf you see is now -1 click \n If they are seen with santa they are -2 clicks per elf",
            requiredClicks: 4,
            timeLimit: 12,
            type: "image",
            images: [
                { src: "grinch.png" },
                { src: "cat.png" },
                { src: "santa.png" },
                { src: "elf.png" },
            ]
        },
        {
            //round 19
            instruction: "Just hold me tight, at least 10 seconds",
            holdTime: 10000,
            timeLimit: 15,
            type: "hold",
        },
        {
            //round 20
            instructions: "This is a mess",
            requiredClicks: 3,
            timeLimit: 15,
            type: "image",
            images: [
                { src: "cat.png" },
                { src: "cat.png" },
                { src: "elf.png" },
                { src: "elf.png" },
                { src: "santa.png" },
                { src: "grinch.png" },
                { src: "elf.png" },
                { src: "cat.png" },
                { src: "santa.png" },
                { src: "grinch.png" },
                { src: "elf.png" }
            ]
        }
    ];

    let round = 1;
    let clickCount = 0;
    let timeLeft;
    let timerInterval;
    let progressiveMode = false;
    let progressiveRound = 1;
    let isHolding = false;
    let holdStartTime = 0;
    let holdSuccess = false;
    const maxProgressiveClicks = 20;
    const questionInterval = 10;

    function startRound() {
        const currentRound = rounds[round - 1];
        clickCount = 0;
        timeLeft = currentRound.timeLimit;
        clickDisplay.textContent = `Clicks: ${clickCount}`;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        roundInfo.textContent = `Round ${round}`;
        instructions.textContent = currentRound.instruction;
        gameMessage.textContent = "";

        // Remove any previous round images
        document.querySelectorAll(".roundImage").forEach(img => img.remove());

        // Add images for image rounds
        if (currentRound.type === "image" && currentRound.images) {
            currentRound.images.forEach((imgObj) => {
                const img = document.createElement("img");
                img.className = "roundImage";
                img.src = `../Images/buttonGame/${imgObj.src}`;
                img.style.width = "150px";
                img.style.height = "auto";
                document.getElementById("gameContainer").appendChild(img);
            });
        }

        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                checkRound();
            }
        }, 1000);
    }



    button.addEventListener("click", () => {
        const currentRound = rounds[round - 1];
        if (!progressiveMode && currentRound.type === "hold") return;

        clickCount++;
        clickDisplay.textContent = `Clicks: ${clickCount}`;

    });

    button.addEventListener("mousedown", () => {
        const currentRound = rounds[round - 1];
        if (currentRound.type === "hold") {
            isHolding = true;
            holdStartTime = Date.now();

            // Live hold timer UI update
            holdInterval = setInterval(() => {
                if (isHolding) {
                    const heldFor = Date.now() - holdStartTime;
                    holdDisplay.textContent = `Hold: ${(heldFor / 1000).toFixed(2)}s`;
                }
            }, 50);
        }
    });

    button.addEventListener("mouseup", () => {
        const currentRound = rounds[round - 1];
        if (currentRound.type === "hold" && isHolding) {
            const heldDuration = Date.now() - holdStartTime;
            if (heldDuration >= currentRound.holdTime) {
                holdSuccess = true;
            } else {
                gameMessage.textContent = "Unlucky budy your too short";
            }
            isHolding = false;
        }
    });

    function checkRound() {
        if (!progressiveMode) {
            const currentRound = rounds[round - 1];
            if (currentRound.type === "hold") {
                if (holdSuccess) {
                    holdSuccess = false;
                    gameMessage.textContent = "You held this time";
                    round++;
                    setTimeout(startRound, 1500);
                } else {
                    gameMessage.textContent = "Unlucky pal you didnt hold on long egnogugh to be maeniful";
                    if (round <= 10) {
                        round = 1;
                    } else {
                        round = 10
                    }
                    setTimeout(startRound, 2000);
                }
                isHolding = false;
                holdStartTime = 0;
                clearInterval(holdInterval);
                holdDisplay.textContent = `Hold: 0s`;
                return;
            }
            if (clickCount === currentRound.requiredClicks) {
                gameMessage.textContent = "You did it this time, moving on";
                round++;
                if (round <= rounds.length) {
                    setTimeout(startRound, 1500);
                } else {
                    progressiveMode = true;
                    progressiveRound = 1;
                    setTimeout(startProgressiveRound, 1500);
                }
            } else {
                gameMessage.textContent = "FAILED, unlucky pal";
                if (round <= 10) {
                    round = 1;
                } else {
                    round = 10
                }
                setTimeout(startRound, 2000);
            }
        } else {
            handleProgressiveRound();
        }
    }

    function startProgressiveRound() {
        clickCount = 0;
        document.querySelectorAll(".roundImage").forEach(img => img.remove());

        if (progressiveRound % questionInterval === 0) {
            instructions.textContent = "Is this button pushing game getting boring yet? 1 Click for Yes, 2 Clicks for No";
        } else {
            instructions.textContent = `Press the button ${progressiveRound} time${progressiveRound > 1 ? 's' : ''}`;
        }

        clickDisplay.textContent = `Clicks: ${clickCount}`;
        gameMessage.textContent = "";
        roundInfo.textContent = `Round ${rounds.length + progressiveRound}`;

        timeLeft = 5;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleProgressiveRound();
            }
        }, 1000);
    }

    function handleProgressiveRound() {
        if (progressiveRound % questionInterval === 0) {
            if (clickCount === 1) {
                const messages = [
                    "Really...",
                    "I see so thats how you feel about me",
                    "Well i guewss im just a stupid button you can push around"
                ];

                playDialogue(messages, () => {
                    const video = document.getElementById("myVideo");
                    video.style.display = "block";
                    video.play();

                    video.onended = () => {
                        let baubleCount = parseInt(localStorage.getItem("baubles")) || 0;
                        baubleCount += 1;
                        localStorage.setItem("baubles", baubleCount);
                        document.getElementById("gameContainer").style.display = "none";
                        video.style.display = "none";
                        document.getElementById("nextButton").style.display = "block";
                    };
                });
                return;
            } else if (clickCount === 2) {
                gameMessage.textContent = "Really!? THANKS, let's keep going";
            } else {
                gameMessage.textContent = "That's not an answer, please be honest";
                progressiveRound = Math.max(1, progressiveRound - 1);
            }
        } else {
            if (clickCount !== progressiveRound) {
                gameMessage.textContent = "Please follow the guidelines :(";
                setTimeout(startProgressiveRound, 1500);
                return;
            }
        }

        progressiveRound++;
        if (progressiveRound <= maxProgressiveClicks) {
            setTimeout(startProgressiveRound, 1500);
        } else {
            gameMessage.textContent = "It's finished!";
        }
    }

    function playDialogue(messages, callback) {
        const dialogueOverlay = document.getElementById("dialogueOverlay");
        const dialogueBox = document.getElementById("dialogueBox");
        const dialogueText = document.getElementById("dialogueText");

        let messageIndex = 0;
        let charIndex = 0;


        // dialogueBox.style.display = "block";
        dialogueOverlay.style.display = "flex";
        dialogueText.textContent = "";

        function typeText() {
            if (charIndex < messages[messageIndex].length) {
                dialogueText.textContent += messages[messageIndex][charIndex];
                charIndex++;
                setTimeout(typeText, 60);
            } else {
                setTimeout(nextMessage, 2500);
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
                    dialogueOverlay.style.display = "none";
                    if (callback) callback();
                }, 800);
            }
        }

        typeText();
    }


    // // START THE GAME AUTOMATICALLY
    // progressiveMode = true;
    // progressiveRound = 9;
    // setTimeout(startProgressiveRound, 300);
    // return;
    // startRound();
});
