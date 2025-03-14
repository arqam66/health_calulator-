import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, AlertCircle } from "lucide-react"

interface FoodRecommendationsProps {
  goal: string
  targetCalories: number | null
}

export function FoodRecommendations({ goal, targetCalories }: FoodRecommendationsProps) {
  // Get meal plan based on goal
  const getMealPlan = () => {
    if (goal === "lose") {
      return {
        breakfast: [
          "Greek yogurt with berries and a sprinkle of nuts (300 cal)",
          "Vegetable omelet with 2 eggs and spinach (250 cal)",
          "Overnight oats with chia seeds and apple (350 cal)",
          "Protein smoothie with spinach, banana, and protein powder (300 cal)",
          "Avocado toast on whole grain bread with an egg (350 cal)",
        ],
        lunch: [
          "Grilled chicken salad with olive oil dressing (400 cal)",
          "Tuna wrap with whole grain tortilla and vegetables (450 cal)",
          "Lentil soup with a small whole grain roll (400 cal)",
          "Quinoa bowl with roasted vegetables and chickpeas (450 cal)",
          "Turkey and vegetable lettuce wraps (350 cal)",
        ],
        dinner: [
          "Baked salmon with roasted Brussels sprouts (450 cal)",
          "Stir-fried tofu with vegetables and brown rice (400 cal)",
          "Grilled lean steak with sweet potato and green beans (500 cal)",
          "Zucchini noodles with turkey meatballs and tomato sauce (400 cal)",
          "Baked chicken breast with quinoa and steamed broccoli (450 cal)",
        ],
        snacks: [
          "Apple with 1 tablespoon almond butter (150 cal)",
          "Carrot sticks with hummus (100 cal)",
          "String cheese and a small piece of fruit (150 cal)",
          "Small handful of mixed nuts (150 cal)",
          "Protein shake with water (120 cal)",
        ],
      }
    } else if (goal === "gain") {
      return {
        breakfast: [
          "Oatmeal made with whole milk, banana, and peanut butter (600 cal)",
          "4-egg omelet with cheese, vegetables, and avocado (650 cal)",
          "Protein pancakes with maple syrup and Greek yogurt (550 cal)",
          "Smoothie with protein powder, banana, peanut butter, and milk (600 cal)",
          "Bagel with cream cheese, smoked salmon, and avocado (650 cal)",
        ],
        lunch: [
          "Chicken wrap with avocado, cheese, and sweet potato fries (750 cal)",
          "Tuna melt sandwich with side salad and olive oil dressing (700 cal)",
          "Rice bowl with beef, beans, cheese, and guacamole (800 cal)",
          "Pasta with meat sauce and garlic bread (750 cal)",
          "Chicken and vegetable stir-fry with brown rice (700 cal)",
        ],
        dinner: [
          "Salmon with quinoa, roasted vegetables, and olive oil (700 cal)",
          "Steak with baked potato, sour cream, and steamed vegetables (800 cal)",
          "Chicken thighs with sweet potato and roasted Brussels sprouts (750 cal)",
          "Lamb chops with couscous and grilled vegetables (800 cal)",
          "Bean and cheese burrito with rice and guacamole (750 cal)",
        ],
        snacks: [
          "Trail mix with dried fruit and nuts (300 cal)",
          "Protein bar and banana (350 cal)",
          "Cottage cheese with pineapple (250 cal)",
          "Peanut butter and jelly sandwich (350 cal)",
          "Greek yogurt with granola and honey (300 cal)",
        ],
      }
    } else {
      // maintain
      return {
        breakfast: [
          "Oatmeal with berries and a tablespoon of nut butter (400 cal)",
          "Whole grain toast with avocado and 2 eggs (450 cal)",
          "Greek yogurt parfait with granola and fruit (400 cal)",
          "Smoothie with protein powder, spinach, and banana (350 cal)",
          "Breakfast burrito with eggs, beans, and vegetables (450 cal)",
        ],
        lunch: [
          "Turkey sandwich on whole grain bread with side salad (500 cal)",
          "Quinoa bowl with grilled chicken and vegetables (550 cal)",
          "Mediterranean salad with feta, olives, and olive oil dressing (450 cal)",
          "Lentil soup with whole grain roll (500 cal)",
          "Chicken and vegetable wrap with hummus (550 cal)",
        ],
        dinner: [
          "Grilled fish with roasted vegetables and brown rice (550 cal)",
          "Lean beef stir-fry with vegetables and noodles (600 cal)",
          "Baked chicken with sweet potato and green beans (550 cal)",
          "Vegetable and bean chili with a small cornbread muffin (500 cal)",
          "Shrimp and vegetable pasta with olive oil (600 cal)",
        ],
        snacks: [
          "Apple with 2 tablespoons of peanut butter (200 cal)",
          "Greek yogurt with a drizzle of honey (150 cal)",
          "Small handful of nuts and dried fruit (200 cal)",
          "Hummus with vegetable sticks (150 cal)",
          "Hard-boiled egg and a piece of fruit (150 cal)",
        ],
      }
    }
  }

  // Get foods to focus on based on goal
  const getFoodsToFocus = () => {
    if (goal === "lose") {
      return [
        "High-fiber vegetables (broccoli, spinach, cauliflower)",
        "Lean proteins (chicken breast, fish, tofu, egg whites)",
        "Low-glycemic fruits (berries, apples, pears)",
        "Complex carbohydrates (quinoa, brown rice, sweet potatoes)",
        "Healthy fats in moderation (avocado, olive oil, nuts)",
        "Water and unsweetened beverages",
        "Legumes (lentils, chickpeas, black beans)",
        "Low-fat dairy or alternatives (Greek yogurt, almond milk)",
      ]
    } else if (goal === "gain") {
      return [
        "Calorie-dense foods (nuts, dried fruits, avocados)",
        "Protein-rich foods (chicken, beef, eggs, dairy, legumes)",
        "Healthy carbohydrates (whole grains, potatoes, pasta)",
        "Healthy fats (olive oil, nut butters, full-fat dairy)",
        "Protein smoothies and shakes",
        "Nutrient-dense vegetables and fruits",
        "Whole milk and full-fat dairy products",
        "Energy-dense snacks (trail mix, granola, protein bars)",
      ]
    } else {
      // maintain
      return [
        "Balanced mix of lean proteins (chicken, fish, beans)",
        "Complex carbohydrates (whole grains, fruits, vegetables)",
        "Healthy fats (avocados, nuts, olive oil)",
        "Variety of colorful fruits and vegetables",
        "Moderate portions of dairy or alternatives",
        "Adequate hydration (water, herbal teas)",
        "Minimally processed foods",
        "Herbs and spices for flavor without extra calories",
      ]
    }
  }

  // Get foods to limit based on goal
  const getFoodsToLimit = () => {
    if (goal === "lose") {
      return [
        "Sugary beverages (soda, fruit juices, sweetened coffee)",
        "Processed foods high in refined carbs",
        "Fried foods and fast food",
        "High-calorie condiments (mayo, creamy dressings)",
        "Alcohol (contains empty calories)",
        "Desserts and sweets",
        "White bread, pasta, and refined grains",
        "High-sodium processed foods",
      ]
    } else if (goal === "gain") {
      return [
        "Low-calorie foods that fill you up quickly",
        "Diet foods and beverages",
        "Excessive caffeine (can reduce appetite)",
        "Very high-fiber foods before meals",
        "Processed foods with empty calories",
        "Alcohol (can interfere with muscle building)",
        "Foods that cause digestive discomfort",
        "Excessive water right before meals",
      ]
    } else {
      // maintain
      return [
        "Highly processed foods",
        "Foods with added sugars",
        "Trans fats and excessive saturated fats",
        "High-sodium processed foods",
        "Excessive alcohol consumption",
        "Large portions of calorie-dense foods",
        "Sugary beverages",
        "Late-night heavy meals",
      ]
    }
  }

  const mealPlan = getMealPlan()
  const foodsToFocus = getFoodsToFocus()
  const foodsToLimit = getFoodsToLimit()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Food Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="meal-plan" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="meal-plan">Meal Ideas</TabsTrigger>
            <TabsTrigger value="focus">Foods to Focus On</TabsTrigger>
            <TabsTrigger value="limit">Foods to Limit</TabsTrigger>
          </TabsList>

          <TabsContent value="meal-plan" className="space-y-4">
            <div>
              <h3 className="font-medium text-green-700 mb-2">Breakfast Options</h3>
              <ul className="list-disc pl-5 space-y-1">
                {mealPlan.breakfast.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-2">Lunch Options</h3>
              <ul className="list-disc pl-5 space-y-1">
                {mealPlan.lunch.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-2">Dinner Options</h3>
              <ul className="list-disc pl-5 space-y-1">
                {mealPlan.dinner.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-2">Snack Options</h3>
              <ul className="list-disc pl-5 space-y-1">
                {mealPlan.snacks.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>

            {targetCalories && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm">
                <p className="font-medium text-blue-800">Daily Target: {targetCalories.toFixed(0)} calories</p>
                <p className="text-gray-700 mt-1">
                  Aim to distribute your calories throughout the day. The meal options above provide approximate calorie
                  counts to help you plan.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="focus">
            <h3 className="font-medium text-green-700 mb-3">
              Foods to Emphasize for{" "}
              {goal === "lose" ? "Weight Loss" : goal === "gain" ? "Weight Gain" : "Weight Maintenance"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {foodsToFocus.map((food, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{food}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm">
              <p className="text-gray-700">
                {goal === "lose"
                  ? "Focus on foods that provide high nutritional value with fewer calories. These foods help you feel full while supporting your weight loss goals."
                  : goal === "gain"
                    ? "These foods help you consume more calories in a healthy way, supporting muscle growth and weight gain."
                    : "These foods provide balanced nutrition to maintain your current weight while supporting overall health."}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="limit">
            <h3 className="font-medium text-red-600 mb-3">
              Foods to Limit for{" "}
              {goal === "lose" ? "Weight Loss" : goal === "gain" ? "Weight Gain" : "Weight Maintenance"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {foodsToLimit.map((food, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>{food}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-red-50 rounded-lg text-sm">
              <p className="text-gray-700">
                {goal === "lose"
                  ? "These foods are typically high in calories but low in nutrients. Limiting them helps create a calorie deficit for weight loss."
                  : goal === "gain"
                    ? "While gaining weight, focus on nutritious calories rather than empty ones. These foods may hinder quality weight gain."
                    : "These foods can lead to weight fluctuations and health issues even if your total calorie intake remains constant."}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

