import "./App.css"
import CampaignHeader from "./components/CampaignHeader"
import DashboardStats from "./components/DashboardStats"
import DeliveryReport from "./components/DeliveryReport"

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f7f8fb] py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col gap-4 w-full max-w-[1400px]">
        <CampaignHeader />
        <DashboardStats />
        <DeliveryReport />
      </div>
    </div>
  )
}

export default App
