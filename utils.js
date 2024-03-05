<script>
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
        }
    </script>