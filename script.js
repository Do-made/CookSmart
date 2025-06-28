const ricette = {
  classici: [
    {
      nome: "Spaghetti alla Carbonara",
      descrizione: "Un classico della cucina romana.",
      ingredienti: [
        { nome: "Spaghetti", quantita: 100, unita: "g" },
        { nome: "Guanciale", quantita: 50, unita: "g" },
        { nome: "Uova", quantita: 1, unita: "intero" },
        { nome: "Pecorino Romano", quantita: 20, unita: "g" },
        { nome: "Pepe nero", quantita: 1, unita: "pizzico" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "10 min",
        tecniche: ["rosolare", "mantecare", "mescolare"],
        consigli: "Mantecare a fuoco spento per evitare di cuocere l’uovo.",
        descrizioneCompleta: "Cuoci gli spaghetti in abbondante acqua salata. Rosola il guanciale in padella finché non diventa croccante. In una ciotola, sbatti l’uovo con il pecorino e pepe. Scola la pasta, uniscila al guanciale e infine versa il composto d’uovo a fuoco spento, mescolando energicamente."
      }
    },
    {
      nome: "Lasagna alla Bolognese",
      descrizione: "Uno dei piatti più iconici della cucina italiana.",
      ingredienti: [
        { nome: "Pasta per lasagna", quantita: 100, unita: "g" },
        { nome: "Ragù di carne", quantita: 200, unita: "g" },
        { nome: "Besciamella", quantita: 100, unita: "ml" },
        { nome: "Parmigiano Reggiano", quantita: 20, unita: "g" }
      ],
      preparazione: {
        tempoPreparazione: "30 min",
        tempoCottura: "40 min",
        tecniche: ["stratificare", "cuocere al forno"],
        consigli: "Lasciare riposare 10 minuti prima di servire.",
        descrizioneCompleta: "In una pirofila, alterna strati di pasta, ragù, besciamella e parmigiano. Continua fino a esaurimento ingredienti. Cuoci in forno preriscaldato a 180°C per 40 minuti. Lascia riposare prima di servire per compattare meglio gli strati."
      }
    },
    {
      nome: "Polpette al Sugo",
      descrizione: "Un classico intramontabile della cucina casalinga.",
      ingredienti: [
        { nome: "Carne macinata mista", quantita: 120, unita: "g" },
        { nome: "Pane raffermo", quantita: 30, unita: "g" },
        { nome: "Latte", quantita: 30, unita: "ml" },
        { nome: "Uovo", quantita: 0.5, unita: "uovo" },
        { nome: "Parmigiano", quantita: 10, unita: "g" },
        { nome: "Prezzemolo", quantita: 1, unita: "cucchiaio" },
        { nome: "Passata di pomodoro", quantita: 150, unita: "ml" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
        { nome: "Sale", quantita: 1, unita: "pizzico" }
      ],
      preparazione: {
        tempoPreparazione: "20 min",
        tempoCottura: "25 min",
        tecniche: ["mescolare", "rosolare", "cuocere a fuoco basso"],
        consigli: "Servire con pane fresco o su un letto di purè di patate.",
        descrizioneCompleta: "In una ciotola mescola la carne macinata con il pane ammollato nel latte, l’uovo, il parmigiano, il prezzemolo tritato e il sale. Forma delle polpette. In una padella scalda l’olio e rosola le polpette. Aggiungi la passata di pomodoro, copri con un coperchio e cuoci a fuoco basso per 25 minuti."
      }
    },
    {
      nome: "Risotto alla Milanese",
      descrizione: "Elegante primo piatto arricchito dallo zafferano.",
      ingredienti: [
        { nome: "Riso Carnaroli", quantita: 80, unita: "g" },
        { nome: "Zafferano", quantita: 0.1, unita: "g" },
        { nome: "Brodo di carne", quantita: 250, unita: "ml" },
        { nome: "Cipolla", quantita: 20, unita: "g" },
        { nome: "Burro", quantita: 15, unita: "g" },
        { nome: "Parmigiano", quantita: 10, unita: "g" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "18 min",
        tecniche: ["tostare", "sfumare", "mantecare"],
        consigli: "Aggiungere il burro e parmigiano a fuoco spento per ottenere una consistenza cremosa.",
        descrizioneCompleta: "Trita finemente la cipolla e soffriggila con metà burro. Aggiungi il riso e fallo tostare. Sfumalo con vino bianco e aggiungi il brodo poco per volta mescolando. A metà cottura unisci lo zafferano sciolto in poco brodo. Quando il riso è cotto, manteca con burro e parmigiano."
      }
    },
    {
      nome: "Pasta al Pesto Genovese",
      descrizione: "Piatto tipico ligure dal sapore fresco e profumato.",
      ingredienti: [
        { nome: "Trofie", quantita: 100, unita: "g" },
        { nome: "Pesto alla genovese", quantita: 40, unita: "g" },
        { nome: "Patate", quantita: 30, unita: "g" },
        { nome: "Fagiolini", quantita: 30, unita: "g" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "12 min",
        tecniche: ["lessare", "condire"],
        consigli: "Usa pesto fatto in casa per un risultato autentico.",
        descrizioneCompleta: "Cuoci le trofie insieme a patate a cubetti e fagiolini. Scola e condisci con pesto genovese, mescolando bene per amalgamare i sapori."
      }
    },
    {
      nome: "Cotoletta alla Milanese",
      descrizione: "Secondo piatto croccante e dorato della tradizione lombarda.",
      ingredienti: [
        { nome: "Costoletta di vitello", quantita: 1, unita: "intera" },
        { nome: "Uovo", quantita: 1, unita: "intero" },
        { nome: "Pangrattato", quantita: 50, unita: "g" },
        { nome: "Burro chiarificato", quantita: 30, unita: "g" }
      ],
      preparazione: {
        tempoPreparazione: "15 min",
        tempoCottura: "10 min",
        tecniche: ["impanare", "friggere"],
        consigli: "Usa burro chiarificato per una frittura più tradizionale.",
        descrizioneCompleta: "Passa la costoletta nell’uovo sbattuto e poi nel pangrattato. Friggila nel burro chiarificato finché non è dorata da entrambi i lati."
      }
    },
    {
      nome: "Melanzane alla Parmigiana",
      descrizione: "Un piatto ricco e saporito, tipico del Sud Italia.",
      ingredienti: [
        { nome: "Melanzane", quantita: 200, unita: "g" },
        { nome: "Passata di pomodoro", quantita: 150, unita: "ml" },
        { nome: "Mozzarella", quantita: 80, unita: "g" },
        { nome: "Parmigiano Reggiano", quantita: 30, unita: "g" },
        { nome: "Basilico", quantita: 3, unita: "foglie" }
      ],
      preparazione: {
        tempoPreparazione: "20 min",
        tempoCottura: "30 min",
        tecniche: ["friggere", "stratificare", "cuocere al forno"],
        consigli: "Lasciare riposare prima di servire per esaltare i sapori.",
        descrizioneCompleta: "Affetta le melanzane e friggile. In una teglia alterna strati di melanzane, passata, mozzarella, parmigiano e basilico. Inforna a 180°C per 30 minuti."
      }
    },
    {
      nome: "Gnocchi al Ragù",
      descrizione: "Comfort food italiano per eccellenza.",
      ingredienti: [
        { nome: "Gnocchi di patate", quantita: 150, unita: "g" },
        { nome: "Ragù di carne", quantita: 100, unita: "g" },
        { nome: "Parmigiano Reggiano", quantita: 10, unita: "g" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "5 min",
        tecniche: ["lessare", "condire"],
        consigli: "Servi ben caldi con una spolverata di parmigiano.",
        descrizioneCompleta: "Cuoci gli gnocchi in acqua bollente salata finché non salgono in superficie. Scolali e condiscili con ragù caldo e parmigiano."
      }
    },
    {
      nome: "Minestrone di Verdure",
      descrizione: "Zuppa ricca di verdure, ideale per tutte le stagioni.",
      ingredienti: [
        { nome: "Patate", quantita: 50, unita: "g" },
        { nome: "Carote", quantita: 50, unita: "g" },
        { nome: "Zucchine", quantita: 50, unita: "g" },
        { nome: "Fagioli", quantita: 50, unita: "g" },
        { nome: "Cipolla", quantita: 20, unita: "g" },
        { nome: "Sedano", quantita: 20, unita: "g" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
      ],
      preparazione: {
        tempoPreparazione: "15 min",
        tempoCottura: "40 min",
        tecniche: ["soffriggere", "bollire"],
        consigli: "Servire con crostini di pane.",
        descrizioneCompleta: "Soffriggi cipolla e sedano con olio, aggiungi le verdure a pezzetti e acqua o brodo. Cuoci per 40 minuti, aggiustando di sale."
      }
    },
    {
      nome: "Tiramisù",
      descrizione: "Il dolce italiano per eccellenza.",
      ingredienti: [
        { nome: "Savoiardi", quantita: 100, unita: "g" },
        { nome: "Mascarpone", quantita: 125, unita: "g" },
        { nome: "Uova", quantita: 1, unita: "intero" },
        { nome: "Zucchero", quantita: 30, unita: "g" },
        { nome: "Caffè", quantita: 100, unita: "ml" },
        { nome: "Cacao amaro", quantita: 1, unita: "cucchiaino" }
      ],
      preparazione: {
        tempoPreparazione: "20 min",
        tempoCottura: "0 min",
        tecniche: ["montare", "stratificare"],
        consigli: "Lasciare in frigo per almeno 2 ore prima di servire.",
        descrizioneCompleta: "Monta i tuorli con lo zucchero, aggiungi il mascarpone. Inzuppa i savoiardi nel caffè e forma strati alternando crema e biscotti. Spolvera con cacao e raffredda."
      }
    }
  ],

 vegani: [
    {
      nome: "Zuppa di Lenticchie",
      descrizione: "Zuppa calda e nutriente perfetta per le giornate fredde.",
      ingredienti: [
        { nome: "Lenticchie", quantita: 80, unita: "g" },
        { nome: "Cipolla", quantita: 30, unita: "g" },
        { nome: "Carota", quantita: 30, unita: "g" },
        { nome: "Sedano", quantita: 20, unita: "g" },
        { nome: "Passata di pomodoro", quantita: 100, unita: "ml" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
        { nome: "Sale", quantita: 1, unita: "pizzico" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "35 min",
        tecniche: ["soffriggere", "bollire"],
        consigli: "Aggiungi un filo d’olio a crudo prima di servire.",
        descrizioneCompleta: "Soffriggi cipolla, sedano e carota. Aggiungi lenticchie, passata e acqua. Cuoci a fuoco lento finché tenere."
      }
    },
    {
      nome: "Pasta con crema di avocado",
      descrizione: "Piatto veloce e cremoso a base di avocado.",
      ingredienti: [
        { nome: "Pasta", quantita: 100, unita: "g" },
        { nome: "Avocado maturo", quantita: 1, unita: "intero" },
        { nome: "Succo di limone", quantita: 1, unita: "cucchiaio" },
        { nome: "Aglio", quantita: 1, unita: "spicchio" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
        { nome: "Sale", quantita: 1, unita: "pizzico" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "10 min",
        tecniche: ["frullare", "mescolare"],
        consigli: "Servire subito per evitare che l’avocado ossidi.",
        descrizioneCompleta: "Frulla avocado, limone, olio e aglio. Cuoci la pasta, scolala e mescola con la crema."
      }
    },
    {
      nome: "Couscous alle Verdure",
      descrizione: "Un piatto colorato, leggero e saziante.",
      ingredienti: [
        { nome: "Couscous", quantita: 100, unita: "g" },
        { nome: "Zucchine", quantita: 50, unita: "g" },
        { nome: "Peperoni", quantita: 50, unita: "g" },
        { nome: "Cipolla rossa", quantita: 30, unita: "g" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
        { nome: "Sale", quantita: 1, unita: "pizzico" }
      ],
      preparazione: {
        tempoPreparazione: "15 min",
        tempoCottura: "10 min",
        tecniche: ["saltare", "idratate"],
        consigli: "Aggiungi succo di limone per un tocco fresco.",
        descrizioneCompleta: "Cuoci le verdure a cubetti. Reidrata il couscous con acqua calda e mescola con le verdure saltate."
      }
    },
    {
      nome: "Burger di Ceci",
      descrizione: "Secondo piatto proteico e gustoso.",
      ingredienti: [
        { nome: "Ceci lessi", quantita: 200, unita: "g" },
        { nome: "Pane grattugiato", quantita: 30, unita: "g" },
        { nome: "Prezzemolo", quantita: 1, unita: "cucchiaio" },
        { nome: "Paprika", quantita: 0.5, unita: "cucchiaino" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
      ],
      preparazione: {
        tempoPreparazione: "15 min",
        tempoCottura: "10 min",
        tecniche: ["frullare", "cuocere in padella"],
        consigli: "Servili con insalata o in un panino.",
        descrizioneCompleta: "Frulla i ceci con gli altri ingredienti, forma dei burger e cuocili in padella con poco olio."
      }
    },
    {
      nome: "Zucchine Ripiene Vegane",
      descrizione: "Una rivisitazione leggera del piatto tradizionale.",
      ingredienti: [
        { nome: "Zucchine", quantita: 2, unita: "intere" },
        { nome: "Pane raffermo", quantita: 50, unita: "g" },
        { nome: "Pomodorini", quantita: 50, unita: "g" },
        { nome: "Aglio", quantita: 1, unita: "spicchio" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
      ],
      preparazione: {
        tempoPreparazione: "20 min",
        tempoCottura: "25 min",
        tecniche: ["cuocere al forno", "frullare"],
        consigli: "Decorare con pangrattato per croccantezza.",
        descrizioneCompleta: "Svuota le zucchine, frulla il ripieno con gli altri ingredienti, farcisci e inforna a 180°C."
      }
    },
    {
      nome: "Insalata di Quinoa",
      descrizione: "Fresca, completa e ricca di proteine vegetali.",
      ingredienti: [
        { nome: "Quinoa", quantita: 80, unita: "g" },
        { nome: "Pomodorini", quantita: 50, unita: "g" },
        { nome: "Cetriolo", quantita: 50, unita: "g" },
        { nome: "Menta", quantita: 3, unita: "foglie" },
        { nome: "Succo di limone", quantita: 1, unita: "cucchiaio" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "15 min",
        tecniche: ["lessare", "mescolare"],
        consigli: "Perfetta da preparare in anticipo.",
        descrizioneCompleta: "Lessa la quinoa e mescola con le verdure a cubetti, menta e succo di limone."
      }
    },
    {
      nome: "Tofu alla piastra",
      descrizione: "Semplice ma saporito, ottima fonte proteica.",
      ingredienti: [
        { nome: "Tofu", quantita: 100, unita: "g" },
        { nome: "Salsa di soia", quantita: 1, unita: "cucchiaio" },
        { nome: "Zenzero", quantita: 0.5, unita: "cucchiaino" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaino" }
      ],
      preparazione: {
        tempoPreparazione: "5 min",
        tempoCottura: "10 min",
        tecniche: ["marinare", "grigliare"],
        consigli: "Lascia marinare almeno 15 minuti per un sapore intenso.",
        descrizioneCompleta: "Taglia il tofu a fette, marinalo e cuocilo sulla piastra ben calda."
      }
    },
    {
      nome: "Pasta al Pomodoro Fresco",
      descrizione: "Piatto estivo semplice e gustoso.",
      ingredienti: [
        { nome: "Pasta", quantita: 100, unita: "g" },
        { nome: "Pomodorini", quantita: 80, unita: "g" },
        { nome: "Aglio", quantita: 1, unita: "spicchio" },
        { nome: "Basilico", quantita: 3, unita: "foglie" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "10 min",
        tecniche: ["saltare", "bollire"],
        consigli: "Usa pomodorini dolci e maturi.",
        descrizioneCompleta: "Soffriggi aglio e pomodorini tagliati. Cuoci la pasta e saltala nel sugo con basilico."
      }
    },
    {
      nome: "Crema di Zucca",
      descrizione: "Vellutata leggera e confortante.",
      ingredienti: [
        { nome: "Zucca", quantita: 200, unita: "g" },
        { nome: "Patata", quantita: 50, unita: "g" },
        { nome: "Cipolla", quantita: 30, unita: "g" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
        { nome: "Sale", quantita: 1, unita: "pizzico" }
      ],
      preparazione: {
        tempoPreparazione: "10 min",
        tempoCottura: "20 min",
        tecniche: ["bollire", "frullare"],
        consigli: "Servi con semi di zucca tostati per croccantezza.",
        descrizioneCompleta: "Cuoci zucca, patata e cipolla in acqua. Frulla fino a ottenere una crema liscia."
      }
    },
    {
      nome: "Insalata di Ceci e Rucola",
      descrizione: "Fresca, rapida e ricca di gusto.",
      ingredienti: [
        { nome: "Ceci cotti", quantita: 150, unita: "g" },
        { nome: "Rucola", quantita: 50, unita: "g" },
        { nome: "Pomodorini", quantita: 50, unita: "g" },
        { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
        { nome: "Succo di limone", quantita: 1, unita: "cucchiaio" }
      ],
      preparazione: {
        tempoPreparazione: "5 min",
        tempoCottura: "0 min",
        tecniche: ["mescolare"],
        consigli: "Ideale anche come pranzo al sacco.",
        descrizioneCompleta: "Mescola tutti gli ingredienti in una ciotola e servi fresca."
      }
    }
  ],

  salutari:[
    {
        nome: "Insalata di Quinoa",
        descrizione: "Fresca e leggera, perfetta per un pasto estivo.",
        ingredienti: [
            { nome: "Quinoa", quantita: 80, unita: "g" },
            { nome: "Pomodorini", quantita: 50, unita: "g" },
            { nome: "Cetriolo", quantita: 50, unita: "g" },
            { nome: "Olio EVO", quantita: 1, unita: "cucchiaio" },
            { nome: "Succo di limone", quantita: 1, unita: "cucchiaio" },
            { nome: "Menta fresca", quantita: 1, unita: "cucchiaio" }
        ],
        preparazione: {
            tempoPreparazione: "15 min",
            tempoCottura: "15 min",
            tecniche: ["bollire", "tagliare", "mescolare"],
            consigli: "Lascia raffreddare la quinoa prima di mescolare con le verdure.",
            descrizioneCompleta: "Cuoci la quinoa in acqua salata, scolala e lasciala raffreddare. Taglia a cubetti i pomodorini e il cetriolo. Unisci tutti gli ingredienti in una ciotola, aggiungi menta, olio e limone, e mescola bene."
        }
    },
    {
        nome: "Vellutata di Zucchine",
        descrizione: "Un comfort food leggero ma saporito.",
        ingredienti: [
            { nome: "Zucchine", quantita: 200, unita: "g" },
            { nome: "Cipolla", quantita: 30, unita: "g" },
            { nome: "Brodo vegetale", quantita: 200, unita: "ml" },
            { nome: "Olio EVO", quantita: 1, unita: "cucchiaio" }
        ],
        preparazione: {
            tempoPreparazione: "10 min",
            tempoCottura: "20 min",
            tecniche: ["soffriggere", "bollire", "frullare"],
            consigli: "Servire con crostini integrali.",
            descrizioneCompleta: "Soffriggi la cipolla con un filo d’olio. Aggiungi le zucchine a pezzi e il brodo. Cuoci per 20 minuti, poi frulla fino a ottenere una vellutata liscia. Aggiusta di sale e servi calda."
        }
    },
    {
        nome: "Filetto di Salmone al Vapore",
        descrizione: "Ricetta proteica e povera di grassi.",
        ingredienti: [
            { nome: "Filetto di salmone", quantita: 150, unita: "g" },
            { nome: "Limone", quantita: 1, unita: "fetta" },
            { nome: "Erbe aromatiche", quantita: 1, unita: "pizzico" }
        ],
        preparazione: {
            tempoPreparazione: "5 min",
            tempoCottura: "15 min",
            tecniche: ["cuocere al vapore"],
            consigli: "Accompagna con verdure bollite o riso integrale.",
            descrizioneCompleta: "Posiziona il salmone con limone e aromi su una vaporiera. Cuoci per circa 15 minuti. Servi con un filo d’olio a crudo."
        }
    },
    {
        nome: "Zuppa di Lenticchie",
        descrizione: "Piatto ricco di fibre e ferro.",
        ingredienti: [
            { nome: "Lenticchie", quantita: 80, unita: "g" },
            { nome: "Sedano", quantita: 30, unita: "g" },
            { nome: "Carota", quantita: 30, unita: "g" },
            { nome: "Cipolla", quantita: 20, unita: "g" },
            { nome: "Olio EVO", quantita: 1, unita: "cucchiaio" },
            { nome: "Brodo vegetale", quantita: 300, unita: "ml" }
        ],
        preparazione: {
            tempoPreparazione: "10 min",
            tempoCottura: "35 min",
            tecniche: ["soffriggere", "bollire"],
            consigli: "Puoi aggiungere un cucchiaio di passata per dare colore.",
            descrizioneCompleta: "Soffriggi il trito di verdure, aggiungi le lenticchie sciacquate e il brodo. Cuoci per 35 minuti a fuoco basso. Servi calda con un filo d’olio."
        }
    },
    {
        nome: "Tofu Saltato con Verdure",
        descrizione: "Piatto vegano ricco di proteine.",
        ingredienti: [
            { nome: "Tofu", quantita: 100, unita: "g" },
            { nome: "Peperoni", quantita: 50, unita: "g" },
            { nome: "Zucchine", quantita: 50, unita: "g" },
            { nome: "Salsa di soia", quantita: 1, unita: "cucchiaio" },
            { nome: "Olio di sesamo", quantita: 1, unita: "cucchiaino" }
        ],
        preparazione: {
            tempoPreparazione: "10 min",
            tempoCottura: "10 min",
            tecniche: ["saltare in padella"],
            consigli: "Non cuocere troppo il tofu per mantenerlo croccante.",
            descrizioneCompleta: "Taglia il tofu e le verdure a cubetti. Salta prima le verdure e poi il tofu con la salsa di soia. Cuoci per 10 minuti mescolando spesso."
        }
    },
  {
  nome: "Riso Integrale con Verdure",
  descrizione: "Un piatto completo e leggero per un pranzo salutare.",
  ingredienti: [
    { nome: "Riso integrale", quantita: 80, unita: "g" },
    { nome: "Zucchine", quantita: 50, unita: "g" },
    { nome: "Carote", quantita: 50, unita: "g" },
    { nome: "Olio EVO", quantita: 1, unita: "cucchiaio" },
    { nome: "Salsa di soia", quantita: 1, unita: "cucchiaino" }
  ],
  preparazione: {
    tempoPreparazione: "10 min",
    tempoCottura: "30 min",
    tecniche: ["bollire", "saltare"],
    consigli: "Aggiungi la salsa di soia solo a fine cottura.",
    descrizioneCompleta: "Cuoci il riso. Salta le verdure in padella con poco olio. Unisci tutto e aggiungi salsa di soia."
  }
},
{
  nome: "Uova Strapazzate con Spinaci",
  descrizione: "Colazione o pranzo proteico e veloce.",
  ingredienti: [
    { nome: "Uova", quantita: 2, unita: "intere" },
    { nome: "Spinaci freschi", quantita: 100, unita: "g" },
    { nome: "Olio EVO", quantita: 1, unita: "cucchiaino" },
    { nome: "Sale", quantita: 1, unita: "pizzico" }
  ],
  preparazione: {
    tempoPreparazione: "5 min",
    tempoCottura: "5 min",
    tecniche: ["saltare", "strapazzare"],
    consigli: "Non cuocere troppo le uova per mantenerle morbide.",
    descrizioneCompleta: "Salta gli spinaci, poi versa le uova sbattute e strapazzale fino a cottura."
  }
},
{
  nome: "Insalata di Tonno e Fagioli",
  descrizione: "Piatto freddo ricco di proteine.",
  ingredienti: [
    { nome: "Tonno al naturale", quantita: 100, unita: "g" },
    { nome: "Fagioli cannellini", quantita: 100, unita: "g" },
    { nome: "Cipolla rossa", quantita: 30, unita: "g" },
    { nome: "Olio EVO", quantita: 1, unita: "cucchiaio" },
    { nome: "Prezzemolo", quantita: 1, unita: "cucchiaino" }
  ],
  preparazione: {
    tempoPreparazione: "10 min",
    tempoCottura: "0 min",
    tecniche: ["mescolare"],
    consigli: "Ideale da preparare in anticipo.",
    descrizioneCompleta: "Scola fagioli e tonno, uniscili con cipolla tritata e condisci con olio e prezzemolo."
  }
},
{
  nome: "Smoothie Verde",
  descrizione: "Bevanda detox e rinfrescante.",
  ingredienti: [
    { nome: "Spinaci freschi", quantita: 50, unita: "g" },
    { nome: "Mela verde", quantita: 1, unita: "intera" },
    { nome: "Succo di limone", quantita: 1, unita: "cucchiaio" },
    { nome: "Acqua", quantita: 150, unita: "ml" }
  ],
  preparazione: {
    tempoPreparazione: "5 min",
    tempoCottura: "0 min",
    tecniche: ["frullare"],
    consigli: "Bevi subito per mantenere le proprietà nutritive.",
    descrizioneCompleta: "Frulla tutti gli ingredienti fino a ottenere un composto omogeneo."
  }
},
{
  nome: "Zuppa di Orzo e Verdure",
  descrizione: "Un piatto caldo, saziante e salutare.",
  ingredienti: [
    { nome: "Orzo perlato", quantita: 80, unita: "g" },
    { nome: "Zucchine", quantita: 50, unita: "g" },
    { nome: "Carote", quantita: 50, unita: "g" },
    { nome: "Cipolla", quantita: 30, unita: "g" },
    { nome: "Brodo vegetale", quantita: 400, unita: "ml" }
  ],
  preparazione: {
    tempoPreparazione: "10 min",
    tempoCottura: "35 min",
    tecniche: ["bollire"],
    consigli: "Aggiungi un filo d’olio a crudo prima di servire.",
    descrizioneCompleta: "Cuoci l’orzo e le verdure nel brodo per circa 35 minuti. Servi caldo."
  }
}
],

   senza_glutine: [
    {
        nome: "Riso con verdure",
        descrizione: "Un piatto semplice e salutare.",
        ingredienti: [
            { nome: "Riso basmati", quantita: 100, unita: "g" },
            { nome: "Zucchine", quantita: 50, unita: "g" },
            { nome: "Carote", quantita: 50, unita: "g" },
            { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
        ],
        preparazione: {
            tempoPreparazione: "10 min",
            tempoCottura: "20 min",
            tecniche: ["lessare", "saltare"],
            consigli: "Cuoci il riso separatamente e saltalo con le verdure a parte.",
            descrizioneCompleta: "Cuoci il riso, taglia le verdure e saltale in padella. Unisci tutto e servi caldo."
        }
    },
    {
        nome: "Pollo al limone",
        descrizione: "Secondo leggero e senza glutine.",
        ingredienti: [
            { nome: "Petto di pollo", quantita: 150, unita: "g" },
            { nome: "Succo di limone", quantita: 2, unita: "cucchiai" },
            { nome: "Olio evo", quantita: 1, unita: "cucchiaio" },
            { nome: "Rosmarino", quantita: 1, unita: "rametto" }
        ],
        preparazione: {
            tempoPreparazione: "5 min",
            tempoCottura: "10 min",
            tecniche: ["marinare", "cuocere in padella"],
            consigli: "Marinare il pollo almeno 15 minuti prima della cottura.",
            descrizioneCompleta: "Marina il pollo con limone, olio e rosmarino. Cuoci in padella 5 minuti per lato."
        }
    },
    {
        nome: "Frittata alle erbette",
        descrizione: "Un classico piatto senza glutine.",
        ingredienti: [
            { nome: "Uova", quantita: 2, unita: "intero" },
            { nome: "Spinaci", quantita: 50, unita: "g" },
            { nome: "Parmigiano", quantita: 10, unita: "g" },
            { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
        ],
        preparazione: {
            tempoPreparazione: "5 min",
            tempoCottura: "10 min",
            tecniche: ["sbattere", "cuocere in padella"],
            consigli: "Cuoci a fuoco lento con coperchio per una frittata soffice.",
            descrizioneCompleta: "Sbatti le uova, aggiungi spinaci e parmigiano. Versa in padella e cuoci da entrambi i lati."
        }
    },
    {
        nome: "Insalata di riso integrale",
        descrizione: "Perfetta per un pranzo estivo.",
        ingredienti: [
            { nome: "Riso integrale", quantita: 80, unita: "g" },
            { nome: "Pomodorini", quantita: 50, unita: "g" },
            { nome: "Mais", quantita: 30, unita: "g" },
            { nome: "Olive nere", quantita: 20, unita: "g" }
        ],
        preparazione: {
            tempoPreparazione: "10 min",
            tempoCottura: "20 min",
            tecniche: ["lessare", "mescolare"],
            consigli: "Fai raffreddare il riso prima di unirlo agli altri ingredienti.",
            descrizioneCompleta: "Cuoci il riso, scolalo e raffreddalo. Unisci pomodorini, mais e olive. Mescola e condisci."
        }
    },
    {
        nome: "Zuppa di patate e porri",
        descrizione: "Piatto caldo e confortante.",
        ingredienti: [
            { nome: "Patate", quantita: 150, unita: "g" },
            { nome: "Porro", quantita: 50, unita: "g" },
            { nome: "Brodo vegetale", quantita: 300, unita: "ml" },
            { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
        ],
        preparazione: {
            tempoPreparazione: "10 min",
            tempoCottura: "25 min",
            tecniche: ["bollire", "frullare"],
            consigli: "Servire con crostini di pane senza glutine.",
            descrizioneCompleta: "Taglia patate e porro, cuoci nel brodo e frulla tutto. Aggiusta di sale."
        }
    },
  {
    nome: "Polenta con funghi",
    descrizione: "Piatto tradizionale del Nord Italia, naturalmente senza glutine.",
    ingredienti: [
      { nome: "Farina di mais", quantita: 100, unita: "g" },
      { nome: "Funghi champignon", quantita: 80, unita: "g" },
      { nome: "Aglio", quantita: 1, unita: "spicchio" },
      { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
    ],
    preparazione: {
      tempoPreparazione: "10 min",
      tempoCottura: "30 min",
      tecniche: ["bollire", "saltare"],
      consigli: "Mescola costantemente la polenta per evitare grumi.",
      descrizioneCompleta: "Cuoci la farina di mais in acqua salata mescolando. Salta i funghi con aglio e olio. Servi sopra la polenta calda."
    }
  },
  {
    nome: "Uova strapazzate con avocado",
    descrizione: "Colazione proteica e veloce.",
    ingredienti: [
      { nome: "Uova", quantita: 2, unita: "intero" },
      { nome: "Avocado", quantita: 1, unita: "intero" },
      { nome: "Olio evo", quantita: 1, unita: "cucchiaino" },
      { nome: "Sale", quantita: 1, unita: "pizzico" }
    ],
    preparazione: {
      tempoPreparazione: "5 min",
      tempoCottura: "5 min",
      tecniche: ["sbattere", "cuocere in padella"],
      consigli: "Servi subito per gustarne la cremosità.",
      descrizioneCompleta: "Sbatti le uova con il sale e cuoci in padella. Servi con avocado a fettine sopra o di lato."
    }
  },
  {
    nome: "Pasta di riso con pesto di zucchine",
    descrizione: "Alternativa senza glutine alla pasta tradizionale.",
    ingredienti: [
      { nome: "Pasta di riso", quantita: 100, unita: "g" },
      { nome: "Zucchine", quantita: 100, unita: "g" },
      { nome: "Mandorle", quantita: 20, unita: "g" },
      { nome: "Olio evo", quantita: 2, unita: "cucchiai" }
    ],
    preparazione: {
      tempoPreparazione: "10 min",
      tempoCottura: "10 min",
      tecniche: ["frullare", "cuocere", "mescolare"],
      consigli: "Aggiungi un cucchiaio di acqua di cottura per amalgamare meglio.",
      descrizioneCompleta: "Cuoci la pasta, frulla le zucchine con mandorle e olio. Condisci la pasta con il pesto ottenuto."
    }
  },
  {
    nome: "Insalata di ceci e avocado",
    descrizione: "Fresca, saziante e naturalmente senza glutine.",
    ingredienti: [
      { nome: "Ceci cotti", quantita: 100, unita: "g" },
      { nome: "Avocado", quantita: 1, unita: "intero" },
      { nome: "Pomodorini", quantita: 50, unita: "g" },
      { nome: "Olio evo", quantita: 1, unita: "cucchiaio" }
    ],
    preparazione: {
      tempoPreparazione: "5 min",
      tempoCottura: "0 min",
      tecniche: ["mescolare"],
      consigli: "Usa avocado maturo per una consistenza cremosa.",
      descrizioneCompleta: "Taglia l’avocado e i pomodorini, unisci ai ceci e condisci con olio evo. Mescola e servi."
    }
  },
  {
    nome: "Frittata al forno con verdure",
    descrizione: "Senza farina, cotta al forno, perfetta per il pranzo.",
    ingredienti: [
      { nome: "Uova", quantita: 3, unita: "intero" },
      { nome: "Zucchine", quantita: 50, unita: "g" },
      { nome: "Peperoni", quantita: 50, unita: "g" },
      { nome: "Sale", quantita: 1, unita: "pizzico" }
    ],
    preparazione: {
      tempoPreparazione: "10 min",
      tempoCottura: "20 min",
      tecniche: ["sbattere", "cuocere al forno"],
      consigli: "Versa il composto in uno stampo rivestito di carta forno.",
      descrizioneCompleta: "Sbatti le uova con le verdure tagliate a dadini. Versa in uno stampo e cuoci in forno a 180°C per 20 minuti."
 }
},
]
};




document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("category");
  const dishSelect = document.getElementById("piatti");
  const splash = document.getElementById("splash-screen");
  const main = document.querySelector("main");

  setTimeout(() => {
    splash.style.display = "none";
    main.style.display = "block";
    populateDishes("tutte");
  }, 1500);

  categorySelect.addEventListener("change", () => {
    const cat = categorySelect.value;
    populateDishes(cat);
  });
});

function populateDishes(category) {
  const dishSelect = document.getElementById("piatti");
  dishSelect.innerHTML = "";
  let list = [];

  if (category === "tutte") {
    for (let cat in ricette) {
      list = list.concat(ricette[cat]);
    }
  } else {
    list = ricette[category] || [];
  }

  list.forEach((ricetta, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = ricetta.nome;
    dishSelect.appendChild(opt);
  });
}

function generaRicetta() {
  const category = document.getElementById("category").value;
  const index = parseInt(document.getElementById("piatti").value);
  const servings = parseInt(document.getElementById("porzioni").value);

  const ricetta = (category === "tutte")
    ? Object.values(ricette).flat()[index]
    : ricette[category][index];

  let html = `<h2>${ricetta.nome}</h2><p><strong>${ricetta.descrizione}</strong></p><ul>`;
  ricetta.ingredienti.forEach(i => {
    html += `<li>${i.nome}: ${i.quantita * servings} ${i.unita}</li>`;
  });
  html += `</ul><p><strong>Tempo di preparazione:</strong> ${ricetta.preparazione.tempoPreparazione}</p>`;
  html += `<p><strong>Tempo di cottura:</strong> ${ricetta.preparazione.tempoCottura}</p>`;
  html += `<p><strong>Tecniche:</strong> ${ricetta.preparazione.tecniche.join(', ')}</p>`;
  html += `<p><strong>Consiglio:</strong> ${ricetta.preparazione.consigli}</p>`;
  html += `<p><strong>Preparazione:</strong> ${ricetta.preparazione.descrizioneCompleta}</p>`;

  document.getElementById("output").innerHTML = html;
}