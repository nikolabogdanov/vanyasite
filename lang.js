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
            "mainTitle": "IT Law Services",
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
            "firms" : "Фриленсъри и Фирми",
            "individuals" : "IT Специалисти",
            "sendRequest" : "Изпрати запитване",
            "firmsFirst" : "IT Компании",
            "firmsSecond": "Най-добрите услуги за компании",
            "programmerServicesFirst" : "•  Консултиране при сключване и прекратяване на трудов договор и защита при уволнение;<br/>•   Консултиране относно правата на работника/служителя;<br/>•   Преглед, редакция и изготвяне на договори и други документи;",
            "otherServicesFirst" : "•   Регистрация на фирми, вписване на промени и обявяване на актове в Търговския регистър; <br/>•   Преглед, редакция и изготвяне на различни видове договори, пълномощни, нотариални покани и други документи; <br/>•   Водене на съдебни дела; <br/>•   Предоставяне на правни консултации; <br/>•   Разводи, дела за установяване на произход; <br/>•   Наследствено право",
            "freelancerFirst" : "•  Фриленсър в IT сферата или как легално да извършвам дейност с най-малко бюрокрация? <br/>•   Правни консултации <br/>•   Преглед, редакция и изготвяне на договори и други документи;",
            "aboutFirst" : "Аз съм адвокат Иванка Атанасова. Вписана съм в Софийска адвокатска колегия, а юридическото си образование съм завършила в Софийски университет „Св. Климент Охридски“. В течение на адвокатската си практика съм се сблъсквала с различни правни казуси, изискващи индивидуален подход и внимание към детайлите. Дейността ми е насочена предимно към консултиране и решаване на трудовоправни проблеми на програмисти и други специалисти и фирми от IT сектора, както и към консултиране на фриленсъри относно начините за легално упражняване на тяхната дейност. Заедно с това предоставям и широк кръг от юридически услуги в други сфери на правото (Търговско, Облигационно, Семейно, Наследствено право и др.), включително процесуално представителство по съдебни дела и работа с Търговски регистър във връзка с правно обслужване на фирми.Ще се радвам ако мога да бъда полезна при намирането на отговор и на Вашите правни въпроси и казуси!",
            "phone" : "+359 883 40 83 52",
            "email" : "adv.iatanasova@gmail.com",
            "contact_us" : "Свържете се с нас",
            "peopleModalText" : "Да подпиша ли този договор? Защитава ли добре правата ми? <br/>Работодателят ми иска да ме уволни – има ли право?<br/>Работодателят ми дава да подпиша документ - какво да направя?<br/>Кой е най-добрият за мен вариант за прекратяване на трудовия ми договор?<br/>Искам да прекратя трудовия си договор – на какво основание и как да го направя? <br/>Имам ли право на обезщетение?",
            "peopleModalContactUs": "… Ако се сблъскате с тези и други подобни въпроси, можете да се свържете с мен:",
            "peopleModalAdvice": "Приятелски съвет: не подписвайте нищо преди да сте се консултирали с юрист!",
            "itSpecialistsLawServices" : "Правни услуги за IT специалисти",
            "freelancerModalText" : "Трябва ли ми фирма? Как да я регистрирам? <br/>Да подпиша ли този договор? Защитава ли добре правата ми? <br/>Кой е най-добрият законов вариант да работя като фриленсър? <br/>Съвместяване на работа на трудов договор и работа като фриленсър?",
            "freelancerServices1" : "Абонаментно правно обслужване.",
            "freelancerServices2" : "Юридически консултации и становища.",
            "freelancerServices3" : "Преглед на документи",
            "freelancerModalContactUs" : "Свържете се с нас: ",
            "freelancerLawServices" : "Правни услуги за Фриленсъри и Фирми"
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


