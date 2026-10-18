const topics = {
    small: [
        "The Voynich manuscript",
        "Don't do research right now, go and create something. Draw something, build something, compose something idc",
        "Concept creep -> semantic bleaching",
        "The New Woman",
        "Adrienne Rich (1980) on compulsory heterosexuality",
        "'Visual Pleasure and Narrative Cinema' - Laura Mulvey",
        "Examples of the Gothic double",
        "Aesthetic movement",
        "The Library of Alexandria",
        "Man and His Symbols",
        "Rotas-Sator Square",
        "RGB, RYB, and CMYK",
        "Femme-Surrealism (challenging social expectations of domesticity)",
        "Political bias in cartography",
        "Neo-Jungian Character Archetypes",
        "Curse tablets",
        "Logical Fallacies",
        "Ethical criticism of facial recognition technology"
    ],

    medium: [
        "Angels (https://www.youtube.com/watch?v=ErXWtdC2ZYI)",
        "Exclusion of female artists in art history",
        "What can ancient Latin graffiti tell us about the language in informal settings?",
        "Issues with and the assumptions of standardised intelligence testing",
        "Pronunciation of ancient languages (how much we can actually know, and how we can find that out)",
        "Language in the work of Homer (https://massolit.io/courses/homer-language)",
        "Self-realisation and self-actualisation in Psychology, Philosophy, and Religion",
        "Carter's 'The Sadeian Woman' and its application to 'The Bloody Chamber'",
        "Emotional memory",
        "The causes of the fall of the Roman Empire",
        "Gothic architecture",
        "History of foraging and traditional botany",
        "Common names of plants as indicators of medicine's development?",
        "Symbols in Christian art",
        "Distortions of memory in eyewitness testimony",
        "Absurdism",
        "Role of symbolism in Surrealist art",
        "The development of writing systems",
        "Mary Douglas' work on sociocultural importance of food"
    ],

    large: [
        "The evolutionary function of aspects of human memory",
        "Changes in language recording cultural change",
        "Similarities in myths between cultures",
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
