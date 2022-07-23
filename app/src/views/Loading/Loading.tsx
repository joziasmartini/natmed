import Interface from "../../components/Interface/Interface"
import Space from "../../components/Space/Space"
import "./Loading.sass"
import { ChaoticOrbit } from '@uiball/loaders'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

type Props = {}

export default function Loading({}: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000)
  }, [])

  return (
    <Interface>
      <Space pixels={0} />
      <div className="loading-animation">
        <ChaoticOrbit size={35} color="#5EB493" />
      </div>
      <Space pixels={0} />
  </Interface>
  )
}