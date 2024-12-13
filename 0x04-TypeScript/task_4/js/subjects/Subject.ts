namespace Subjects {
  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for this subject";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingC === undefined ||
        this.teacher.experienceTeachingC === 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
