// Budget Charts und Funktionen
// Chart.js Budget Visualisierungen

document.addEventListener('DOMContentLoaded', function() {
    // Extrahiere Hotels mit starred=true aus tripData
    function getStarredHotels() {
        const starredHotels = [];
        const regionTotals = {};
        const regionDays = {};
        const regionCostsPerDay = {};
        
        tripData.sections.forEach(section => {
            // Berechne Anzahl der Tage pro Region
            const days = section.Days ? Object.keys(section.Days).length : 0;
            
            // Berechne Anzahl der Übernachtungen (bei Rückreise eine weniger, da letzter Tag Abreisetag ist)
            let nights = days;
            if (section.id === 'rueckreise') {
                nights = Math.max(0, days - 1); // Am letzten Tag wird nicht übernachtet
            }
            
            regionDays[section.name] = nights;
            
            const hotelsTab = section.tabs.find(tab => tab.name === 'Hotels');
            if (hotelsTab) {
                const starred = hotelsTab.content.filter(hotel => hotel.starred === true);
                starred.forEach(hotel => {
                    const price = typeof hotel.price === 'number' ? hotel.price : 0;
                    starredHotels.push({
                        name: hotel.title,
                        price: price,
                        region: section.name,
                        days: days
                    });
                    
                    // Summiere nach Region
                    if (!regionTotals[section.name]) regionTotals[section.name] = 0;
                    regionTotals[section.name] += price;
                });
                
                // Berechne Kosten pro Tag
                if (regionTotals[section.name] && days > 0) {
                    regionCostsPerDay[section.name] = Math.round(regionTotals[section.name] / days);
                }
            }
        });
        
        return { 
            hotels: starredHotels, 
            regionTotals, 
            regionDays, 
            regionCostsPerDay 
        };
    }
    
    const hotelData = getStarredHotels();
    const totalHotelCost = hotelData.hotels.reduce((sum, hotel) => sum + hotel.price, 0);
    
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