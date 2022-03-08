import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  gb: {
    translation: {
      description: {
		  welcome: "Welcome to React and react-i18next",
		  english: "English",
		  uzbek: "Uzbek",
		  german: "German",
		  french: "French",
		  
		  continents: "Find by Continents",
		  lands: "Find by Landscape",
		  found: " places found",
		  notfound: "We haven`t found matching results",
		  searching: "Searching...",
		  
		  Europe: "Europe",
		  Asia: "Asia",
		  Africa: "Africa",
		  North_America: "North America",
		  South_America: "South America",
		  Australia_Oceania: "Australia & Oceania",
		  Uzbekistan: "Uzbekistan",
		  Egypt: "Egypt",
		  Indonesia: "Indonesia",
		  NZ: "New Zealand",
		  GB: "Great Britain",
		  CZ: "Czech Republic",
		  US: "USA",
		  
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
		  stats: "Statistics",
		  
		  morefunctions: "Login for more functionalities",
		  login: "Login",
		  register: "Register",
		  ifnotregistered: "if not registered",
		  registerfree: "Register here to create an account",
		  ifhasaccount: " if you have an account",
		  or: "or ",
		  
		  loginreminder: "Reminder",
		  logintolike: "Login first to like!",
		  savedtofavs: "Saved to Favorites!",
		  removefav: "Removed from favorites",
		  
		  sustainability: "The word “overtourism” is so new it does not yet appear in most dictionaries (although it was shortlisted as a Word of the Year in 2018). But the novelty of the term has not diminished the impact of its meaning: “An excessive number of tourist visits to a popular destination or attraction, resulting in damage to the local environment and historical sites and in poorer quality of life for residents,” according to the Oxford Dictionary shortlist. (Read more about how to turn overtourism into sustainable global tourism.) As travelers wake up, sometimes abruptly, to the challenges of joining some 1.4 billion other tourists to the world’s most enticing destinations, the threats—and consequences—of overtourism are becoming more visible each day. The UN World Tourism Organization, along with public and private sector partners, has declared September 27 as World Tourism Day and uses this platform to discuss tourism’s social, political, economic, and environmental impacts. This day highlights the importance of sustainable tourism—a framework for engaging travelers and the travel industry at large in supporting goals that include protecting the environment, addressing climate change, minimizing plastic consumption, and expanding economic development in communities affected by tourism. "
	  }
    }
  },
  uz: {
    translation: {
      description: {
		  welcome: "React va react-i18next ga xush kelibsiz!",
		  english: "English",
		  uzbek: "Uzbek",
		  german: "German",
		  french: "French",
		  
		  continents: "Qit'aga ko'ra top",
		  lands: "Joyiga ko'ra top",
		  found: " ta joy topildi",
		  notfound: "Qidiruvga mos natijalar topilmadi",
		  searching: "Qidirilyapti...",
		  
		  Europe: "Yevropa",
		  Asia: "Osiyo",
		  Africa: "Afrika",
		  North_America: "Shimoliy Amerika",
		  South_America: "Janubiy Amerika",
		  Australia_Oceania: "Avstraliya va Okeaniya",
		  Uzbekistan: "O'zbekiston",
		  Egypt: "Misr",
		  Indonesia: "Indoneziya",
		  NZ: "Yangi Zelandiya",
		  GB: "Buyuk Britaniya",
		  CZ: "Chexiya",
		  US: "AQSH",
		  
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
		  stats: "Statistika",
		  
		  morefunctions: "Qo'shimcha funktsiyalar uchun tizimga kiring",
		  login: "Kirish",
		  register: "Roʻyxatdan oʻtish",
		  ifnotregistered: " ga o'ting agar ro'yxatdan o'tmagan bo'lsangiz",
		  registerfree: "Akkaunt yaratish uchun bu yerda roʻyxatdan oʻting",
		  ifhasaccount: " ga o'ting agar akkountingiz bo'lsa",
		  or: "yoki ",
		  
		  loginreminder: "Eslatma",
		  logintolike: "Saqlash uchun avval ro'yxatdan o'ting!",
		  savedtofavs: "Yoqtirganlarga saqlandi!",
		  removefav: "Yoqtirganlardan olib tashlandi",
		  
		  sustainability: "“Overturizm” so‘zi shu qadar yangiki, u hali ko‘pchilik lug‘atlarda uchramaydi (garchi u 2018-yilda “Yil so‘zi” ro‘yxatiga kiritilgan bo‘lsa ham). Ammo bu atamaning yangiligi uning ma'nosi ta'sirini kamaytirmadi: “Mashhur yo'nalish yoki diqqatga sazovor joylarga sayyohlarning haddan tashqari ko'p tashrif buyurishi, bu mahalliy atrof-muhit va tarixiy obidalarga zarar yetkazadi va aholining hayot sifatini yomonlashtiradi” deyiladi Oksford lug'atining qisqa ro'yxatida. (Qanday qilib overturizmni barqaror global turizmga aylantirish haqida koʻproq oʻqing.) Sayohatchilar, baʼzan toʻsatdan, 1,4 milliardga yaqin boshqa sayyohlarning dunyoning eng jozibali manzillariga qoʻshilish muammolaridan uygʻonishlari bilan, haddan tashqari turizmning tahdidlari va oqibatlari tobora kuchayib bormoqda. har kuni ko'rinadi. BMT Jahon sayyohlik tashkiloti davlat va xususiy sektor hamkorlari bilan birgalikda 27-sentabrni Butunjahon turizm kuni deb e’lon qildi va turizmning ijtimoiy, siyosiy, iqtisodiy va atrof-muhitga ta’sirini muhokama qilish uchun ushbu platformadan foydalanadi. Bu kun barqaror turizm muhimligini ta'kidlaydi - sayohatchilarni va umuman sayyohlik sanoatini atrof-muhitni muhofaza qilish, iqlim o'zgarishiga qarshi kurashish, plastmassa iste'molini minimallashtirish va turizmdan ta'sirlangan jamoalarda iqtisodiy rivojlanishni kengaytirishni o'z ichiga olgan maqsadlarni qo'llab-quvvatlashga jalb qilish uchun asos."
	  }
    }
  },
  de: {
    translation: {
      description: {
		  welcome: "Welcome to React and react-i18next",
		  english: "English",
		  uzbek: "Uzbek",
		  german: "German",
		  french: "French",
		  
		  continents: "Suche nach Kontinenten",
		  lands: "Suche nach Landschaft",
		  found: " Orte gefunden",
		  notfound: "Wir haben keine passenden Ergebnisse gefunden",
		  searching: "Suchen...",
		  
		  Europe: "Europa",
		  Asia: "Asien",
		  Africa: "Afrika",
		  North_America: "Nordamerika",
		  South_America: "Südamerika",
		  Australia_Oceania: "Australien & Ozeanien",
		  Uzbekistan: "Usbekistan",
		  Egypt: "Ägypten",
		  Indonesia: "Indonesien",
		  NZ: "Neuseeland",
		  GB: "Großbritannien",
		  CZ: "Tschechien",
		  US: "vereinigte Staaten von Amerika",
		  
		  sea:"Meer",
		  history:"Historie",
		  mountains:"Berge",
		  river:"Fluss",
		  beach:"Strand",
		  skyscrapers: "Wolkenkratzer",
		  desert: "Wüste",
		  main: "Hauptsächlich",
		  sustainable: "Nachhaltig reisen",
		  about: "Etwa",
		  login: "Anmeldung",
		  logout: "Ausloggen",
		  favorites: "Favoriten",
		  stats: "Statistiken",
		  
		  morefunctions: "Melden Sie sich für weitere Funktionen an",
		  login: "Anmeldung",
		  register: "Registrieren",
		  ifnotregistered: " Sie sich, wenn Sie nicht registriert sind",
		  registerfree: "Registrieren Sie sich hier, um ein Konto zu erstellen",
		  ifhasaccount: " wenn Sie ein Konto haben",
		  or: "oder ",
		  
		  loginreminder: "Erinnerung",
		  logintolike: "Melden Sie sich an, um zu speichern!",
		  savedtofavs: "In den Favoriten gespeichert!",
		  removefav: "Aus Favoriten entfernt",
		  
		  sustainability: "Das Wort „Overtourism“ ist so neu, dass es noch nicht in den meisten Wörterbüchern auftaucht (obwohl es 2018 in die engere Wahl zum Wort des Jahres kam). Aber die Neuartigkeit des Begriffs hat die Bedeutung seiner Bedeutung nicht geschmälert: „Eine übermäßige Anzahl von Touristen besucht ein beliebtes Reiseziel oder eine beliebte Attraktion, was zu Schäden an der lokalen Umwelt und historischen Stätten und zu einer schlechteren Lebensqualität für die Bewohner führt“, so der Begriff in die Shortlist des Oxford Dictionary. (Lesen Sie mehr darüber, wie Sie Overtourism in nachhaltigen globalen Tourismus umwandeln können.) Während Reisende, manchmal abrupt, vor der Herausforderung stehen, sich etwa 1,4 Milliarden anderen Touristen zu den verlockendsten Reisezielen der Welt anzuschließen, werden die Bedrohungen – und Folgen – des Overtourism immer größer täglich sichtbar. Die UN-Welttourismusorganisation hat zusammen mit Partnern aus dem öffentlichen und privaten Sektor den 27. September zum Welttourismustag erklärt und nutzt diese Plattform, um die sozialen, politischen, wirtschaftlichen und ökologischen Auswirkungen des Tourismus zu diskutieren. Dieser Tag unterstreicht die Bedeutung von nachhaltigem Tourismus – ein Rahmen, um Reisende und die Reisebranche im Allgemeinen dazu zu bewegen, Ziele zu unterstützen, darunter Umweltschutz, Bekämpfung des Klimawandels, Minimierung des Plastikverbrauchs und Ausweitung der wirtschaftlichen Entwicklung in vom Tourismus betroffenen Gemeinden."
	  }
    }
  },
  fr: {
    translation: {
      description: {
		  welcome: "Welcome to React and react-i18next",
		  english: "English",
		  uzbek: "Uzbek",
		  german: "German",
		  french: "French",
		  
		  continents: "Rechercher par continents",
		  lands: "Rechercher par paysage",
		  found: " lieux trouvés",
		  notfound: "Nous n'avons pas trouvé de résultats correspondants",
		  searching: "Recherche...",
		  
		  Europe: "L'Europe",
		  Asia: "Asie",
		  Africa: "Afrique",
		  North_America: "Amérique du Nord",
		  South_America: "Amérique du Sud",
		  Australia_Oceania: "Australie & Océanie",
		  Uzbekistan: "Ouzbékistan",
		  Egypt: "Egypte",
		  Indonesia: "Indonésie",
		  NZ: "Nouvelle-Zélande",
		  GB: "Grande Bretagne",
		  CZ: "République Tchèque",
		  US: "États-Unis",
		  
		  sea:"mer",
		  history:"l'histoire",
		  mountains:"montagnes",
		  river:"fleuve",
		  beach:"plage",
		  skyscrapers: "grattes ciels",
		  desert: "désert",
		  main: "Principal",
		  sustainable: "Voyager durable",
		  about: "Sur",
		  login: "Entrer",
		  logout: "Se déconnecter",
		  favorites: "Favoris",
		  stats: "Statistiques",
		  
		  morefunctions: "Connectez-vous pour plus de fonctionnalités",
		  login: "Connexion",
		  register: "S'inscrire",
		  ifnotregistered: " si non inscrit",
		  registerfree: "Inscrivez-vous ici pour créer un compte",
		  ifhasaccount: " si vous avez un compte",
		  or: "ou ",
		  
		  loginreminder: "Rappel",
		  logintolike: "Connectez-vous d'abord pour enregistrer",
		  savedtofavs: "Enregistré dans les favoris!",
		  removefav: "Supprimé des favoris",
		  
		  sustainability: "Le mot « surtourisme » est si nouveau qu'il n'apparaît pas encore dans la plupart des dictionnaires (bien qu'il ait été sélectionné comme mot de l'année en 2018). Mais la nouveauté du terme n'a pas diminué l'impact de sa signification : « Une fréquentation touristique excessive d'une destination ou d'un attrait populaire, entraînant des dommages à l'environnement local et aux sites historiques et une moins bonne qualité de vie pour les résidents », selon à la liste restreinte du dictionnaire Oxford. (En savoir plus sur la façon de transformer le surtourisme en tourisme mondial durable.) Alors que les voyageurs se réveillent, parfois brusquement, face aux défis de rejoindre quelque 1,4 milliard d'autres touristes vers les destinations les plus attrayantes du monde, les menaces - et les conséquences - du surtourisme deviennent de plus en plus visibles chaque jour. L'Organisation mondiale du tourisme des Nations Unies, ainsi que des partenaires des secteurs public et privé, ont déclaré le 27 septembre Journée mondiale du tourisme et utilisent cette plateforme pour discuter des impacts sociaux, politiques, économiques et environnementaux du tourisme. Cette journée souligne l'importance du tourisme durable - un cadre pour engager les voyageurs et l'industrie du voyage dans son ensemble à soutenir des objectifs tels que la protection de l'environnement, la lutte contre le changement climatique, la réduction de la consommation de plastique et l'expansion du développement économique dans les communautés touchées par le tourisme."
	  }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
  lng: localStorage.getItem("deflang") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;