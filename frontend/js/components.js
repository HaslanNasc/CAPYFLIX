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

    if (!menuToggle || !sidebar || !overlay) {
        console.error("❌ Elementos do menu não encontrados.");
        return;
    }

    console.log("✅ Navbar inicializado!");

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

    menuToggle.addEventListener("click", function () {

        console.log("🍔 Hamburger clicado!");

        if (sidebar.classList.contains("open")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    overlay.addEventListener(
        "click",
        closeMenu
    );


    /*
     * Fecha o menu quando
     * uma opção é selecionada.
     */

    const sidebarLinks =
        sidebar.querySelectorAll("a");

    sidebarLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    /*
     * Se voltar para desktop,
     * limpa o estado do menu.
     */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            closeMenu();

        }

    });

}