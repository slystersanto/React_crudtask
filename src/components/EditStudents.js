import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditStudents = ({studentsData,setStudents}) => {
    const history=useHistory();
    const {id}=useParams();
    const student=studentsData[id];
    const [editId, setEditId] = useState('');
    const [idx, setIdx] = useState("");
    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [gender, setGender] = useState('');
    const [experience, setExperience] = useState('');
    const [native, setNative] = useState('')

    useEffect(()=>{
        setEditId(student.id);
        setIdx(student.id); 
        setName(student.name);
        setBatch(student.batch);
        setGender(student.gender);
        setExperience(student.yearsOfExperience);
        setNative(student.native)

    }, []);


    const updateStudentData = () => {
        // select and find our student 
        const editStudentIndex = studentsData.findIndex((stud) => stud.id === editId);
    
        // we need the updated object
         const updatedObj = {
           id,
           name,
           batch,
           gender,
           yearsOfExperience : experience,
           native,

         }
    
        // change the updated object in the specific array of data
          studentsData[editStudentIndex] = updatedObj;
        //set the students data, 
         setStudents([...studentsData])
         setIdx("")
         setName("")
         setBatch("")
         setGender("")
         setExperience("")
         setNative("")
         history.push("/batchdetails")
        }

  return (
    <div className=" card-container">

            <div className="input-group">
                <form>

                    <label>ID:</label>
                    <input type="text" placeholder="Enter the Id" onChange={(event) => setIdx(event.target.value)} value={id} />

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

                   

                   <button type="button" onClick={updateStudentData} className="input-btnAdd" >UpdateData</button> 

                </form>
            </div>
            </div>
  )
}

export default EditStudents