import { WeightCalculator } from "@/components/weight-calculator"
import { CalorieCalculator } from "@/components/calorie-calculator"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-2">Health & Fitness Calculator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your BMI, daily calorie needs, and get personalized diet and exercise recommendations
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 font-urdu text-xl">
            اپنے BMI، روزانہ کیلوری کی ضروریات کا حساب لگائیں، اور اپنی غذا اور ورزش کے لیے ذاتی سفارشات حاصل کریں
          </p>
        </header>

        <div className="space-y-16">
          <WeightCalculator />
          <div className="border-t border-gray-200 pt-16"></div>
          <CalorieCalculator />
        </div>

        <footer className="mt-20 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Health Calculator. All rights reserved to Arqam Hussain.</p>
          <p className="mt-1 font-urdu text-base">
            © {new Date().getFullYear()} ہیلتھ کیلکولیٹر۔ تمام حقوق ارقم حسین کے لیے محفوظ ہیں۔
          </p>
        </footer>
      </div>
    </main>
  )
}

