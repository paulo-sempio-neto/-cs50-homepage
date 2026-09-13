document.addEventListener("DOMContentLoaded", function () {
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const welcomeButton = document.querySelector("#welcome-button");
    const welcomeMessage = document.querySelector("#welcome-message");

    if (welcomeButton && welcomeMessage) {
        welcomeButton.addEventListener("click", function () {
            welcomeMessage.textContent =
                "Obrigado por visitar minha homepage. Estou sempre aprendendo e construindo novos projetos!";
            welcomeMessage.classList.add("text-info");
        });
    }

    const contactButton = document.querySelector("#contact-button");
    const contactMessage = document.querySelector("#contact-message");

    if (contactButton && contactMessage) {
        contactButton.addEventListener("click", function () {
            contactMessage.textContent =
                "Visite meu GitHub para acompanhar meus projetos e estudos.";
            contactMessage.classList.add("text-success");
        });
    }
});
