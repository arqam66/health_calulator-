import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface WeightTipsSectionProps {
  status: string
}

export function WeightTipsSection({ status }: WeightTipsSectionProps) {
  // Diet tips based on weight status
  const getDietTips = () => {
    const baseTips = [
      "Drink plenty of water (at least 8 glasses daily)",
      "Eat a variety of colorful fruits and vegetables",
      "Choose whole grains over refined grains",
      "Include lean protein sources in your meals",
      "Limit processed foods and added sugars",
    ]

    const specificTips = {
      underweight: [
        "Eat nutrient-dense foods with healthy fats (nuts, avocados, olive oil)",
        "Have frequent meals and snacks throughout the day",
        "Add calorie-dense toppings to meals (cheese, nut butters)",
        "Drink smoothies with protein powder between meals",
        "Aim for a calorie surplus of 300-500 calories daily",
      ],
      "normal weight": [
        "Maintain a balanced diet with appropriate portion sizes",
        "Focus on nutrient timing around workouts",
        "Eat mindfully and listen to hunger cues",
        "Aim for a variety of foods to get all essential nutrients",
        "Consider meal prepping to maintain consistency",
      ],
      overweight: [
        "Create a modest calorie deficit (300-500 calories/day)",
        "Focus on high-volume, low-calorie foods like vegetables",
        "Be mindful of portion sizes using measuring tools",
        "Limit liquid calories from sodas and alcohol",
        "Plan meals ahead to avoid impulsive eating",
      ],
      obese: [
        "Work with a healthcare provider on a safe weight loss plan",
        "Focus on gradual, sustainable changes rather than crash diets",
        "Keep a food journal to increase awareness",
        "Prioritize protein to maintain muscle mass during weight loss",
        "Consider intermittent fasting after consulting a healthcare provider",
      ],
    }

    const statusLower = status.toLowerCase()
    return [...baseTips, ...(specificTips[statusLower as keyof typeof specificTips] || [])]
  }

  // Exercise tips based on weight status
  const getExerciseTips = () => {
    const baseTips = [
      "Aim for at least 150 minutes of moderate activity weekly",
      "Include both cardio and strength training in your routine",
      "Find activities you enjoy to make exercise sustainable",
      "Start slowly and gradually increase intensity",
      "Take rest days to allow your body to recover",
    ]

    const specificTips = {
      underweight: [
        "Focus on strength training to build muscle mass",
        "Limit excessive cardio that burns too many calories",
        "Consider compound exercises that work multiple muscle groups",
        "Ensure adequate protein intake after workouts",
        "Allow longer rest periods between sets for muscle growth",
      ],
      "normal weight": [
        "Mix up your routine to prevent plateaus",
        "Consider adding HIIT workouts for efficiency",
        "Try new activities to challenge different muscle groups",
        "Focus on improving performance metrics rather than weight",
        "Consider fitness challenges to stay motivated",
      ],
      overweight: [
        "Start with low-impact activities like walking or swimming",
        "Gradually increase duration before increasing intensity",
        "Include resistance training to preserve muscle mass",
        "Find an accountability partner or group for motivation",
        "Break exercise into shorter sessions if needed",
      ],
      obese: [
        "Begin with gentle movements like walking or water exercises",
        "Focus on daily movement rather than intense workouts initially",
        "Work with a fitness professional to ensure safe exercise",
        "Celebrate non-scale victories like improved mobility",
        "Consider seated exercises if standing is uncomfortable",
      ],
    }

    const statusLower = status.toLowerCase()
    return [...baseTips, ...(specificTips[statusLower as keyof typeof specificTips] || [])]
  }

  const dietTips = getDietTips()
  const exerciseTips = getExerciseTips()

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Weight Management Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Diet Tips</h3>
            <div className="space-y-3">
              {dietTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Exercise Tips</h3>
            <div className="space-y-3">
              {exerciseTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

