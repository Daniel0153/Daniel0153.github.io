// In your script.js file:

let translations = {
    en: {
        "About": "About",
        "Who Am I": "Who Am I",
        "Portfolio": "Portfolio",
        "Contact": "Contact"
    },
    nl: { // Dutch translations
        "About": "Over",
        "Who Am I": "Wie Ben Ik",
        "Portfolio": "Portofolio",
        "Contact": "Contact"
        
    },
    el: { // Greek translations
        "About": "Σχετικά",
        "Who Am I": "Ποιος Είμαι",
        "Portfolio": "Χαρτοφυλάκιο",
        "Contact": "Επικοινωνία"
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    let elements = document.querySelectorAll("[data-translate]");
    elements.forEach(function(element) {
        let key = element.getAttribute("data-translate");
        let translatedText = translations[lang][key];
        if (translatedText) {
            element.innerHTML = translatedText;
        }
    });
}

document.getElementById('languageToggle').addEventListener('click', function() {
    if (currentLanguage === 'en') {
        setLanguage('nl');
        currentLanguage = 'nl';
    } else if (currentLanguage === 'nl') {
        setLanguage('el');
        currentLanguage = 'el';
    } else {
        setLanguage('en');
        currentLanguage = 'en';
    }
});
