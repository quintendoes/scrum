const toggleButton = document.querySelector(".toggle-button");
        const moduleList = document.querySelector(".module-list");
        
        toggleButton.addEventListener("click", () => {
            moduleList.classList.toggle("show-modules");
        });