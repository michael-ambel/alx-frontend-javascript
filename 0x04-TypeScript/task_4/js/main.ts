/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

namespace Subjects {
  // 1. Create and export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // 2. Create and export a constant Teacher object
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
    experienceTeachingJava: 10,
    experienceTeachingReact: 10,
  };

  // 3. For Cpp subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // 4. For Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // 5. For React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
