import Lottie from 'lottie-react'
import ShakaAnimationData from '@/assets/lootie/shaka.json'

export const ShakaAnimation = () => {
  return (
    <div className="w-75 w-md-100">
      <Lottie animationData={ShakaAnimationData} loop={true} />
    </div>
  )
}
