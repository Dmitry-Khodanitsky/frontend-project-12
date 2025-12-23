import Lottie from 'lottie-react'
import ShakaAnimationData from '@/assets/lootie/shaka.json'

export const ShakaAnimation = () => {
  return (
    <Lottie animationData={ShakaAnimationData} loop={true} autoplay={true} />
  )
}
