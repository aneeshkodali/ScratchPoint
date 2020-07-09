
const shotTable = document.querySelectorAll("#shotTable tbody tr");

const pointTableRows = document.querySelectorAll("#pointTable tbody tr");
pointTableRows.forEach(row => {
    row.addEventListener("click", e => {
        //let rowID = e.target.parentNode.id;
        let parentRow = e.target.parentNode.querySelector("th").innerText;

        shotTable.forEach(shot => {
            shot.style.display = "table-row";
            let shotPoint = shot.querySelector("td").innerText;
            if (parentRow !== shotPoint) {
                shot.style.display = "none";
            }
        })
    });
});