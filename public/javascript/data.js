
const shotTableRows = document.querySelectorAll("#shotTable tbody tr");

const pointTableRows = document.querySelectorAll("#pointTable tbody tr");
pointTableRows.forEach(pointRow => {
    pointRow.addEventListener("click", e => {
        //let rowID = e.target.parentNode.id;
        let pointNum = e.target.parentNode.querySelector("th").innerText;

        shotTableRows.forEach(shotRow => {
            shotRow.style.display = "table-row";
            let shotPointNum = shotRow.querySelector("td").innerText;
            if (shotPointNum !== pointNum) {
                shotRow.style.display = "none";
            }
        })
    });
});