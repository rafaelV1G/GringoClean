// ======================================================
// GRINGOCLEAN
// JAVASCRIPT
// ======================================================


// ======================================================
// CONFIGURAÇÃO DO WHATSAPP
// ======================================================

// COLOQUE SEU NÚMERO AQUI.
//
// Exemplo:
// (34) 99999-9999
//
// Fica:
// 5534999999999
//
// NÃO coloque +, espaços ou hífen.

const WHATSAPP_NUMBER = "5534999999999";


const DEFAULT_MESSAGE =
    "Olá! Vim pelo site da GringoClean e gostaria de solicitar um orçamento.";


// ======================================================
// WHATSAPP
// ======================================================

function abrirWhatsApp(mensagem = DEFAULT_MESSAGE) {

    const numero =
        WHATSAPP_NUMBER.replace(/\D/g, "");


    if (
        !numero ||
        numero.length < 12
    ) {

        alert(
            "Configure seu número de WhatsApp no arquivo script.js."
        );

        return;
    }


    const texto =
        encodeURIComponent(mensagem);


    const link =
        "https://wa.me/" +
        numero +
        "?text=" +
        texto;


    window.open(
        link,
        "_blank",
        "noopener,noreferrer"
    );
}


// ======================================================
// MENU MOBILE
// ======================================================

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");


            if (
                nav.classList.contains("open")
            ) {

                menuButton.textContent = "✕";

            } else {

                menuButton.textContent = "☰";

            }

        }
    );
}


document.querySelectorAll("#nav a").forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (nav) {

                    nav.classList.remove("open");

                }

                if (menuButton) {

                    menuButton.textContent = "☰";

                }

            }
        );

    }
);


// ======================================================
// BOTÕES DO WHATSAPP
// ======================================================

const heroWhatsapp =
    document.getElementById("heroWhatsapp");

const mattressWhatsapp =
    document.getElementById("mattressWhatsapp");

const ctaWhatsapp =
    document.getElementById("ctaWhatsapp");

const footerWhatsapp =
    document.getElementById("footerWhatsapp");


function adicionarWhatsApp(
    elemento,
    mensagem
) {

    if (!elemento) return;


    elemento.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            abrirWhatsApp(mensagem);

        }
    );
}


adicionarWhatsApp(
    heroWhatsapp,
    "Olá! Vim pelo site da GringoClean e gostaria de solicitar um orçamento."
);


adicionarWhatsApp(
    mattressWhatsapp,
    "Olá! Vim pelo site da GringoClean e gostaria de saber mais sobre a limpeza de colchão."
);


adicionarWhatsApp(
    ctaWhatsapp,
    "Olá! Vim pelo site da GringoClean e gostaria de solicitar um orçamento para limpeza."
);


adicionarWhatsApp(
    footerWhatsapp,
    "Olá! Vim pelo site da GringoClean e gostaria de solicitar um orçamento."
);


// ======================================================
// MODAL
// ======================================================

const modal =
    document.getElementById("modal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalWhatsapp =
    document.getElementById("modalWhatsapp");


function abrirModal(
    servico
) {

    if (!modal) return;


    modalTitle.textContent =
        servico;


    modalText.textContent =
        "Gostaria de saber mais sobre " +
        servico.toLowerCase() +
        "? Entre em contato pelo WhatsApp para consultar disponibilidade e solicitar seu orçamento.";


    modal.classList.add("open");


    if (modalWhatsapp) {

        modalWhatsapp.onclick =
            function (event) {

                event.preventDefault();


                abrirWhatsApp(
                    "Olá! Vim pelo site da GringoClean e gostaria de solicitar um orçamento para " +
                    servico.toLowerCase() +
                    "."
                );

            };

    }

}


function fecharModal() {

    if (!modal) return;

    modal.classList.remove("open");

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        fecharModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                fecharModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            fecharModal();

        }

    }
);


// ======================================================
// SERVIÇOS
// ======================================================

document
    .querySelectorAll("[data-service]")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const servico =
                        button.getAttribute(
                            "data-service"
                        );


                    abrirModal(
                        servico
                    );

                }
            );

        }
    );


// ======================================================
// ANIMAÇÃO SUAVE DOS LINKS
// ======================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const destino =
                        link.getAttribute("href");


                    if (
                        !destino ||
                        destino === "#"
                    ) {

                        return;

                    }


                    const elemento =
                        document.querySelector(
                            destino
                        );


                    if (!elemento) {

                        return;

                    }


                    event.preventDefault();


                    elemento.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }
    );


// ======================================================
// MENSAGEM NO CONSOLE
// ======================================================

console.log(
    "GringoClean carregada com sucesso."
);
