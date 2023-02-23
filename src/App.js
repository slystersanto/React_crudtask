import React, { useState } from 'react';
 import './App.css';
 import "./components/StudentProfile.css"
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import  StudentDetails  from './components/Student';
import { data } from './Data/data';
import StudentProfile from './components/StudentProfile';
import AddStudents from './components/AddStudents';
import EditStudents from './components/EditStudents';


function App() {
  const [studentsData, setStudents] = useState(data);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />

          <Route path='/batchdetails'>
            <StudentDetails studentsData={studentsData} setStudents={setStudents}  />
            </Route>
             
          <Route path='/student/:id'>
            <StudentProfile studentsData={studentsData}/>
              </Route>

              <Route path='/add-student'>
            <AddStudents studentsData={studentsData} setStudents={setStudents} />
              </Route>

              
              <Route path='/edit/:id'>
            <EditStudents studentsData={studentsData} setStudents={setStudents} />
              </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;
