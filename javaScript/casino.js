// document.addEventListener("DOMContentLoaded", () => {

//     const dialogueBox = document.getElementById("dialogueBox");
//     const continueBtn = document.getElementById("continueBtn");
//     const casinoImage = document.getElementById("casinoImage");
//     const cardGrid = document.getElementById("cardGrid");
//     const scoreDisplay = document.getElementById("scoreDisplay");

//     // Score & goal
//     let score = 0;
//     const goalScore = 100;

//     //-------------------------------------------------
//     // 1. Dialogue
//     //-------------------------------------------------
//     const introDialogue = [
//         "Welcome to the Casino!",
//         "Here your luck and skill will determine your fate...",
//         "Try your best to reach the goal score."
//     ];

//     function playDialogue(messages, callback) {
//         let msgIndex = 0;
//         let charIndex = 0;
//         dialogueBox.style.display = "block";
//         dialogueBox.textContent = "";

//         function typeChar() {
//             if (charIndex < messages[msgIndex].length) {
//                 dialogueBox.textContent += messages[msgIndex][charIndex];
//                 charIndex++;
//                 setTimeout(typeChar, 40);
//             } else {
//                 setTimeout(nextMessage, 800);
//             }
//         }

//         function nextMessage() {
//             charIndex = 0;
//             msgIndex++;
//             if (msgIndex < messages.length) {
//                 dialogueBox.textContent = "";
//                 typeChar();
//             } else {
//                 dialogueBox.style.display = "none";
//                 if (callback) callback();
//             }
//         }

//         typeChar();
//     }

//     //-------------------------------------------------
//     // 2. Show continue button after dialogue
//     //-------------------------------------------------
//     playDialogue(introDialogue, () => {
//         continueBtn.style.display = "inline-block";
//     });

//     continueBtn.addEventListener("click", () => {
//         continueBtn.style.display = "none";
//         casinoImage.style.display = "block";
//     });

//     //-------------------------------------------------
//     // 3. Image sequence
//     //-------------------------------------------------
//     let imageStage = 0;
//     const imagesSequence = [
//         "../Images/casinoGame/CCP.png"
//     ];

//     casinoImage.addEventListener("click", () => {
//         if (imageStage < imagesSequence.length) {
//             casinoImage.src = imagesSequence[imageStage];
//             imageStage++;
//         } else {
//             casinoImage.style.display = "none";
//             startCardRound();
//         }
//     });

//     //-------------------------------------------------
//     // 4. Card system
//     //-------------------------------------------------
//     function startCardRound() {
//         cardGrid.innerHTML = "";
//         cardGrid.style.display = "grid";

//         const cards = [
//             { name: "Add 10", effect: (score) => score + 10 },
//             { name: "Subtract 5", effect: (score) => score - 5 },
//             { name: "Multiply 2", effect: (score) => score * 2 },
//             { name: "Divide 2", effect: (score) => Math.floor(score / 2) },
//             { name: "Neutral", effect: null }
//         ];

//         const shuffled = [...cards].sort(() => Math.random() - 0.5);

//         shuffled.forEach(card => {
//             const cardDiv = document.createElement("div");
//             cardDiv.className = "card";
//             cardDiv.textContent = card.name; // text on the card

//             cardDiv.addEventListener("click", () => {
//                 if (card.effect) {
//                     score = card.effect(score);
//                 }
//                 scoreDisplay.textContent = `Score: ${score}`;
//                 cardDiv.remove();

//                 if (score >= goalScore) {
//                     alert("Congratulations! You reached your goal!");
//                     cardGrid.style.display = "none";
//                 }
//             });

//             cardGrid.appendChild(cardDiv);
//         });
//     }

// });


document.addEventListener("DOMContentLoaded", () => {
    const startText = document.getElementById("startText");
    const startTextContent = document.getElementById("startTextContent");
    const continueBtn = document.getElementById("continueBtn");
    const fullImage1 = document.getElementById("fullImage1");
    const fullImage2 = document.getElementById("fullImage2");
    const cardGrid = document.getElementById("cardGrid");
    const scoreDisplay = document.getElementById("scoreDisplay");

    let score = 0;
    const goalScore = 100;

    // ----------------- Start text -----------------
    const introText = [
        "Welcome to the Casino!"
    ];

    let index = 0;

    function typeText() {
        if (index < introText.length) {
            let i = 0;
            let line = introText[index];
            startTextContent.textContent = ""; // reset per line

            function typeChar() {
                if (i < line.length) {
                    startTextContent.textContent += line[i];
                    i++;
                    setTimeout(typeChar, 50);
                } else {
                    index++;
                    setTimeout(typeText, 500); // move to next line
                }
            }
            typeChar();
        } else {
            continueBtn.style.display = "block";
        }
    }
    typeText();

    continueBtn.addEventListener("click", () => {
        startText.style.display = "none";
        fullImage1.style.display = "block";
    });

    fullImage1.addEventListener("click", () => {
        fullImage1.style.display = "none";
        fullImage2.style.display = "block";
    });

    fullImage2.addEventListener("click", () => {
        fullImage2.style.display = "none";
        startText.style.display = "none";
        cardGrid.style.display = "grid";
        startCards();
    });

    // ----------------- Card system -----------------
    function startCards() {
        cardGrid.innerHTML = "";
        cardGrid.style.display = "grid";
        cardGrid.style.gridTemplateColumns = "repeat(6, 1fr)";
        cardGrid.style.gridAutoRows = "120px";

        const cardEffects = [
            { type: "add", value: 10 },
            { type: "sub", value: 5 },
            { type: "mul", value: 2 },
            { type: "div", value: 2 },
            { type: "neutral", value: 0 }
        ];

        const totalCards = 30;

        for (let i = 0; i < totalCards; i++) {
            const card = document.createElement("img");
            card.src = "../Images/casinoGame/card.png";
            card.className = "card-img";

            card.dataset.effect = JSON.stringify(cardEffects[Math.floor(Math.random() * cardEffects.length)]);

            card.addEventListener("click", () => {
                const effect = JSON.parse(card.dataset.effect);

                // Show alert describing the effect
                let effectText = "";
                switch (effect.type) {
                    case "add":
                        effectText = `+${effect.value} points!`;
                        break;
                    case "sub":
                        effectText = `-${effect.value} points!`;
                        break;
                    case "mul":
                        effectText = `×${effect.value} your score!`;
                        break;
                    case "div":
                        effectText = `÷${effect.value} your score!`;
                        break;
                    case "neutral":
                        effectText = `No change to your score.`;
                        break;
                }

                alert(effectText);
                applyEffect(effect);
                card.remove();
            });

            cardGrid.appendChild(card); // <-- Don't forget to append the card
        }

        // This is outside the for-loop but still inside startCards
        function applyEffect(effect) {
            switch (effect.type) {
                case "add": score += effect.value; break;
                case "sub": score -= effect.value; break;
                case "mul": score *= effect.value; break;
                case "div": score = Math.floor(score / effect.value); break;
                case "neutral": break;
            }

            scoreDisplay.textContent = `Score: ${score}`;

            if (score >= goalScore) {
                alert("Congrats! You reached your goal!");
                cardGrid.style.display = "none";
            }
        }
    }
});