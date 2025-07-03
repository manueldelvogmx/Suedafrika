// Südafrika Roadtrip - Daten und Funktionen
// Ausgelagert für bessere Code-Organisation

const tripData = {
    route: [
        { id: 'kapstadt', name: 'Kapstadt', days: '14.-16. Nov.', distance: 'Start (Hotel)', coords: '-33.9249,18.4241' },
        { id: 'weinlande', name: 'Weinlande', days: '17.-19. Nov.', distance: '54 km (Hotel)', coords: '-33.9358,18.8680' },
        { id: 'hermanus', name: 'Hermanus', days: '20.-21. Nov.', distance: '94 km (Hotel)', coords: '-34.4079,19.2346' },
        { id: 'garden-route', name: 'Garden Route', days: '20.-28. Nov.', distance: '362 km (Hotel)', coords: '-34.0350,23.0465' },
        { id: 'addo', name: 'Addo & Abreise', days: '29.-30. Nov.', distance: '306 km (Hotel)', coords: '-33.4704,25.7530' },
    ],
    // Neue Struktur: Cards nach Tagen organisiert
    tripByDays: {
        1: {
            date: '14. November 2025',
            dayName: 'Freitag',
            region: 'Kapstadt',
            cards: [
                {
                    title: "Ankunft in Cape Town",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoDU8-itSVFkznLRu0fPhGCuT8N6GCQ_FEw&s",
                    meta: "Ankunft und Anreise zum Hotel in Green Point",
                    text: "Wir starten am Donnerstag um 22 Uhr in Frankfurt und landen am Freitag um 11 Uhr in Kapstadt, dann geht es zu unserem zauberhaften Hotel. Wir verbringen 3 Nächte in Kapstadt."
                },
                {
                    title: "Tafelberg",
                    image: "https://www.geh-mal-reisen.de/wp-content/uploads/kapstadt-sehenswuerdigkeiten-highlights-tafelberg-aussicht.jpg",
                    meta: "13 Uhr Anfahrt: 30 min · Aufenthalt: 90 min",
                    text: "Das absolute Must-Do in Kapstadt! Wir nehmen die Seilbahn hoch zum legendären Tafelberg und werden mit einem grandiosen 360°-Rundumblick über Stadt, Küste und Berge belohnt. Tickets buchen wir vorab online – dieser Ausblick ist jeden Cent wert!"
                },
                {
                    title: "Kirstenbosch Gärten",
                    image: "https://bridgesandballoons.com/Images/2015/11/Kirstenbosch-Botanical-Garden1-974x301@2x.jpg",
                    meta: "15 Uhr Anfahrt: 30 min · Aufenthalt: 90 min",
                    text: "Natur pur am Fuße des Tafelbergs! Wir wandeln durch einen der schönsten botanischen Gärten der Welt, überqueren die spektakuläre Baumwipfel-Hängebrücke und entdecken die einzigartige Fynbos-Vegetation. Am besten morgens – dann ist es angenehm kühl und die Fotomotive sind perfekt!"
                },
                {
                    title: "Abends V&A Waterfront",
                    image: "https://www.waterfront.co.za/wp-content/uploads/2023/04/THE_VA.png",
                    meta: "18 Uhr Anfahrt: 15 min · Aufenthalt: den Abend genießen",
                    text: "Hier schlägt das Herz von Kapstadt! Wir schlendern durch das lebhafte Hafenviertel, entdecken coole Designshops, probieren uns durch den Food Market und genießen den Hafenblick. Perfekt für entspannte Abende mit südafrikanischem Flair."
                }
            ]
        },
        2: {
            date: '15. November 2025',
            dayName: 'Samstag',
            region: 'Kapstadt',
            cards: [
                {
                    title: "Kap Halbinsel",
                    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrBQmBHa2qsjVQXdpiMKVx9BaRWAEyiom46rpEznyAenmPhqKRWPXw3lt3k-1Y_4Uvd7saqbcI70yaetQwrrFiy1zpTZgM7PXXSR6uZdJtZO8vis-PfRAGPw3kpNjXHvvvOrnU=s1360-w1360-h1020",
                    meta: "Tagesausflug: 150km Rundfahrt · Start: vormittags",
                    text: "Der ultimative Tagesausflug! Wir starten mit Kaffee in Muizenberg, stoppen bei Kalky's in Kalk Bay für traditionellen Fisch, besuchen die Pinguine am Boulders Beach und das berühmte Kap. Der Höhepunkt: Rückfahrt über den spektakulären Chapman's Peak Drive im goldenen Sonnenuntergangslicht – die Aussicht ist der Oberhammer!"
                },
                {
                    title: "Robben Island",
                    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTeP3n6nvedEAtGY_bRCcEgvkiQGgNgD7tJ4ysVcv78gi_YbIUhQZTzjatnNol8SaODGdcfYGJU_mcXCbWjIjcGJpL7qDDpw0ZEJm4LrQ",
                    meta: "Dauer: ca. 3–4 h inkl. Boot (falls noch Zeit ist)",
                    text: "Eine bewegende Zeitreise in die Geschichte Südafrikas! Wir starten am Nelson Mandela Gateway und nehmen das Boot zur berühmten Gefängnisinsel. Die Tour wird oft von ehemaligen Häftlingen geführt – absolut beeindruckend und emotional. Unbedingt vorab reservieren!"
                }
            ]
        },
        3: {
            date: '16. November 2025',
            dayName: 'Sonntag',
            region: 'Weinlande',
            cards: [
                {
                    title: "Franschhoek Wine Tram",
                    image: "https://reise-rosinen.com/wp-content/uploads/2019/10/winetram-WL-A-2.jpg",
                    meta: "Start: 10:00 Uhr",
                    text: "Das perfekte Wein-Abenteuer! Wir hüpfen entspannt von Weingut zu Weingut mit der berühmten Wine Tram durch die traumhaften Weinlande. Keine Sorgen ums Fahren – einfach genießen und verkosten! Tickets buchen wir vorab online, denn das ist der Renner bei allen Weinliebhabern."
                },
                {
                    title: "Stellenbosch Wanderung",
                    image: "https://www.roxannereid.co.za/uploads/3/7/7/8/3778676/roxannereid-1l3a0009-2-20190917-2_orig.jpg",
                    meta: "Nachmittags Anfahrt: 45 min · Aufenthalt: 2-3 h",
                    text: "Zeitreise durch Südafrikas Weingeschichte! Wir flanieren durch die von majestätischen Eichen gesäumten Straßen der zweitältesten Stadt des Landes. Historische kapholländische Architektur, gemütliche Straßencafés und spannende Kunstgalerien warten darauf, von uns entdeckt zu werden."
                }
            ]
        },
        4: {
            date: '17. November 2025',
            dayName: 'Montag',
            region: 'Weinlande',
            cards: [
                {
                    title: "Babylonstoren",
                    image: "https://wetraveltheworld.de/wp-content/uploads/2017/01/bayblonstoren_erfahrungen_suedafrika.jpg",
                    meta: "Anfahrt: 1 h · Aufenthalt: halber Tag",
                    text: "Ein Paradies für alle Sinne! Wir tauchen ein in eines der schönsten Weingüter der Welt mit seinem legendären Garten. Im Restaurant Babel verwöhnen wir unseren Gaumen mit echter Farm-to-Table-Küche. Tischreservierung ist Pflicht – aber es lohnt sich! <a href='https://babylonstoren.com/tasting-cellar' target='_blank'>hier buchen</a>"
                },
                {
                    title: "Delaire Graff Estate",
                    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37654510.jpg?k=16687b3fe1efed0fef6f86010fb6e5b457e68cf73af0b75e70215b68867ce776&o=&hp=1",
                    meta: "Anfahrt: 25 min · Aufenthalt: 2-3 h",
                    text: "Luxus pur mit Aussicht! Wir gönnen uns das absolute Premium-Erlebnis mit atemberaubenden Panoramablicken über das Tal, Weltklasse-Weinen und einer beeindruckenden Kunstsammlung. Die exklusiven Verkostungen sind jeden Cent wert – wir werden diesen Ort nie vergessen!"
                }
            ]
        },
        5: {
            date: '18. November 2025',
            dayName: 'Dienstag',
            region: 'Hermanus',
            cards: [
                {
                    title: "Reise nach Hermanus",
                    image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                    meta: "Anfahrt: ca. 1,5 Stunden",
                    text: "Wir verlassen die Weinlande und fahren zur Walbeobachtung nach Hermanus. Wir bleiben 2 Nächte in Hermanus."
                },
                {
                    title: "Walbeobachtung vom Ufer",
                    image: "https://freedomdestinations.co.uk/wp-content/uploads/Hermanus-Whales.jpg",
                    meta: "Beste Zeit: 11-15 Uhr",
                    text: "Das absolute Highlight! Wir beobachten majestätische Südkaper direkt vom Land aus – einer der besten Orte weltweit dafür. Wenn der Whale Crier sein Horn bläst, wissen wir: Showtime! Grotto Beach und der Cliff Path bieten uns die perfekten Aussichtsplätze für dieses unvergessliche Naturschauspiel."
                },
                {
                    title: "Cliff Path Wanderung",
                    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b3/9e/41/hermanus-cliff-path-sudafrika.jpg?w=900&h=500&s=1",
                    meta: "Dauer: 2-4 h · Schwierigkeit: leicht-mittel",
                    text: "Wandern mit Wow-Faktor! Wir erobern den spektakulären 12 km langen Küstenpfad mit atemberaubenden Ausblicken und entdecken dabei die einzigartige Fynbos-Vegetation. Dank mehrerer Einstiegspunkte können wir flexibel planen. Früh starten lohnt sich – dann ist der Wind noch sanft!"
                }
            ]
        },
        6: {
            date: '19. November 2025',
            dayName: 'Mittwoch',
            region: 'Hermanus',
            cards: [
                {
                    title: "Hemel-en-Aarde Tal",
                    image: "https://www.wine-searcher.com/images/region/hemel-en-aarde-valley-7121-1-1.jpg",
                    meta: "Anfahrt: 15 min · Aufenthalt: halber Tag",
                    text: "Willkommen im 'Himmel auf Erden'! Wir schwelgen in Weltklasse-Weinen in diesem malerischen Tal. Die Pinot Noirs und Chardonnays hier sind absolute Spitzenklasse. Creation Wines und Hamilton Russell sind unsere absoluten Favoriten – hier entstehen wahre Geschmackswunder!"
                },
                {
                    title: "Grotto Beach",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Grotto_Beach_-_Hermanus.jpg/1200px-Grotto_Beach_-_Hermanus.jpg",
                    meta: "Anfahrt: 10 min · Aufenthalt: beliebig",
                    text: "Traumstrand mit Blaue-Flagge-Garantie! Wir genießen 18 km makellosen weißen Sandstrand – perfekt zum Schwimmen, Entspannen und natürlich für die Walbeobachtung. Mit Restaurants und Parkplätzen direkt vor Ort können wir hier problemlos den ganzen Tag verbringen."
                }
            ]
        },
        7: {
            date: '20. November 2025',
            dayName: 'Donnerstag',
            region: 'Garden Route',
            cards: [
                {
                    title: "Weiterreise nach Arniston",
                    image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                    meta: "Anfahrt: ca. 2:15 Stunden (ca. 160 km)",
                    text: "Wir verlassen Hermanus und fahren entlang der Küste und durch die Overberg-Region nach Arniston. Eine Zeitreise in ein authentisches Fischerdorf! Arniston (auch Waenhuiskrans) bezaubert mit seinem weißen Sandstrand, dem historischen Leuchtturm und traditionellen Fischerbooten. Perfekt für einen ruhigen Zwischenstopp zwischen Hermanus und Oudtshoorn."
                },
                {
                    title: "Gansbaai - Haikäfigtauchen",
                    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/58/89.jpg",
                    meta: "Start der Garden Route | Tagesausflug",
                    text: "Adrenalin pur! In Gansbaai erleben wir das berühmte Haikäfigtauchen und beobachten Weiße Haie hautnah. Ein unvergessliches Abenteuer für Mutige! Die Garden Route beginnt hier mit einem echten Highlight."
                },
                {
                    title: "Gansbaai - Dyer Island",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
                    meta: "Bootstour zur Insel der Seelöwen",
                    text: "Wir besuchen die berühmte Dyer Island, auch bekannt als 'Shark Alley'. Hier können wir Seelöwen, Pinguine und mit etwas Glück auch Weiße Haie beobachten. Eine einzigartige Meereswildnis!"
                }
            ]
        },
        8: {
            date: '21. November 2025',
            dayName: 'Freitag',
            region: 'Garden Route',
            cards: [
                {
                    title: "Kap Agulhas - Südspitze Afrikas",
                    image: "https://img.welt.de/img/reise/Fern/mobile205570597/1940310137-ci16x9-w1200/Africa-South-Africa-Western-Cape-Cape-Agulhas-shipwreck-2.jpg",
                    meta: "Von Arniston aus | Tagesausflug",
                    text: "Hier treffen Atlantik und Indischer Ozean aufeinander! Wir besuchen den südlichsten Punkt Afrikas und genießen den Blick vom Leuchtturm."
                },
                {
                    title: "Die Otter Beach Arniston",
                    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6m58jbQZCzyxGfhVoj6RNbVcgPFrhnTx3ZgCrfBdaPlijTt8EWvyEFhZDMgArVFHIXK8RtAxfHMD1LLXTfERFa9RWrY2QVSptEVYj-iPQpMsTWOoNEfwFh4EKtNQOspxlB5ET4OELDBM/s5184/20210308_091204200_iOS.jpg",
                    meta: "Direkt bei Arniston",
                    text: "Wunderschöner, ruhiger Strandabschnitt – ideal zum Baden, Spazieren und Entspannen."
                }
            ]
        },
        9: {
            date: '22. November 2025',
            dayName: 'Samstag',
            region: 'Garden Route',
            cards: [
                {
                    title: "Reise nach Oudtshoorn",
                    image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                    meta: "Anfahrt: ca. 4 Stunden (ca. 300 km)",
                    text: "Von Arniston geht es ins Landesinnere nach Oudtshoorn, der Straußenhauptstadt Südafrikas in der Kleinen Karoo."
                },
                {
                    title: "Witsand – Mündung des Breede River",
                    image: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00367-021-00686-8/MediaObjects/367_2021_686_Fig2_HTML.png",
                    meta: "Zwischenstopp auf dem Weg nach Oudtshoorn",
                    text: "Witsand ist bekannt für seine endlosen Sandstrände und die beeindruckende Mündung des Breede River. Perfekt für einen Spaziergang am Wasser oder eine kleine Pause mit Blick auf das Meer."
                },
                {
                    title: "Mossel Bay – Historischer Hafen & Strände",
                    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSJnrVv-Rf6d55rPOqz1DmrmPOs_0XP31f-RVDpW4o4C1eG6mqCypRRm3wD5g9u7NbfxZIcsL-mMFQ9kVQr-vasMgilulv7wNHPVydtxQ",
                    meta: "Zwischenstopp auf dem Weg nach Oudtshoorn",
                    text: "Mossel Bay bietet eine charmante Mischung aus Geschichte, Stränden und leckerem Seafood. Ein Spaziergang am Hafen oder ein Besuch des Dias Museums lohnen sich!"
                }
               
            ]
        },
        10: {
            date: '23. November 2025',
            dayName: 'Sonntag',
            region: 'Garden Route',
            cards: [
                {
                    title: "Oudtshoorn",
                    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop",
                    meta: "Erkundung der Straußenfarmen und Cango Caves",
                    text: "Weitere Erkundung der Straußenfarmen und der Cango Caves. Die Kleine Karoo bietet einzigartige Einblicke in die südafrikanische Kultur und Geschichte."
                },
                {
                    title: "Swartberg Pass – Spektakuläre Gebirgsstraße",
                    image: "https://www.kapstadt.de/images/stories/kapstadt-de/reisefuehrer/karoo/oudtshoorn/swartberg-pass.jpg",
                    meta: "Tagesausflug von Oudtshoorn",
                    text: "Eine der schönsten Passstraßen Südafrikas! Wir fahren über den Swartberg Pass nach Prince Albert und genießen atemberaubende Ausblicke, Serpentinen und die wilde Karoo-Landschaft."
                },
                {
                    title: "Prince Albert – Karoo-Charme",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
                    meta: "Abstecher nach Swartberg Pass",
                    text: "Das kleine Städtchen am Fuß des Swartberg Passes begeistert mit historischen Gebäuden, Galerien und echtem Karoo-Feeling. Perfekt für einen Lunch-Stop oder einen Bummel durch die Hauptstraße."
                }
            ]
        },
        11: {
            date: '24. November 2025',
            dayName: 'Montag',
            region: 'Garden Route',
            cards: [
                {
                    title: "Weiterreise nach Plettenberg Bay",
                    image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                    meta: "Anfahrt: ca. 2:15 Stunden (ca. 150 km)",
                    text: "Wir verlassen die Karoo und fahren über den Outeniqua Pass zurück an die Küste nach Plettenberg Bay – ein Paradies für Strandliebhaber und Naturliebhaber."
                },
                {
                    title: "Plettenberg Bay Robberg Nature Reserve",
                    image: "https://eu-images.contentstack.com/v3/assets/blte218090c2a6fb1e2/bltd0476eb7012a9555/65ee09194527a6040a6da3fe/suedafrika-garden-route-plettenberg-bay-robberg-luftaufnahme-g-622183942.jpg?auto=webp&width=1440&quality=45",
                    meta: "",
                    text: "Das 'Plett' - ein Küstenparadies! Wir wandern im Robberg Nature Reserve, beobachten Robben und genießen die traumhaften Strände. Die Lagune ist perfekt für Wassersport und die Restaurants servieren frische Meeresfrüchte."
                }
            ]
        },
        12: {
            date: '25. November 2025',
            dayName: 'Dienstag',
            region: 'Garden Route',
            cards: [
                
                {
                    title: "Tsitsikamma-Nationalpark",
                    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=500&auto=format&fit=crop",
                    meta: "Von Colchester aus | Tagesausflug",
                    text: "Abenteuer im Urwald! Wir wandern durch den Tsitsikamma Nationalpark, überqueren die berühmte Hängebrücke und genießen die wilde Küste."
                },
                {
                    title: "Knysna - Lagunenstadt",
                    image: "https://images.unsplash.com/photo-1509735732518-c7a828fc0ab8?w=500&auto=format&fit=crop",
                    meta: "Auf dem Weg nach Plett",
                    text: "Die berühmten Knysna Heads, Waterfront und Austern – Knysna ist ein Muss auf der Garden Route!"
                }
                
            ]
        },
        13: {
            date: '26. November 2025',
            dayName: 'Mittwoch',
            region: 'Garden Route',
            cards: [
                {
                    title: "Reise nach Colchester",
                    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop",
                    meta: "2 Nächte in Plettenberg Bay",
                    text: ""
                },  
                {
                    title: "Colchester",
                    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=500&auto=format&fit=crop",
                    meta: "",
                    text: ""
                },
                {
                    title: "Jeffreys Bay - Surfmekka",
                    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&auto=format&fit=crop",
                    meta: "Auf dem Weg nach Colchester",
                    text: "Legendäre Wellen und entspannte Surfer-Atmosphäre – ein Muss für Wassersportfans!"
                }
               
            ]
        },
        14: {
            date: '27. November 2025',
            dayName: 'Donnerstag',
            region: 'Garden Route',
            cards: [
                {
                    title: "Addo Elephant National Park",
                    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop",
                    meta: "Anfahrt: 10 Minuten · Aufenthalt: ganzer Tag",
                    text: "Das große Safari-Finale! Wir erleben die legendären 'Big 7' hautnah – über 550 Elefanten warten auf uns! Ob wir selbst fahren oder eine geführte Tour machen: Frühe Morgen- und späte Nachmittag-Safaris sind unser Geheimrezept für die spektakulärsten Tierbeobachtungen. Kameras bereithalten!"
                }
                
            ]
        },
        15: {
            date: '28. November 2025',
            dayName: 'Freitag',
            region: 'Addo',
            cards: [
                {
                    title: "Addo Elephant National Park",
                    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop",
                    meta: "Anfahrt: 10 Minuten · Aufenthalt: ganzer Tag",
                    text: "Gleich noch einmal die Elefanten beobachten."
                },
                {
                    title: "Port Elizabeth – Die freundliche Stadt",
                    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop",
                    meta: "",
                    text: "Port Elizabeth, auch Gqeberha genannt, ist bekannt für ihre Strände und die entspannte Atmosphäre. Ein kurzer Stopp an der Promenade oder ein Kaffee am Strand lohnen sich auf dem Weg zum Addo Elephant Park."
                }
            ]
        },
        16: {
            date: '30. November 2025',
            dayName: 'Sonntag',
            region: 'Addo & Abreise',
            cards: [
                {
                    title: "Weiterreise nach Colchester (Addo Gate)",
                    image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                    meta: "Anfahrt: ca. 3:30 Stunden (ca. 300 km)",
                    text: "Von Plettenberg Bay geht es entlang der berühmten Garden Route und durch den Tsitsikamma Nationalpark bis nach Colchester, dem südlichen Eingang zum Addo Elephant Park."
                },
                {
                    title: "Addo Elephant National Park",
                    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop",
                    meta: "Anfahrt: 10 Minuten · Aufenthalt: ganzer Tag",
                    text: "Gleich noch einmal die Elefanten beobachten."
                },
                {
                    title: "Port Elizabeth – Die freundliche Stadt",
                    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop",
                    meta: "",
                    text: "Port Elizabeth, auch Gqeberha genannt, ist bekannt für ihre Strände und die entspannte Atmosphäre. Ein kurzer Stopp an der Promenade oder ein Kaffee am Strand lohnen sich auf dem Weg zum Addo Elephant Park."
                }
            ]
        },
        17: {
            date: '30. November 2025',
            dayName: 'Sonntag',
            region: 'Addo & Abreise',
            cards: [
                // ggf. weitere Cards
            ]
        }
    },
    sections: [
        {
            id: 'kapstadt',
            title: 'Kapstadt: Metropole am Tafelberg (14. - 16. November)',
            intro: 'Die Reise beginnt in der "Mother City" Kapstadt. Wir erkunden die pulsierende Metropole, umgeben von majestätischer Natur, ausgiebig. Von der ikonischen V&A Waterfront bis zur Spitze des Tafelbergs bietet Kapstadt eine Fülle von Erlebnissen, die Kultur, Geschichte und atemberaubende Landschaften vereinen.',
            tabs: [
                {
                    name: 'Highlights',
                    icon: '🏞️',
                    content: [
                        { title: 'Tafelberg', description: 'Fahrt mit der Seilbahn für 360°-Panoramablicke. Ein Muss für jeden Besucher.' },
                        { title: 'V&A Waterfront', description: 'Lebhaftes Hafenviertel mit Shops, Restaurants und dem Two Oceans Aquarium.' },
                        { title: "Kap der Guten Hoffnung", description: 'Dramatisches Zusammentreffen zweier Ozeane und ein beeindruckendes Naturreservat.' },
                        { title: 'Boulders Beach', description: 'Beobachten Sie die berühmte Kolonie afrikanischer Pinguine aus nächster Nähe.' },
                        { title: 'Kirstenbosch Gärten', description: 'Weltberühmter botanischer Garten am Hang des Tafelbergs, ideal für Spaziergänge.' },
                        { title: 'Robben Island (Optional)', description: 'Ein historisch bedeutsamer Ort, der einen tiefen Einblick in die Geschichte Südafrikas gewährt.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: 'Silk Asian Fusion', description: 'Ideal für besondere Anlässe mit einem Tapas-Special.' },
                        { title: 'Veldt', description: 'Zelebriert die Aromen des südafrikanischen Veldt mit lokalen Zutaten.' },
                        { title: 'Cafe du Cap', description: 'Bietet ein "Harvest Table" Mittagsangebot im Pariser Stil.' },
                        { title: 'Lievita', description: 'Gilt als eine der besten neapolitanischen Pizzen der Stadt.' },
                        { title: 'Zuney', description: 'Kritikerliebling für den besten Burger Kapstadts.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'Gorgeous George', description: '9.2/10 | City Centre | Ab ca. 115€ | Designhotel mit Rooftop-Pool.', url: 'https://www.expedia.de/Gorgeous-George-Kapstadt.h33316049.Hotel-Details' },
                        { title: 'The Glen Boutique Hotel & Spa', description: '9.4/10 | Sea Point | Ab ca. 170€ | Boutique-Hotel mit exzellentem Spa.', url: 'https://www.expedia.de/The-Glen-Boutique-Hotel-Spa-Kapstadt.h6734193.Hotel-Details' },
                        { title: 'Sunsquare Cape Town City Bowl', description: '8.6/10 | City Centre | Ab ca. 125€ | Gutes Preis-Leistungs-Verhältnis und zentral gelegen.', url: 'https://www.expedia.de/Sunsquare-Cape-Town-City-Bowl-Kapstadt.h16259062.Hotel-Details' },
                        { title: 'Protea Hotel Waterfront', description: '7.9/10 | V&A Waterfront | Ab ca. 130€ | Direkt an der belebten Waterfront.', url: 'https://www.marriott.com/en-us/hotels/cptbr-protea-hotel-cape-town-waterfront-breakwater-lodge/overview/' },
                    ]
                }
            ]
        },
        {
            id: 'weinlande',
            title: 'Die Kap-Weinlande: Genuss & Landschaft (17. - 19. November)',
            intro: 'Kap-Weinlanden liegen nur eine kurze Fahrt von Kapstadt entfernt und bilden das Herz des südafrikanischen Weinanbaus. Wir entdecken historische Städte wie Stellenbosch und Franschhoek, die als Gourmet-Hauptstädte bekannt sind. Hier finden wir Empfehlungen für Weltklasse-Weingüter und "Farm-to-Fork"-Kulinarik, die unsere Sinne verzaubern werden, sowie Hotelempfehlungen für unsere Übernachtungen.',
            tabs: [
                {
                    name: 'Highlights',
                    icon: '🍇',
                    content: [
                        { title: 'Franschhoek Wine Tram', description: 'Eine Hop-on-Hop-off-Tour, die verschiedene Weingüter auf eine einzigartige und bequeme Weise verbindet.' },
                        { title: 'Stellenbosch Erkundung', description: 'Spazieren Sie durch die von Eichen gesäumten Straßen der zweitältesten Stadt Südafrikas.' },
                        { title: 'Delaire Graff Estate', description: 'Bekannt für atemberaubende Ausblicke, Kunst und exzellente Weine.' },
                        { title: 'Babylonstoren', description: 'Ein historisches Weingut mit einem berühmten Garten, Restaurant und Verkostungen.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: 'Babel at Babylonstoren', description: 'Berühmt für seine "Farm-to-Fork"-Philosophie mit saisonalen Menüs.' },
                        { title: "Leopard's Leap", description: 'Bietet saftige Braten und Wein zu einem hervorragenden Preis-Leistungs-Verhältnis.' },
                        { title: 'The Kraal at Joostenberg', description: 'Genießen Sie einen Slow-Farm-Lunch in einem idyllischen Innenhof.' },
                        { title: 'Haute Cabrière', description: 'Ein ikonisches Weingut in Franschhoek, perfekt für Weinproben mit Aussicht.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: "W-Collection L'Ermitage", description: '9.7/10 | Franschhoek | Ab ca. 210€ | Luxuriöse Villen mit Bergblick.', url: 'https://www.expedia.de/W-Collection-Franschhoek-LErmitage-Villas.h18967912.Hotel-Details' },
                        { title: 'Petit Ermitage', description: '9.9/10 | Franschhoek | Ab ca. 120€ | Außergewöhnlich bewertet und zentral.', url: 'https://www.expedia.de/Petit-Ermitage-Franschhoek.h18967909.Hotel-Details' },
                        { title: 'Cultivar Guest Lodge', description: '9.0/10 | Stellenbosch | Ab ca. 170€ | 4-Sterne-Lodge mit großem Pool.', url: 'https://www.expedia.de/Cultivar-Guest-Lodge-Stellenbosch.h1029280.Hotel-Details' },
                        { title: 'The Belmont', description: '9.3/10 | Franschhoek | Ab ca. 75€ | Hervorragendes Preis-Leistungs-Verhältnis.', url: 'https://www.expedia.de/The-Belmont-Franschhoek.h18967888.Hotel-Details' },
                    ]
                }
            ]
        },
         {
            id: 'hermanus',
            title: 'Hermanus: Wale, Wein & Küstenpfade',
            intro: 'Hermanus ist weltberühmt als eine der besten Destinationen für landbasierte Walbeobachtung. Wir kombinieren dieses einmalige Naturerlebnis mit Wanderungen entlang des malerischen Cliff Path und besuchen die preisgekrönten Weingüter des nahegelegenen Hemel-en-Aarde Tals, das für seinen Pinot Noir und Chardonnay bekannt ist. Hier finden wir Empfehlungen für unsere Übernachtung.',
            tabs: [
                {
                    name: 'Highlights',
                    icon: '🐋',
                    content: [
                        { title: 'Walbeobachtung', description: 'Beobachten Sie Südkaper von Juni bis Dezember direkt vom Land aus. Der Whale Crier verkündet Sichtungen.' },
                        { title: 'Cliff Path Wanderung', description: 'Ein 12 km langer Küstenpfad mit spektakulären Ausblicken und reicher Fynbos-Vegetation.' },
                        { title: 'Hemel-en-Aarde Tal', description: 'Bedeutet "Himmel auf Erden" und ist ein Muss für Weinliebhaber.' },
                        { title: 'Grotto Beach', description: 'Einer der schönsten Strände Südafrikas mit Blauer Flagge.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: 'Creation Wines', description: 'Hochgelobtes Weingut im Hemel-en-Aarde Tal, bekannt für seine Wein-Pairing-Erlebnisse.' },
                        { title: 'Burgundy Seafront Restaurant', description: 'Frische Meeresfrüchte mit "Front-Row-Seats" für die Walbeobachtung.' },
                        { title: 'Fisherman\'s Cottage', description: 'Authentische Meeresfrüchteküche in einem historischen Fischerhaus.' },
                        { title: 'Hamilton Russell Vineyards', description: 'Ein Pionier des Weinbaus in der Region, spezialisiert auf Pinot Noir und Chardonnay.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'The Marine Hermanus', description: '9.6/10 | Hermanus | Ab ca. 215€ | Legendäres 5-Sterne-Hotel mit Walblick.', url: 'https://www.expedia.de/The-Marine-Hermanus.h1907577.Hotel-Details' },
                        { title: 'Arniston Hotel', description: '8.8/10 | Arniston | Ab ca. 120€ | Charmantes Hotel direkt am Strand mit Restaurant.', url: 'https://www.expedia.de/Arniston-Hotel-Bredasdorp.h1907568.Hotel-Details' },
                        { title: 'Hlangana Lodge', description: '9.4/10 | Oudtshoorn | Ab ca. 50€ | Top-bewertete Lodge mit tollem Frühstück.', url: 'https://www.expedia.de/Hlangana-Lodge-Oudtshoorn.h1029272.Hotel-Details' },
                    ]
                }
            ]
        },
        {
            id: 'garden-route',
            title: 'Die Garden Route: Natur Pur & Abenteuer',
            intro: 'Die Garden Route, eine traumhafte Küstenstraße zwischen Kapstadt und Port Elizabeth, ist unser Zuhause für die nächsten Nächte. Wir starten in Gansbaai mit Haikäfigtauchen, übernachten in Arniston, Oudtshoorn, Wilderness, Plettenberg Bay und Colchester. Diese Region ist ein Mosaik aus dichten Wäldern, ruhigen Lagunen, langen Sandstränden und dramatischen Küsten. Von den ikonischen Knysna Heads über die faszinierende Tierwelt bei Plettenberg Bay bis zum abenteuerlichen Tsitsikamma Nationalpark – die Garden Route ist ein Spielplatz für Naturliebhaber und Abenteurer und zeigt uns die schönsten Facetten Südafrikas.',
             tabs: [
                {
                    name: 'Highlights',
                    icon: '🏞️',
                    content: [
                        { title: 'Gansbaai - Haikäfigtauchen', description: 'Erleben Sie das berühmte Haikäfigtauchen und beobachten Sie Weiße Haie hautnah in "Shark Alley".' },
                        { title: 'Dyer Island', description: 'Besuchen Sie die berühmte Insel der Seelöwen und Pinguine, auch bekannt als "Shark Alley".' },
                        { title: 'Witsand', description: 'Bekannt für die Mündung des Breede River, Sandstrände und als Hotspot für Kitesurfer und Wale.' },
                        { title: 'Mossel Bay', description: 'Historischer Hafen, schöne Strände und das berühmte Dias Museum.' },
                        { title: 'Swartberg Pass', description: 'Eine der spektakulärsten Passstraßen Südafrikas – ein Muss für Abenteurer und Fotografen.' },
                        { title: 'Prince Albert', description: 'Künstlerdorf am Swartberg Pass mit viel Karoo-Charme, Cafés und Galerien.' },
                        { title: 'Knysna Heads', description: 'Zwei majestätische Sandsteinklippen, die die Lagune vom Ozean trennen. Atemberaubende Aussichtspunkte.' },
                        { title: 'Robberg Nature Reserve', description: 'Wandern Sie auf einer Halbinsel mit dramatischen Klippen und einer großen Robbenkolonie.' },
                        { title: 'Tsitsikamma Nationalpark', description: 'Überqueren Sie die spektakuläre Hängebrücke über die Storms River Mündung.' },
                        { title: 'Bloukrans Bridge (Optional)', description: 'Der höchste kommerzielle Bungee-Sprung der Welt – oder ein Skywalk für die weniger Wagemutigen.' },
                        { title: 'Oudtshoorn & Cango Caves', description: 'Erkunden Sie die "Straußenhauptstadt" und das unterirdische Wunderland der Cango Caves in der Kleinen Karoo.' },
                        { title: 'Port Elizabeth', description: 'Die „freundliche Stadt" am Indischen Ozean – ideal für einen kurzen Stopp an der Promenade.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: '34 South (Knysna)', description: 'Lebhaftes Restaurant an der Waterfront mit Sushi, Austern und mehr.' },
                        { title: 'Nostalgie Restaurant (Oudtshoorn)', description: 'Spezialisiert auf traditionelle Karoo-Küche und Straußengerichte.' },
                        { title: 'Tsitsikhaya Restaurant (Storms River)', description: 'Unprätentiöse südafrikanische Gerichte in entspannter Atmosphäre.' },
                        { title: 'The Plettenberg', description: 'Gehobene Küche mit fantastischem Meerblick in Plettenberg Bay.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'The Marine Hermanus', description: '9.6/10 | Hermanus | Ab ca. 215€ | Legendäres 5-Sterne-Hotel mit Walblick.', url: 'https://www.expedia.de/The-Marine-Hermanus.h1907577.Hotel-Details' },
                        { title: 'Arniston Hotel', description: '8.8/10 | Arniston | Ab ca. 120€ | Charmantes Hotel direkt am Strand mit Restaurant.', url: 'https://www.expedia.de/Arniston-Hotel-Bredasdorp.h1907568.Hotel-Details' },
                        { title: 'Hlangana Lodge', description: '9.4/10 | Oudtshoorn | Ab ca. 50€ | Top-bewertete Lodge mit tollem Frühstück.', url: 'https://www.expedia.de/Hlangana-Lodge-Oudtshoorn.h1029272.Hotel-Details' },
                    ]
                }
            ]
        },
        {
            id: 'addo',
            title: 'Addo & Abreise: Das große Safari-Finale (28. - 30. November)',
            intro: 'Vom 28. bis 30. November erreicht die Reise ihren Höhepunkt im Addo Elephant National Park, einem malariafreien "Big 7"-Reservat. Hier verbringen wir zwei Nächte für unser großes Safari-Finale. Wir haben die Chance, Elefanten, Löwen und sogar Wale und Weiße Haie zu sehen. Nach einem unvergesslichen Safari-Erlebnis geht die Reise in Port Elizabeth zu Ende, von wo aus wir unseren Rückflug antreten. Hier finden wir Hotelempfehlungen für unsere Übernachtung.',
             tabs: [
                {
                    name: 'Highlights',
                    icon: '🐘',
                    content: [
                        { title: 'Addo Elephant National Park', description: 'Heimat von über 550 Elefanten und den "Big 7" (Löwe, Leopard, Nashorn, Elefant, Büffel, Wal, Weißer Hai).' },
                        { title: 'Pirschfahrten', description: 'Unternehmen Sie geführte Touren oder erkunden Sie den Park auf eigene Faust, um die Tierwelt zu entdecken.' },
                        { title: 'Jeffreys Bay (J-Bay)', description: 'Machen Sie einen Zwischenstopp in der weltberühmten Surf-Hauptstadt und probieren Sie selbst eine Surfstunde.' },
                        { title: 'St. Francis Bay', description: 'Besuchen Sie den malerischen Leuchtturm und die einzigartigen Kanäle.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: 'Nina\'s Real Food (J-Bay)', description: 'Vielfältige Speisekarte von gesunden Poké Bowls bis zu herzhaftem Straußensteak.' },
                        { title: 'Walskipper (J-Bay)', description: 'Genießen Sie Meeresfrüchte direkt am Strand mit den Füßen im Sand.' },
                        { title: 'Cattle Baron (Addo Park)', description: 'Ein zuverlässiges Steakhaus direkt im Nationalpark – perfekt nach einer langen Pirschfahrt.' },
                         { title: 'Ocean Basket (J-Bay)', description: 'Beliebte Kette für frische Meeresfrüchte zu erschwinglichen Preisen.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'Gorah Elephant Camp (Addo)', description: 'Exklusives 5-Sterne-Zeltcamp mit Blick auf ein Wasserloch im Park.', url: 'https://www.expedia.de/Gorah-Elephant-Camp-Addo-Elephant-National-Park.h1907567.Hotel-Details' },
                        { title: 'Addo Rest Camp (SANParks)', description: 'Verschiedene Unterkünfte von Chalets bis zu Safari-Zelten direkt im Park (gutes Preis-Leistungs-Verhältnis).', url: 'https://www.sanparks.org/parks/addo/accommodation/index.php' }, // SANParks official link
                        { title: 'CANAL GUEST HOUSE (St. Francis)', description: '9.4/10 | St. Francis Bay | Ab ca. 85€ | Luxuriöses B&B direkt am Wasser.', url: 'https://www.expedia.de/CANAL-GUEST-HOUSE-Waterfront-Luxury-B-B-St-Francis-Bay.h32128710.Hotel-Details' },
                        { title: 'Adrift Guesthouse (St. Francis)', description: '9.1/10 | St. Francis Bay | Ab ca. 60€ | Bietet Spa-Einrichtungen in Strandnähe.', url: 'https://www.expedia.de/Adrift-Guesthouse-St-Francis-Bay.h1907565.Hotel-Details' },
                    ]
                }
            ]
        }
    ]
};

function generateCardsHtmlFromSection(section) {
    // Cards werden nicht mehr angezeigt - nur Überschriften und Texte bleiben
    return '';
}

function generateMapHtmlFromSection(section) {
    // Nur für bestimmte Sektionen eine Karte anzeigen
    if (!section.id || section.id !== 'kapstadt') return '';

    return `
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-10">
            <h3 class="text-2xl font-bold text-center mb-4 text-gray-800">📍 Interaktive Detailkarte</h3>
            <p class="text-center text-gray-600 mb-6">Erkunde alle Highlights auf unserer detaillierten Google Maps Karte</p>
            <div class="relative w-full bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <iframe 
                    src="https://www.google.com/maps/d/embed?mid=1IpI82fry8o6NssQUWz3AVY_7rpKdtgM&ehbc=2E312F&noprof=1" 
                    width="100%" 
                    height="480"
                    style="border:0; border-radius: 12px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    class="w-full">
                </iframe>
            </div>
            <p class="text-center text-sm text-gray-500 mt-4">💡 Tipp: Klicke auf die Markierungen für detaillierte Informationen zu jedem Highlight</p>
        </div>
    `;
}



document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu on link click
    mobileMenu.addEventListener('click', (e) => {
        if(e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
        }
    });


    // Timeline Generation
    generateTimeline();
    generateMilestoneBreakouts();
    generateDaysOverview();

    const contentContainer = document.getElementById('content-sections');
    tripData.sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
        sectionElement.className = 'py-16 scroll-mt-20';

        let tabsHtml = '<div class="flex justify-center space-x-2 sm:space-x-4 mb-8 border-b pb-2">';
        section.tabs.forEach((tab, index) => {
            tabsHtml += `
                <button class="tab-button text-sm sm:text-base px-3 py-2 sm:px-4 rounded-t-lg border-b-2 border-transparent transition-colors ${index === 0 ? 'active' : ''}" data-target="${section.id}-${index}">
                    <span class="hidden sm:inline-block mr-2">${tab.icon}</span> ${tab.name}
                </button>`;
        });
        tabsHtml += '</div>';

        let tabContentsHtml = '';
        section.tabs.forEach((tab, index) => {
            tabContentsHtml += `<div id="${section.id}-${index}" class="tab-content ${index > 0 ? 'hidden' : ''}">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">`;
            tab.content.forEach(item => {
                // Check if item.url exists and wrap title in <a> tag
                const titleHtml = item.url 
                    ? `<a href="${item.url}" target="_blank" class="hover:underline text-[#C89F93]">${item.title}</a>`
                    : item.title;

                tabContentsHtml += `
                    <div class="section-card rounded-lg p-6 shadow-sm">
                        <h4 class="font-bold text-lg text-gray-800">${titleHtml}</h4>
                        <p class="text-gray-600 mt-1 text-sm">${item.description}</p>
                    </div>`;
            });
             // Add LLM restaurant suggestion button only to "Essen & Wein" tab
            if (tab.name === 'Essen & Wein') {
                tabContentsHtml += `
                    <div class="section-card rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center">
                        <h4 class="font-bold text-lg text-gray-800 mb-4">✨ Restaurantvorschlag des Tages</h4>
                        <button class="generate-restaurant-suggestion bg-[#C89F93] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors shadow-md" data-region="${section.title.split(':')[0]}">
                            Vorschlag generieren
                        </button>
                        <p class="restaurant-suggestion-output text-gray-700 mt-4 text-sm"></p>
                    </div>
                `;
            }
            tabContentsHtml += `</div></div>`;
        });

        sectionElement.innerHTML = `
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-2">${section.title}</h2>
                <p class="text-center text-gray-600 mb-10 max-w-3xl mx-auto">${section.intro}</p>
                ${generateCardsHtmlFromSection(section)}
                ${generateMapHtmlFromSection(section)}
                ${tabsHtml}
                ${tabContentsHtml}
            </div>
        `;
        contentContainer.appendChild(sectionElement);
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.closest('.container');
            parent.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            parent.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            document.getElementById(button.dataset.target).classList.remove('hidden');
        });
    });

    // Tab functionality for days overview (delegated event handling)
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('tab-button')) {
            const button = event.target;
            const parent = button.closest('div'); // Find the closest parent div
            if (parent) {
                parent.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Find all tab-content elements within the same parent
                const tabContents = parent.querySelectorAll('.tab-content');
                tabContents.forEach(content => content.classList.add('hidden'));
                
                const targetId = button.dataset.target;
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.classList.remove('hidden');
                }
            }
        }
    });


    // Chart.js implementation
    // Budget Pie Chart
    const budgetCtx = document.getElementById('budgetPieChart').getContext('2d');
    new Chart(budgetCtx, {
        type: 'doughnut',
        data: {
            labels: ['Hotels (€4800)', 'Essen (€2400)', 'Mietwagen & Benzin (€800)', 'Aktivitäten (€500)'],
            datasets: [{
                data: [4800, 2400, 800, 500],
                backgroundColor: ['#C89F93', '#E3CFC9', '#A9A9A9', '#F4EAE6'],
                borderColor: '#FDFBF8',
                borderWidth: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                           size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(context.parsed);
                            }
                            return label;
                        }
                    }
                }
            },
            cutout: '60%'
        }
    });

    // Hotel Bar Chart
    const hotelCtx = document.getElementById('hotelBarChart').getContext('2d');
    new Chart(hotelCtx, {
        type: 'bar',
        data: {
            labels: ['Kapstadt', 'Weinlande', 'Hermanus', 'Oudtshoorn', 'Garden Route', 'Addo/J-Bay'],
            datasets: [{
                label: 'Durchschnittliche Hotelkosten pro Nacht',
                data: [150, 140, 130, 70, 150, 90], // Estimated average prices
                backgroundColor: '#E3CFC9',
                borderColor: '#C89F93',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                     ticks: {
                        callback: function(value, index, values) {
                            return '€' + value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                     callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(context.parsed.x);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
    
     // Active Nav Link on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const allSections = document.querySelectorAll('main section[id]');

        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - header.offsetHeight - 20) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Route Map Canvas Drawing
    const routeMapCanvas = document.getElementById('routeMapCanvas');
    if (routeMapCanvas) {
        const ctx = routeMapCanvas.getContext('2d');

    const drawMap = () => {
        routeMapCanvas.width = routeMapCanvas.offsetWidth;
        routeMapCanvas.height = routeMapCanvas.offsetHeight;
        ctx.clearRect(0, 0, routeMapCanvas.width, routeMapCanvas.height);

        const width = routeMapCanvas.width;
        const height = routeMapCanvas.height;

        // Define abstract points for cities relative to canvas size
        const cityPoints = {
            'Kapstadt': { x: width * 0.1, y: height * 0.8, label: 'Kapstadt' },
            'Weinlande': { x: width * 0.25, y: height * 0.65, label: 'Weinlande' },
            'Hermanus': { x: width * 0.4, y: height * 0.8, label: 'Hermanus' },
            'Garden Route': { x: width * 0.65, y: height * 0.5, label: 'Garden Route' }, // Representing Knysna/Plett area
            'Addo & Abreise': { x: width * 0.85, y: height * 0.4, label: 'Addo & PE' }
        };

        // Draw simplified coastline (abstract) - a bit more detailed
        ctx.beginPath();
        ctx.moveTo(cityPoints['Kapstadt'].x * 0.8, cityPoints['Kapstadt'].y + height * 0.1);
        ctx.bezierCurveTo(width * 0.1, height * 0.9, width * 0.2, height * 0.95, width * 0.35, height * 0.85);
        ctx.bezierCurveTo(width * 0.5, height * 0.7, width * 0.7, height * 0.6, width * 0.8, height * 0.3);
        ctx.bezierCurveTo(width * 0.85, height * 0.25, width * 0.9, height * 0.2, width * 0.95, height * 0.2);
        ctx.strokeStyle = '#A9A9A9';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw route lines
        ctx.beginPath();
        ctx.strokeStyle = '#C89F93';
        ctx.lineWidth = 3;
        let firstPoint = true;
        tripData.route.forEach(stop => {
            const point = cityPoints[stop.name];
            if (point) {
                if (firstPoint) {
                    ctx.moveTo(point.x, point.y);
                    firstPoint = false;
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            }
        });
        ctx.stroke();

        // Draw city markers and labels
        ctx.fillStyle = '#3D3D3D';
        ctx.font = `${Math.max(10, width * 0.025)}px Inter`; // Responsive font size
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (const key in cityPoints) {
            const point = cityPoints[key];
            // Draw circle marker
            ctx.beginPath();
            ctx.arc(point.x, point.y, Math.max(5, width * 0.012), 0, Math.PI * 2); // Responsive marker size
            ctx.fillStyle = '#C89F93';
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw label with offset
            let labelY = point.y - (Math.max(15, width * 0.035)); 
            if (key === 'Addo & Abreise' || key === 'Garden Route') { // Adjust label for certain points
                labelY = point.y + (Math.max(15, width * 0.035));
            }
            ctx.fillText(point.label, point.x, labelY);
        }
    };

    // Initial draw and redraw on resize
    drawMap();
    window.addEventListener('resize', drawMap);

    // Google Maps Integration
    const openGoogleMapsButton = document.getElementById('openGoogleMaps');
    openGoogleMapsButton.addEventListener('click', () => {
        const origin = tripData.route[0].coords;
        const destination = 'Port Elizabeth, South Africa'; // Final destination
        
        const waypoints = tripData.route.slice(1, -1).map(stop => stop.coords).join('|');

        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    });


    // LLM Integration for Restaurant Suggestions
    const generateSuggestionButtons = document.querySelectorAll('.generate-restaurant-suggestion');
    generateSuggestionButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const region = event.target.dataset.region;
            const outputElement = event.target.nextElementSibling; // The <p> tag after the button
            outputElement.textContent = 'Einen Vorschlag generieren...';
            event.target.disabled = true;

            try {
                let prompt = `Ich mache einen Roadtrip durch Südafrika. Ich bin gerade in der Region ${region}. Ich liebe gutes Essen und trinke gerne Wein. Schlage mir ein Restaurant in dieser Region vor, das zu meinen Vorlieben passt. Nenne nur den Namen des Restaurants und eine kurze Begründung, warum es gut passt, in einem Satz.`;
                if (region.includes('Kapstadt')) {
                    prompt += ` Einige der bereits erwähnten Restaurants sind Silk Asian Fusion, Veldt, Cafe du Cap, Lievita, Zuney. Bitte schlage ein anderes vor.`;
                } else if (region.includes('Weinlande')) {
                     prompt += ` Einige der bereits erwähnten Restaurants sind Babel at Babylonstoren, Leopard's Leap, The Kraal at Joostenberg, Haute Cabrière. Bitte schlage ein anderes vor.`;
                } else if (region.includes('Hermanus')) {
                     prompt += ` Einige der bereits erwähnten Restaurants sind Creation Wines, Burgundy Seafront Restaurant, Fisherman's Cottage, Hamilton Russell Vineyards. Bitte schlage ein anderes vor.`;
                } else if (region.includes('Garden Route')) {
                     prompt += ` Einige der bereits erwähnten Restaurants sind 34 South, Nostalgie Restaurant, Tsitsikhaya Restaurant, The Plettenberg. Bitte schlage ein anderes vor.`;
                } else if (region.includes('Addo')) {
                     prompt += ` Einige der bereits erwähnten Restaurants sind Nina's Real Food, Walskipper, Cattle Baron, Ocean Basket. Bitte schlage ein anderes vor.`;
                }


                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                // API-Integration deaktiviert - kann später mit eigenem API-Key aktiviert werden
                outputElement.textContent = 'Diese Funktion benötigt einen gültigen API-Key für die KI-Integration. Bitte wenden Sie sich an den Entwickler.';
            } catch (error) {
                console.error('Fehler beim Generieren des Restaurantvorschlags:', error);
                outputElement.textContent = 'Fehler beim Generieren des Vorschlags.';
            } finally {
                event.target.disabled = false;
            }
        });
    });
    }

    // ===== TIMELINE FUNCTIONS =====
    function generateTimeline() {
        const timelineContainer = document.getElementById('timeline-points');
        if (!timelineContainer) return;

        // Generate timeline points for each day
        const totalDays = 17;
        const milestones = [
            { day: 1, name: 'Kapstadt', id: 'kapstadt', icon: '🏙️' },
            { day: 4, name: 'Weinlande', id: 'weinlande', icon: '🍷' },
            { day: 7, name: 'Hermanus', id: 'hermanus', icon: '🐋' },
            { day: 9, name: 'Garden Route', id: 'garden-route', icon: '🌿' },
            { day: 15, name: 'Addo', id: 'addo', icon: '🐘' }
        ];

        for (let day = 1; day <= totalDays; day++) {
            const pointElement = document.createElement('div');
            pointElement.className = 'flex flex-col items-center relative';
            
            // Check if this day is a milestone
            const milestone = milestones.find(m => m.day === day);
            
            if (milestone) {
                // Milestone point
                pointElement.innerHTML = `
                    <div class="w-6 h-6 bg-[#C89F93] border-4 border-white rounded-full shadow-lg transition-transform hover:scale-125 cursor-pointer" 
                         onclick="scrollToSection('${milestone.id}')"></div>
                    <div class="mt-2 text-center">
                        <div class="text-lg mb-1">${milestone.icon}</div>
                        <p class="text-xs font-semibold text-gray-700">${milestone.name}</p>
                        <p class="text-xs text-gray-500">Tag ${day}</p>
                    </div>
                `;
            } else {
                // Regular day point
                pointElement.innerHTML = `
                    <div class="w-3 h-3 bg-gray-400 border-2 border-white rounded-full shadow-sm"></div>
                    <p class="mt-1 text-xs text-gray-400">${day}</p>
                `;
            }
            
            timelineContainer.appendChild(pointElement);
        }
    }

    function generateMilestoneBreakouts() {
        const breakoutsContainer = document.getElementById('milestone-breakouts');
        if (!breakoutsContainer) return;

        const milestones = [
            {
                id: 'kapstadt',
                name: 'Kapstadt',
                icon: '🏙️',
                days: '14.-16. Nov.',
                description: 'Die "Mother City" mit Tafelberg, V&A Waterfront und Kap-Halbinsel',
                highlights: ['Tafelberg', 'V&A Waterfront', 'Kap der Guten Hoffnung', 'Kirstenbosch Gärten']
            },
            {
                id: 'weinlande',
                name: 'Weinlande',
                icon: '🍷',
                days: '17.-19. Nov.',
                description: 'Weinregion mit Stellenbosch, Franschhoek und Weltklasse-Weingütern',
                highlights: ['Franschhoek Wine Tram', 'Stellenbosch', 'Babylonstoren', 'Delaire Graff']
            },
            {
                id: 'hermanus',
                name: 'Hermanus',
                icon: '🐋',
                days: '20.-21. Nov.',
                description: 'Walbeobachtung und Küstenpfade am Indischen Ozean',
                highlights: ['Walbeobachtung', 'Cliff Path', 'Hemel-en-Aarde Tal', 'Grotto Beach']
            },
            {
                id: 'garden-route',
                name: 'Garden Route',
                icon: '🌿',
                days: '22.-28. Nov.',
                description: 'Naturwunder von Hermanus bis Colchester mit 5 Übernachtungsstopps',
                highlights: ['Hermanus', 'Arniston', 'Oudtshoorn', 'Plettenberg Bay', 'Colchester']
            },
            {
                id: 'addo',
                name: 'Addo & Abreise',
                icon: '🐘',
                days: '29.-30. Nov.',
                description: 'Safari im Addo Elephant Park und Abschied von Südafrika',
                highlights: ['Addo Elephant Park', 'Jeffreys Bay', 'Port Elizabeth']
            }
        ];

        milestones.forEach(milestone => {
            const breakoutElement = document.createElement('div');
            breakoutElement.className = 'bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer';
            breakoutElement.onclick = () => scrollToSection(milestone.id);
            
            breakoutElement.innerHTML = `
                <div class="flex items-center mb-4">
                    <div class="text-3xl mr-3">${milestone.icon}</div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-800">${milestone.name}</h3>
                        <p class="text-sm text-[#C89F93] font-semibold">${milestone.days}</p>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-4">${milestone.description}</p>
                <div class="space-y-1">
                    ${milestone.highlights.map(highlight => `
                        <div class="flex items-center text-xs text-gray-500">
                            <div class="w-1 h-1 bg-[#C89F93] rounded-full mr-2"></div>
                            ${highlight}
                        </div>
                    `).join('')}
                </div>
            `;
            
            breakoutsContainer.appendChild(breakoutElement);
        });
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // ===== TAGESÜBERSICHT FUNKTION =====
    function generateDaysOverview() {
        const daysContainer = document.getElementById('days-sections');
        if (!daysContainer) return;

        // Definiere die Regionen mit ihren zugehörigen Tagen
        const regionDays = [
            {
                region: 'Kapstadt',
                icon: '🏙️',
                days: [1, 2],
                sectionId: 'kapstadt'
            },
            {
                region: 'Weinlande',
                icon: '🍷',
                days: [3, 4],
                sectionId: 'weinlande'
            },
            {
                region: 'Hermanus',
                icon: '🐋',
                days: [5, 6],
                sectionId: 'hermanus'
            },
            {
                region: 'Garden Route',
                icon: '🌿',
                days: [7, 8, 9, 10, 11, 12, 13, 14, 15],
                sectionId: 'garden-route'
            },
            {
                region: 'Addo & Abreise',
                icon: '🐘',
                days: [16, 17],
                sectionId: 'addo'
            }
        ];

        regionDays.forEach(regionData => {
            // Finde die entsprechende Sektion für das intro
            const section = tripData.sections.find(s => s.id === regionData.sectionId);
            const introText = section ? section.intro : '';

            // Erstelle Regions-Header mit Tabs
            const regionHeader = document.createElement('div');
            regionHeader.className = 'mb-8';
            
            // Erstelle Tabs HTML
            let tabsHtml = '<div class="flex justify-center space-x-2 sm:space-x-4 mb-8 border-b pb-2">';
            section.tabs.forEach((tab, index) => {
                tabsHtml += `
                    <button class="tab-button text-sm sm:text-base px-3 py-2 sm:px-4 rounded-t-lg border-b-2 border-transparent transition-colors ${index === 0 ? 'active' : ''}" data-target="${regionData.sectionId}-days-${index}">
                        <span class="hidden sm:inline-block mr-2">${tab.icon}</span> ${tab.name}
                    </button>`;
            });
            tabsHtml += '</div>';

            // Erstelle Tab Contents HTML
            let tabContentsHtml = '';
            section.tabs.forEach((tab, index) => {
                tabContentsHtml += `<div id="${regionData.sectionId}-days-${index}" class="tab-content ${index > 0 ? 'hidden' : ''}">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">`;
                tab.content.forEach(item => {
                    // Check if item.url exists and wrap title in <a> tag
                    const titleHtml = item.url 
                        ? `<a href="${item.url}" target="_blank" class="hover:underline text-[#C89F93]">${item.title}</a>`
                        : item.title;

                    tabContentsHtml += `
                        <div class="section-card rounded-lg p-6 shadow-sm">
                            <h4 class="font-bold text-lg text-gray-800">${titleHtml}</h4>
                            <p class="text-gray-600 mt-1 text-sm">${item.description}</p>
                        </div>`;
                });
                // Add LLM restaurant suggestion button only to "Essen & Wein" tab
                if (tab.name === 'Essen & Wein') {
                    tabContentsHtml += `
                        <div class="section-card rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center">
                            <h4 class="font-bold text-lg text-gray-800 mb-4">✨ Restaurantvorschlag des Tages</h4>
                            <button class="generate-restaurant-suggestion bg-[#C89F93] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors shadow-md" data-region="${regionData.region}">
                                Vorschlag generieren
                            </button>
                            <p class="restaurant-suggestion-output text-gray-700 mt-4 text-sm"></p>
                        </div>
                    `;
                }
                tabContentsHtml += `</div></div>`;
            });

            regionHeader.innerHTML = `
                <div class="text-center mb-8">
                    <div class="text-4xl mb-4">${regionData.icon}</div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${regionData.region}</h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">${introText}</p>
                </div>
                ${tabsHtml}
                ${tabContentsHtml}
            `;
            daysContainer.appendChild(regionHeader);

            // Erstelle Tagessektionen für diese Region
            regionData.days.forEach(dayNumber => {
                const dayData = tripData.tripByDays[dayNumber];
                if (!dayData) return;

                const daySection = document.createElement('section');
                daySection.id = `day-${dayNumber}`;
                daySection.className = 'py-8 bg-white rounded-xl shadow-sm mb-6';

                const cardsHtml = dayData.cards.map(card => `
                    <div class="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <img src="${card.image}" alt="${card.title}" class="w-full h-48 object-cover rounded-lg mb-4" />
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl font-bold text-gray-800">${card.title}</h3>
                            <span class="bg-[#C89F93] text-white px-3 py-1 rounded-full text-xs font-semibold">${dayData.region}</span>
                        </div>
                        <div class="text-sm text-gray-500 mb-2">${card.meta}</div>
                        <p class="text-gray-700 flex-grow">${card.text}</p>
                    </div>
                `).join('');

                // Bestimme die Grid-Klassen basierend auf der Anzahl der Cards
                let gridClasses = 'grid gap-6';
                if (dayData.cards.length === 1) {
                    gridClasses += ' grid-cols-1 max-w-md mx-auto';
                } else if (dayData.cards.length === 2) {
                    gridClasses += ' grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto';
                } else {
                    gridClasses += ' md:grid-cols-2 lg:grid-cols-3';
                }

                daySection.innerHTML = `
                    <div class="container mx-auto px-6">
                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">Tag ${dayNumber}: ${dayData.dayName}, ${dayData.date}</h3>
                            <div class="w-16 h-1 bg-[#C89F93] mx-auto"></div>
                        </div>
                        <div class="${gridClasses}">
                            ${cardsHtml}
                        </div>
                    </div>
                `;

                daysContainer.appendChild(daySection);
            });

            // Füge einen Abstand zwischen den Regionen hinzu
            if (regionData !== regionDays[regionDays.length - 1]) {
                const spacer = document.createElement('div');
                spacer.className = 'py-8';
                daysContainer.appendChild(spacer);
            }
        });
    }

});