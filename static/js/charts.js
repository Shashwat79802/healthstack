// document.addEventListener("DOMContentLoaded", function() {
//     // Fetch data from the JSON file
//     fetch('data/hospital-reports.json')
//         .then(response => response.json())
//         .then(data => {
//             // Extract data from the JSON
//             const dates = Object.values(data).map(item => item.Date);
//             const bloodGlucoseFasting = Object.values(data).map(item => item['Blood Glucose(F)']);
//             const bloodGlucosePostprandial = Object.values(data).map(item => item['Blood Glucose(PP)']);

//             // Create the chart
//             const ctx = document.getElementById('bloodGlucoseChart').getContext('2d');
//             const bloodGlucoseChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: dates,
//                     datasets: [{
//                         label: 'Blood Glucose (Fasting)',
//                         data: bloodGlucoseFasting,
//                         backgroundColor: 'purple',
//                         borderColor: 'purple',
//                         fill: false
//                     }, {
//                         label: 'Blood Glucose (Postprandial)',
//                         data: bloodGlucosePostprandial,
//                         backgroundColor: 'pink',
//                         borderColor: 'pink',
//                         fill: false
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         yAxes: [{
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'Blood Glucose Levels'
//                             }
//                         }],
//                         xAxes: [{
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'Date'
//                             }
//                         }]
//                     }
//                 }
//             });
//         });
// });



document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the JSON file
    // fetch('data/hospital-reports.json')
    //     .then(response => response.json())
    //     .then(data => { - the rest of the code goes here
    //      });

    const data = {
        "0": {
            "Haemoglobin": 10.1,
            "Platelet Count": 3.0,
            "RBC": 4.5,
            "Date": "08/14/2024"
        },
        "1": {
            "Haemoglobin": 8.0,
            "Platelet Count": 5.0,
            "RBC": 4.5,
            "Date": "08/14/2024"
        },
        "2": {
            "Haemoglobin": 9.4,
            "Platelet Count": 5.0,
            "RBC": 4.2,
            "Date": "08/14/2024"
        }
    };

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
});
