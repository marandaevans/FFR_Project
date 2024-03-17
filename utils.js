const emailForm = document.getElementById('emailForm');
const errorText = document.getElementById('errorText');

        emailForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();

            if (isValidEmail(email)) {
                // Email is valid, you can proceed with further actions
                errorText.textContent = '';
                // Here you can submit the form or perform other actions
                console.log('Valid email address:', email);
            } else {
                // Email is not valid, display error message
                errorText.textContent = 'Please enter a valid email address.';
            }
        });

        function isValidEmail(email) {
            // Regular expression to validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
    
const xValues = ["Kinship", "Non-related Kin", "Traditional", "Specialized", "Emergency", "Respite"];
const yValues = [32, 15, 40, 10, 1, 2];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Types of Foster Care in the United States"
    }
  }
});