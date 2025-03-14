"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { calculateBMI, getWeightStatus } from "@/lib/calculator-utils"
import { WeightTipsSection } from "@/components/weight-tips-section"
import { TipsDashboard } from "@/components/tips-dashboard"

export function WeightCalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [results, setResults] = useState<{
    bmi: number | null
    status: string
    showResults: boolean
  }>({
    bmi: null,
    status: "",
    showResults: false,
  })

  const handleCalculate = () => {
    if (!height || !weight) return

    const heightInM = Number.parseFloat(height) / 100
    const weightInKg = Number.parseFloat(weight)

    const bmi = calculateBMI(weightInKg, heightInM)
    const status = getWeightStatus(bmi)

    setResults({
      bmi,
      status,
      showResults: true,
    })
  }

  // Define status colors
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "underweight":
        return "text-blue-600"
      case "normal weight":
        return "text-green-600"
      case "overweight":
        return "text-yellow-600"
      case "obese":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Weight Calculator</h2>
        <p className="text-gray-600">Calculate your BMI and get weight management tips</p>
        <p className="text-gray-600 font-urdu text-xl mt-1">
          اپنا BMI حساب کریں اور وزن کے انتظام کے لیے تجاویز حاصل کریں
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>BMI Calculator</CardTitle>
            <CardDescription>Enter your height and weight to calculate your Body Mass Index</CardDescription>
            <div className="font-urdu text-base mt-1">
              اپنے جسم کے ماس انڈیکس کا حساب لگانے کے لیے اپنی لمبائی اور وزن درج کریں
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <div className="font-urdu text-sm">لمبائی (سینٹی میٹر)</div>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g. 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <div className="font-urdu text-sm">وزن (کلوگرام)</div>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={handleCalculate} className="w-full">
                Calculate BMI
                <span className="font-urdu mr-2">BMI حساب کریں</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {results.showResults && (
          <>
            <Card className="mt-8">
              <CardHeader className="pb-2">
                <CardTitle>BMI Results</CardTitle>
                <div className="font-urdu text-base">BMI کے نتائج</div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{results.bmi?.toFixed(1)}</div>
                  <div className={`text-xl font-medium ${getStatusColor(results.status)}`}>{results.status}</div>
                  <div className="font-urdu text-lg mt-1">
                    {results.status.toLowerCase() === "underweight" && "کم وزن"}
                    {results.status.toLowerCase() === "normal weight" && "معمول کا وزن"}
                    {results.status.toLowerCase() === "overweight" && "زیادہ وزن"}
                    {results.status.toLowerCase() === "obese" && "موٹاپا"}
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>BMI Categories:</p>
                    <ul className="mt-2 space-y-1">
                      <li>Underweight: BMI less than 18.5</li>
                      <li>Normal weight: BMI 18.5 to 24.9</li>
                      <li>Overweight: BMI 25 to 29.9</li>
                      <li>Obese: BMI 30 or higher</li>
                    </ul>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 font-urdu">
                    <p>BMI کی اقسام:</p>
                    <ul className="mt-2 space-y-1">
                      <li>کم وزن: BMI 18.5 سے کم</li>
                      <li>معمول کا وزن: BMI 18.5 سے 24.9 تک</li>
                      <li>زیادہ وزن: BMI 25 سے 29.9 تک</li>
                      <li>موٹاپا: BMI 30 یا اس سے زیادہ</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TipsDashboard bmi={results.bmi} status={results.status} />

            <WeightTipsSection status={results.status} />
          </>
        )}
      </div>
    </section>
  )
}

