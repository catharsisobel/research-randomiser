
const topics = {
    small: [
        "The Rosetta Stone",
        "Mary Anning",
        "The Voynich manuscript",
        "The Stanford prison experiment",
        "The discovery of penicillin",
        "The Library of Alexandria",
        "The Bauhaus building in Dessau",
        "The Dunning-Kruger effect",
        "The life of Ada Lovelace",
        "The placebo effect"
    ],

    medium: [
        "Schema theory and human memory",
        "Magical realism as a literary genre",
        "Linguistic relativity",
        "The causes of the fall of the Western Roman Empire",
        "The psychology of nostalgia",
        "Gothic architecture",
        "The reliability of eyewitness testimony",
        "The philosophy of absurdism",
        "The role of symbolism in Surrealist art",
        "The development of writing systems"
    ],

    large: [
        "The evolution of human memory",
        "The history and development of Surrealism",
        "The rise and decline of the Maya civilisation",
        "The relationship between language and thought",
        "The development of theories of consciousness",
        "The history of the English language",
        "How cultural movements respond to political change",
        "The development of psychological theories of learning",
        "The history of censorship in literature",
        "How humans construct and remember the past"
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
