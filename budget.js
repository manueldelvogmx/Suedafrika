// Budget Charts und Funktionen
// Chart.js Budget Visualisierungen

document.addEventListener('DOMContentLoaded', function() {
    // Budget Pie Chart
    const budgetCtx = document.getElementById('budgetPieChart').getContext('2d');
    new Chart(budgetCtx, {
        type: 'doughnut',
        data: {
            labels: ['Hotels (€4800)', 'Essen (€2400)', 'Mietwagen & Benzin (€800)', 'Aktivitäten (€1000)'],
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
}); 