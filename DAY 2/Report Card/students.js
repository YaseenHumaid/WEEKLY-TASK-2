let students = [
    { regNo: "S101", name: "Ayaan", marks: 78 },
    { regNo: "S102", name: "Sara", marks: 45 },
    { regNo: "S103", name: "Rahul", marks: 88 },
    { regNo: "S104", name: "Meera", marks: 32 }
];

students.push({ regNo: "S105", name: "Zoya", marks: 67 });

console.log("All Students:");
students.map(student => {
    console.log(
        student.regNo + " | " +
        student.name + " | " +
        student.marks
    );
});

let passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);

function showStudents() {
    let rows = "";

    students.map(student => {
        let status = student.marks >= 40 ? "Pass" : "Fail";

        rows += `
            <tr>
                <td>${student.regNo}</td>
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${status}</td>
            </tr>
        `;
    });

    document.getElementById("output").innerHTML = rows;
}
