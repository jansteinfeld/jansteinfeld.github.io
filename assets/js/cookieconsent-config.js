import 'https://jansteinfeld.github.io/assets/js/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "de",
        autoDetect: "browser",
        translations: {
            de: {
                consentModal: {
                    title: "Datenschutz, Cookies und Services",
                    description: "Diese Website verwendet Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten. Einige Cookies sind essenziell und ermöglichen grundlegende Funktionen, während andere uns helfen, unsere Website und Ihr Erlebnis zu verbessern. Sie können entscheiden, ob Sie nicht-essenzielle Cookies akzeptieren oder ablehnen möchten. Mit der Zustimmung / Speicherung stimmen Sie auch unseren Datenschutzbedingungen zu und nehmen zur Kenntnis, dass alle auf der Webseite befindlichen Formulare, die Sie ausfüllen und absenden auch elektronisch verarbeitet werden.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"/assets/pdf/Datendschutzerklaerung.pdf\">Datenschutz</a>\n"
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modal schließen",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Unsere Website verwendet Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten. Sie können Ihre Einstellungen jederzeit anpassen. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
                        },
                        {
                            title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Diese Cookies sind für das einwandfreie Funktionieren der Website unerlässlich. Ohne diese Cookies können bestimmte Dienste, wie das Speichern Ihrer Datenschutzeinstellungen, nicht bereitgestellt werden. Diese Cookies können nicht deaktiviert werden.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funktionalitäts Cookies",
                            description: "Diese Cookies ermöglichen es der Website, erweiterte Funktionalitäten und Personalisierung anzubieten. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten hinzugefügt haben. Wenn Sie diese Cookies nicht zulassen, kann es sein, dass einige oder alle diese Dienste nicht richtig funktionieren.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytische Cookies",
                            description: "Analytische Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und gemeldet werden. Diese Informationen nutzen wir zur Verbesserung unserer Website und Dienste. Sie können diese Cookies deaktivieren, falls Sie dies wünschen.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Werbung Cookies",
                            description: "Werbung-Cookies werden verwendet, um Ihnen relevante Anzeigen zu zeigen, die auf Ihre Interessen zugeschnitten sind. Sie helfen auch, die Effektivität von Werbekampagnen zu messen. Diese Cookies können von unseren Werbepartnern über unsere Website gesetzt werden. Sie können diese Cookies deaktivieren, um weniger zielgerichtete Werbung zu erhalten. Streng Notwendige Cookies, Funktionalitäts Cookies, Analytische Cookies und Werbung Cookies.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "For any query in relation to my policy on cookies and your choices, please write me an eMail"
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: "Data protection, cookies and services",
                    description: "This website uses cookies to provide you with an optimised user experience. Some cookies are essential and enable basic functions, while others help us to improve our website and your experience. You can decide whether to accept or reject non-essential cookies. By agreeing / saving, you also agree to our privacy policy and acknowledge that all forms on the website that you fill out and submit will also be processed electronically.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/assets/pdf/Datendschutzerklaerung.pdf\">Datenschutz</a>\n"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Our website uses cookies to provide you with an optimised user experience. You can change your settings at any time. Further information can be found in our privacy policy."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the proper functioning of the website. Without these cookies, certain services, such as saving your privacy settings, cannot be provided. These cookies cannot be deactivated.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Analytical cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this information to improve our website and services. You can disable these cookies if you wish.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "Advertising cookies are used to show you relevant adverts that are tailored to your interests. They also help measure the effectiveness of advertising campaigns. These cookies may be set by our advertising partners through our website. You can disable these cookies to receive less targeted adverts. Strictly Necessary Cookies, Functionality Cookies, Analytical Cookies and Advertising Cookies.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please write me an eMail."
                        }
                    ]
                }
            }
        }
    }
});