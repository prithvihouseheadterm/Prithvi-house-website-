document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("active");
  });
});

// Chart
const ctx = document.getElementById('studentChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Vedant', 'Kunal', 'Chinmay', 'Sejal', 'Aditi', 'Tvisha', 'Vishal', 'Mit', 'Gauri', 'Abhinav', 'Yuvraj', 'Shlok', 'Sarth', 'Arnav', 'Aditya', 'Swarali', 'Jagrav', 'Ishita', 'Vaidehi', 'Kinjal', 'Aarohi', 'Ansh'],
      datasets: [{
        label: 'Performance Score',
        data: [90,85,88,92,86,91,84,89,90,87,88,83,89,90,91,85,84,88,86,89,90,87],
        backgroundColor: 'rgba(0, 255, 150, 0.7)',
        borderColor: 'rgba(0, 255, 150, 1)',
        borderWidth: 2
      }]
    },
    options: {responsive: true, scales: {y: {beginAtZero: true}}}
  });
}
