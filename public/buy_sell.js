document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const categories = document.querySelectorAll(".category");

    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toLowerCase();
        categories.forEach(category => {
            const categoryName = category.querySelector("h3").textContent.toLowerCase();
            if (categoryName.includes(filter)) {
                category.style.display = "";
            } else {
                category.style.display = "none";
            }
        });
    });
});
