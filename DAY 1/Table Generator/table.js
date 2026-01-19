function generateTable() {
    let num = Number(document.getElementById("tableNum").value);
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += `
            <tr>
                <td>${num} * ${i}</td>
                <td>${num * i}</td>
            </tr>
        `;
    }

    document.getElementById("output").innerHTML = output;
}
