import Lottie from 'lottie-react'
import notFoundAnimationData from '../../assets/lootie/404animation.json'

const NotFoundAnimation = () => {
  return (
    <Lottie animationData={notFoundAnimationData} loop={true} autoplay={true} />
  )
}

export default NotFoundAnimation
