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
		  found: " places found!",
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
		  
		  ancient: "ancient",
		  medieval: "medieval",
		  sea:"sea",
		  history:"historical",
		  mountains:"mountains",
		  river:"river",
		  beach:"beach",
		  skyscrapers: "skyscrapers",
		  desert: "desert",
		  main: "Main",
		  sustainable: "Benefits of traveling",
		  about: "About",
		  login: "Login",
		  logout: "Logout",
		  favorites: "Favorites",
		  stats: "Statistics",
		  
		  morefunctions: "Login for more functionalities",
		  login: "Login",
		  register: "Register",
		  ifnotregistered: "if not registered",
		  alreadyreg: "This Username is already registered",
		  tryothername: "Try another username",
		  registerfree: "Register here to create an account",
		  ifhasaccount: " if you have an account",
		  or: "or ",
		  fillall: "Please fill all fields accordingly!",
		  validemail: "Enter email address correctly!",
		  senttoserver: "Registration details are sent to server",
		  checkemail: "You can check you email", 
		  checkemail2: "Confirmation link is sent",
		  wegotthis: "We received this message:",
		  
		  username: "Username",
		  email: "Email",
		  pass: "Password",
		  mismatch: "The passwords do'nt match!",
		  incorrect: "Incorrect Username or Password",
		  incorrect2: "Error",
		  
		  loginreminder: "Reminder",
		  logintolike: "Login first to like!",
		  savedtofavs: "Saved to Favorites!",
		  removefav: "Removed from favorites",
		  more: "More about the place",
		  favoritesnumber: "You have ",
		  favoritesnumber2: " favorite destinations!",
		  
		  howtouse: "This site allows you to find your ideal dream location to visit. You can find your dream travel site by continents or by selecting landscape types that you desire to be in the searched place. For example, if you need to find a place which is in Europe or Asia, and it must have skyscrapers, beach and is historical, you need to select both Europe and Asia from 'FIND BY CONTINENTS' and select skyscrapers, beach and historical buttons from 'FIND BY LANDSCAPE'. If there is such a place(s) with these requirements, you can like them to save in your account. Note that any place your look for may not be in our database",
		  
		  aboutme: "I'm Muxammadjon Jalolov, the creator of this site. I have a master's degree in Computer Science from the Lorraine University, France. Traveling in many places motivated me to create this site. I wanted to build a web application that can find traveling places as similar as your desired type. Sometimes people may not know about many wonderful destinations that are very close to us or we have never imagined such places to exist. Using this site helps people fill their travel wishlist and finding their dream travel location.",
		  
		  traveling: "Why traveling is important?",
		  b1: "According to ",
		  b2: " blog, traveling is an important activity for our health",
		  l1: "Travel makes us happier by freeing from our daily routines like jobs, studies, house tasks and responsibilities. Traveling also makes people happier. According to studies, spending money for doing some things will bring longer lasting happiness.",
		  l2: "Travel lets us recharge. Sometimes having some breaks from our repetitive work days or studies is crucial to avoid mental health problems. This could prevent stress, anxiety and other problems",
		  l3: "The research shows that even a few day long vacations have positive effects on well-being.",
		  l4: "Travel exposes to new things. It describes that even by traveling to nearby places we experience new things",
		  l5: "Travel can make us physically healthier. According to some studies traveling makes our brains and hearts healthier than others",
		  l6: "Traveling can improve creativity. It is explained that experiences in foreign places increases cognitive flexibility and integrativeness of thought"
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
		  
		  continents: "Qit'aga ko'ra toping",
		  lands: "Landshaftga ko'ra toping",
		  found: " ta joy topildi!",
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
		  
		  ancient: "qadimiy",
		  medieval: "o'rta asr",
		  sea:"dengiz",
		  history:"tarixiy",
		  mountains:"tog'lar",
		  river:"daryo",
		  beach:"soxil",
		  skyscrapers: "osmono'par",
		  desert: "saxro",
		  main: "Asosiy",
		  sustainable: "Sayoxat foydalari",
		  about: "Biz haqimizda",
		  login: "Kirish",
		  logout: "Chiqish",
		  favorites: "Yoqtirganlar",
		  stats: "Statistika",
		  
		  morefunctions: "Qo'shimcha funktsiyalar uchun tizimga kiring",
		  login: "Kirish",
		  register: "Roʻyxatdan oʻtish",
		  ifnotregistered: " ga o'ting agar ro'yxatdan o'tmagan bo'lsangiz",
		  alreadyreg: "Bunday nomli akkount ro'yxatdan o'tgan",
		  tryothername: "Boshqa akkount nomini kiriting",
		  registerfree: "Akkaunt yaratish uchun bu yerda roʻyxatdan oʻting",
		  ifhasaccount: " ga o'ting agar akkountingiz bo'lsa",
		  or: "yoki ",
		  fillall: "Iltimos, barcha maydonlarni mos ravishda to'ldiring!",
		  validemail: "Elektron pochta manzilini to'g'ri kiriting!",
		  senttoserver: "Ro'yxatdan o'tish tafsilotlari yuborildi",
		  checkemail: "Elektron pochtangizni tekshirishingiz mumkin", 
		  checkemail2: "Tasdiqlash havolasi yuborildi",
		  wegotthis: "Biz bu xabarni oldik:",
		  
		  username: "Akkount nomi",
		  email: "Elektron pochta",
		  pass: "Parol",
		  mismatch: "Parollar bir biridan farq qiladi!",
		  incorrect: "Login yoki Parol xato",
		  incorrect2: "Xato",
		  
		  loginreminder: "Eslatma",
		  logintolike: "Saqlash uchun avval ro'yxatdan o'ting!",
		  savedtofavs: "Yoqtirganlarga saqlandi!",
		  removefav: "Yoqtirganlardan olib tashlandi",
		  more: "Joy haqida ko'proq",
		  favoritesnumber: "Sizda ",
		  favoritesnumber2: " ta sevimli manzil bor!",
		  
		  howtouse: "Ushbu sayt sizga tashrif buyurish uchun ideal orzu joyingizni topish imkonini beradi. Siz orzu qilgan sayohat saytingizni qit'alar bo'yicha yoki qidirilayotgan joyda bo'lishni xohlagan landshaft turlarini tanlab topishingiz mumkin. Misol uchun, agar siz Yevropa yoki Osiyoda joylashgan va osmono‘par binolari, plyajlari va tarixiy bo‘lishi kerak bo‘lgan joyni topmoqchi bo‘lsangiz, “QIT'AGA KO'RA TOPING”dan Yevropa va Osiyoni tanlab, so'ngra “LANDSHAFTGA KO'RA TOPING”dan osmono‘par binolar, plyaj va tarixiy tugmalarni tanlashingiz kerak. Agar ushbu talablarga ega bo'lgan joy(lar) mavjud bo'lsa, ularga like bosib akkountingizda saqlashingiz mumkin. E'tibor bering, siz qidirayotgan joy bizning ma'lumotlar bazasida bo'lmasligi mumkin",
		  
		  aboutme: "Men Muxammadjon Jalolov bu sayt yaratuvchisiman. Men Fransiyaning Lotaringiya universitetida kompyuter fanlari bo‘yicha magistr darajasiga egaman. Ko'p joylarga sayohat qilish meni ushbu saytni yaratishga undadi. Men siz xohlagan turga o'xshash sayohat joylarini topadigan veb-ilova yaratmoqchi edim. Ba'zida odamlar bizga juda yaqin bo'lgan ko'plab ajoyib yo'nalishlar haqida bilmasligi mumkin yoki biz bunday joylar mavjudligini tasavvur ham qilmaganmiz. Ushbu saytdan foydalanish odamlarga sayohat istaklari ro'yxatini to'ldirishga va orzu qilgan sayohat manzilini topishga yordam beradi.",
		  
		  traveling: "Nima uchun sayohat qilish muhim?",
		  b1: "",
		  b2: " blogiga ko'ra, sayohat qilish bizning salomatligimiz uchun muhim faoliyatdir",
		  l1: "Sayohat bizni ish, o'qish, uy vazifalari va mas'uliyat kabi kundalik ishlardan xalos qilib, bizni baxtli qiladi. Sayohat ham odamlarni baxtli qiladi. Tadqiqotlarga ko'ra, ba'zi narsalarni qilish uchun pul sarflash uzoq davom etadigan baxt keltiradi.",
		  l2: "Sayohat bizga quvvat beradi. Ba'zida takroriy ish kunlarimiz yoki o'qishimiz uchun tanaffus qilish ruhiy salomatlik bilan bog'liq muammolarni oldini olish uchun juda muhimdir. Bu stress, tashvish va boshqa muammolarni oldini oladi",
		  l3: "Tadqiqotlar shuni ko'rsatadiki, hatto bir necha kunlik ta'til ham xotirjamlikka ijobiy ta'sir ko'rsatadi.",
		  l4: "Sayohat yangi narsalarni ochib beradi. Unda aytilishicha, hatto yaqin atrofdagi joylarga sayohat qilganimizda ham biz yangi narsalarni boshdan kechiramiz",
		  l5: "Sayohat bizni jismonan sog'lom qiladi. Ba'zi tadqiqotlarga ko'ra, sayohat qilish bizning miyamiz va yuraklarimizni boshqalarga qaraganda sog'lomroq qiladi",
		  l6: "Sayohat ijodkorlikni oshirishi mumkin. Chet ellardagi tajribalar kognitiv moslashuvchanlikni va fikrning integrativligini oshiradi"
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
		  found: " Orte gefunden!",
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
		  
		  ancient: "alt",
		  medieval: "mittelalterlich",
		  sea:"Meer",
		  history:"historisch",
		  mountains:"Berge",
		  river:"Fluss",
		  beach:"Strand",
		  skyscrapers: "Wolkenkratzer",
		  desert: "Wüste",
		  main: "Hauptsächlich",
		  sustainable: "Vorteile des Reisens",
		  about: "Etwa",
		  login: "Anmeldung",
		  logout: "Ausloggen",
		  favorites: "Favoriten",
		  stats: "Statistiken",
		  
		  morefunctions: "Melden Sie sich für weitere Funktionen an",
		  login: "Anmeldung",
		  register: "Registrieren",
		  ifnotregistered: " Sie sich, wenn Sie nicht registriert sind",
		  alreadyreg: "Dieser Benutzername ist bereits registriert",
		  tryothername: "Bitte. Versuchen Sie es mit einem anderen Benutzernamen",
		  registerfree: "Registrieren Sie sich hier, um ein Konto zu erstellen",
		  ifhasaccount: " wenn Sie ein Konto haben",
		  or: "oder ",
		  fillall: "Bitte füllen Sie alle Felder entsprechend aus!",
		  validemail: "E-Mail-Adresse korrekt eingeben!",
		  senttoserver: "Registrierungsdetails werden an den Server gesendet",
		  checkemail: "Sie können Ihre E-Mail überprüfen", 
		  checkemail2: "Bestätigungslink wird gesendet",
		  wegotthis: "Wir haben diese Nachricht erhalten:",
		  
		  username: "Nutzername",
		  email: "Email",
		  pass: "Passwort",
		  mismatch: "Die Passwörter stimmen nicht überein!",
		  incorrect: "Falscher Benutzername oder Passwort",
		  incorrect2: "Fehler",
		  
		  loginreminder: "Erinnerung",
		  logintolike: "Melden Sie sich an, um zu speichern!",
		  savedtofavs: "In den Favoriten gespeichert!",
		  removefav: "Aus Favoriten entfernt",
		  more: "mehr über den Ort",
		  favoritesnumber: "Sie haben ",
		  favoritesnumber2: " Lieblingsorte!",
		  
		  howtouse: "Auf dieser Website können Sie Ihren idealen Traumort für einen Besuch finden. Sie können Ihre Traumreiseseite nach Kontinenten oder durch Auswahl von Landschaftstypen finden, die Sie am gesuchten Ort haben möchten. Wenn Sie beispielsweise einen Ort in Europa oder Asien suchen müssen, der Wolkenkratzer, Strände und historische Stätten haben muss, müssen Sie sowohl Europa als auch Asien unter „SUCHE NACH KONTINENTEN“ auswählen und die Schaltflächen „Wolkenkratzer“, „Strand“ und „Historisch“ auswählen von 'SUCHE NACH LANDSCHAFT'. Wenn es einen oder mehrere Orte mit diesen Anforderungen gibt, können Sie sie gerne in Ihrem Konto speichern. Beachten Sie, dass jeder Ort, nach dem Sie suchen, möglicherweise nicht in unserer Datenbank enthalten ist",
		  
		  aboutme: "Ich bin Muxammadjon Jalolov, der Schöpfer dieser Seite. Ich habe einen Master-Abschluss in Informatik von der Lorraine University, Frankreich. Das Reisen an vielen Orten hat mich motiviert, diese Seite zu erstellen. Ich wollte einen Internetanwendung aufbauen, der Reiseorte finden kann, die Ihrem gewünschten Typ ähnlich sind. Manchmal wissen die Menschen vielleicht nicht, dass viele wunderbare Reiseziele ganz in unserer Nähe liegen, oder wir hätten uns nie vorstellen können, dass es solche Orte gibt. Die Nutzung dieser Website hilft Menschen, ihre Reisewunschliste zu füllen und ihren Traumreiseort zu finden.",
		  
		  traveling: "Warum Reisen wichtig ist",
		  b1: "Laut dem ",
		  b2: "-Blog ist Reisen eine wichtige Aktivität für unsere Gesundheit",
		  l1: "Reisen macht uns glücklicher, indem es uns von unseren täglichen Routinen wie Jobs, Studium, Hausaufgaben und Verpflichtungen befreit. Reisen macht auch glücklicher. Studien zufolge bringt das Ausgeben von Geld für bestimmte Dinge länger anhaltendes Glück.",
		  l2: "Reisen lässt uns auftanken. Manchmal sind einige Pausen von unseren sich wiederholenden Arbeitstagen oder Studien entscheidend, um psychische Probleme zu vermeiden. Dies könnte Stress, Angst und andere Probleme verhindern",
		  l3: "Die Forschung zeigt, dass bereits wenige Tage Urlaub positive Auswirkungen auf das Wohlbefinden haben.",
		  l4: "Reisen setzt neue Dinge aus. Es beschreibt, dass wir selbst durch Reisen in nahe gelegene Orte neue Dinge erleben",
		  l5: "Reisen kann uns körperlich gesünder machen. Einigen Studien zufolge macht Reisen unser Gehirn und Herz gesünder als andere",
		  l6: "Reisen kann die Kreativität fördern. Es wird erklärt, dass Erfahrungen an fremden Orten die kognitive Flexibilität und die Integrationsfähigkeit des Denkens erhöhen"
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
		  found: " lieux trouvés!",
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
		  
		  ancient: "ancienne",
		  medieval: "médiévale",
		  sea:"mer",
		  history:"historique",
		  mountains:"montagnes",
		  river:"fleuve",
		  beach:"plage",
		  skyscrapers: "grattes ciels",
		  desert: "désert",
		  main: "Principal",
		  sustainable: "Avantages de voyager",
		  about: "Sur",
		  login: "Entrer",
		  logout: "Se déconnecter",
		  favorites: "Favoris",
		  stats: "Statistiques",
		  
		  morefunctions: "Connectez-vous pour plus de fonctionnalités",
		  login: "Connexion",
		  register: "S'inscrire",
		  ifnotregistered: " si non inscrit",
		  alreadyreg: "Ce nom d'utilisateur est déjà occupé",
		  tryothername: "   Essayez un autre nom d'utilisateur",
		  registerfree: "Inscrivez-vous ici pour créer un compte",
		  ifhasaccount: " si vous avez un compte",
		  or: "ou ",
		  fillall: "Remplissez tous les champs en conséquence!",
		  validemail: "Saisissez correctement l'adresse e-mail!",
		  senttoserver: "Les détails d'inscription sont envoyés au serveur",
		  checkemail: "Vous pouvez vérifier votre e-mail", 
		  checkemail2: "Le lien de confirmation est envoyé",
		  wegotthis: "Nous avons reçu ce message:",
		  
		  username: "Nom d'utilisateur",
		  email: "E-mail",
		  pass: "Mot de passe",
		  mismatch: "Les mots de passe ne correspondent pas!",
		  incorrect: "Identifiant ou mot de passe incorrect",
		  incorrect2: "Erreur",
		  
		  loginreminder: "Rappel",
		  logintolike: "Connectez-vous d'abord pour enregistrer",
		  savedtofavs: "Enregistré dans les favoris!",
		  removefav: "Supprimé des favoris",
		  more: "en savoir plus sur l'endroit",
		  favoritesnumber: "Vous avez ",
		  favoritesnumber2: " endroits préférés!",
		  
		  howtouse: "Ce site vous permet de trouver votre endroit de rêve idéal à visiter. Vous pouvez trouver le site de voyage de vos rêves par continents ou en sélectionnant les types de paysages que vous souhaitez trouver à l'endroit recherché. Par exemple, si vous avez besoin de trouver un endroit qui se trouve en Europe ou en Asie, et qu'il doit avoir des gratte-ciel, une plage et qu'il est historique, vous devez sélectionner à la fois l'Europe et l'Asie dans 'RECHERCHE PAR CONTINENTS' et sélectionner les boutons gratte-ciel, plage et historique de 'RECHERCHE PAR PAYSAGE'. S'il existe un ou plusieurs lieux avec ces exigences, vous pouvez les aimer pour les enregistrer dans votre compte. Notez que tout lieu que vous recherchez peut ne pas figurer dans notre base de données",
		  
		  aboutme: "Je suis Muxammadjon Jalolov, le créateur de ce site. J'ai une maîtrise en informatique de l'Université de Lorraine, France. Voyager dans de nombreux endroits m'a motivé à créer ce site. Je voulais créer un application Web capable de trouver des lieux de voyage aussi similaires que le type souhaité. Parfois, les gens peuvent ne pas connaître de nombreuses destinations merveilleuses qui sont très proches de nous ou nous n'avons jamais imaginé que de tels endroits existent. L'utilisation de ce site aide les gens à remplir leur liste de souhaits de voyage et à trouver le lieu de voyage de leurs rêves.",
		  
		  traveling: "Pourquoi voyager est important ?",
		  b1: "Selon le blog ",
		  b2: ", voyager est une activité importante pour notre santé",
		  l1: "Les voyages nous rendent plus heureux en nous libérant de nos routines quotidiennes comme le travail, les études, les tâches ménagères et les responsabilités. Voyager rend aussi les gens plus heureux. Selon des études, dépenser de l'argent pour faire certaines choses apportera un bonheur plus durable.",
		  l2: "Les voyages nous permettent de nous ressourcer. Parfois, il est crucial de faire des pauses dans nos journées de travail répétitives ou nos études pour éviter les problèmes de santé mentale. Cela pourrait prévenir le stress, l'anxiété et d'autres problèmes",
		  l3: "La recherche montre que même quelques jours de vacances ont des effets positifs sur le bien-être.",
		  l4: "Les voyages exposent à de nouvelles choses. Il décrit que même en voyageant dans des endroits proches, nous expérimentons de nouvelles choses",
		  l5: "Les voyages peuvent nous rendre physiquement plus sains. Selon certaines études, voyager rend nos cerveaux et nos cœurs plus sains que d'autres",
		  l6: "Voyager peut améliorer la créativité. Il est expliqué que les expériences dans des lieux étrangers augmentent la flexibilité cognitive et l'intégration de la pensée"
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