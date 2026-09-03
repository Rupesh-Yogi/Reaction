function StudentCard(props) {
  return (
            <>
          <h1>Student Card</h1>
          <p>{props.students.name}</p>
          <p>Age: {props.students.age}</p>
          <p>Attendance Status : {props.students.isPresent ? "Present" : "Absent"} </p>
          <p>{props.students.isPresent && <>Present Today</>}</p>
        </>
  );
}

function App() {
  const students = [
    {
      name: "Rupesh",
      age: 22,
      course: "Wev Development",
      isPresent: true
    },

    {
      name: "Alex",
      age: 33,
      course: "Machine Learning",
      isPresent: false
    },

    {
      name: "Jhon",
      age: 24,
      course: "Software Engineering",
      isPresent: false
    },

    {
      name: "Pramish",
      age: 25,
      course: "Business Studies",
      isPresent: true
    },
  ];

  return(
    <>
    {students.map((student) => (
          <StudentCard key={student.name} students = {student} />

    ))}

    </>
  )
}

export default App;
