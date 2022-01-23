import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      description: {
		  welcome: "Welcome to React and react-i18next",
		  english: "English",
		  uzbek: "Uzbek",
		  
		  continents: "Find by Continents",
		  lands: "Find by Landscape",
		  notfound: "We haven`t found matching results",
		  
		  Europe: "Europe",
		  Asia: "Asia",
		  Africa: "Africa",
		  North_America: "North America",
		  South_America: "South America",
		  Australia_Oceania: "Australia & Oceania",
		  
		  sea:"sea",
		  history:"history",
		  mountains:"mountains",
		  river:"river",
		  beach:"beach",
		  skyscrapers: "skyscrapers",
		  desert: "desert",
		  main: "Main",
		  sustainable: "Sustainable traveling",
		  about: "About",
		  login: "Login",
		  logout: "Logout",
		  favorites: "Favorites",
		  stats: "Statistics"
	  }
    }
  },
  uz: {
    translation: {
      description: {
		  welcome: "React va react-i18next ga xush kelibsiz!",
		  english: "Inglizcha",
		  uzbek: "O'zbekcha",
		  
		  continents: "Qit'aga ko'ra top",
		  lands: "Joyiga ko'ra top",
		  notfound: "Qidiruvga mos natijalar topilmadi",
		  
		  Europe: "Yevropa",
		  Asia: "Osiyo",
		  Africa: "Afrika",
		  North_America: "Shimoliy Amerika",
		  South_America: "Janubiy Amerika",
		  Australia_Oceania: "Avstraliya va Okeaniya",
		  
		  sea:"dengiz",
		  history:"tarixiy",
		  mountains:"tog'lar",
		  river:"daryo",
		  beach:"soxil",
		  skyscrapers: "osmono'par",
		  desert: "saxro",
		  main: "Asosiy",
		  sustainable: "Barqaror sayoxat",
		  about: "Biz haqimizda",
		  login: "Kirish",
		  logout: "Chiqish",
		  favorites: "Yoqtirganlar",
		  stats: "Statistika"
	  }
    }
  },
  de: {
    translation: {
      description: {
		  welcome: "React va react-i18next ga xush kelibsiz!",
		  english: "Inglizcha",
		  uzbek: "O'zbekcha",
		  
		  continents: "Finden bei Kontinents",
		  lands: "Finden bei Platzen",
		  notfound: "Nicht results gefunden",
		  
		  Europe: "Europa",
		  Asia: "Asia",
		  Africa: "Afrika",
		  North_America: "Nord Amerika",
		  South_America: "Sud Amerika",
		  Australia_Oceania: "Avstraliya und Oceania",
		  
		  sea:"meer",
		  history:"historich",
		  mountains:"bergs",
		  river:"fluss",
		  beach:"soxil",
		  skyscrapers: "osmono'par",
		  desert: "saxro",
		  main: "Asosiy",
		  sustainable: "Barqaror sayoxat",
		  about: "Biz haqimizda",
		  login: "Kirish",
		  logout: "Chiqish",
		  favorites: "Yoqtirganlar",
		  stats: "Statistika"
	  }
    }
  },
  fr: {
    translation: {
      description: {
		  welcome: "React va react-i18next ga xush kelibsiz!",
		  english: "Inglizcha",
		  uzbek: "O'zbekcha",
		  
		  continents: "Qit'aga ko'ra top",
		  lands: "Joyiga ko'ra top",
		  notfound: "Qidiruvga mos natijalar topilmadi",
		  
		  Europe: "Yevropa",
		  Asia: "Osiyo",
		  Africa: "Afrika",
		  North_America: "Shimoliy Amerika",
		  South_America: "Janubiy Amerika",
		  Australia_Oceania: "Avstraliya va Okeaniya",
		  
		  sea:"dengiz",
		  history:"tarixiy",
		  mountains:"tog'lar",
		  river:"daryo",
		  beach:"soxil",
		  skyscrapers: "osmono'par",
		  desert: "saxro",
		  main: "Asosiy",
		  sustainable: "Voyage sustainable",
		  about: "Biz haqimizda",
		  login: "Kirish",
		  logout: "Chiqish",
		  favorites: "Yoqtirganlar",
		  stats: "Statistika"
	  }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;