
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function StudentDetails({ studentsData, setStudents }) {

    const history = useHistory();

    useEffect(()=>{
        if (!localStorage.getItem("user-name")){
          history.replace("/")
        }
        }, [])



    const deleteStudentData = (studID) => {
        const selectedStudents = studentsData.filter((stud) => stud.id !== studID);
        setStudents(selectedStudents);
    }
    return (
        <div className=" card-container">
         <h1></h1>

            <div>

                {studentsData.map((stud, id) => (
                    <div className="card" key={id}>
                        <div className="card-header">
                            <h2>{stud.name}</h2>
                        </div>

                        <div className="card-content">
                            <p><b>Batch : {stud.batch}</b> </p><br />
                            <p><b>Gender : {stud.gender}</b> </p><br />
                            <p><b>Age : {stud.age}</b></p><br />
                            <p><b>Experience : {stud.yearsOfExperience}</b></p><br />
                            <p><b>Native : {stud.native}</b></p>
                        </div>

                        <div className="card-footer">
                            <button onClick={() => history.push(`/edit/${id}`)} >Edit</button>
                            <button onClick={() => deleteStudentData(stud.id)} >Delete</button>
                            <button onClick={() => history.push(`/student/${id}`)} >view</button>

                        </div>

                    </div>
                ))}
            </div>
        </div>


    )
}

export default StudentDetails