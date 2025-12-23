import { ShakaAnimation } from '@/common/components/ShakaAnimation'
export const AuthWrapper = ({ logoAnimation, form, footerLink }) => {
  return (
    <div className="card col-12 col-md-8 col-xxl-6 align-self-center">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex  justify-content-center ">
          <ShakaAnimation />
        </div>
        {form}
      </div>
      <div className="card-footer d-flex justify-content-center">
        {footerLink}
      </div>
    </div>
  )
}
