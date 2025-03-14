// Calculate BMI using weight in kg and height in meters
export function calculateBMI(weight: number, height: number): number {
  if (weight <= 0 || height <= 0) return 0
  return weight / (height * height)
}

// Get weight status based on BMI
export function getWeightStatus(bmi: number): string {
  if (bmi < 18.5) return "Underweight"
  if (bmi < 25) return "Normal Weight"
  if (bmi < 30) return "Overweight"
  return "Obese"
}

// Get activity multiplier based on activity level
export function getActivityLevel(activityLevel: string): number {
  switch (activityLevel) {
    case "sedentary":
      return 1.2 // Little or no exercise
    case "light":
      return 1.375 // Light exercise 1-3 days/week
    case "moderate":
      return 1.55 // Moderate exercise 3-5 days/week
    case "active":
      return 1.725 // Hard exercise 6-7 days/week
    case "very-active":
      return 1.9 // Very hard exercise & physical job or 2x training
    default:
      return 1.55 // Default to moderate
  }
}

// Calculate daily calorie needs
export function calculateCalories(bmr: number, activityMultiplier: number): number {
  return bmr * activityMultiplier
}

