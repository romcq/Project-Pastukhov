document.addEventListener("DOMContentLoaded", function () {
    // Показываем сообщение об ошибке
    function showError(input, message) {
        const parent = input.parentElement;
        let error = parent.querySelector(".error-message");
        if (!error) {
            error = document.createElement("div");
            error.className = "error-message text-danger mt-1";
            parent.appendChild(error);
        }
        error.textContent = message;
    }

    // Убираем сообщение об ошибке
    function removeError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector(".error-message");
        if (error) {
            parent.removeChild(error);
        }
    }

    // Работа с формой консультации
    const consultationForm = document.querySelector("#consultationForm");
    if (consultationForm) {
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const phoneInput = document.querySelector("#phone");
        const messageInput = document.querySelector("#message");

        function validateName() {
            if (!nameInput.value.trim()) {
                showError(nameInput, "Введите ваше имя.");
                return false;
            }
            removeError(nameInput);
            return true;
        }

        function validateEmail() {
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailInput.value.trim()) {
                showError(emailInput, "Email обязателен.");
                return false;
            }
            if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, "Введите корректный email.");
                return false;
            }
            removeError(emailInput);
            return true;
        }

        function validatePhone() {
            const phoneRegex = /^\\+?[0-9]{10,15}$/;
            if (!phoneInput.value.trim()) {
                showError(phoneInput, "Номер телефона обязателен.");
                return false;
            }
            if (!phoneRegex.test(phoneInput.value.trim())) {
                showError(phoneInput, "Введите корректный номер телефона.");
                return false;
            }
            removeError(phoneInput);
            return true;
        }

        function validateMessage() {
            if (!messageInput.value.trim()) {
                showError(messageInput, "Сообщение не может быть пустым.");
                return false;
            }
            removeError(messageInput);
            return true;
        }

        consultationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const isValid =
                validateName() &&
                validateEmail() &&
                validatePhone() &&
                validateMessage();

            if (isValid) {
                alert("Форма успешно отправлена!");
                consultationForm.reset();
            }
        });

        nameInput.addEventListener("input", validateName);
        emailInput.addEventListener("input", validateEmail);
        phoneInput.addEventListener("input", validatePhone);
        messageInput.addEventListener("input", validateMessage);
    }
});