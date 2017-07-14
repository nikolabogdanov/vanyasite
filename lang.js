var currentLanguage = "bg";

function lang() {
    return {
        "en":{
            "mainTitle": "IT Law Services",
            "contacts":"Contacts",
            "about":"About",
            "portfolio":"Portfolio",
            "aboutFirst": "Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.",
            "aboutSecond" : "Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!",
            "programmerServices" : "Правни услуги за програмисти",
            "freelancer" : "Freelancers",
            "otherServices": "Other Law Services",
            "itLabor" : "IT Labor Law",
            "mainHeader": "IT Law Services",
            "subHeader" : "Web Developer - Graphic Artist - User Experience Designer",
            "copyright" : "Copyright"
        },
        "bg":{
            "mainTitle": "ИТ Правни Услуги",
            "contacts":"Контакти",
            "about":"За нас",
            "portfolio":"Портфолио",
            "aboutFirst": "Тралалалала 1",
            "aboutSecond": "Тралала 2",
            "programmerServices" : "Услуги за ИТ специалисти",
            "freelancers" : "Фриленсъри",
            "otherServices" : "Други правни услуги",
            "itLabor" : "ИТ Трудовоправи проблеми",
            "mainHeader": "ИТ Правни Услуги",
            "subHeader" : "Адв. Атанасова",
            "copyright" : "Авторско Право"
        }
    }
}

function getWord(string) {
    var obj = lang();

    if (currentLanguage === 'bg') {
        return obj.bg[string]
    } else {
        return obj.en[string];
    }
}

function translate() {
    var arr = $('[nvalue]');
    for (var i=0; i < arr.length; i++){
        el = arr[i];
        val = $(el).attr('nvalue');
        el.innerHTML = getWord(val) + el.innerHTML;
    }
}


