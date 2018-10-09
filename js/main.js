"use strict";

/* Code for i18next
 *
 */
$(document).ready(function(){
    var browserLanguage = Cookies.get('locale') || navigator.language;

    // set default language
    setLanguage(browserLanguage);
    
    // action change language
    $(this).on("click", "#languages", function(event) {
        var language = $(event.target).attr("language");
        setLanguage(language);
    });
});

function setLanguage(language) {
    language = whitelistLanguage(language);
    persistLanguagePreference(language);

    i18n.init({
        lng: language,
        fallbackLng: false,
				ns: {
             namespaces: ['translation', 'footer'],
             defaultNs: 'translation'
          },
        debug: false
    }, function() {
        $("[data-i18n]").i18n();
    });
}

function persistLanguagePreference(language) {
    Cookies.set('locale', language);
}

function whitelistLanguage(language) {
    var available_languages = ["ca", "en", "es", "pt"];
    var default_language = "es";

    if (available_languages.indexOf(language) == -1) {
      return default_language;
    }

    return language;
}
