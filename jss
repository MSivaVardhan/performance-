document.addEventListener('DOMContentLoaded', function () {
    const employeeData = [
        { id: 1, name: 'John Doe', performance: 85, attitude: 90, work: 80 },
        { id: 2, name: 'Jane Smith', performance: 92, attitude: 85, work: 95 },
        { id: 3, name: 'Bob Johnson', performance: 78, attitude: 92, work: 70 },
        { id: 4, name: 'Alice Brown', performance: 88, attitude: 87, work: 90 },
        { id: 5, name: 'Charlie Davis', performance: 95, attitude: 94, work: 92 },
    ];

    const employeeListSection = document.getElementById('employeeList');

    // Display employee performance dynamically
    employeeData.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employeeCard');
        employeeCard.innerHTML = `
            <h2>${employee.name}</h2>
            <p class="performanceMetric">Performance: ${employee.performance}%</p>
            <p class="performanceMetric">Attitude: ${employee.attitude}%</p>
            <p class="performanceMetric">Work: ${employee.work}%</p>
        `;
        employeeListSection.appendChild(employeeCard);
    });

    // Visualize performance using Chart.js
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const employeeNames = employeeData.map(employee => employee.name);
    const performanceData = employeeData.map(employee => employee.performance);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: employeeNames,
            datasets: [{
                label: 'Performance',
                data: performanceData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
