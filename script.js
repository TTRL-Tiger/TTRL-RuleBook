
function searchRules() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(input)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });

    // Always show the search bar section
    document.getElementById("search").style.display = "block";
}
