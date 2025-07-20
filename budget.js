// Budget Charts und Funktionen
// Chart.js Budget Visualisierungen

document.addEventListener('DOMContentLoaded', function() {
    // Extrahiere Hotels mit starred=true aus tripData (aktualisierte Logik)
    function getStarredHotels() {
        const starredHotels = [];
        const regionTotals = {};
        const regionDays = {};
        const regionCostsPerDay = {};
        
        // Sammle alle starred Hotels aus tripData dynamisch (wie in suedafrika.html)
        const starredHotelsMap = {};
        
        tripData.sections.forEach(section => {
            const hotelsTab = section.tabs.find(tab => tab.name === 'Hotels');
            if (hotelsTab) {
                hotelsTab.content.forEach(hotel => {
                    if (hotel.starred === true) {
                        starredHotelsMap[section.name] = {
                            title: hotel.title,
                            description: hotel.description,
                            price: hotel.price,
                            url: hotel.url
                        };
                    }
                });
            }
        });

        // Berechne Kosten für Tag 1-16 (Tag 17 ist Abflug)
        let totalCost = 0;
        const hotelDetails = [];
        
        for (let day = 1; day <= 16; day++) {
            // Finde die entsprechende Region für diesen Tag
            let region = '';
            
            // Durchsuche alle Sektionen nach dem Tag
            for (const section of tripData.sections) {
                if (section.Days && section.Days[day]) {
                    region = section.Days[day].region;
                    break;
                }
            }

            const hotel = starredHotelsMap[region];
            
            if (hotel && hotel.price && typeof hotel.price === 'number') {
                totalCost += hotel.price;
                
                // Sammle Hotel-Details für die Anzeige
                hotelDetails.push({
                    name: hotel.title,
                    price: hotel.price,
                    region: region,
                    day: day
                });
                
                // Summiere nach Region
                if (!regionTotals[region]) regionTotals[region] = 0;
                regionTotals[region] += hotel.price;
                
                // Zähle Tage pro Region
                if (!regionDays[region]) regionDays[region] = 0;
                regionDays[region]++;
            }
        }
        
        // Berechne Kosten pro Tag für jede Region
        Object.keys(regionTotals).forEach(region => {
            if (regionDays[region] > 0) {
                regionCostsPerDay[region] = Math.round(regionTotals[region] / regionDays[region]);
            }
        });
        
        return { 
            hotels: hotelDetails, 
            regionTotals, 
            regionDays, 
            regionCostsPerDay,
            totalCost: totalCost
        };
    }
    
    const hotelData = getStarredHotels();
    const totalHotelCost = hotelData.totalCost; // Verwende die berechnete Gesamtsumme
    
    // Aktualisiere die Hotelkosten im Datenmodell
    tripData.totalCosts.accommodation.total = totalHotelCost;
    
    // Berechne Totale automatisch aus den einzelnen cost Feldern
    function calculateCategoryTotal(category) {
        if (!category) return 0;
        return Object.values(category)
            .filter(item => typeof item === 'object' && item.cost !== undefined)
            .reduce((sum, item) => sum + item.cost, 0);
    }
    
    // Berechne Gesamtkosten aller Kategorien
    const totalBudget = {
        flights: calculateCategoryTotal(tripData.totalCosts.flights),
        transport: calculateCategoryTotal(tripData.totalCosts.transport),
        accommodation: totalHotelCost,
        food: calculateCategoryTotal(tripData.totalCosts.food),
        activities: calculateCategoryTotal(tripData.totalCosts.activities),
        miscellaneous: calculateCategoryTotal(tripData.totalCosts.miscellaneous)
    };
    
    const grandTotal = Object.values(totalBudget).reduce((sum, cost) => sum + cost, 0);
    
    // Debug-Info in Konsole
    console.log('=== VOLLSTÄNDIGE BUDGET ANALYSE ===');
    console.log('Kostenkategorien (automatisch berechnet):');
    Object.entries(totalBudget).forEach(([category, cost]) => {
        console.log(`- ${category}: €${cost} (berechnet aus Einzelposten)`);
    });
    console.log(`GESAMTKOSTEN: €${grandTotal}`);
    console.log('Rohdaten:', {
        flights: tripData.totalCosts.flights,
        transport: tripData.totalCosts.transport,
        food: tripData.totalCosts.food,
        activities: tripData.totalCosts.activities,
        miscellaneous: tripData.totalCosts.miscellaneous
    });
    
    // Budget Pie Chart mit allen Kategorien
    const budgetCtx = document.getElementById('budgetPieChart').getContext('2d');
    new Chart(budgetCtx, {
        type: 'doughnut',
        data: {
            labels: [
                `Flüge (€${totalBudget.flights})`,
                `Transport (€${totalBudget.transport})`, 
                `Hotels (€${totalBudget.accommodation})`, 
                `Essen (€${totalBudget.food})`, 
                `Aktivitäten (€${totalBudget.activities})`, 
                `Sonstiges (€${totalBudget.miscellaneous})`
            ],
            datasets: [{
                data: [
                    totalBudget.flights,
                    totalBudget.transport,
                    totalBudget.accommodation,
                    totalBudget.food,
                    totalBudget.activities,
                    totalBudget.miscellaneous
                ],
                backgroundColor: ['#C89F93', '#E3CFC9', '#A9A9A9', '#F4EAE6', '#D4C5B9', '#B8A99C'],
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


    
    // Vollständige Kostenübersicht generieren
    generateFullCostBreakdown(totalBudget, grandTotal);
}); 



// Funktion zur Generierung der vollständigen Kostenübersicht
function generateFullCostBreakdown(totalBudget, grandTotal) {
    const fullCostContainer = document.getElementById('full-cost-breakdown');
    const grandTotalElement = document.getElementById('grand-total-cost');
    
    if (!fullCostContainer || !grandTotalElement) return;
    
    // Gesamtkosten anzeigen
    grandTotalElement.textContent = `€${grandTotal}`;
    
    // Erstelle detaillierte Kostenaufschlüsselung
    let costHtml = '';
    
    // Hilfsfunktion um Kategorie-Items zu extrahieren
    function getCategoryItems(category) {
        if (!category) return [];
        return Object.values(category).filter(item => typeof item === 'object' && item.cost !== undefined);
    }
    
    // Flüge
    const flightItems = getCategoryItems(tripData.totalCosts.flights);
    if (flightItems.length > 0) {
        costHtml += createCostCategory('✈️ Flüge', {total: totalBudget.flights}, flightItems);
    }
    
    // Transport
    const transportItems = getCategoryItems(tripData.totalCosts.transport);
    if (transportItems.length > 0) {
        costHtml += createCostCategory('🚗 Transport', {total: totalBudget.transport}, transportItems);
    }
    
    // Unterkunft
    costHtml += createCostCategory('🏨 Unterkunft', {total: totalBudget.accommodation}, [
        {description: 'Ausgewählte Stern-Hotels', cost: totalBudget.accommodation, details: 'Siehe Hotelübersicht oben'}
    ]);
    
    // Essen
    const foodItems = getCategoryItems(tripData.totalCosts.food);
    if (foodItems.length > 0) {
        costHtml += createCostCategory('🍷 Essen & Trinken', {total: totalBudget.food}, foodItems);
    }
    
    // Aktivitäten
    const activityItems = getCategoryItems(tripData.totalCosts.activities);
    if (activityItems.length > 0) {
        costHtml += createCostCategory('🎯 Aktivitäten', {total: totalBudget.activities}, activityItems);
    }
    
    
    fullCostContainer.innerHTML = costHtml;
}

// Hilfsfunktion zur Erstellung einer Kostenkategorie
function createCostCategory(title, categoryData, items) {
    const categoryTotal = categoryData.total;
    
    return `
        <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#C89F93]">
            <div class="flex justify-between items-center mb-4">
                <h4 class="text-xl font-bold text-gray-800">${title}</h4>
                <span class="text-2xl font-bold text-[#C89F93]">€${categoryTotal}</span>
            </div>
            <div class="space-y-3">
                ${items.map(item => `
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <p class="font-medium text-gray-700">${item.description}</p>
                            ${item.details ? `<p class="text-sm text-gray-500 mt-1">${item.details}</p>` : ''}
                        </div>
                        <span class="font-semibold text-gray-800 ml-4">€${item.cost}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}