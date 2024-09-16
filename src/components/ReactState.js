import { useState } from 'react';


import './StudentCard.css'

function ReactState(){


    const [studentName, setStudentName] = useState("Hello World")


    function changeStudentName(event){
        event.preventDefault();
        let name = document.getElementById("studentName").value;
        setStudentName(name)
    }


    return (
        <div>
            <h1 className="Heading">React State</h1>

            <form className="studentForm">
                <label>Enter Your Name</label>
                <input type="text" id="studentName" ></input>
                <button onClick={changeStudentName} >Submit</button>
            </form>


            <hr></hr>

            <div className="studentDetailsForm">
                <h2>Student Details</h2>
                <p>{studentName}</p>


            </div>

        </div>
    )




}

export default ReactState;
