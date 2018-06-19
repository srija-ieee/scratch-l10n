/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

const locales = {
    'ab': {name: 'Аҧсшәа'},
    'id': {name: 'Bahasa Indonesia'},
    'ca': {name: 'Català'},
    'cs': {name: 'Česky'},
    'cy': {name: 'Cymraeg'},
    'da': {name: 'Dansk'},
    'de': {name: 'Deutsch'},
    'el': {name: 'Ελληνικά'},
    'en': {name: 'English'},
    'es': {name: 'Español'},
    'es-419': {name: 'Español Latinoamericano'},
    'fr': {name: 'Français'},
    'ga': {name: 'Gaeilge'},
    'gd': {name: 'Gàidhlig'},
    'gl': {name: 'Galego'},
    'he': {name: 'עִבְרִית'},
    'it': {name: 'Italiano'},
    'ja': {name: '日本語'},
    'mi': {name: 'Maori'},
    'nl': {name: 'Nederlands'},
    'nb': {name: 'Norsk Bokmål'},
    'nn': {name: 'Norsk Nynorsk'},
    'th': {name: 'ไทย'},
    'pt': {name: 'Português'},
    'pt-br': {name: 'Português Brasileiro'},
    'sr': {name: 'Српски'},
    'sl': {name: 'Slovenščina'},
    'fi': {name: 'Suomi'},
    'sv': {name: 'Svenska'},
    'vi': {name: 'Tiếng Việt'},
    'tr': {name: 'Türkçe'},
    'uk': {name: 'Українська'},
    'zh-cn': {name: '简体中文'},
    'zh-tw': {name: '繁體中文'}
};

const customLocales = {
    'ab': {
        locale: 'ab',
        parentLocale: 'az'
    },
    'es-419': {
        locale: 'es-419',
        parentLocale: 'es'
    },
    'mi': {
        locale: 'mi',
        parentLocale: 'en'
    },
    'zh-cn': {
        locale: 'zh-cn',
        parentLocale: 'zh'
    },
    'zh-tw': {
        locale: 'zh-tw',
        parentLocale: 'zh'
    }
};

const wwwLocales = {
    'ab': {name: 'Аҧсшәа'},
    'ar': {name: 'العربية'},
    'an': {name: 'Aragonés'},
    'ast': {name: 'Asturianu'},
    'id': {name: 'Bahasa Indonesia'},
    'ms': {name: 'Bahasa Melayu'},
    'be': {name: 'Беларуская'},
    'bg': {name: 'Български'},
    'ca': {name: 'Català'},
    'cs': {name: 'Česky'},
    'cy': {name: 'Cymraeg'},
    'da': {name: 'Dansk'},
    'de': {name: 'Deutsch'},
    'yum': {name: 'Edible Scratch'},
    'et': {name: 'Eesti'},
    'el': {name: 'Ελληνικά'},
    'en': {name: 'English'},
    'eo': {name: 'Esperanto'},
    'es': {name: 'Español'},
    'eu': {name: 'Euskara'},
    'fa': {name: 'فارسی'},
    'fr': {name: 'Français'},
    'fur': {name: 'Furlan'},
    'ga': {name: 'Gaeilge'},
    'gd': {name: 'Gàidhlig'},
    'gl': {name: 'Galego'},
    'ko': {name: '한국어'},
    'hy': {name: 'Հայերեն'},
    'he': {name: 'עִבְרִית'},
    'hi': {name: 'हिन्दी'},
    'hr': {name: 'Hrvatski'},
    'zu': {name: 'isiZulu'},
    'is': {name: 'Íslenska'},
    'it': {name: 'Italiano'},
    'kn': {name: 'ಭಾಷೆ-ಹೆಸರು'},
    'rw': {name: 'Kinyarwanda'},
    'ht': {name: 'Kreyòl'},
    'ku': {name: 'Kurdî'},
    'la': {name: 'Latina'},
    'lv': {name: 'Latviešu'},
    'lt': {name: 'Lietuvių'},
    'mk': {name: 'Македонски'},
    'hu': {name: 'Magyar'},
    'ml': {name: 'മലയാളം'},
    'mt': {name: 'Malti'},
    'cat': {name: 'Meow'},
    'mr': {name: 'मराठी'},
    'mn': {name: 'Монгол хэл'},
    'my': {name: 'မြန်မာဘာသာ'},
    'nl': {name: 'Nederlands'},
    'ja': {name: '日本語'},
    'nb': {name: 'Norsk Bokmål'},
    'nn': {name: 'Norsk Nynorsk'},
    'uz': {name: 'Oʻzbekcha'},
    'th': {name: 'ไทย'},
    'pl': {name: 'Polski'},
    'pt': {name: 'Português'},
    'pt-br': {name: 'Português Brasileiro'},
    'ro': {name: 'Română'},
    'ru': {name: 'Русский'},
    'sc': {name: 'Sardu'},
    'sq': {name: 'Shqip'},
    'sk': {name: 'Slovenčina'},
    'sl': {name: 'Slovenščina'},
    'sr': {name: 'Српски'},
    'fi': {name: 'Suomi'},
    'sv': {name: 'Svenska'},
    'te': {name: 'తెలుగు'},
    'vi': {name: 'Tiếng Việt'},
    'tr': {name: 'Türkçe'},
    'uk': {name: 'Українська'},
    'zh-cn': {name: '简体中文'},
    'zh-tw': {name: '繁體中文'}
};

export {locales as default, customLocales, wwwLocales};
