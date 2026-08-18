document.addEventListener("DOMContentLoaded", () => {

    const components = document.querySelectorAll("[data-component]");

    console.log("Componentes encontrados:", components.length);

    components.forEach(async (element) => {

        const componentName = element.dataset.component;

        console.log(`Carregando componente: ${componentName}`);

        try {

            const response = await fetch(
                `frontend/components/${componentName}.html`
            );

            console.log(
                `Resposta ${componentName}:`,
                response.status
            );

            if (!response.ok) {
                throw new Error(
                    `Erro ao carregar ${componentName}: ${response.status}`
                );
            }

            const html = await response.text();

            element.innerHTML = html;

            if (componentName === "navbar") {
                initNavbar();
            }

            console.log(
                `✅ ${componentName} carregado!`
            );

        } catch (error) {

            console.error(
                `❌ Erro no componente ${componentName}:`,
                error
            );

        }

    });

});

function initNavbar() {

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    /*
     * Verifica se os elementos existem
     */

    if (!menuToggle || !sidebar || !overlay) {

        console.error("❌ Elementos do menu não encontrados.");

        return;
    }

    console.log("✅ Navbar inicializado!");


    /*
     * =========================
     * ABRIR MENU MOBILE
     * =========================
     */

    function openMenu() {

        sidebar.classList.add("open");

        overlay.classList.add("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.innerHTML =
            '<i class="bi bi-x-lg"></i>';
    }


    /*
     * =========================
     * FECHAR MENU MOBILE
     * =========================
     */

    function closeMenu() {

        sidebar.classList.remove("open");

        overlay.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML =
            '<i class="bi bi-list"></i>';
    }


    /*
     * =========================
     * CLIQUE NO HAMBURGER
     * =========================
     */

    menuToggle.addEventListener("click", function () {

        console.log("🍔 Hamburger clicado!");

        /*
         * MOBILE
         */

        if (window.innerWidth <= 700) {

            if (sidebar.classList.contains("open")) {

                closeMenu();

            } else {

                openMenu();

            }

            return;
        }


        /*
         * DESKTOP
         */

        sidebar.classList.toggle("collapsed");

        document.body.classList.toggle(
            "sidebar-collapsed"
        );

        console.log("🖥️ Sidebar desktop alterada!");
    });


    /*
     * =========================
     * CLICAR NO OVERLAY
     * =========================
     */

    overlay.addEventListener(
        "click",
        closeMenu
    );


    /*
     * =========================
     * LINKS DA SIDEBAR
     * =========================
     */

    const sidebarLinks =
        sidebar.querySelectorAll("a");


    sidebarLinks.forEach(link => {

        link.addEventListener("click", () => {

            /*
             * Só fecha automaticamente
             * no celular.
             */

            if (window.innerWidth <= 700) {

                closeMenu();

            }

        });

    });


    /*
     * =========================
     * RESPONSIVIDADE
     * =========================
     */

    window.addEventListener("resize", () => {

        /*
         * Voltou para desktop
         */

        if (window.innerWidth > 700) {

            closeMenu();

        }

    });

}