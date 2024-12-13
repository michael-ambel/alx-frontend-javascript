"use strict";
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
var Subjects;
(function (Subjects) {
    // 1. Create and export constants for each subject
    Subjects.cpp = new Subjects.Cpp();
    Subjects.java = new Subjects.Java();
    Subjects.react = new Subjects.React();
    // 2. Create and export a constant Teacher object
    Subjects.cTeacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10,
        experienceTeachingJava: 10,
        experienceTeachingReact: 10,
    };
    // 3. For Cpp subject
    console.log("C++");
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    // 4. For Java subject
    console.log("Java");
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    // 5. For React subject
    console.log("React");
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
