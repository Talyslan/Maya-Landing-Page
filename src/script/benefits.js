// Objects - Benefits of Maya AI 
class Benefits {
    constructor(imgPath, alternativeText, title, description) {
        this._imgPath = imgPath;
        this._alternativeText = alternativeText;
        this._title = title;
        this._description = description;
    }

    getImgPath() { return this._imgPath; }
    getAlternativeText() { return this._alternativeText; }
    getTitle() { return this._title; }
    getDescription() { return this._description; }
}

class Benefits_List {
    constructor() {
        this._list = [];
    }

    getList() { return this._list; }
    add(...item) { this._list.push(...item); }
}

function creatingBenefits() {
    const b1 = new Benefits(
        "./src/images/benefits_icon/assistance.png",
        "Personalized Assistance Icon",
        "Personalized Assistance",
        "Maya utilizes advanced algorithms to understand your preferences, purchase history, and even your emotions, providing highly personalized product recommendations."
    )
    const b2 = new Benefits(
        "./src/images/benefits_icon/intuitive.png",
        "Intuitive Navigation Icon",
        "Intuitive Navigation",
        "With a user-friendly interface, Maya simplifies online market navigation, offering contextual suggestions and making the discovery of new products according to your interests easier."
    )
    const b3 = new Benefits(
        "./src/images/benefits_icon/voice.png",
        "Voice-Activated Purchases Icon",
        "Voice-Activated Purchases",
        "Say goodbye to tedious typing processes. With voice-activated purchasing, Maya makes the buying process faster and more accessible, allowing you to acquire your favorite products with just verbal commands."
    )
    const b4 = new Benefits(
        "./src/images/benefits_icon/ar.png",
        "Augmented Reality Icon",
        "Augmented Reality",
        "Virtually try out products before buying them. Through augmented reality, Maya enables detailed visualizations of how items will look in your physical space, ensuring more informed purchasing decisions."
    )

    const list_benefits = new Benefits_List();
    list_benefits.add(b1, b2, b3, b4);

    return list_benefits.getList();
}

function addBenefitsHTML(list) {
    list.forEach(benefit => {
        const boxHtml = document.querySelector(".benefitsBox");

        boxHtml.innerHTML += `
        <div class="box">
        <img src="${benefit.getImgPath()}" alt="${benefit.getAlternativeText()}">
            <h3>${benefit.getTitle()}</h3>
            <p>${benefit.getDescription()}</p>
            <a href="" class="link">see more</a>
        </div>
        `;
    });
}

addBenefitsHTML(creatingBenefits())