// Südafrika Roadtrip - Daten und Funktionen
// Ausgelagert für bessere Code-Organisation

const tripData = {
    // Gesamtkosten der Reise
    totalCosts: {
        flights: {
            outbound: { description: 'Hinflug Frankfurt → Kapstadt', cost: 1500, details: '13.11. 22:00 → 14.11. 10:45' },
            return: { description: 'Rückflug Kapstadt → Frankfurt', cost: 1500, details: '30.11. 18:15 → 01.12. 05:45' }
        },
        transport: {
            carRental: { description: 'Mietwagen 17 Tage', cost: 600, details: 'SUV mit Vollkasko' },
            fuel: { description: 'Benzin ~2500km', cost: 250, details: 'Geschätzt für gesamte Route' }
        },
        accommodation: {
            // Wird dynamisch aus Stern-Hotels berechnet
        },
        food: {
            restaurants: { description: 'Restaurants & Fine Dining', cost: 1700, details: 'Ca. €100/Tag für 2 Personen' }
        },
        activities: {
            tafelberg: { description: 'Hop-On & Tafelberg Seilbahn', cost: 70, details: '2x €35' },
            haikaefig: { description: 'Haikäfigtauchen Gansbaai', cost: 280, details: '2x €140' },
            wine: { description: 'Weinverkostungen', cost: 300, details: 'Diverse Weingüter' },
            nationalparks: { description: 'Nationalpark Eintritte', cost: 150, details: 'Addo, Tsitsikamma, etc.' },
            misc: { description: 'Sonstige Aktivitäten', cost: 200, details: 'Museen, Touren, etc.' }
        }
    },
    
    // Neue Struktur: Cards nach Tagen organisiert
    sections: [
        {
            id: 'kapstadt',
            title: 'Kapstadt: Metropole am Tafelberg (14. - 16. November)',
            name: 'Kapstadt',
            icon: '🏙️',
            intro: 'Die Reise beginnt in der "Mother City" Kapstadt. Wir erkunden die pulsierende Metropole, umgeben von majestätischer Natur, ausgiebig. Von der ikonischen V&A Waterfront bis zur Spitze des Tafelbergs bietet Kapstadt eine Fülle von Erlebnissen, die Kultur, Geschichte und atemberaubende Landschaften vereinen.',
            tabs: [
                {
                    name: 'Highlights',
                    icon: '🏞️',
                    content: [
                        { title: 'Tafelberg', description: 'Fahrt mit der Seilbahn für 360°-Panoramablicke. Ein Muss für jeden Besucher.', starred: false },
                        { title: 'V&A Waterfront', description: 'Lebhaftes Hafenviertel mit Shops, Restaurants und dem Two Oceans Aquarium.', starred: true },
                        { title: "Kap der Guten Hoffnung", description: 'Dramatisches Zusammentreffen zweier Ozeane und ein beeindruckendes Naturreservat.',  },
                        { title: 'Boulders Beach', description: 'Beobachten Sie die berühmte Kolonie afrikanischer Pinguine aus nächster Nähe.', starred: false },
                        { title: 'Kirstenbosch Gärten', description: 'Weltberühmter botanischer Garten am Hang des Tafelbergs, ideal für Spaziergänge.',  },
                        { title: 'Robben Island (Optional)', description: 'Ein historisch bedeutsamer Ort, der einen tiefen Einblick in die Geschichte Südafrikas gewährt.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: 'Silk Asian Fusion', description: 'Ideal für besondere Anlässe mit einem Tapas-Special.', starred: false },
                        { title: 'Veldt', description: 'Zelebriert die Aromen des südafrikanischen Veldt mit lokalen Zutaten.', starred: false },
                        { title: 'Cafe du Cap', description: 'Bietet ein "Harvest Table" Mittagsangebot im Pariser Stil.',  },
                        { title: 'Lievita', description: 'Gilt als eine der besten neapolitanischen Pizzen der Stadt.',  },
                        { title: 'Zuney', description: 'Kritikerliebling für den besten Burger Kapstadts.', starred: false },
                        { title: 'Foodbarn (Nordhoek)', description: 'Tipp: Mehrfach ausgezeichneter Koch in Nordhoek.' },
                        { title: 'Dunes - Beach Restaurant (Hout Bay)', description: 'Tipp: Durchschnittliches Essen, aber ein Muss für den Sonnenuntergang.' },
                        { title: 'Starlings Cafe (Claremont)', description: 'Tipp: Verstecktes Juwel, entspannter Garten, tolles Frühstück/Mittagessen.' },
                        { title: 'Café Orca (Melkbowstrand)', description: 'Tipp: Holzhaus, beste Meeresfrüchte, einfach, rustikal.' },
                        { title: 'Sirocco (Kalk Bay)', description: 'Tipp: Loungeähnliche offene Bar.' },
                        { title: 'Kalkys (Kalk Bay)', description: 'Tipp: Berühmte Fischbude.' },
                        { title: 'Olympia Café & Deli (Kalk Bay)', description: 'Tipp: Trendy, rustikal, bei Einheimischen beliebt.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'Gorgeous George', description: '9.2/10 | City Centre |  Designhotel mit Rooftop-Pool.', starred: false },
                        { title: 'The Glen Boutique Hotel & Spa', description: '9.4/10 | Sea Point |  Boutique-Hotel mit exzellentem Spa.', starred: false },
                        { title: 'Sunsquare Cape Town City Bowl', description: '8.6/10 | City Centre |  Gutes Preis-Leistungs-Verhältnis und zentral gelegen.' },
                        { title: 'Protea Hotel Waterfront', description: '7.9/10 | V&A Waterfront |  Direkt an der belebten Waterfront.', url: 'https://www.marriott.com/en-us/hotels/cptbr-protea-hotel-cape-town-waterfront-breakwater-lodge/overview/' },
                        { title: 'Breakwater Lodge', description: 'Tipp: 8.2/10 | V&A Waterfront | 823€ | Historisches 3-Sterne Hotel am Wasser mit einzigartigem Charme.', url: 'https://www.booking.com/hotel/za/breakwater-lodge.de.html?label=v3.cmcohng3r6xuh08783wf67hhw&aid=1607597&ucfs=1&checkin=2025-11-14&checkout=2025-11-18&dest_id=-1217214&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=ht_id%3D204&srpvid=252c351c506403e5&srepoch=1751614525&matching_block_id=1516310_369394327_0_42_0&atlas_src=sr_iw_title', starred: true, price: 330},
                    ]
                }
            ],
            Days: {
                1: {
                    date: '14. November 2025',
                    dayName: 'Freitag',
                    region: 'Kapstadt',
                    cards: [
                        {
                            title: "Ankunft in Cape Town",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoDU8-itSVFkznLRu0fPhGCuT8N6GCQ_FEw&s",
                            meta: "Ankunft und Anreise zum Hotel in Green Point",
                            text: "Wir starten am Donnerstag um 22 Uhr in Frankfurt und landen am Freitag um 11 Uhr in Kapstadt, holen uns unseren Mietwagen, dann geht es zu unserem zauberhaften Hotel. Wir verbringen 3 Nächte in Kapstadt."
                        },
                        {
                            title: "Hop-On-Hop-Off",
                            image: "https://www.hop-on-hop-off-bus.de/wp-content/uploads/2020/12/kapstadt-city-sightseeing.avif",
                            meta: "Rote Linie 90 Minuten",
                            text: "Die rote Linie ist die wichtigste Route. Sie führt durch große Teile der Innenstadt sowie zum Tafelberg, nach Camps Bay, Seapoint, Green Point und zur V&A Waterfront. <a href='https://www.hop-on-hop-off-bus.de/kapstadt-city-sightseeing/' target='_blank' class='underline'>Kombiticket Tafelberg</a>"
                        },
                        {
                            title: "Tafelberg",
                            image: "https://www.geh-mal-reisen.de/wp-content/uploads/kapstadt-sehenswuerdigkeiten-highlights-tafelberg-aussicht.jpg",
                            meta: "13 Uhr Anfahrt: 30 min · Aufenthalt: 90 min",
                            text: "Das absolute Must-Do in Kapstadt! Wir nehmen die Seilbahn hoch zum legendären Tafelberg und werden mit einem grandiosen 360°-Rundumblick über Stadt, Küste und Berge belohnt. Tickets buchen wir vorab online – dieser Ausblick ist jeden Cent wert!",
                            starred: true,
                            price: "€35"
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
                        },
                        {
                            title: "Tandem-Gleitschirm-Sprung",
                            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/e8/89/81/an-exceptional-day-for.jpg?w=500&h=500&s=1",
                            meta: "Vom Lions Head oder Signal Hill | Optional",
                            text: "Tipp: Spektakulärer Tandem-Gleitschirm-Sprung mit atemberaubenden Ausblicken über Kapstadt und die Küste! Ein unvergessliches Erlebnis für Abenteuerlustige."
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
                        },
                        {
                            title: "Bay Harbor Market (Hout Bay)",
                            image: "https://www.cometocapetown.com/wp-content/uploads/2019/05/Ultimate-Guide-to-Bay-Harbour-Market-Cape-Town.jpg",
                            meta: "Fr-So nachmittags | Optional",
                            text: "Tipp: Markt mit Live-Musik, leckerem Essen und Souvenirs. Perfekt um mit Einheimischen ins Gespräch zu kommen!"
                        }
                    ]
                }
            }
        },
        {
            id: 'weinlande',
            title: 'Die Kap-Weinlande: Genuss & Landschaft (17. - 19. November)',
            name: 'Weinlande',
            icon: '🍷',
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
                        { title: 'Noblehill Wine Estate', description: 'Tipp: Mit Restaurant Cose, sehr empfehlenswert.' },
                        { title: 'Wilderer Distillery & Ristorante Pappa Grappa', description: 'Tipp: Rustikal, toller Gin.' },
                        { title: 'Spice Route Wines', description: 'Tipp: Mit Pizzeria/italienischem Essen auf dem Rasen.' },
                        { title: 'Casa Mori (Stellenbosch)', description: 'Tipp: Frühstück mit Marilyn in der Küche.' },
                        { title: 'Kunjani Wines (Stellenbosch)', description: 'Tipp: Restaurant mit tollem Ambiente und Aussicht.' },
                        { title: 'Schoon Cafe and Eatery (Stellenbosch)', description: 'Tipp: Kaffeebar und Bäckerei, tolles Brot, Croissants, Kuchen.' },
                        { title: 'Waterkloof (Somerset West)', description: 'Tipp: Exzellentes Essen, erstaunliche Architektur und Aussicht.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: "W-Collection L'Ermitage", description: '9.7/10 | Franschhoek |  Luxuriöse Villen mit Bergblick.' },
                        { title: 'Petit Ermitage', description: '9.9/10 | Franschhoek |  Außergewöhnlich bewertet und zentral.' },
                        { title: 'Cultivar Guest Lodge', description: '9.0/10 | Stellenbosch |  4-Sterne-Lodge mit großem Pool.' },
                        { title: 'The Belmont', description: '9.3/10 | Franschhoek |  Hervorragendes Preis-Leistungs-Verhältnis.' },
                        { title: '<a href="https://book.nightsbridge.com/15800?_ga=2.256709315.935787942.1751700526-2028448925.1751610940" target=_blank class="underline">Grande Provence Wine Estate (Franschhoek)</a> ', description: 'Tipp: Weingut mit Unterkunft.' , starred: true, price: 890},
                        { title: 'Avondrood Guesthouse (Franschhoek)', description: 'Tipp: Gemütliche Guesthouse-Atmosphäre.' },
                        { title: 'Maison Cabriere (Franschhoek)', description: 'Tipp: Weingut mit stilvollen Zimmern.' },
                        { title: 'Cape Vue Country House (Franschhoek)', description: 'Tipp: Country House mit schöner Aussicht.' },
                        { title: 'The Beautiful South Guesthouse (Stellenbosch)', description: 'Tipp: Charmante Guesthouse in zentraler Lage.' },
                        { title: 'Casa Mori (Stellenbosch)', description: 'Tipp: Ein bisschen Retro, via Airbnb.' },
                        { title: 'De Zalze Lodge (Stellenbosch)', description: 'Tipp: Lodge mit Golfplatz.' },
                        { title: 'Kunjani Wines (Stellenbosch)', description: 'Tipp: Mit Cottages und Blick.' },
                    ]
                }
            ],
            Days: {
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
                            text: "Ein Paradies für alle Sinne! Wir tauchen ein in eines der schönsten Weingüter der Welt mit seinem legendären Garten. Im Restaurant Babel verwöhnen wir unseren Gaumen mit echter Farm-to-Table-Küche. Tischreservierung ist Pflicht – aber es lohnt sich! <a href='https://babylonstoren.com/tasting-cellar' target='_blank' class='underline'>hier buchen</a>"
                        },
                        {
                            title: "Delaire Graff Estate",
                            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37654510.jpg?k=16687b3fe1efed0fef6f86010fb6e5b457e68cf73af0b75e70215b68867ce776&o=&hp=1",
                            meta: "Anfahrt: 25 min · Aufenthalt: 2-3 h",
                            text: "Luxus pur mit Aussicht! Wir gönnen uns das absolute Premium-Erlebnis mit atemberaubenden Panoramablicken über das Tal, Weltklasse-Weinen und einer beeindruckenden Kunstsammlung. Die exklusiven Verkostungen sind jeden Cent wert – wir werden diesen Ort nie vergessen!"
                        }
                    ]
                }
            }
        },
         {
            id: 'hermanus',
            title: 'Hermanus: Wale, Wein & Küstenpfade',
            name: 'Hermanus',
            icon: '🐋',
            intro: 'Hermanus ist weltberühmt als eine der besten Destinationen für landbasierte Walbeobachtung. Wir kombinieren dieses einmalige Naturerlebnis mit Wanderungen entlang des malerischen Cliff Path und besuchen die preisgekrönten Weingüter des nahegelegenen Hemel-en-Aarde Tals, das für seinen Pinot Noir und Chardonnay bekannt ist.',
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
                        { title: 'Bientang\'s Cave', description: 'Tipp: Restaurant direkt an den Klippen, chillig.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'The Marine Hermanus', description: '9.6/10 | Hermanus |  Legendäres 5-Sterne-Hotel mit Walblick.' },
                        { title: 'Esplanade Hotel', description: 'Hermanus | Charmes Hotel im Herzen von Hermanus mit toller Lage.', url: 'https://www.booking.com/hotel/za/esplanade-hermanus.de.html?aid=1607597&label=v3.cmcohng3r6xuh08783wf67hhw&sid=a3308e7bedd7d9bad072d19a351258bc&all_sr_blocks=1065716017_388139523_2_0_0&checkin=2025-11-18&checkout=2025-11-20&dest_id=-1236784&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=15&highlighted_blocks=1065716017_388139523_2_0_0&hpos=15&matching_block_id=1065716017_388139523_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1065716017_388139523_2_0_0__639000&srepoch=1751615945&srpvid=ca8437f52de5062d&type=total&ucfs=1&activeTab=main', starred: true, price: 385 },
                        
                       
                    ]
                }
            ],
            Days: {
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
                        },
                        {
                            title: "Stanford - Verstecktes Juwel",
                            image: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blteb0398644c893caf/61c17d31c52c5b292ce23dc9/US_Stanford_ZA_Header.jpg",
                            meta: "Zwischen Hermanus und Gansbaai | Tagesausflug",
                            text: "Tipp: Kleiner Ort abseits der Tourismuspfade. Superschöne restaurierte Straßen und Häuser mit kleinen Restaurants und Cafés. Eine Flussfahrt auf dem River zum Sonnenuntergang ist ganz besonders."
                        }
                    ]
                }
            }
        },
        {
            id: 'garden-route',
            title: 'Die Garden Route: Natur Pur & Abenteuer',
            name: 'Garden Route',
            icon: '🌿',
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
                        { title: 'Stanford - Verstecktes Juwel', description: 'Tipp: Kleiner Ort abseits der Tourismuspfade. Superschöne restaurierte Straßen und Häuser mit kleinen Restaurants und Cafés. Eine Flussfahrt auf dem River zum Sonnenuntergang ist ganz besonders.' },
                        { title: 'Elim - Fahrt ans Ende der Welt', description: 'Tipp: Das gesamte Dorf besteht aus bunt angestrichenen strohgedeckten Häusern, die alle unter Denkmalschutz stehen. Ein besonders stimmungsvoller Ort - die Fahrt dorthin ist schon ein Erlebnis.' },
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: '<a href="https://www.kaai4.co.za/" target="_blank" class="underline">Kaai 4</a>', description: 'Ein Muss für alle, die echte südafrikanische Braai-Kultur direkt am Meer erleben wollen – mit rauchigem Grillduft in der Luft, fangfrischem Hake und fluffigem „roosterkoek" direkt vom Feuer!', starred: true },
                        { title: '34 South (Knysna)', description: 'Lebhaftes Restaurant an der Waterfront mit Sushi, Austern und mehr.' },
                        { title: 'Nostalgie Restaurant (Oudtshoorn)', description: 'Spezialisiert auf traditionelle Karoo-Küche und Straußengerichte.' },
                        { title: 'Tsitsikhaya Restaurant (Storms River)', description: 'Unprätentiöse südafrikanische Gerichte in entspannter Atmosphäre.' },
                        { title: 'The Plettenberg', description: 'Gehobene Küche mit fantastischem Meerblick in Plettenberg Bay.' },
                        { title: 'Restaurant Cornuti (Knysna)', description: 'Tipp: Tolle Lage für Kaffee.' },
                        { title: 'East Head Café (Knysna)', description: 'Tipp: Direkt an den Heads, moderate Preise.' },
                        { title: 'The Olive Tree (Knysna)', description: 'Tipp: Tolles Essen, freundlicher Service.' },
                        { title: 'Firefly Eating House (Knysna)', description: 'Tipp: Einzigartiges Geschmackserlebnis.' },
                        { title: 'Restaurant Jemima\'s (Oudtshoorn)', description: 'Tipp: Gutes Essen, nette Atmosphäre.' },
                        { title: 'Restaurant La Plume (Oudtshoorn)', description: 'Tipp: Harmonische Atmosphäre.' },
                        { title: 'Galery Café (Prince Albert)', description: 'Tipp: Essen und Kunst kombiniert.' },
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'Arniston Hotel', description: '8.8/10 | Arniston |  Charmantes Hotel direkt am Strand mit Restaurant.', starred: true, price:207 },
                        
                        { title: 'Hlangana Lodge', description: '9.4/10 | Oudtshoorn |  Top-bewertete Lodge mit tollem Frühstück.', starred: true, price:180 },
                        { title: 'Archrock Resort (Keurboomstrand)', description: 'Tipp: Resort in Keurboomstrand bei Plettenberg Bay.' },
                        { title: 'Turbine Hotel und Spa (Knysna)', description: 'Tipp: In einem ehemaligen Kraftwerk gelegen.' },
                        { title: 'DeZeekoe Guestfarm (Oudtshoorn)', description: 'Tipp: Authentische Guestfarm-Erfahrung.' },
                        { title: 'The Pictures Guesthouse (Oudtshoorn)', description: 'Tipp: Sehr sauber.' },
                        { title: 'African Relish (Prince Albert)', description: 'Tipp: Kochschule mit kleinen Unterkünften.' },
                        { title: 'Deurdrift Cottage (Prince Albert)', description: 'Tipp: Gemütliches Cottage.' },
                        { title: 'The Bungalow Plettenberg', description: 'Der perfekte Ort zum Abschalten und Genießen. Die Lage ist einfach unschlagbar – direkt am Strand', starred: true, price: 585 }
                    ]
                }
            ],
            Days: {
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
                            text: "Adrenalin pur! In Gansbaai erleben wir das berühmte Haikäfigtauchen und beobachten Weiße Haie hautnah. Ein unvergessliches Abenteuer für Mutige! Die Garden Route beginnt hier mit einem echten Highlight.", starred: false
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
                        },
                        {
                            title: "Elim - Fahrt ans Ende der Welt",
                            image: "https://capeagulhas.gov.za/wp-content/uploads/2022/10/Elim.jpg",
                            meta: "Hinterland der Wal-Küste | Tagesausflug",
                            text: "Tipp: Das gesamte Dorf besteht aus bunt angestrichenen strohgedeckten Häusern, die alle unter Denkmalschutz stehen. Ein besonders stimmungsvoller Ort - die Fahrt dorthin ist schon ein Erlebnis."
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
                            image: "https://cdn2.rhinoafrica.com/thumbnails/media/_en/destinations/root/africa/southern-africa/south-africa/garden-route/route-62/oudtshoorn/_img/57324/image-thumb__57324__background-cover/winding-road-through-mountain-in-oudtshoorn-western-cape-south-africa.cbd16995.jpg",
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
                            image: "https://www.suedafrika-reise.net/westkap/bilder/1r.jpg",
                            meta: "Abstecher nach Swartberg Pass",
                            text: "Das kleine Städtchen am Fuß des Swartberg Passes begeistert mit historischen Gebäuden, Galerien und echtem <a href='https://www.suedafrika-reise.net/westkap/karoo.htm' target='_blank' class='underline'>Karoo-Feeling</a>. Perfekt für einen Lunch-Stop oder einen Bummel durch die Hauptstraße."
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
                            image: "https://kommwirmachendaseinfach.de/wp-content/uploads/2020/02/Tsitsikamma-nationalpark-suedafrika-aussicht-haengebruecke.jpg",
                            meta: "Von Colchester aus | Tagesausflug",
                            text: "Abenteuer im Urwald! Wir wandern durch den Tsitsikamma Nationalpark, überqueren die berühmte Hängebrücke und genießen die wilde Küste."
                        },
                        {
                            title: "Knysna Austern",
                            image: "https://www.ambiente-mediterran.de/wp-content/uploads/schema-and-structured-data-for-wp/Austern-Knysna-Oyster-Holzbild-756x756.jpg",
                            meta: "Auf dem Weg nach Plett",
                            text: "Die berühmten Knysna Heads, Waterfront und Austern – <a href='https://kommwirmachendaseinfach.de/knysna-in-suedafrika-sehenswuerdigkeiten-reisetipps/' target='_blank' class='underline'>Knysna</a> ist ein Muss auf der Garden Route!"
                        },
                        {
                            title: "East Head Café",
                            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7e/5b/93/photo6jpg.jpg?w=1400&h=800&s=1",
                            meta: "Direkt an den Heads | Moderate Preise",
                            text: "Tipp: Perfekte Lage direkt an den berühmten Knysna Heads mit toller Aussicht und moderaten Preisen."
                        }  ,
                        {
                            title: "Knysna Sunset Sailing Cruise",
                            image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=2/tour_img/6203afeebfcf8.jpeg",
                            meta: "Abends",
                            text: "Wir bewundern die spektakuläre Landschaft von Knysna und den Sonnenuntergang an Bord einer entspannten <a href='https://www.getyourguide.de/knysna-sailing-cruise-t26361/' target='_blank' class='underline'>Segelkreuzfahrt</a> bei Sonnenuntergang. Genießen eine leckere Auswahl an Käse und Snacks, gepaart mit gekühltem Sekt."
                        }    
                    ]
                }
                
            }
        },
        {
            id: 'gondwana',
            title: 'Gondwana: Safari-Paradies in der Western Cape',
            name: 'Gondwana',
            icon: '🦁',
            intro: 'Die Reise erreicht ihren Höhepunkt im Gondwana Game Reserve, einem malariafreien Privatreservat in der Western Cape. Hier verbringen wir zwei Nächte für unser großes Safari-Finale. Das Reservat ist Heimat der Big 5 und bietet atemberaubende Ausblicke auf die Outeniqua Mountains.',
             tabs: [
                {
                    name: 'Highlights',
                    icon: '🦁',
                    content: [
                        { title: 'Gondwana Game Reserve', description: 'Malariafreies Privatreservat mit Big 5 (Löwe, Leopard, Nashorn, Elefant, Büffel) und atemberaubenden Bergausblicken.' },
                        { title: 'Geführte Pirschfahrten', description: 'Professionelle Safari-Touren am Morgen und Abend mit erfahrenen Guides in offenen Geländewagen.' }
                    ]
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: [
                        { title: 'Gondwana Lodge Restaurant', description: 'Gourmet-Küche mit lokalen Zutaten und atemberaubendem Bergblick direkt im Reservat.' }
                    ]
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: '<a href="https://www.booking.com/hotel/za/gondwana-game-reserve.de.html?label=gog235jc-1DCAso-wFCFW1hcmF0YWJhLXNhZmFyaS1sb2RnZUgHWANoO4gBAZgBB7gBB8gBDdgBA-gBAfgBAogCAagCA7gCh5nUwwbAAgHSAiRjNTA3MTQ0Mi02YTUzLTQwMDEtOTI4Yy1iOTY5ZWFjM2M0MDnYAgTgAgE&sid=d8e72b6f4d23102b9f4d6d68baf6805d&aid=356980&ucfs=1&arphpl=1&checkin=2025-11-28&checkout=2025-11-30&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&all_sr_blocks=44385202_338413931_2_21_0&highlighted_blocks=44385202_338413931_2_21_0&matching_block_id=44385202_338413931_2_21_0&sr_pri_blocks=44385202_338413931_2_21_0&from_list=1" target="_blank" class="underline">Gondwana Game Reserve</a>', description: 'Luxuriöses Safari-Lodge mit Big 5 und atemberaubenden Bergausblicken. Vollpension inklusive geführter Pirschfahrten.', starred: true, price: 890 }
                    ]
                }
            ],
            Days: {
                13: {
                    date: '26. November 2025',
                    dayName: 'Mittwoch',
                    region: 'Gondwana',
                    cards: [
                        {
                            title: "Weiterreise nach Gondwana",
                            image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                            meta: "ca. 2 Stunden (ca. 160 km)",
                            text: "Wir verlassen Plettenberg Bay und nehmen eine spektakuläre Route ins Landesinnere zum Gondwana Game Reserve. Über Wilderness, Oudtshoorn und die Cango Caves führt uns der Weg durch die faszinierende Western Cape Landschaft mit atemberaubenden Bergausblicken."
                        },
                        {
                            title: "Wilderness - Strandparadies",
                            image: "https://elelaafrica.com/wp-content/uploads/2024/04/Wilderness-Beach-Elela-Africa.jpg",
                            meta: "Zwischenstop für Strandspaziergang",
                            text: "Tipp: Letzter Strandstopp! Wilderness ist ein verstecktes Juwel mit kilometerlangen Sandstränden und der malerischen Kaaiman's River Lagune. Perfekt für einen letzten Spaziergang am Meer vor der Safari."
                        },                        {
                            title: "Gondwana Game Reserve - Ankunft",
                            image: "https://cdn2.rhinoafrica.com/thumbnails/objects/service-providers/gondwana-game-reserve/_img/2024/58573/image-thumb__58573__background-cover/gondwana-game-reserve-kwena-lodge-aerial-view-01.37f1c984.jpg",
                            meta: "Check-in und Lodge-Entdeckung",
                            text: "Willkommen im Safari-Paradies! Nach dem Check-in in der luxuriösen Gondwana Lodge erkunden wir unsere neue Heimat für die nächsten zwei Tage. Die Lodge bietet atemberaubende Ausblicke auf die Outeniqua Mountains und wir genießen die ersten Momente in der afrikanischen Savanne."
                        },
                        {
                            title: "Abendliche Pirschfahrt",
                            image: "https://www.perfectgolftravel.de/pglive/wp-content/uploads/2019/03/pgt-big5-sa-gondwana.jpg",
                            meta: "17:00 - 19:30 Uhr",
                            text: "Die Abendsafari im Gondwana ist ein magisches Erlebnis! Wir starten mit Sundowner-Getränken und beobachten, wie die Sonne hinter den Outeniqua Mountains versinkt. Die Tiere werden wieder aktiv – Löwen erwachen aus ihrem Tagesschlaf, Elefantenherden ziehen zu den Wasserlöchern und mit etwas Glück sehen wir Leoparden auf der Jagd. Die dramatische Abendstimmung mit dem afrikanischen Sternenhimmel macht diese Safari unvergesslich."
                        }
                       
                    ]
                },
                14: {
                    date: '27. November 2025',
                    dayName: 'Donnerstag',
                    region: 'Gondwana',
                    cards: [
                        
                        {
                            title: "Frühmorgendliche Pirschfahrt",
                            image: "https://viel-unterwegs.de/wp-content/uploads/2024/09/gondwana-game-reserve-pirschfahrten-1200x750.jpg",
                            meta: "06:00 - 09:00 Uhr",
                            text: "Erleben wir die besondere Atmosphäre der Morgendämmerung im Gondwana! Wir starten bei Sonnenaufgang mit heißem Kaffee und frischen Muffins. Die Morgensafari führt uns durch die Fynbos-Vegetation und offene Savanne. Mit etwas Glück beobachten wir Löwen beim Jagen, Elefanten an den Wasserlöchern oder Nashörner in der goldenen Morgensonne. Die Outeniqua Mountains bilden einen dramatischen Hintergrund für unvergessliche Fotos."
                        },
                        {
                            title: "Nachmittag im Reservat",
                            image: "https://y.cdrst.com/foto/hotel-sf/12dcbd11/granderesp/foto-hotel-12dcb267.jpg",
                            meta: "Nachmittags - Entspannung",
                            text: "Nach der Safari genießen wir die luxuriösen Annehmlichkeiten der Lodge. Entspannen am Infinity-Pool mit Bergblick, Wellness-Behandlungen oder ein Buch im Schatten der alten Bäume. Die Lodge bietet auch geführte Wanderungen oder Vogelbeobachtung an."
                        },
                        {
                            title: "African Dinner",
                            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/490279409.jpg?k=759d23a05a39577ade61b19b6630ffdda561c4b593872d7b642a7c36d2b1b038&o=&hp=1",
                            meta: "19:30 Uhr - Abendessen",
                            text: "Gourmet-Erlebnis unter afrikanischem Himmel! Das Abendessen in der Lodge ist ein kulinarisches Highlight mit lokalen Zutaten und atemberaubendem Bergblick. Bei klarem Himmel können wir die Sterne der Südhalbkugel bewundern."
                        }
                        
                    ]
                },
                15: {
                    date: '28. November 2025',
                    dayName: 'Freitag',
                    region: 'Gondwana',
                    cards: [
                        {
                            title: "Abschieds-Morgensafari",
                            image: "https://viel-unterwegs.de/wp-content/uploads/2024/09/unterschied-nationalparks-game-reserves-suedafrika-1200x729.jpg",
                            meta: "06:00 - 09:00 Uhr",
                            text: "Unser letztes Safari-Erlebnis im Gondwana! Bei der Abschieds-Morgensafari erleben wir die Savanne ein letztes Mal im goldenen Morgenlicht. Mit erfahrenen Guides suchen wir nach den Big 5 und genießen die letzten Momente in der afrikanischen Wildnis. Die Outeniqua Mountains leuchten in der Morgensonne und wir sammeln unvergessliche Erinnerungen für die Heimreise."
                        },
                        {
                            title: "Rückfahrt nach Kapstadt",
                            image: "https://media.istockphoto.com/id/165693915/de/vektor/landschaft-szene.jpg?s=612x612&w=0&k=20&c=f7hBHjVj62f9TKWCKSPNafyl1zrpnSGS9ouHYOiF2lY=",
                            meta: "ca. 4,5 Stunden (ca. 400 km)",
                            text: "Nach der Abschieds-Morgensafari und einem letzten Frühstück in der Lodge fahren wir zurück nach Kapstadt. Die Route führt uns durch die malerische Western Cape Landschaft mit letzten Blicken auf die Berge und Küste. Wir nehmen unvergessliche Safari-Erinnerungen mit nach Hause."
                        },
                        {
                            title: "Kloof-Street-Viertel",
                            image: "https://www.sa-venues.com/visit/kloofstreethotel/26g.jpg",
                            meta: "",
                            text: "Und Abends dann eintauchen ins City-Life im pulsierenden Kloof-Street-Viertel"
                        }
                        
                    ]
                },
            }
        },
        {
            id: 'rueckreise',
            title: 'Rückreise: Abschied von Südafrika',
            name: 'Rückreise',
            icon: '🏠',
            intro: 'Die letzten beiden Tage unserer unvergesslichen Südafrika-Reise. Wir fahren gemütlich von Gondwana zurück nach Kapstadt und genießen noch einmal die Highlights der Mother City, bevor es zum Flughafen geht.',
            tabs: [
                {
                    name: 'Highlights',
                    icon: '🐘',
                    content: []
                },
                {
                    name: 'Essen & Wein',
                    icon: '🍷',
                    content: []
                },
                {
                    name: 'Hotels',
                    icon: '🏨',
                    content: [
                        { title: 'Kloof Street Hotel - Lion Roars Hotels & Lodges', description: 'Mitten im pulsierenden Kloof-Street-Viertel gelegen, überzeugt das Hotel durch modernes, naturinspiriertes Design, freundlichen Service und beeindruckende Ausblicke auf den Tafelberg. Zur Ausstattung zählen Rooftop-Pool, stylishes Restaurant, Coworking-Bereich, sichere Parkplätze ', url: '', starred: true, price: 115 },
                    ]
                }
            ],
            Days: {
                16: {
                    date: '29. November 2025',
                    dayName: 'Samstag',
                    region: 'Rückreise',
                    cards: [
                        {
                            title: "Spontane Entdeckungen",
                            image: "https://www.capetown.travel/wp-content/uploads/long-street-in-cape-town.jpg",
                            meta: "Alles was uns Spaß macht",
                            text: "Z.B Robben Island, Constantia Valley, Tafelberg, Kloof Street, etc."
                        }
                    ]
                },
                17: {
                    date: '30. November 2025',
                    dayName: 'Sonntag',
                    region: 'Rückreise',
                    cards: [
                        {
                            title: "Highlights Kapstadt",
                            image: "https://www.capetown.travel/wp-content/uploads/long-street-in-cape-town.jpg",
                            meta: "Noch einmal eintauchen in die Stadt",
                            text: "Z.B Longstreet, St. George's Mall"
                        },
                        {
                            title: "Company's Garden",
                            image: "https://www.capetown.travel/wp-content/uploads/2022/10/Companys-Garden.png",
                            meta: "Gärten der Holländisch - Ostindischen Handelskompanie.",
                            text: "<a href='https://www.kapstadt.de/reisefuehrer/stadtgebiet/company-garden' target='_blank' class='underline'>Hier</a> können wir im Schatten unter großen Bäumen auf einer der vielen Bänke die flanierenden Menschen beobachten bzw. den kleinen grauen Eichhörnchen zusehen, wie sie auf den Ästen herumtoben und neugierig auf einen zukommen. Beeindruckend sind zudem der Rosengarten und die zahlreichen Skulpturen. Von hier hat man einen schönen Blick auf die 'Spitze' des Table Mountain."
                        },
                        {
                            title: "Heimflug",
                            image: "https://www.condor.com/de/fileadmin/dam/_processed_/e/5/csm_condor_airbus_A321_200_neo_sunshine_724_7d6ee5b6bd.jpg",
                            meta: "16:15",
                            text: "Ab zu FlughafenMietwagen zurückgeben, einchecken und Heimflug 18:15 Uhr."
                        }
                    ]
                }
            }
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

    // Content sections wurden entfernt - nur noch Tagesübersicht wird verwendet

    // Tab functionality für Tagesübersicht
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('tab-button')) {
            const button = event.target;
            const targetId = button.dataset.target;
            
            // Finde die Tab-Gruppe basierend auf der target-ID
            const targetIdParts = targetId.split('-');
            const regionId = targetIdParts.slice(0, -2).join('-'); // z.B. "kapstadt" aus "kapstadt-days-0"
            
            // Prüfe, ob der Button bereits aktiv ist
            const isCurrentlyActive = button.classList.contains('active');
            
            // Finde alle Tab-Buttons in derselben Region
            const regionButtons = document.querySelectorAll(`[data-target^="${regionId}-days-"]`);
            regionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Verstecke alle Tab-Contents in derselben Region
            for (let i = 0; i < 10; i++) { // Max 10 Tabs pro Region
                const contentElement = document.getElementById(`${regionId}-days-${i}`);
                if (contentElement) {
                    contentElement.classList.add('hidden');
                }
            }
            
            const defaultElement = document.getElementById(`${regionId}-default`);
            const targetElement = document.getElementById(targetId);
            
            if (isCurrentlyActive) {
                // Wenn der Tab bereits aktiv war, zeige den leeren Zustand
                if (defaultElement) {
                    defaultElement.classList.remove('hidden');
                }
            } else {
                // Wenn der Tab nicht aktiv war, aktiviere ihn und zeige den Content
                button.classList.add('active');
                
                // Verstecke den Standard-Zustand
                if (defaultElement) {
                    defaultElement.classList.add('hidden');
                }
                
                // Zeige den gewählten Tab-Content
                if (targetElement) {
                    targetElement.classList.remove('hidden');
                }
            }
        }
    });



    
     // Active Nav Link on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const allSections = document.querySelectorAll('main section[id]');
        const header = document.getElementById('header');
        const navLinks = document.querySelectorAll('.nav-link');

        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - (header ? header.offsetHeight : 0) - 20) {
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
                } else if (region.includes('Gondwana')) {
                     prompt += ` Einige der bereits erwähnten Restaurants sind Gondwana Lodge Restaurant, Nina's Real Food, Walskipper, Ocean Basket. Bitte schlage ein anderes vor.`;
                }


                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                
                // Google Gemini API Integration
                const API_KEY = 'AIzaSyC35B4RPHHKBrUpddDRDYKI001usnthmmM';
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-goog-api-key': API_KEY
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const suggestion = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Kein Vorschlag verfügbar.';
                outputElement.textContent = suggestion;
            } catch (error) {
                console.error('Fehler beim Generieren des Restaurantvorschlags:', error);
                outputElement.textContent = `Fehler beim Generieren des Vorschlags: ${error.message}`;
            } finally {
                event.target.disabled = false;
            }
        });
    });
    

    // ===== TIMELINE FUNCTIONS =====
    function generateTimeline() {
        const timelineContainer = document.getElementById('timeline-points');
        if (!timelineContainer) return;

        // Generate timeline points for each day
        const totalDays = 17;
        
        // Erstelle Milestones dynamisch aus den sections
        const milestones = [];
        
        tripData.sections.forEach(section => {
            if (section.Days && section.name && section.icon) {
                // Finde den ersten Tag dieser Section
                const days = Object.keys(section.Days).map(Number).sort((a, b) => a - b);
                if (days.length > 0) {
                    milestones.push({
                        day: days[0],
                        name: section.name,
                        id: section.id,
                        icon: section.icon
                    });
                }
            }
        });

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

        const milestones = tripData.sections.map(section => {
            if (!section.name || !section.icon || !section.Days) return null;
            
            // Berechne dynamisch first und last day aus den Days
            const dayNumbers = Object.keys(section.Days).map(Number).sort((a, b) => a - b);
            let daysString = '';
            
            if (dayNumbers.length > 0) {
                const firstDay = section.Days[dayNumbers[0]];
                const lastDay = section.Days[dayNumbers[dayNumbers.length - 1]];
                
                if (firstDay && lastDay) {
                    // Extrahiere nur Tag und Monat aus den Daten
                    const firstDate = firstDay.date.split(' ')[0] + '. ' + firstDay.date.split(' ')[1].substring(0, 3) + '.';
                    const lastDate = lastDay.date.split(' ')[0] + '. ' + lastDay.date.split(' ')[1].substring(0, 3) + '.';
                    
                    if (firstDate === lastDate) {
                        daysString = firstDate;
                    } else {
                        daysString = `${firstDate}-${lastDate}`;
                    }
                }
            }
            
            // Extrahiere erste 4 Highlights aus dem Highlights-Tab
            const highlightsTab = section.tabs.find(tab => tab.name === 'Highlights');
            const highlights = highlightsTab ? highlightsTab.content.slice(0, 4).map(item => item.title) : [];
            
            return {
                id: section.id,
                name: section.name,
                icon: section.icon,
                days: daysString,
                description: section.intro.substring(0, 120) + '...',
                highlights: highlights
            };
        }).filter(Boolean);

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

        tripData.sections.forEach(section => {
            // Prüfe ob Section die notwendigen Felder hat
            if (!section.name || !section.icon) return;
            
            // Extrahiere die Tagnummern aus den Days-Objekten der Section
            const days = section.Days ? Object.keys(section.Days).map(Number).sort((a, b) => a - b) : [];
            const introText = section ? section.intro : '';

            // Erstelle Regions-Header mit Tabs
            const regionHeader = document.createElement('div');
            regionHeader.className = 'mb-8';
            regionHeader.id = `${section.id}-section`;
            
            // Erstelle Tabs HTML
            let tabsHtml = '<div class="flex justify-center space-x-2 sm:space-x-4 mb-8 border-b pb-2">';
            section.tabs.forEach((tab, index) => {
                // Kein Tab ist standardmäßig aktiv
                tabsHtml += `
                    <button class="tab-button text-sm sm:text-base px-3 py-2 sm:px-4 rounded-t-lg border-b-2 border-transparent transition-colors" data-target="${section.id}-days-${index}">
                        <span class="hidden sm:inline-block mr-2">${tab.icon}</span> ${tab.name}
                    </button>`;
            });
            tabsHtml += '</div>';

            // Erstelle Tab Contents HTML
            let tabContentsHtml = '';
            section.tabs.forEach((tab, index) => {
                // Alle Tab-Inhalte sind standardmäßig versteckt
                tabContentsHtml += `<div id="${section.id}-days-${index}" class="tab-content hidden">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">`;
                tab.content.forEach(item => {
                    // Check if item.url exists and wrap title in <a> tag
                    const titleHtml = item.url 
                        ? `<a href="${item.url}" target="_blank" class="hover:underline text-[#C89F93]">${item.title}</a>`
                        : item.title;

                    // Check if this is a Tipp item
                    const isTipp = item.description.startsWith('Tipp:') || item.title.startsWith('Tipp:');
                    const isStarred = item.starred === true;
                    const cardClass = isTipp ? 'section-card rounded-lg p-6 shadow-sm tipp-card' : 'section-card rounded-lg p-6 shadow-sm';
                    const formattedDescription = item.description.startsWith('Tipp:') ? 
                        item.description.replace('Tipp:', '<span class="tipp-badge">Tipp</span>') : 
                        item.description;

                    // Create star and price display
                    const starHtml = isStarred ? '<span class="text-yellow-500 text-xl mr-2">⭐</span>' : '';
                    const priceHtml = item.price ? `<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold ml-2">${item.price}€</span>` : '';

                    tabContentsHtml += `
                        <div class="${cardClass}">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-bold text-lg text-gray-800 flex items-center">
                                    ${starHtml}${titleHtml}
                                </h4>
                                ${priceHtml}
                            </div>
                            <p class="text-gray-600 mt-1 text-sm">${formattedDescription}</p>
                        </div>`;
                });
                // Add LLM restaurant suggestion button only to "Essen & Wein" tab
                if (tab.name === 'Essen & Wein') {
                    tabContentsHtml += `
                        <div class="section-card rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center">
                            <h4 class="font-bold text-lg text-gray-800 mb-4">✨ Restaurantvorschlag des Tages</h4>
                            <button class="generate-restaurant-suggestion bg-[#C89F93] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors shadow-md" data-region="${section.name}">
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
                    <div class="text-4xl mb-4">${section.icon}</div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${section.name}</h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">${introText}</p>
                </div>
                ${tabsHtml}
                <div id="${section.id}-default" class="tab-default text-center">
                </div>
                ${tabContentsHtml}
            `;
            daysContainer.appendChild(regionHeader);

            // Erstelle Tagessektionen für diese Region - NEUE LOGIK FÜR GEÄNDERTE DATENSTRUKTUR
            days.forEach(dayNumber => {
                // Finde die Tagesdaten in der neuen Struktur (innerhalb der section.Days)
                const dayData = section && section.Days ? section.Days[dayNumber] : null;
                if (!dayData) return;

                const daySection = document.createElement('section');
                daySection.id = `day-${dayNumber}`;
                daySection.className = 'py-8 bg-white rounded-xl shadow-sm mb-6';

                const cardsHtml = dayData.cards.map(card => {
                    // Check if generateCardHtml function exists (from HTML), otherwise use fallback
                    if (typeof generateCardHtml === 'function') {
                        return generateCardHtml(card, dayData.region);
                    } else {
                        // Fallback für den Fall, dass die HTML-Funktion nicht verfügbar ist
                        const isTipp = card.text.startsWith('Tipp:') || card.title.startsWith('Tipp:');
                        const isStarred = card.starred === true;
                        const cardClass = isTipp ? 'bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition-all duration-300 tipp-card' : 'bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition-shadow duration-300';
                        const formattedText = card.text.startsWith('Tipp:') ? card.text.replace('Tipp:', '<span class="tipp-badge">Tipp</span>') : card.text;
                        
                        // Create star and price display for cards
                        const starHtml = isStarred ? '<span class="text-yellow-500 text-xl mr-2">⭐</span>' : '';
                        const priceHtml = card.price ? `<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold ml-2">${card.price}€</span>` : '';
                        
                        return `
                            <div class="${cardClass}">
                                <img src="${card.image}" alt="${card.title}" class="w-full h-48 object-cover rounded-lg mb-4" />
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl font-bold text-gray-800 flex items-center">
                                        ${starHtml}${card.title}
                                    </h3>
                                    <div class="flex items-center">
                                        ${priceHtml}
                                        <span class="bg-[#C89F93] text-white px-3 py-1 rounded-full text-xs font-semibold ml-2">${dayData.region}</span>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-500 mb-2">${card.meta}</div>
                                <p class="text-gray-700 flex-grow">${formattedText}</p>
                            </div>
                        `;
                    }
                }).join('');

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

            // Füge einen Abstand zwischen den Regionen hinzu (außer bei der letzten)
            const isLastSection = tripData.sections.indexOf(section) === tripData.sections.length - 1;
            if (!isLastSection) {
                const spacer = document.createElement('div');
                spacer.className = 'py-4';
                daysContainer.appendChild(spacer);
            }
        });
    }

});