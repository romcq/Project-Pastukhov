document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#consultationForm");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const messageInput = document.querySelector("#message");

    // Показать сообщение об ошибке
    const showError = (input, message) => {
        const parent = input.parentElement;
        const error = parent.querySelector(".error-message");
        if (error) {
            error.textContent = message;
        } else {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error-message text-danger mt-1";
            errorDiv.textContent = message;
            parent.appendChild(errorDiv);
        }
    };

    // Убрать сообщение об ошибке
    const removeError = (input) => {
        const parent = input.parentElement;
        const error = parent.querySelector(".error-message");
        if (error) {
            parent.removeChild(error);
        }
    };

    // Проверка имени
    const validateName = () => {
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Введите ваше имя.");
            return false;
        }
        removeError(nameInput);
        return true;
    };

    // Проверка email
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email обязателен.");
            return false;
        }
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Введите корректный email.");
            return false;
        }
        removeError(emailInput);
        return true;
    };

    // Проверка номера телефона
    const validatePhone = () => {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (phoneInput.value.trim() === "") {
            showError(phoneInput, "Номер телефона обязателен.");
            return false;
        }
        if (!phoneRegex.test(phoneInput.value.trim())) {
            showError(phoneInput, "Введите корректный номер телефона.");
            return false;
        }
        removeError(phoneInput);
        return true;
    };

    // Проверка сообщения
    const validateMessage = () => {
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Сообщение не может быть пустым.");
            return false;
        }
        removeError(messageInput);
        return true;
    };

    // Обработчик отправки формы
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Отменяем отправку формы
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            alert("Форма успешно отправлена!");
            form.reset(); // Сбрасываем форму
        }
    });

    // Обработчики ввода
    nameInput.addEventListener("input", function () {
        if (nameInput.value.trim() !== "") {
            removeError(nameInput);
        }
        validateName();
    });

    emailInput.addEventListener("input", function () {
        if (emailInput.value.trim() !== "") {
            removeError(emailInput);
        }
        validateEmail();
    });

    phoneInput.addEventListener("input", function () {
        if (phoneInput.value.trim() !== "") {
            removeError(phoneInput);
        }
        validatePhone();
    });

    messageInput.addEventListener("input", function () {
        if (messageInput.value.trim() !== "") {
            removeError(messageInput);
        }
        validateMessage();
    });
});
