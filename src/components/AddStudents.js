import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const AddStudents = ({studentsData,setStudents}) => {
    const history=useHistory();
   
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [gender, setGender] = useState('');
    const [experience, setExperience] = useState('');
    const [native, setNative] = useState('')
   
    

    const addNewStudent = () => {

        const newStudent = {
            id,
            name,
            batch,
            gender,
            yearsOfExperience: experience,
            native,
        }
        console.log(newStudent);


        setStudents([...studentsData, newStudent])
        setId("")
        setName("")
        setBatch("")
        setGender("")
        setExperience("")
        setNative("")
        history.push("/batchdetails")

    };

  return (
    <div className=" card-container">

    <div className="input-group">
        <form>

            <label>ID:</label>
            <input type="text" placeholder="Enter the Id" onChange={(event) => setId(event.target.value)} value={id} />

            <label>NAME:</label>
            <input type="text" placeholder="Enter  Name" onChange={(event) => setName(event.target.value)} value={name} />

            <label>BATCH:</label>
            <input type="text" placeholder="Enter  Batch" onChange={(event) => setBatch(event.target.value)} value={batch} />

            <label>GENDER:</label>
            <input type="text" placeholder="Enter  Gender" onChange={(event) => setGender(event.target.value)} value={gender} />

            <label>EXPERIENCE:</label>
            <input type="text" placeholder="Enter  Experience" onChange={(event) => setExperience(event.target.value)} value={experience} />

            <label>NATIVE:</label>
            <input type="text" placeholder="Enter  Native Place" onChange={(event) => setNative(event.target.value)} value={native} />

            <button type="button"  className="input-btnAdd" onClick={addNewStudent} >AddData</button>

            {/* {showUpdate ? <button type="button" onClick={updateStudentData} className="input-btnAdd" >UpdateData</button> : ""} */}

        </form>
    </div>
    </div>
  )
}

export default AddStudents