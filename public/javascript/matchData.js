const pointTableRows = document.querySelectorAll("#pointTable tbody tr");
pointTableRows.forEach(row => {
    row.addEventListener("click", e => {
        console.log(e.target.parentNode.id);
    });
});