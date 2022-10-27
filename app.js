import makeStudent from "./components/Student.js";
const container = document.querySelector(".container");
const nameInput = document.querySelector(".nameInput");
const majorInput = document.querySelector(".majorInput");
const addStudentButton = document.querySelector(".addStudent");
// const studentName = document.querySelector(".studentName");
// const studentMajor = document.querySelector(".studentMajor");
// const studentId = document.querySelector(".studentId");

// fetch("http://localhost:8080/students/10")
// .then(res => res.json())
// .then(studentJson => {
//     console.log(studentJson);
//     studentName.innerText = studentJson.studentName;
//     studentMajor.innerText = studentJson.major;
//     studentId.innerText = studentJson.id;
// })
// .catch(err => console.error(err));

// fetch("http://localhost:8080/students/10")
// .then(res => res.json())
// .then(studentJson => {
//     console.log(studentJson);
//     container.innerHTML += makeStudent(studentJson);
// })
// .catch(err => console.error(err));
function getAllStudents() {
    fetch("http://localhost:8080/students/")
    .then(res => res.json())
    .then(students => {
        showAllStudents(students);
    })
    .catch(err => console.error(err));
}

function showAllStudents(studentsJson) {
    console.log(studentsJson);
    container.innerHTML = "";
    studentsJson.forEach(student => {
        const studentHTML = makeStudent(student)
        
        container.innerHTML += studentHTML;
        
    });
    const deleteButtons = document.querySelectorAll(".deleteStudent");
    deleteButtons.forEach(deleteButton => {
        const idEl = deleteButton.parentElement.querySelector(".studentID");
        deleteButton.addEventListener("click", () => {
            fetch(`http://localhost:8080/students/${idEl.value}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(students => {
                showAllStudents(students);
            })
        })
    })
}
getAllStudents();



addStudentButton.addEventListener("click", () => {
    const newStudentJson = {
        "studentName": nameInput.value,
        "major": majorInput.value
    }
    fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudentJson)
    })
    .then(res => res.json())
    .then(studentsJson => {
        showAllStudents(studentsJson);
    })
})