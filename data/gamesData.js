const games = [
  { //EA Sports FC 24
      id: 'Game001',
      name: 'EA SPORTS FC™ 24',
      description: 'FIFA 24 es el simulador de fútbol más completo y realista, ofreciéndote la oportunidad de vivir la emoción del deporte rey. Puedes jugar con los equipos y jugadores más icónicos del mundo, y competir en los torneos más prestigiosos, incluyendo ligas y copas internacionales. El juego ofrece varios modos como el Modo Carrera, donde podrás gestionar tu propio equipo o crear tu carrera como futbolista, y Ultimate Team, que te permite armar el equipo de tus sueños con jugadores de diferentes épocas. También podrás disfrutar de Clubes Pro, para formar un equipo y competir en línea, o Volta, donde se juega al fútbol callejero en escenarios urbanos. Con gráficos impresionantes y un control más fluido, FIFA 24 te permite vivir el fútbol como nunca antes, ya sea solo o acompañado.',
      price: 185000,
      trailer: 'https://www.youtube.com/embed/-vL01jbgENE?si=p2hNPqzO1YAElylc',
      images: [
          'images/gamesPhotos/FC24_1.png',
          'images/gamesPhotos/FC24_2.png',
          'images/gamesPhotos/FC24_3.png'
        ],
      logo: 'images/gamesIcons/FC24.png',
      tags: ['Deportes', 'Competitivo', 'Multijugador', 'Solitario', 'EA Sports', 'Fútbol']
  },

  { //F1 24
    id: 'Game002',
    name: 'F1 24',
    description: 'F1 24 es el simulador oficial del Campeonato Mundial de Fórmula 1 que ofrece una experiencia de conducción realista, intensa y llena de emoción. Los jugadores pueden competir con todos los pilotos, escuderías y circuitos de la temporada 2024, viviendo cada carrera con un nivel de detalle impresionante. Con gráficos de nueva generación, físicas refinadas e inteligencia artificial avanzada, cada maniobra, cambio de clima y decisión estratégica se siente auténtica. El juego cuenta con modos como Carrera, multijugador online y pantalla dividida, lo que permite disfrutarlo en solitario o con otros. Ya sea creando tu propio piloto o encarnando a un profesional de la F1, F1 24 ofrece adrenalina, precisión y velocidad en cada vuelta. Ideal para quienes buscan desafiar sus reflejos y dominar las pistas como verdaderos campeones.',
    price: 279900,
    trailer: 'https://www.youtube.com/embed/NnyCWsA6KSI?si=emzd8VNg1VR5DqJw',
    images: [
        'images/gamesPhotos/F1_24_1.png',
        'images/gamesPhotos/F1_24_2.png',
        'images/gamesPhotos/F1_24_3.png'
        ],
    logo: 'images/gamesIcons/F1_24.png',
    tags: ['Deportes', 'Competitivo', 'Multijugador', 'Solitario', 'EA Sports', 'Carreras']
  },

  { //Left 4 Dead 2
    id: 'Game003',
    name: 'left 4 dead 2',
    description: 'En Left 4 Dead 2, el mundo ha colapsado y la infección ha transformado a la mayoría de la población en violentos zombis sedientos de sangre. En medio del caos, cuatro sobrevivientes desconocidos deberán confiar el uno en el otro para atravesar escenarios devastados y luchar por su vida. Equipados con armas improvisadas, explosivos y cualquier objeto que encuentren, enfrentarán hordas interminables de infectados, incluidos enemigos especiales con habilidades mortales. Cada nivel es una carrera contra el tiempo, y la cooperación es la clave para sobrevivir. Con una ambientación opresiva, acción constante y modos multijugador cooperativos y competitivos, Left 4 Dead 2 no solo pone a prueba tu puntería, sino también tu capacidad para trabajar en equipo bajo presión.',
    price: 26000,
    trailer: 'https://www.youtube.com/embed/dE3Hm890KWQ?si=kWgipHOppBYati-S',
    images: [
        'images/gamesPhotos/Left4Dead2_1.png',
        'images/gamesPhotos/Left4Dead2_2.png',
        'images/gamesPhotos/Left4Dead2_3.png'
        ],
    logo: 'images/gamesIcons/Left4Dead2.png',
    tags: ['Acción', 'Tiro', 'Cooperativo', 'Multijugador', 'Zombis', 'Supervivencia', 'Solitario']
  },

  { //Minecraft
      id: 'Game004',
      name: 'Minecraft (Java Edition)',
      description: 'Minecraft es un videojuego de mundo abierto donde la creatividad y la aventura no tienen límites. Los jugadores pueden explorar paisajes infinitos generados aleatoriamente, recolectar recursos, construir estructuras, fabricar herramientas y sobrevivir en un entorno lleno de criaturas, cuevas, aldeas y dimensiones ocultas. Con distintos modos de juego como Supervivencia, Creativo, Aventura y Espectador, Minecraft se adapta a todos los estilos y edades, permitiendo jugar en solitario o en compañía de otros. Su estilo visual único, basado en bloques, y su libertad total para crear o explorar, lo convierten en una experiencia inmersiva e interminable. Ideal para quienes disfrutan construir, descubrir y vivir su propia historia en un mundo completamente personalizable.',
      price: 145000,
      trailer: 'https://www.youtube.com/embed/MmB9b5njVbA?si=qXHFy3woyuvzYR-D',
      images: [
          'images/gamesPhotos/MinecraftWallpaper1.png',
          'images/gamesPhotos/MinecraftWallpaper2.png',
          'images/gamesPhotos/MinecraftWallpaper3.png'
        ],
      logo: 'images/gamesIcons/Minecraft.png',
      tags: ['Aventura', 'Construcción', 'Supervivencia', 'Multijugador', 'Solitario']
  },

  { //Mortal Kombat 11 Ultimate
    id: 'Game005',
    name: 'Mortal Kombat 11 Ultimate',
    description: 'Mortal Kombat 11 Ultimate lleva el legendario torneo de combate al siguiente nivel. En un universo donde los dioses antiguos y guerreros inmortales luchan por el destino de las líneas temporales, cada pelea es una batalla entre el pasado y el futuro. Esta edición definitiva reúne el juego base, la expansión Aftermath y todos los Kombat Packs, ofreciendo más de 35 personajes, entre ellos íconos como Scorpion y Sub-Zero, así como nuevos combatientes como Mileena, Rain y Rambo. Con un sistema de lucha refinado, gráficos realistas y cinemáticas que cuentan una historia intensa y envolvente, MK11 Ultimate no es solo un juego de peleas, es una experiencia completa de acción, poder y gloria. Aquí no hay segundas oportunidades: el kombate es todo o nada.',
    price: 145000,
    trailer: 'https://www.youtube.com/embed/z7f4paq1Fvg?si=Y_ppjoUIPRKesHho',
    images: [
        'images/gamesPhotos/MK11_1.png',
        'images/gamesPhotos/MK11_2.png',
        'images/gamesPhotos/MK11_3.png'
        ],
    logo: 'images/gamesIcons/MK11.png',
    tags: ['Acción', 'Peleas', 'Competitivo', 'Multijugador', 'Solitario']
  },
  
  { //Elden Ring
    id: 'Game006',
    name: 'Elden Ring',
    description: 'Elden Ring es un juego de rol de acción en tercera persona desarrollado por FromSoftware y publicado por Bandai Namco. Ambientado en un vasto mundo de fantasía conocido como Las Tierras Intermedias, los jugadores exploran un entorno interconectado lleno de secretos, peligros y leyendas. Con una jugabilidad desafiante al estilo "soulslike", permite personalizar a tu personaje, combatir enemigos épicos y descubrir la historia fragmentada del mundo a través de sus ruinas, NPCs y artefactos. La colaboración con George R. R. Martin aporta una narrativa rica y oscura. Ideal para los que buscan una experiencia inmersiva, desafiante y con exploración libre.',
    price: 200000,
    trailer: 'https://www.youtube.com/embed/E3Huy2cdih0?si=hNVfhiR8PiG4yqmG',
    images: [
        'images/gamesPhotos/EldenRing1.png',
        'images/gamesPhotos/EldenRing2.png',
        'images/gamesPhotos/EldenRing3.png'
    ],
    logo: 'images/gamesIcons/EldenRing.png',
    tags: ['RPG', 'Acción', 'Mundo Abierto', 'Fantasía', 'Solitario']
  },

  { //Red Dead Redemption 2
    id: 'Game007',
    name: 'Red Dead Redemption 2',
    description: 'Red Dead Redemption 2 es una épica aventura de mundo abierto ambientada en los últimos días del Salvaje Oeste. Juegas como Arthur Morgan, un forajido del grupo de Dutch Van der Linde, mientras lucha por sobrevivir ante la presión de la ley, las pandillas rivales y las propias divisiones internas. El juego destaca por sus paisajes deslumbrantes, narrativa profunda, interacciones realistas y un nivel de detalle excepcional en cada rincón del mundo. Desde cazar y acampar hasta robos a trenes y enfrentamientos armados, esta obra maestra de Rockstar ofrece una experiencia inmersiva que redefine el género.',
    price: 170000,
    trailer: 'https://www.youtube.com/embed/gmA6MrX81z4?si=AP_3EgJ9OYCnAWuK',
    images: [
        'images/gamesPhotos/RedDeadRedemption2_1.png',
        'images/gamesPhotos/RedDeadRedemption2_2.png',
        'images/gamesPhotos/RedDeadRedemption2_3.png'
    ],
    logo: 'images/gamesIcons/RedDeadRedemption2.png',
    tags: ['Aventura', 'Solitario', 'Acción', 'Tiro', 'Supervivencia']
  },

  { //Resident Evil Village
    id: 'Game008',
    name: 'Resident Evil Village',
    description: 'En Resident Evil Village, la pesadilla continúa para Ethan Winters en un remoto y misterioso pueblo europeo. Tras los eventos de Resident Evil 7, Ethan busca respuestas, pero pronto se ve atrapado en un mundo de horrores con criaturas espeluznantes, cultos siniestros y castillos góticos. El juego combina exploración, combate y acertijos, con gráficos realistas y atmósferas escalofriantes potenciadas por el motor RE Engine. Con momentos tensos, enemigos icónicos y una historia llena de sorpresas, Village es un deleite para los fans del survival horror.',
    price: 160000,
    trailer: 'https://www.youtube.com/embed/tjfTxFzGh3Q?si=lKAkzo0SrJW3ELkq',
    images: [
        'images/gamesPhotos/ResidentEvil_1.png',
        'images/gamesPhotos/ResidentEvil_2.png',
        'images/gamesPhotos/ResidentEvil_3.png'
    ],
    logo: 'images/gamesIcons/ResidentEvil.png',
    tags: ['Terror', 'Supervivencia', 'Solitario', 'Acción', 'Tiro']
  },

  { //Hogwarts Legacy
    id: 'Game009',
    name: 'Hogwarts Legacy',
    description: 'Hogwarts Legacy es una aventura mágica de rol en mundo abierto ambientada en el universo del siglo XIX del Mundo Mágico. Como estudiante recién admitido en Hogwarts, descubrirás que posees una extraña habilidad relacionada con la Magia Antigua. Mientras exploras castillos, bosques y pueblos, aprenderás hechizos, prepararás pociones, domarás criaturas mágicas y descubrirás secretos que podrían cambiar el destino del mundo mágico. El juego ofrece una narrativa única y la libertad de elegir tu casa, tus amistades y tu camino como mago o bruja.',
    price: 220000,
    trailer: 'https://www.youtube.com/embed/S6GTl_vPRvU?si=ON4zv7dxt6LX1D7y',
    images: [
        'images/gamesPhotos/HogwartsLegacy_1.png',
        'images/gamesPhotos/HogwartsLegacy_2.png',
        'images/gamesPhotos/HogwartsLegacy_3.png'
    ],
    logo: 'images/gamesIcons/HogwartsLegacy.png',
    tags: ['Magia', 'Mundo Abierto', 'RPG', 'Aventura', 'Acción', 'Solitario']
  },

  { //Cyberpunk 2077
    id: 'Game010',
    name: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 es un RPG de mundo abierto desarrollado por CD Projekt RED, ambientado en Night City, una megalópolis futurista obsesionada con el poder, el glamour y la modificación corporal. El jugador encarna a V, un mercenario que busca un implante único que promete la inmortalidad. La historia se ramifica según tus decisiones, con múltiples caminos, finales y formas de abordar misiones. El juego destaca por su impresionante nivel de detalle, atmósfera inmersiva, música envolvente y libertad de acción. Aunque tuvo un lanzamiento accidentado, hoy en día ofrece una experiencia mucho más pulida y completa.',
    price: 100000,
    trailer: 'https://www.youtube.com/embed/8X2kIfS6fb8?si=o1MdJ4tmRfg_5apR',
    images: [
        'images/gamesPhotos/Cyberpunk2077_1.png',
        'images/gamesPhotos/Cyberpunk2077_2.png',
        'images/gamesPhotos/Cyberpunk2077_3.png'
    ],
    logo: 'images/gamesIcons/Cyberpunk2077.png',
    tags: ['RPG', 'Acción', 'Futurista', 'Solitario']
  },

  { //The Witcher 3: Wild Hunt - Complete Edition
    id: 'Game011',
    name: 'The Witcher 3: Wild Hunt - Complete Edition',
    description: 'The Witcher 3: Wild Hunt – Edición Completa es un RPG de mundo abierto donde controlas a Geralt de Rivia, un cazador de monstruos en un mundo de fantasía oscura. Incluye el juego base y sus dos expansiones, con más de 150 horas de aventura, decisiones impactantes y una historia envolvente.',
    price: 30000,
    trailer: 'https://www.youtube.com/embed/JrwMAHVDbuU?si=1ELtbqdGz584h1k7',
    images: [
        'images/gamesPhotos/TheWitcher3_1.png',
        'images/gamesPhotos/TheWitcher3_2.png',
        'images/gamesPhotos/TheWitcher3_3.png'
    ],
    logo: 'images/gamesIcons/TheWitcher3.png',
    tags: ['RPG', 'Acción', 'Aventura', 'Mundo Abierto', 'Fantasía', 'Solitario']
  },

  { //Dragon Ball Z: Kakarot - Legendary Edition
    id: 'Game012',
    name: 'Dragon Ball Z: Kakarot - Edición Legendaria',
    description: 'Dragon Ball Z: Kakarot - Edición Legendaria es una experiencia RPG de acción que te sumerge por completo en la historia épica de Goku y los Guerreros Z. Revive los momentos más memorables de Dragon Ball Z, desde la llegada de Raditz hasta la saga de Majin Buu, con combates espectaculares, animaciones cinematográficas y una narrativa profundamente fiel al anime original. Esta edición legendaria incluye no solo el juego base, sino también los contenidos descargables de las expansiones “El Despertar de un Nuevo Poder” y “Trunks: El Guerrero de la Esperanza”, ofreciendo aún más horas de historia, personajes y poder. Explora un mundo abierto vibrante, entrena, pesca, cocina y fortalece tus habilidades mientras formas lazos con personajes icónicos y luchas contra enemigos legendarios. Es el juego ideal tanto para fanáticos de Dragon Ball como para los que buscan una aventura envolvente y emocional.',
    price: 185000,
    trailer: 'https://www.youtube.com/embed/pUOpykBtF5k?si=ecmB-kpUJXnvauIr',
    images: [
        'images/gamesPhotos/DBZkakarot1.png',
        'images/gamesPhotos/DBZkakarot2.png',
        'images/gamesPhotos/DBZkakarot3.png'
    ],
    logo: 'images/gamesIcons/DBZkakarot.png',
    tags: ['Acción', 'RPG', 'Anime', 'Aventura', 'Pelea', 'Historia', 'Exploración', 'Solitario']
  },

  { //Grand Theft Auto V - Premium Edition
    id: 'Game013',
    name: 'Grand Theft Auto V - Edition Premium',
    description: 'Grand Theft Auto V - Edición Premium te lanza directo al caos y lujo de Los Santos, con el juego base, GTA Online y el Criminal Enterprise Starter Pack para que inicies tu imperio criminal con todo. Acción, velocidad y libertad total en un solo paquete.',
    price: 75000,
    trailer: 'https://www.youtube.com/embed/hBvMSP7cI-Q?si=aONuke3py2gvciD3',
    images: [
        'images/gamesPhotos/GtaV_1.png',
        'images/gamesPhotos/GtaV_2.png',
        'images/gamesPhotos/GtaV_3.png'
    ],
    logo: 'images/gamesIcons/GtaV.png',
    tags: ['Acción', 'Aventura', 'Mundo Abierto', 'Solitario', 'Multijugador', 'Tiro', 'Vehículos']
  }
]

const cards = [
  { //Robux 800
    id: 'Card001',
    name: 'Roblox | 800 Robux',
    description: 'Obten 800 Robux para gastar en Roblox, esto es mucho más que un videojuego: es una plataforma global de creación y juego en línea donde millones de usuarios pueden diseñar sus propios mundos virtuales y disfrutar de experiencias interactivas creadas por otros jugadores. Desarrollado por Roblox Corporation y lanzado en 2006, Roblox se ha convertido en uno de los ecosistemas de juego más grandes y dinámicos del mundo.',
    logo: 'images/cardsIcons/Robux_800.png',
    price: 42500,
    stock: 80
  },

  { //Robux 2000
    id: 'Card002',
    name: 'Roblox | 2000 Robux',
    description: 'Obten 2000 Robux para gastar en Roblox, esto es mucho más que un videojuego: es una plataforma global de creación y juego en línea donde millones de usuarios pueden diseñar sus propios mundos virtuales y disfrutar de experiencias interactivas creadas por otros jugadores. Desarrollado por Roblox Corporation y lanzado en 2006, Roblox se ha convertido en uno de los ecosistemas de juego más grandes y dinámicos del mundo.',
    logo: 'images/cardsIcons/Robux_2000.png',
    price: 105000,
    stock: 93
  },

  { //Robux 4500
    id: 'Card003',
    name: 'Roblox | 4500 Robux',
    description: 'Obten 4500 Robux para gastar en Roblox, esto es mucho más que un videojuego: es una plataforma global de creación y juego en línea donde millones de usuarios pueden diseñar sus propios mundos virtuales y disfrutar de experiencias interactivas creadas por otros jugadores. Desarrollado por Roblox Corporation y lanzado en 2006, Roblox se ha convertido en uno de los ecosistemas de juego más grandes y dinámicos del mundo.',
    logo: 'images/cardsIcons/Robux_4500.png',
    price: 210000,
    stock: 120
  },

  { //Pase de diamante Clash Royale
    id: 'Card004',
    name: 'Pase de diamante Clash Royale',
    description: 'Lleva tu juego al siguiente nivel con el Pass Royale, el complemento premium que transforma cada temporada de Clash Royale en una auténtica mina de oro. Gana más, desbloquea más, y domina las arenas con estilo mientras recolectas recompensas exclusivas y ventajas únicas.',
    logo: 'images/cardsIcons/CRPaseDeDiamante.png',
    price: 70000,
    stock: 45
  },

  { //1200 Gemas Clash Royale
    id: 'Card005',
    name: '1200 Gemas Clash Royale',
    description: 'Obten 1200 Gemas, estas son el recurso más codiciado en Clash Royale, el combustible premium que convierte tu progreso en una carrera hacia la cima. Con solo unas cuantas gemas, puedes acelerar mejoras, desbloquear cofres al instante o participar en los desafíos más intensos del juego.',
    logo: 'images/cardsIcons/CR1200Gemas.png',
    price: 55000,
    stock: 97
  },

  { //14000 Gemas Clash Royale
    id: 'Card006',
    name: '14000 Gemas Clash Royale',
    description: 'Obten 14000 Gemas, estas son el recurso más codiciado en Clash Royale, el combustible premium que convierte tu progreso en una carrera hacia la cima. Con solo unas cuantas gemas, puedes acelerar mejoras, desbloquear cofres al instante o participar en los desafíos más intensos del juego.',
    logo: 'images/cardsIcons/CR14000Gemas.png',
    price: 580000,
    stock: 32
  },

  { //CSGO.net $5
    id: 'Card007',
    name: 'CSGO.net | $10',
    description: 'Genera un código digital que puedes utilizar en el sitio web oficial de CSGO 500 para añadir $5 dolares de fondos a tu cuenta. Estos fondos, denominados BUX, te permiten participar en diversos modos de juego y adquirir skins de CS:GO para personalizar tus armas',
    logo: 'images/cardsIcons/CSGO_5USD.png',
    price: 20000,
    stock: 68
  },

  { //CSGO.net $20
    id: 'Card008',
    name: 'CSGO.net | $20',
    description: 'Genera un código digital que puedes utilizar en el sitio web oficial de CSGO 500 para añadir $20 dolares de fondos a tu cuenta. Estos fondos, denominados BUX, te permiten participar en diversos modos de juego y adquirir skins de CS:GO para personalizar tus armas',
    logo: 'images/cardsIcons/CSGO_20USD.png',
    price: 85000,
    stock: 46
  },

  { //CSGO.net $50
    id: 'Card009',
    name: 'CSGO.net | $50',
    description: 'Genera un código digital que puedes utilizar en el sitio web oficial de CSGO 500 para añadir $50 dolares de fondos a tu cuenta. Estos fondos, denominados BUX, te permiten participar en diversos modos de juego y adquirir skins de CS:GO para personalizar tus armas',
    logo: 'images/cardsIcons/CSGO_50USD.png',
    price: 210000,
    stock: 65
  },

  { // 1000 Valorant Points
    id: 'Card010',
    name: 'Valorant | 1000 Valorant Points',
    description: '¡Recarga tu cuenta con Valorant Points (VP) y destaca en el campo de batalla! Con esta tarjeta puedes comprar: Skins exclusivas de armas, el pase de batalla con recompensas premium y accesorios cosméticos para tu perfil.',
    logo: 'images/cardsIcons/Valorant1000VP.png',
    price: 35000,
    stock: 74
  },

  { // Valorant Agente Élite
    id: 'Card011',
    name: 'Valorant | Agente Élite',
    description: 'Recarga tus Valorant Points y desbloquea lo mejor de tu arsenal. Con esta tarjeta, accede a: Skins edición limitada. Variantes de armas con efectos especiales. Contenido exclusivo del Pase de Batalla. Código digital instantáneo. Ideal para quienes quieren destacar en cada partida.',
    logo: 'images/cardsIcons/ValorantAgenteElite.png',
    price: 50000,
    stock: 99
  },

  { // Valorant Agente Elite
    id: 'Card012',
    name: 'Valorant | Colección Premium',
    description: 'La personalización es poder. Esta tarjeta te permite conseguir: Bundles de armas temáticos. Tarjetas de jugador y sprays exclusivos. Avances de niveles en el Pase de Batalla. Compatible con cualquier cuenta LATAM. Canje rápido desde el cliente de juego Riot.',
    logo: 'images/cardsIcons/ValorantColeccionPremium.png',
    price: 75000,
    stock: 67
  },

  { // Fortnite 1000 VBucks
    id: 'Card013',
    name: 'Fortnite | 1000 V-Bucks',
    description: '¡Haz que tu estilo brille en la isla! Con esta tarjeta puedes obtener PaVos (V-Bucks) para comprar: Skins de personajes y armas. Bailes y gestos divertidos. El Pase de Batalla y niveles extra.',
    logo: 'images/cardsIcons/Fortnite1000VBucks.png',
    price: 24000,
    stock: 54
  }
]