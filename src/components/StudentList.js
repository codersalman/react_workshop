import {useState, useEffect} from "react";

function StudentList() {
    const [students, setStudents] = useState([]);
    const url = 'http://localhost:3000/students';

    function fetchStudents() {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }}).then(response => response.json())
        .then(data => setStudents(data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    const studentsHTML = students.map(student => {
        return (
            <div key={student.id}>
                <h3>{student.name}</h3>
                <p>{student.age}</p>
            </div>
        )
    });

    return (
        <div>
            <h2>Student List</h2>
            {studentsHTML}
            <button onClick={fetchStudents}>Get Students</button>
        </div>
    );
}

export default StudentList;
