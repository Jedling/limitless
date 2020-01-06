import { ActivitiesModel } from '@/types/ActivitiesModel';

const activityData: ActivitiesModel[] = [

  {
    Id: 1,
    Description: "En av de mest kända självförsvarskonsterna i världen. De senaste 10 åren har brasiliansk jiu-jitsu fått ett starkt fäste runtom i världen bland annat hos militär, räddningstjänst, och idrottsvärlden för att nämna några. Träningsformen utvecklar både din fysiska och mentala styrka samtidigt som du tränar på din rörlighet och flexibilitet. Ditt välmående är i fokus hos oss. BJJ passar den yngste som den äldste.",
    Name: 'Brasiliansk Jiu Jitsu',
    Url: '',
    Trainer: [
      'Bobby Andersson',
      'Tomasz Rajca',
    ],
  },
  {
    Id: 2,
    Description: "En träningsform som är lik Brasiliansk Jiu-Jitsu men utan den traditionella dräkten eller Kimonon på japanska. En högaktiv träningsform där man konstant befinner sig i rörelse både mjukt och utmanande. Man använder sig mycket av balans och koordination för att kunna använda kroppen som redskap i utförandet av de olika rörelserna och greppen. En träningsform som utmanar dig mentalt och ökar din kroppskännedom. Passar alla kön och åldrar.",
    Name: 'Submission Wrestling',
    Url: '',
    Trainer: [
      'Bobby Andersson',
      'Tomasz Rajca',
    ],
  },
  {
    Id: 3,
    Description: "En extremt rolig och högintensiv träningsform där vi har tagit det bästa ifrån Mixed Martial Arts-världen och tekniker ifrån alla möjliga stilar för ditt välbefinnande. Här kör vi på säckar, träningsdockor och mittsar blandat med funktionell träningsutrustning. Vi blandar statiska- och akrobatiska kroppsövningar där vi ser världen upp och ner. Allt anpassat utifrån varje individs förutsättningar och behov. Styrka, koordination och kondition för att nämna några av de bitar du stärker och utvecklar. En sak är säker, du får en härligt utmanande upplevelse!",
    Name: 'Fitness MMA',
    Url: '',
    Trainer: [
      'Erik Svensson',
    ],
  },
  {
    Id: 4,
    Description: "Traditionell Kick- och Thaiboxning (Muay Thai), där man övar olika spark- och slagkombinationer varvat med intensiva övningar på både mittsar och säck. Ett roligt sätt att lära sig grundtekniker på tillsammans. Kombinerad träning av fotarbete och tekniker som stärker både rörelse och din andning. En självförsvarsanpassad träning som kan vara värdefull för alla och öppnar upp nya möjligheter för dig att utvecklas på.",
    Name: 'Kick/Thaiboxning',
    Url: '',
    Trainer: [
      'Erik Svensson',
      'Calle Larsson'
    ],
  },
  {
    Id: 5,
    Description: "Traditionell boxning där du slipar på både de grundläggande teknikerna och varierande kombinationer samt utvecklar fotarbetet i samband med tuff träning. Mittsar och säckar är en stor del av träningen där balans och koordination utmanas på ett lekfullt sätt. Ett perfekt tillfälle för dig att träna tillsammans med en vän eller partner. Det går självklart även bra att komma ensam till passet så paras du ihop med en träningskamrat på plats. Boxning är en självförsvarsutvecklande idrott för alla. En utmanande och rolig träning på samma gång.",
    Name: 'Boxning',
    Url: '',
    Trainer: [
      'Ismael Mehdawe',
    ],
  },
  {
    Id: 6,
    Description: "Ett träningspass med fokus på funktionell styrka och kondition. Ett fantastiskt tillfälle för dig att lära känna din kropp och stärka ditt sinne samtidigt. Allt ifrån balans- och flexibilitetsövningar till rena styrke- och fysövningar. Vi använder oss av en stor variation av träningsutrustning som fria vikter, gummiband och medicinbollar. Till och med din egna kropp blir ett redskap. För dig som vill ha allround träning för hela kroppen är detta en fantastisk utmaning. Du anpassar nivån utifrån dina egna förutsättningar",
    Name: 'Limitless HIIT',
    Url: '',
    Trainer: [
      'Eric Svensson',
    ],
  },
  {
    Id: 7,
    Description: "I samarbete med Riksorganisationen Hikari erbjuder vi en fantastisk verksamhet med träningspass för barn och ungdomar med speciella behov. Hikari Do är en träningsform där vi plockat tekniker och övningar från kampsportsvärlden men tagit bort tävlan och kampen. Fokus ligger på individens utveckling och välmående. Tillsammans med gruppen tränar vi koordination, balans, styrka och rörlighet blandat med ro- och stillhetsövningar såsom andning och fokus för ett ökat välbefinnande. Även den sociala biten gynnas såsom kommunikation, trygghet och att kunna se sitt egna värde. Vi blandar lek och träning för både individen och de anhöriga. Alla är varmt välkomna! Läs mer på",
    Name: 'Hikari Do',
    Url: 'www.joinhikari.com',
    Trainer: [
      'Eric Svensson',
    ],
  },
  {
    Id: 8,
    Description: "En utmanande helkroppsklass för alla nivåer, nybörjare som elit. Fokus på uthållighet, styrka och rörlighet. HIIT Yoga-sekvenser med hög intensitet varvas med mjuk dynamisk Vinyasa yoga som genomförs i ett jämt flöde för att mjuka upp och stärka kroppen. Perfekt för cirkulationen där du även finner ett fokus och lugn samtidigt som du utmanas både mentalt och fysiskt. Med en fantastisk instruktör som guidar dig genom varje övning från början till slut för att du ska få ut så mycket som möjligt av varje rörelse.",
    Name: 'Limitless HIIT Yoga Flow',
    Url: '',
    Trainer: [
      'Ros-Marie Molin',
    ],
  },
  {
    Id: 9,
    Description: "Morgonpasset som ger dig den perfekta starten på dagen. Full av energi och endorfiner efter passet är du redo att ta dig an vilken utmaning som helst under dagen. Träningspasset är för motionärer som elit och innehåller alla möjliga träningsvarianter. Allt från cirkelträning, statiska övningar, balans- och koordinationsträning, konditionsträning till styrka- och uthållighetsträning. Endast 45 min långt men så givande!",
    Name: 'Wake Up Limitless',
    Url: '',
    Trainer: [
      'Nina Tran',
      'Ulf Littorin',
    ],
  },
  {
    Id: 10,
    Description: "Ett lunchpass som ger dig det perfekta avbrottet ifrån arbetet. Du laddar batterierna och rensar kroppen fri från stress och dina ”måsten”. Ett träningspass för alla nivåer där styrka och kondition varvas med funktionell träning till peppande musik och härlig energi. En träning för att balansera ditt välmående i vardagen. Din egna kropp och även olika träningsredskap blir hjälpmedel. Ett 45 min långt träningspass som avslutas med skön stretching.",
    Name: 'Limitless Energy',
    Url: '',
    Trainer: [
      'Nina Tran',
      'Ulf Littorin',
    ],
  },
  {
    Id: 11,
    Description: "Våra populära utomhuspass pågår under sommarperioden juni-augusti. De tar plats runtomkring i Malmös fantastiska naturområden såsom Pildammsparken och Kungsparken för att nämna några. Vi varvar kondition med styrka under intensiva övningar som genomförs både individuellt och i par. Tillsammans peppar ni varandra genom roliga utmaningar som är bra för både kropp och själ samtidigt som vi njuter av utomhusmiljön och frisk luft. Kamratskap och glädje genomsyrar passen. Med en motiverande instruktör som pushar dig för att nå dina mål.",
    Name: 'Limitless Outdoors/In the Park',
    Url: '',
    Trainer: [
      'Eric Svensson',
    ],
  },
  {
    Id: 11,
    Description: "Bestäm med en träningskamrat eller bjud in dina nära och kära till ett skönt träningspass där ni själva bestämmer övningar. Kanske vill ni slipa på era tekniker, köra ett intensivt konditionspass tillsammans eller bara komma och slå av er lite på säckarna. Ett perfekt tillfälle att introducera den svårflörtade på. Fri träning under uppsyn av instruktör vid frågor eller annat. Varmt välkomna.",
    Name: 'Open Mat',
    Url: '',
    Trainer: [
      
    ],
  },
];
const activityType: ActivitiesModel[] = activityData;

export default activityType;