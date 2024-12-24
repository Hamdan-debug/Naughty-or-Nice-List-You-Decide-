document.addEventListener("DOMContentLoaded", () => {
    const scenarios = [
        {
            text: "Sharing toys with friends.",
            image: "toy",
        },
        {
            text: "Stealing cookies from Santa's plate.",
            image: "cookie.jpg",
        },
        {
            text: "Helping mom clean the house.",
            image: "clean.jpg",
        },
        {
            text: "Throwing snowballs at friends.",
            image: "snow.jpg",
        },
        {
            text: "Writing a kind letter to Santa.",
            image: "letter.jpg",
        },
        { text: "Donating old clothes to charity.",image:"clothes.jpg" },
        { text: "Bullying Kids",image:"bully.jpg"},
        { text: "Peeking at Christmas presents before Christmas morning.",image:"opengift.jpg"},
        { text: "Switching gift tags to take someone else's present.",image:"gift.jpg"},
        { text: "Stealing the last piece of candy cane from the jar.",image:"candy.jpg"}
    
    ];
    

    let currentScenarioIndex = 0;
    const scenarioText = document.getElementById("scenario-text");
    const scenarioImage = document.getElementById("scenario-image");
    const niceList = document.getElementById("nice-list-items");
    const naughtyList = document.getElementById("naughty-list-items");

    const niceButton = document.getElementById("nice-button");
    const naughtyButton = document.getElementById("naughty-button");

    const updateScenario = () => {
        if (currentScenarioIndex < scenarios.length) {
            const scenario = scenarios[currentScenarioIndex];
            scenarioText.textContent = scenario.text;
            scenarioImage.src = scenario.image;
        } else {
            // Display end message and hide buttons
            scenarioText.textContent = "All scenarios have ended!!!";
            scenarioImage.src = "https://via.placeholder.com/400x200.png?text=The+End";
            niceButton.style.display = "none";
            naughtyButton.style.display = "none";
        }
    };

    const addToList = (listElement) => {
        if (currentScenarioIndex < scenarios.length) {
            const scenario = scenarios[currentScenarioIndex];
            const listItem = document.createElement("li");
            listItem.textContent = scenario.text;
            listElement.appendChild(listItem);
            currentScenarioIndex++;
            updateScenario();
        }
    };

    niceButton.addEventListener("click", () => {
        addToList(niceList);
    });

    naughtyButton.addEventListener("click", () => {
        addToList(naughtyList);
    });

    updateScenario();
});

