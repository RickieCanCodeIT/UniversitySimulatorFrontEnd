export default function makeStudent(studentJson) {
    return `
        <div>
            <h1 class="studentName">${studentJson.studentName}</h1>
            <p class="studentMajor">${studentJson.major}</p>
            <p class="studentId">Student ID: ${studentJson.id}</p>
            <input type="hidden" class="studentID" value="${studentJson.id}">
            <input type="button" class="deleteStudent" value="X">
        </div>
    `
}