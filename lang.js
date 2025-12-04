/*jslint browser: true */
/*global window, document, localStorage, XMLHttpRequest */

(function () {
    "use strict";

    function loadTranslations(callback) {
        var request = new XMLHttpRequest();
        request.open("GET", "translations.json", true);

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        };

        request.send(null);
    }

    function applyLang(lang, translations) {
        var elements = document.querySelectorAll("[data-i18n]"),
            i,
            key;

        for (i = 0; i < elements.length; i += 1) {
            key = elements[i].getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                elements[i].textContent = translations[lang][key];
            }
        }
    }

    window.setLang = function (lang) {
        loadTranslations(function (translations) {
            applyLang(lang, translations);
            localStorage.setItem("lang", lang);
        });
    };

    document.addEventListener("DOMContentLoaded", function () {
        var lang = localStorage.getItem("lang") || "ca";
        window.setLang(lang);
    });

}());
