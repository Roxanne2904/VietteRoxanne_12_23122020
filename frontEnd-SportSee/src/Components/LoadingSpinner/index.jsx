import VerticalLayout from '../VerticalLayout'

function LoadingSpinner() {
  return (
    <main>
      <VerticalLayout />
      <div className="content">
        <div className="content__loadingSpinner">
          <div className="content__loadingSpinner__dot1"></div>
          <div className="content__loadingSpinner__dot2"></div>
          <div className="content__loadingSpinner__dot3"></div>
        </div>
      </div>
    </main>
  )
}
export default LoadingSpinner
