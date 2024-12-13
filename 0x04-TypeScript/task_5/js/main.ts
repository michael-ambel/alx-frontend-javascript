// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "Major"; // Unique brand identifier for MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "Minor"; // Unique brand identifier for MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  };
}

// Example usage
const subject1Major: MajorCredits = { credits: 5, brand: "Major" };
const subject2Major: MajorCredits = { credits: 3, brand: "Major" };
const subject1Minor: MinorCredits = { credits: 4, brand: "Minor" };
const subject2Minor: MinorCredits = { credits: 2, brand: "Minor" };

// Log results
console.log(
  "Total Major Credits: ",
  sumMajorCredits(subject1Major, subject2Major)
);
console.log(
  "Total Minor Credits: ",
  sumMinorCredits(subject1Minor, subject2Minor)
);
