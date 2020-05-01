import { ActivitiesModel } from "@/types/ActivitiesModel";

const activityData: ActivitiesModel[] = [
  {
    Id: 1,
    Description:
      "En av de mest kända självförsvarskonsterna i världen. De senaste 10 åren har brasiliansk jiu-jitsu fått ett starkt fäste runtom i världen bland annat hos militär, räddningstjänst, och inom idrottsvärlden för att nämna några. Träningsformen utvecklar både din fysiska och mentala styrka samtidigt som du tränar på din rörlighet och flexibilitet. Ditt välmående är i fokus hos oss. BJJ passar den yngsta som den äldsta.",
    Name: "Brasiliansk Jiu Jitsu",
    Link: "",
    Url: "brasiliansk-jiu-jitsu",
    Trainers: [
      {
        Name: "Bobby",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      },
      {
        Name: "Tomasz",
        Img: "./img/trainers/male.png",
        Id: 2,
        Alt: ""
      }
    ]
  },
  {
    Id: 2,
    Description:
      "En träningsform som är lik Brasiliansk Jiu-Jitsu men utan den traditionella dräkten eller Kimonon på japanska. En högaktiv träningsform där man är i ständig rörelse. Här utmanar du din balans och koordination för att kunna använda kroppen som redskap i utförandet av de olika rörelserna och greppen. En träningsform som utvecklar dig mentalt och ökar din kroppskännedom. Bra träning för alla.",
    Name: "Submission Wrestling/No-Gi",
    Link: "",
    Url: "submission-wrestling",
    Trainers: [
      {
        Name: "Bobby",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      },
      {
        Name: "Tomasz",
        Img: "./img/trainers/male.png",
        Id: 2,
        Alt: ""
      }
    ]
  },
  {
    Id: 3,
    Description:
      "En extremt rolig och högintensiv träningsform där vi har tagit det bästa från Mixed Martial Arts-världen och tekniker från alla möjliga stilar för ditt välbefinnande. Här kör vi på säckar, träningsdockor och mittsar blandat med funktionell träningsutrustning. Vi blandar statiska- och rörelseövningar där vi både utmanar och njuter. Allt anpassat utifrån varje individs förutsättningar och behov. Styrka, koordination och kondition för att nämna några av de bitar du stärker och utvecklar. En sak är säker, du får en härligt utmanande upplevelse!",
    Name: "Fitness MMA",
    Link: "",
    Url: "fitness-mma",
    Trainers: [
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      }
    ]
  },
  {
    Id: 4,
    Description:
      "Traditionell Kick- och Thaiboxning (Muay Thai), där man övar olika spark- och slagkombinationer varvat med intensiva övningar på både mittsar och säck, ett roligt sätt att lära sig grundtekniker tillsammans. Kombinerad träning av fotarbete och tekniker som tränar rörelse och andning. Även självförsvarsanpassad träning som kan vara värdefull för alla, det öppnar upp helt nya möjligheter för dig att träna och utvecklas på.",
    Name: "Kick/Thaiboxning",
    Link: "",
    Url: "kick-thaiboxning",
    Trainers: [
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      },
      {
        Name: "Calle",
        Img: "./img/trainers/male.png",
        Id: 2,
        Alt: ""
      }
    ]
  },
  {
    Id: 5,
    Description:
      "Traditionell boxning där du slipar på både grundläggande tekniker och varierande kombinationer samt utvecklar fotarbetet i samband med tuff träning. Mittsar och säckar är en stor del av träningen där balans och koordination utmanas på ett lekfullt sätt, ett perfekt tillfälle för dig att träna tillsammans med en vän eller partner. Boxning är också en självförsvarsutvecklande idrott för alla, helt enkelt en utmanande och rolig träning på samma gång.",
    Name: "Boxning",
    Link: "",
    Url: "boxning",
    Trainers: [
      {
        Name: "Ismael",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      }
    ]
  },
  {
    Id: 6,
    Description:
      "Ett träningspass med fokus på funktionell styrka och kondition. Ett fantastiskt tillfälle för dig att lära känna din kropp och stärka ditt sinne samtidigt. Allt från balans- och flexibilitetsövningar till rena styrke- och fysövningar. Vi använder oss av en stor variation av träningsutrustning som fria vikter, gummiband och medicinbollar. Till och med din egen kropp blir ett redskap. För dig som vill ha allround träning är detta en fantastisk utmaning. Du anpassar nivån utifrån dina egna förutsättningar.",
    Name: "Limitless HIIT",
    Link: "",
    Url: "limitless-hiit",
    Trainers: [
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      }
    ]
  },
  {
    Id: 7,
    Description:
      "I samarbete med Riksorganisationen Hikari erbjuder vi en fantastisk verksamhet med träningspass för barn och ungdomar med särskilda behov. Hikari Do är en träningsform där vi plockat tekniker och övningar från kampsporten men tagit bort tävlan och kampen. Fokus ligger på individens utveckling och välmående. Tillsammans med gruppen tränar vi koordination, balans, styrka och rörlighet blandat med ro- och stillhetsövningar såsom andning och fokus för ett ökat välbefinnande. Även det sociala gynnas såsom kommunikation, trygghet och att kunna se sitt eget värde. Vi blandar lek och träning för både individen och de anhöriga. Alla är varmt välkomna! Läs mer på",
    Name: "Hikari Do",
    Link: "http://www.joinhikari.com/",
    Url: "hikari-do",
    Trainers: [
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      }
    ]
  },
  {
    Id: 8,
    Description:
      "En utmanande helkroppsklass för alla nivåer nybörjare som elit, med fokus på uthållighet, styrka och rörlighet. HIIT Yoga-sekvenser med hög intensitet som varvas med mjuk dynamisk Vinyasa yoga som genomförs i ett jämt flöde för att mjuka upp och stärka kroppen. Perfekt för cirkulationen i kroppen där du även finner ett fokus och lugn samtidigt som du utmanar dig mentalt. Med en fantastisk instruktör som guidar dig genom varje övning från början till slut för att du ska få ut så mycket som möjligt av varje rörelse.",
    Name: "Limitless HIIT flow yoga",
    Link: "",
    Url: "limitless-hiit-yoga-flow",
    Trainers: [
      {
        Name: "Rosmarie",
        Img: "./img/trainers/female.png",
        Id: 1,
        Alt: ""
      }
    ]
  },
  {
    Id: 9,
    Description:
      "Morgonpasset som ger dig den perfekta starten på dagen. Full av energi och endorfiner efter passet är du redo att ta dig an vilken utmaning som helst under dagen. Träningspasset är för såväl motionärer som elitidrottare och innehåller alla möjliga träningsvarianter. Allt från cirkelträning, statiska övningar, balans- och koordinationsträning, konditionsträning till styrka- och uthållighetsträning. Endast 45 min långt men så givande!",
    Name: "Wake Up Limitless",
    Link: "",
    Url: "wake-up-limitless",
    Trainers: [
      {
        Name: "Ulf",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      },
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 2,
        Alt: ""
      }
    ]
  },
  {
    Id: 10,
    Description:
      "Ett lunchpass som ger dig det perfekta avbrottet från arbetet. Du laddar batterierna och rensar kroppen från stress och dina ”måsten”. Ett träningspass för alla nivåer där styrka och kondition varvas med funktionell träning till peppande musik och härlig energi. En träning för att balansera ditt välmående i vardagen där din egna kropp och även olika träningsredskap blir hjälpmedel. Ett 45 min långt träningspass som avslutas med skön stretching.",
    Name: "Limitless Energy",
    Link: "",
    Url: "limitless-energy",
    Trainers: [
      {
        Name: "Ulf",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      },
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 2,
        Alt: ""
      }
    ]
  },
  {
    Id: 11,
    Description:
      "Våra populära utomhuspass pågår under sommarperioden juni-augusti. De äger rum runtomkring i Malmös fantastiska naturområden såsom Pildammsparken och Kungsparken för att nämna några. Vi varvar kondition med styrka under intensiva övningar som genomförs både individuellt och i par. Tillsammans peppar ni varandra genom roliga utmaningar som är bra för både kropp och själ samtidigt som vi njuter av utomhusmiljön och frisk luft. Kamratskap och glädje genomsyrar passen. Här finns alltid en motiverande instruktör som pushar dig för att nå dina mål.",
    Name: "Limitless HIIT IN THE PARK",
    Link: "",
    Url: "limitless-outdoors",
    Trainers: [
      {
        Name: "Eric",
        Img: "./img/trainers/male.png",
        Id: 1,
        Alt: ""
      }
    ]
  },
  {
    Id: 12,
    Description:
      "Ta med en träningskamrat eller bjud in dina nära och kära till ett skönt träningspass där ni själva bestämmer övningar. Kanske vill ni slipa på era tekniker, köra ett intensivt konditionspass tillsammans eller bara komma och slå av er lite på säckarna. Ett perfekt tillfälle att introducera den svårflörtade på. Fri träning under uppsyn av instruktör vid frågor eller annat.",
    Name: "Open Mat",
    Link: "",
    Url: "open-mat",
    Trainers: [
      {
        Name: "",
        Img: "",
        Id: 1,
        Alt: ""
      }
    ]
  }
];
const activityType: ActivitiesModel[] = activityData;

export default activityType;
