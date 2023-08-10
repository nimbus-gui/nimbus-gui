import LayoutComponent from './LayoutComponent'
import './LandingPage.css'
import QuickStartBar from '../QuickStartBar/QuickStartBar'
import DeviceCPULoad from '../DeviceCPULoad'

function LandingPage() {
  return (
    <>
      <LayoutComponent content={<Content />} />
      <QuickStartBar />
    </>
  )
}

function Content() {
  return (
    <div className="container-inner landing-page">
      <header>
        <div>
          <div>
            <img src="src/assets/nodes-app-icon.png" alt="" />
          </div>
          <p className="logo-title">
            nodes<span className="beta">BETA</span>
          </p>
        </div>
      </header>
      <article className="content">
        <div className="avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23 44C34.598 44 44 34.598 44 23V21C44 9.40202 34.598 2.24162e-07 23 5.00679e-07L21 5.48363e-07C9.40202 8.2488e-07 0 9.40171 0 20.9997C0 21.6637 0 22.3312 0 22.9999C0 34.5979 9.40202 44 21 44H23Z"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                  xlinkHref="#image0_182_199649"
                  transform="translate(-0.157534) scale(0.00273973)"
                />
              </pattern>
              <image
                id="image0_182_199649"
                width="480"
                height="365"
                xlinkHref="data:image/jpeg;base64,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"
              />
            </defs>
          </svg>
        </div>
        <h2 className="title">
          Welcome, John. This is your complete access to a truly decentralized Web 3.0
        </h2>
        <p className="subtitle">
          <span>Status Nodes</span> allows you to finally take control and ownership of the services
          you wish to run in a completely trustless and decentralized manner.
        </p>
        <button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_760_1602)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.9999 2.60002C3.67442 2.60002 2.5999 3.67454 2.5999 5.00002C2.5999 6.32551 3.67442 7.40002 4.9999 7.40002C6.32539 7.40002 7.3999 6.32551 7.3999 5.00002C7.3999 3.67454 6.32539 2.60002 4.9999 2.60002ZM1.3999 5.00002C1.3999 3.0118 3.01168 1.40002 4.9999 1.40002C6.98813 1.40002 8.5999 3.0118 8.5999 5.00002C8.5999 5.77749 8.35345 6.4974 7.9344 7.08587L9.48712 8.63859C10.4478 7.86383 11.6697 7.4 13 7.4C16.0928 7.4 18.6 9.90721 18.6 13C18.6 16.0928 16.0928 18.6 13 18.6C9.9072 18.6 7.4 16.0928 7.4 13C7.4 11.6697 7.86383 10.4478 8.63859 9.48712L7.08589 7.93442C6.49739 8.35353 5.77743 8.60002 4.9999 8.60002C3.01168 8.60002 1.3999 6.98825 1.3999 5.00002ZM8.6 13C8.6 10.5699 10.5699 8.6 13 8.6C15.4301 8.6 17.4 10.5699 17.4 13C17.4 15.4301 15.4301 17.4 13 17.4C10.5699 17.4 8.6 15.4301 8.6 13Z"
                  fill="white"
                  fill-opacity="0.7"
                />
                <path
                  d="M7.9344 7.08587L7.52711 6.79585C7.3855 6.99472 7.40821 7.26679 7.58085 7.43943L7.9344 7.08587ZM9.48712 8.63859L9.13357 8.99215C9.31425 9.17283 9.6021 9.18821 9.801 9.0278L9.48712 8.63859ZM8.63859 9.48712L9.0278 9.801C9.18821 9.6021 9.17283 9.31425 8.99215 9.13357L8.63859 9.48712ZM7.08589 7.93442L7.43945 7.58087C7.26681 7.40823 6.99472 7.38552 6.79585 7.52715L7.08589 7.93442ZM3.0999 5.00002C3.0999 3.95068 3.95056 3.10002 4.9999 3.10002V2.10002C3.39828 2.10002 2.0999 3.3984 2.0999 5.00002H3.0999ZM4.9999 6.90002C3.95056 6.90002 3.0999 6.04937 3.0999 5.00002H2.0999C2.0999 6.60165 3.39828 7.90002 4.9999 7.90002V6.90002ZM6.8999 5.00002C6.8999 6.04937 6.04924 6.90002 4.9999 6.90002V7.90002C6.60153 7.90002 7.8999 6.60165 7.8999 5.00002H6.8999ZM4.9999 3.10002C6.04924 3.10002 6.8999 3.95068 6.8999 5.00002H7.8999C7.8999 3.3984 6.60153 2.10002 4.9999 2.10002V3.10002ZM4.9999 0.900024C2.73553 0.900024 0.899902 2.73566 0.899902 5.00002H1.8999C1.8999 3.28794 3.28782 1.90002 4.9999 1.90002V0.900024ZM9.0999 5.00002C9.0999 2.73566 7.26427 0.900024 4.9999 0.900024V1.90002C6.71198 1.90002 8.0999 3.28794 8.0999 5.00002H9.0999ZM8.34169 7.3759C8.81905 6.70553 9.0999 5.88483 9.0999 5.00002H8.0999C8.0999 5.67015 7.88784 6.28926 7.52711 6.79585L8.34169 7.3759ZM9.84068 8.28504L8.28795 6.73232L7.58085 7.43943L9.13357 8.99215L9.84068 8.28504ZM9.801 9.0278C10.676 8.32213 11.788 7.9 13 7.9V6.9C11.5514 6.9 10.2196 7.40554 9.17324 8.24939L9.801 9.0278ZM13 7.9C15.8167 7.9 18.1 10.1833 18.1 13H19.1C19.1 9.63106 16.3689 6.9 13 6.9V7.9ZM18.1 13C18.1 15.8167 15.8167 18.1 13 18.1V19.1C16.3689 19.1 19.1 16.3689 19.1 13H18.1ZM13 18.1C10.1833 18.1 7.9 15.8167 7.9 13H6.9C6.9 16.3689 9.63106 19.1 13 19.1V18.1ZM7.9 13C7.9 11.788 8.32213 10.676 9.0278 9.801L8.24939 9.17324C7.40554 10.2196 6.9 11.5514 6.9 13H7.9ZM6.73234 8.28798L8.28504 9.84068L8.99215 9.13357L7.43945 7.58087L6.73234 8.28798ZM4.9999 9.10002C5.88478 9.10002 6.70554 8.81913 7.37594 8.3417L6.79585 7.52715C6.28924 7.88793 5.67008 8.10002 4.9999 8.10002V9.10002ZM0.899902 5.00002C0.899902 7.26439 2.73553 9.10002 4.9999 9.10002V8.10002C3.28782 8.10002 1.8999 6.71211 1.8999 5.00002H0.899902ZM13 8.1C10.2938 8.1 8.1 10.2938 8.1 13H9.1C9.1 10.8461 10.8461 9.1 13 9.1V8.1ZM17.9 13C17.9 10.2938 15.7062 8.1 13 8.1V9.1C15.1539 9.1 16.9 10.8461 16.9 13H17.9ZM13 17.9C15.7062 17.9 17.9 15.7062 17.9 13H16.9C16.9 15.1539 15.1539 16.9 13 16.9V17.9ZM8.1 13C8.1 15.7062 10.2938 17.9 13 17.9V16.9C10.8461 16.9 9.1 15.1539 9.1 13H8.1Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_760_1602">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Discover Nodes
        </button>
      </article>
      <DeviceCPULoad />
    </div>
  )
}
export default LandingPage
