import React from 'react'
import { useParams } from 'react-router-dom';
import "./StudentProfile.css";

const StudentProfile = ({ studentsData }) => {
  const { id } = useParams();


  const student = studentsData[id]
  return (
  
    <div className="card-1" >
      <div className="card-header-1">
        <h1>{student.name}</h1>
      </div>
      <div className="card-content-1">
        <p><b>Batch : {student.batch}</b> </p><br />
        <p><b>Gender : {student.gender}</b> </p><br />
        <p><b>Age : {student.age}</b></p><br />
        <p><b>Experience : {student.yearsOfExperience}</b></p><br />
        <p><b>Native : {student.native}</b></p>
      </div>
    </div>
   




  )
}

export default StudentProfile





{/* 
// <div className='card'>

// <h2>{student.name} </h2>
// <p> Gender:{student.gender}  </p>
// <p>Batch :{student.batch}  </p>
// <p>Years of  Experience:{student.experience}</p>
// <p>native :{student.native} </p>
// </div>                 */}