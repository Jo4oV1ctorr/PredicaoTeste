document.addEventListener('DOMContentLoaded', () => {
    fetch('/dashboard_data')
        .then(response => response.json())
        .then(data => {
            createPredictionChart(data.prediction_counts);
            createAgeChart(data.distribution_data.age_histogram);
            createGenderChart(data.distribution_data.gender_bar_chart);
        })
        .catch(error => console.error('Error fetching dashboard data:', error));
 
    const predictForm = document.getElementById('predict-form');
    const resultElement = document.getElementById('result');
 
    predictForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
 
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const ethnicity = document.getElementById('ethnicity').value;
        const parentalEducation = document.getElementById('parentalEducation').value;
        const studyTimeWeekly = document.getElementById('studyTimeWeekly').value;
        const absences = document.getElementById('absences').value;
        const tutoring = document.querySelector('input[name="tutoring"]:checked').value;
        const parentalSupport = document.getElementById('parentalSupport').value;
        const extracurricular = document.querySelector('input[name="extracurricular"]:checked').value;
        const sports = document.querySelector('input[name="sports"]:checked').value;
        const music = document.querySelector('input[name="music"]:checked').value;
        const volunteering = document.querySelector('input[name="volunteering"]:checked').value;
 
        const features = [
            parseInt(age),
            parseInt(gender),
            parseInt(ethnicity),
            parseInt(parentalEducation),
            parseInt(studyTimeWeekly),
            parseInt(absences),
            parseInt(tutoring),
            parseInt(parentalSupport),
            parseInt(extracurricular),
            parseInt(sports),
            parseInt(music),
            parseInt(volunteering)
        ];
 
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ features: features })
        })
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                resultElement.textContent = `Erro: ${data.erro}`;
            } else {
                resultElement.textContent = `Predição: ${data.predicao}`;
            }
        })
        .catch(error => {
            console.error('Erro ao enviar predição:', error);
            resultElement.textContent = 'Erro ao enviar predição.';
        });
    });
});
 
function createPredictionChart(predictionCounts) {
    const ctx = document.getElementById('predictionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(predictionCounts),
            datasets: [{
                label: 'Contagem de Predições',
                data: Object.values(predictionCounts),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
 
function createAgeChart(ageHistogram) {
    const ctx = document.getElementById('ageChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(ageHistogram),
            datasets: [{
                label: 'Contagem de Idades',
                data: Object.values(ageHistogram),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
 
function createGenderChart(genderBarChart) {
    const ctx = document.getElementById('genderChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(genderBarChart).map(gender => gender === '0' ? 'Masculino' : 'Feminino'),
            datasets: [{
                label: 'Contagem de Gênero',
                data: Object.values(genderBarChart),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}