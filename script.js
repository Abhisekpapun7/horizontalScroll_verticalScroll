let scrollContainer = document.querySelector(".gallery");
        let backBtn = document.getElementById("backBtn");
        let nextBtn = document.getElementById("nextBtn");

        // Fix wheel event
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        }, { passive: false });

        nextBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft += 900;
        });

        backBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft -= 900;
        });