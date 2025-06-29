const die1 = document.getElementById("one");
const die2 = document.getElementById("two");
const die3 = document.getElementById("three");
const totalLabel = document.getElementById("total");
const rollButton = document.getElementById("button");
const diceElements = [die1, die2, die3];

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    // Add rolling animation
    diceElements.forEach(die => {
        die.textContent = "";
        die.classList.add("rolling");
    });
    
    // Disable button during roll
    rollButton.disabled = true;
    
    // Roll after a short delay for animation
    setTimeout(() => {
        const values = [];
        let total = 0;
        
        diceElements.forEach(die => {
            const value = rollDie();
            values.push(value);
            total += value;
            die.textContent = value;
            die.classList.remove("rolling");
        });
        
        totalLabel.textContent = total;
        rollButton.disabled = false;
        
        // Special effects for certain totals
        if (total >= 16) {
            totalLabel.style.color = "#4CAF50"; // green for high score
        } else if (total <= 8) {
            totalLabel.style.color = "#f44336"; // red for low score
        } else {
            totalLabel.style.color = "white";
        }
    }, 500);
}

rollButton.addEventListener("click", rollDice);

// Initialize dice display
diceElements.forEach(die => {
    die.textContent = "-";
});