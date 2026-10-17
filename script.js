const topics = {
    small: [
        "The Voynich manuscript",
        "The Library of Alexandria",
        "Man and His Symbols",
        "Rotas-Sator Square",
        "Femme-Surrealism (challenging social expectations of domesticity)",
        "Political bias in cartography",
        "Neo-Jungian Character Archetypes",
        "Logical Fallacies",
        "Ethical criticism of facial recognition technology"
    ],

    medium: [
        "Angels",
        "Language in the work of Homer",
        "Self-realisation and self-actualisation in Psychology, Philosophy, and Religion",
        "Carter's 'The Sadeian Woman' and its application to 'The Bloody Chamber'",
        "The causes of the fall of the Roman Empire",
        "Gothic architecture",
        "Distortions of memory in eyewitness testimony",
        "Absurdism",
        "The role of symbolism in Surrealist art",
        "The development of writing systems"
    ],

    large: [
        "The evolutionary function of aspects of human memory",
        "Psychological theories surrounding education",
        "Classical katabasis and different portrayals of the underworld",
        "Could society be improved either with the removal of religion, or if everybody was to follow the same religion?",
        "Art history (inclduing non-western perspectives)"
    ]
};

const sizeSelector = document.getElementById("researchSize");
const topicDisplay = document.getElementById("topic");
const topicLabel = document.getElementById("topicLabel");
const randomiseButton = document.getElementById("randomiseButton");

let previousTopic = "";


function randomiseTopic() {
    const selectedSize = sizeSelector.value;

    const topicList = selectedSize
        ? topics[selectedSize]
        : Object.values(topics).flat();

    let newTopic;

    do {
        const randomIndex = Math.floor(
            Math.random() * topicList.length
        );

        newTopic = topicList[randomIndex];
    } while (topicList.length > 1 && newTopic === previousTopic);

    previousTopic = newTopic;

    topicDisplay.textContent = newTopic;

    const topicSize = Object.keys(topics).find(size =>
        topics[size].includes(newTopic)
    );

    topicLabel.textContent = topicSize
        ? topicSize.charAt(0).toUpperCase() +
          topicSize.slice(1) + " research task"
        : "Research task";

    randomiseButton.disabled = false;
}


randomiseButton.addEventListener("click", randomiseTopic);
