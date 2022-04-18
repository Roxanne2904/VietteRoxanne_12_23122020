import VerticalLayout from '../../Components/VerticalLayout'

/**
 * Display the LoadingSpinner's page with  a loading spinner.
 * @returns { HtmlElements } LoadingSpinner's component is displayed dynamically.
 */

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
