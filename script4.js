 function showForm(formType) {
            // Remove active class from all toggle buttons and forms
            document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));
            
            // Add active class to clicked button and corresponding form
            event.target.classList.add('active');
            document.getElementById(formType + '-form').classList.add('active');
        }

        // Form submission handlers
        document.getElementById('signin-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            
            if (email && password) {
                alert('Sign in successful! Welcome back to Sweet Treats Bakery!');
            }
        });

        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsAgree = document.getElementById('terms-agree').checked;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (!termsAgree) {
                alert('Please agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            if (name && email && password) {
                alert('Account created successfully! Welcome to Sweet Treats Bakery!');
            }
        });

        // Add smooth focus effects
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });