"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getActivityLevel } from "@/lib/calculator-utils"
import { FoodRecommendations } from "@/components/food-recommendations"
import { ExerciseTips } from "@/components/exercise-tips"
import { TipsDashboard } from "@/components/tips-dashboard"

export function CalorieCalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("male")
  const [activityLevel, setActivityLevel] = useState("moderate")
  const [goal, setGoal] = useState("maintain")
  const [results, setResults] = useState<{
    calories: number | null
    targetCalories: number | null
    showResults: boolean
  }>({
    calories: null,
    targetCalories: null,
    showResults: false,
  })

  const handleCalculate = () => {
    if (!height || !weight || !age) return

    const weightInKg = Number.parseFloat(weight)
    const ageInYears = Number.parseInt(age)
    const activityMultiplier = getActivityLevel(activityLevel)

    // Basic BMR calculation using Mifflin-St Jeor Equation
    let bmr
    if (gender === "male") {
      bmr = 10 * weightInKg + 6.25 * Number.parseFloat(height) - 5 * ageInYears + 5
    } else {
      bmr = 10 * weightInKg + 6.25 * Number.parseFloat(height) - 5 * ageInYears - 161
    }

    const maintenanceCalories = bmr * activityMultiplier

    // Adjust calories based on goal
    let targetCalories = maintenanceCalories
    if (goal === "lose") {
      targetCalories = maintenanceCalories - 500 // 500 calorie deficit for weight loss
    } else if (goal === "gain") {
      targetCalories = maintenanceCalories + 500 // 500 calorie surplus for weight gain
    }

    setResults({
      calories: maintenanceCalories,
      targetCalories: targetCalories,
      showResults: true,
    })
  }

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600">Calorie Calculator</h2>
        <p className="text-gray-600">
          Calculate your daily calorie needs and get personalized food and exercise recommendations
        </p>
        <p className="text-gray-600 font-urdu text-xl mt-1">
          اپنی روزانہ کیلوری کی ضروریات کا حساب لگائیں اور ذاتی غذا اور ورزش کی سفارشات حاصل کریں
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Daily Calorie Calculator</CardTitle>
            <CardDescription>Enter your details to calculate your daily calorie needs</CardDescription>
            <div className="font-urdu text-base mt-1">
              اپنی روزانہ کیلوری کی ضروریات کا حساب لگانے کے لیے اپنی تفصیلات درج کریں
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calHeight">Height (cm)</Label>
                  <div className="font-urdu text-sm">لمبائی (سینٹی میٹر)</div>
                  <Input
                    id="calHeight"
                    type="number"
                    placeholder="e.g. 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calWeight">Weight (kg)</Label>
                  <div className="font-urdu text-sm">وزن (کلوگرام)</div>
                  <Input
                    id="calWeight"
                    type="number"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calAge">Age</Label>
                  <div className="font-urdu text-sm">عمر</div>
                  <Input
                    id="calAge"
                    type="number"
                    placeholder="e.g. 30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calGender">Gender</Label>
                  <div className="font-urdu text-sm">جنس</div>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="calGender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">
                        Male <span className="font-urdu mr-1">مرد</span>
                      </SelectItem>
                      <SelectItem value="female">
                        Female <span className="font-urdu mr-1">عورت</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calActivity">Activity Level</Label>
                  <div className="font-urdu text-sm">سرگرمی کی سطح</div>
                  <Select value={activityLevel} onValueChange={setActivityLevel}>
                    <SelectTrigger id="calActivity">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">
                        Sedentary <span className="font-urdu mr-1">غیر متحرک</span>
                      </SelectItem>
                      <SelectItem value="light">
                        Light <span className="font-urdu mr-1">ہلکی سرگرمی</span>
                      </SelectItem>
                      <SelectItem value="moderate">
                        Moderate <span className="font-urdu mr-1">معتدل سرگرمی</span>
                      </SelectItem>
                      <SelectItem value="active">
                        Active <span className="font-urdu mr-1">متحرک</span>
                      </SelectItem>
                      <SelectItem value="very-active">
                        Very Active <span className="font-urdu mr-1">بہت متحرک</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calGoal">Your Goal</Label>
                <div className="font-urdu text-sm">آپ کا مقصد</div>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger id="calGoal">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose">
                      Lose Weight <span className="font-urdu mr-1">وزن کم کرنا</span>
                    </SelectItem>
                    <SelectItem value="maintain">
                      Maintain Weight <span className="font-urdu mr-1">وزن برقرار رکھنا</span>
                    </SelectItem>
                    <SelectItem value="gain">
                      Gain Weight <span className="font-urdu mr-1">وزن بڑھانا</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleCalculate} className="w-full">
                Calculate Calories
                <span className="font-urdu mr-2">کیلوریز حساب کریں</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {results.showResults && (
          <>
            <Card className="mt-8">
              <CardHeader className="pb-2">
                <CardTitle>Calorie Results</CardTitle>
                <div className="font-urdu text-base">کیلوری کے نتائج</div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-lg font-medium text-blue-800 mb-2">Maintenance Calories</div>
                    <div className="font-urdu text-base text-blue-800">برقرار رکھنے کی کیلوریز</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{results.calories?.toFixed(0)}</div>
                    <div className="text-sm text-gray-600">Calories needed to maintain your current weight</div>
                    <div className="text-sm text-gray-600 font-urdu mt-1">
                      اپنا موجودہ وزن برقرار رکھنے کے لیے درکار کیلوریز
                    </div>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-lg font-medium text-green-800 mb-2">
                      {goal === "lose"
                        ? "Weight Loss Target"
                        : goal === "gain"
                          ? "Weight Gain Target"
                          : "Recommended Intake"}
                    </div>
                    <div className="font-urdu text-base text-green-800">
                      {goal === "lose"
                        ? "وزن کم کرنے کا ہدف"
                        : goal === "gain"
                          ? "وزن بڑھانے کا ہدف"
                          : "تجویز کردہ انٹیک"}
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.targetCalories?.toFixed(0)}</div>
                    <div className="text-sm text-gray-600">
                      {goal === "lose"
                        ? "Daily calories for safe weight loss"
                        : goal === "gain"
                          ? "Daily calories for healthy weight gain"
                          : "Recommended daily calorie intake"}
                    </div>
                    <div className="text-sm text-gray-600 font-urdu mt-1">
                      {goal === "lose"
                        ? "محفوظ وزن کم کرنے کے لیے روزانہ کیلوریز"
                        : goal === "gain"
                          ? "صحت مند وزن بڑھانے کے لیے روزانہ کیلوریز"
                          : "تجویز کردہ روزانہ کیلوری انٹیک"}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  <p className="font-medium">Note:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>These calculations provide estimates based on population averages.</li>
                    <li>Individual metabolism and needs may vary.</li>
                    <li>
                      For weight loss, a deficit of 500 calories/day leads to approximately 0.5kg (1lb) loss per week.
                    </li>
                    <li>Consult with a healthcare professional before making significant dietary changes.</li>
                  </ul>
                </div>
                <div className="mt-3 text-sm text-gray-600 font-urdu">
                  <p className="font-medium">نوٹ:</p>
                  <ul className="list-disc pr-5 mt-2 space-y-1 text-right">
                    <li>یہ حساب آبادی کے اوسط پر مبنی تخمینے فراہم کرتے ہیں۔</li>
                    <li>انفرادی میٹابولزم اور ضروریات مختلف ہو سکتی ہیں۔</li>
                    <li>
                      وزن کم کرنے کے لیے، 500 کیلوری/دن کی کمی سے تقریباً 0.5 کلوگرام (1 پاؤنڈ) فی ہفتہ کمی آتی ہے۔
                    </li>
                    <li>غذائی عادات میں نمایاں تبدیلیاں کرنے سے پہلے صحت کے ماہر سے مشورہ کریں۔</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <TipsDashboard calories={results.targetCalories} goal={goal} />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FoodRecommendations goal={goal} targetCalories={results.targetCalories} />
              <ExerciseTips goal={goal} />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

