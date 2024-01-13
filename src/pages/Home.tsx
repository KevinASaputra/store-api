import { Card } from "../components/Card"
import { Header } from "../components/Header"

export const Home = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4">
        <Card />
      </main>
    </>
  )
}