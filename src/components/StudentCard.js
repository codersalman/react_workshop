

import './StudentCard.css';


function StudentCard({data}){

    return(
        <>

            {
                data.map((student,index)=>{

                    return <li className="studentCard" key={index}>Name : {student.name} | Age : {student.age} | College : {student.college}</li>
                })
            }

       </>
    )



}

export default StudentCard;
