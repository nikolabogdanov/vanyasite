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
            "copyright" : "Copyright",
            "firms" : "IT Companies",
            "individuals" : "IT Specialists",
            "sendRequest" : "Send Request",
            "firmsFirst" : "IT Companies",
            "firmsSecond": "We provide very good services",
            "programmerServicesFirst" : "info"
        },
        "bg":{
            "mainTitle": "IT Правни Услуги",
            "contacts":"Контакти",
            "about":"За нас",
            "portfolio":"Портфолио",
            "aboutFirst": "Тралалалала 1",
            "aboutSecond": "Тралала 2",
            "programmerServices" : "Програмисти и IT специалисти",
            "freelancers" : "Фриленсъри в IT сферата",
            "otherServices" : "Други правни услуги",
            "itLabor" : "Трудовоправни проблеми",
            "mainHeader": "IT Правни Услуги",
            "subHeader" : "Адв. Иванка Атанасова",
            "copyright" : "Авторско Право",
            "firms" : "Регистрация на Фирми",
            "individuals" : "IT Специалисти",
            "sendRequest" : "Изпрати запитване",
            "firmsFirst" : "IT Компании",
            "firmsSecond": "Най-добрите услуги за компании",
            "programmerServicesFirst" : "•  консултиране при сключване и прекратяване на трудов договор и защита при уволнение;<br/>•   консултиране относно правата на работника/служителя;<br/>•   преглед, редакция и изготвяне на договори и други документи;",
            "otherServicesFirst" : "•   Регистрация на фирми, вписване на промени и обявяване на актове в Търговския регистър; <br/>•   Преглед, редакция и изготвяне на различни видове договори, пълномощни, нотариални покани и други документи; <br/>•   Водене на съдебни дела; <br/>•   Предоставяне на правни консултации; <br/>•   Разводи, дела за установяване на произход; <br/>•   Наследствено право",
            "freelancerFirst" : "•  Фриленсър в IT сферата или как легално да извършвам дейност с най-малко бюрокрация? <br/>•   правни консултации <br/>•   преглед, редакция и изготвяне на договори и други документи;",
            "aboutFirst" : "Аз съм адвокат Иванка Атанасова. Вписана съм в Софийска адвокатска колегия, а юридическото си образование съм завършила в Софийски университет „Св. Климент Охридски“. В течение на адвокатската си практика съм се сблъсквала с различни правни казуси, изискващи индивидуален подход и внимание към детайлите. Дейността ми е насочена предимно към консултиране и решаване на трудовоправни проблеми на програмисти и други специалисти и фирми от IT сектора, както и към консултиране на фриленсъри относно начините за легално упражняване на тяхната дейност. Заедно с това предоставям и широк кръг от юридически услуги в други сфери на правото (Търговско, Облигационно, Семейно, Наследствено право и др.), включително процесуално представителство по съдебни дела и работа с Търговски регистър във връзка с правно обслужване на фирми.Ще се радвам ако мога да бъда полезна при намирането на отговор и на Вашите правни въпроси и казуси!",
            "phone" : "+359 883 40 83 52",
            "email" : "adv.iatanasova@gmail.com",
            "contact_us" : "Свържете се с нас"
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


