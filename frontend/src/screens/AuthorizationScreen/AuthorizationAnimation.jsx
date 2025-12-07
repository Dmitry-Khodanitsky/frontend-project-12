import Lottie from 'lottie-react'
import loginAnimationData from '../../assets/lootie/shaka.json'

const AuthorizationAnimation = () => {
  return (
    <Lottie animationData={loginAnimationData} loop={true} autoplay={true} />
  )
}

export default AuthorizationAnimation
