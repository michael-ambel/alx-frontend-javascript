"use strict";
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        Subject.prototype.getRequirements = function () {
            return "Here is the list of requirements for this subject";
        };
        Subject.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingC === undefined ||
                this.teacher.experienceTeachingC === 0) {
                return "No available teacher";
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
