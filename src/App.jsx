function StudentCard({students}) {
  return (
    <>
      <h1>Student Card</h1>
      <p>{students.name}</p>
      <p>Age: {students.age}</p>
      <p>
        Attendance Status :{" "}
        {students.isPresent ? "Present" : "Absent"}{" "}
      </p>
      <p>{students.isPresent && <>Present Today</>}</p>
    </>
  );
}

function App() {
  const students = [
    {
      name: "Rupesh",
      age: 22,
      course: "Web Development",
      isPresent: true,
    },

    {
      name: "Alex",
      age: 33,
      course: "Machine Learning",
      isPresent: false,
    },

    {
      name: "Jhon",
      age: 24,
      course: "Software Engineering",
      isPresent: false,
    },

    {
      name: "Pramish",
      age: 25,
      course: "Business Studies",
      isPresent: true,
    },
  ];

  return (
    <>
      {students.map((student) => (
        <StudentCard key={student.name} students={student} />
      ))}
    </>
  );
}

export default App;


