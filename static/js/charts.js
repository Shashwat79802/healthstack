function updateChartWithData(data, analysisType) {
    if (analysisType === 'Blood Count') {
        updateBloodCountChart(data);
    } else if (analysisType === 'Blood Glucose') {
        updateBloodGlucoseChart(data);
    } else {
        console.error('Invalid analysis type:', analysisType);
    }
}

function updateBloodGlucoseChart(data) {
    const dates = Object.values(data).map(item => item.Date);
    const bloodGlucoseFasting = Object.values(data).map(item => item['Blood Glucose(F)']);
    const bloodGlucosePostprandial = Object.values(data).map(item => item['Blood Glucose(PP)']);

            // Create the chart
    const ctx = document.getElementById('medicalReportsChart').getContext('2d');
        const medicalReportsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Blood Glucose (Fasting)',
                    data: bloodGlucoseFasting,
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    fill: false
                }, {
                    label: 'Blood Glucose (Postprandial)',
                    data: bloodGlucosePostprandial,
                    backgroundColor: 'pink',
                    borderColor: 'pink',
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Blood Glucose Levels'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        }
                    }]
                }
            }
        });
    };

function updateBloodCountChart(data) {

            // Extract data from the JSON
            const dates = Object.values(data).map(item => item.Date);
            const haemoglobin = Object.values(data).map(item => item.Haemoglobin);
            const plateletCount = Object.values(data).map(item => item['Platelet Count']);
            const rbc = Object.values(data).map(item => item.RBC);

            // Create the chart
            const ctx = document.getElementById('medicalReportsChart').getContext('2d');
            const medicalReportsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Haemoglobin',
                        data: haemoglobin,
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        fill: false
                    }, {
                        label: 'Platelet Count',
                        data: plateletCount,
                        backgroundColor: 'green',
                        borderColor: 'green',
                        fill: false
                    }, {
                        label: 'RBC',
                        data: rbc,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Measurement'
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Date'
                            }
                        }]
                    }
                }
            });
};
