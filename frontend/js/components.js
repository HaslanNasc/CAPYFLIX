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