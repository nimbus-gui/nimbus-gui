import styles from './QuickStartBar.module.css'

const QuickStartBar = () => {
  return (
    <div className={styles['quick-start-bar-container']}>
      <nav className={styles['quick-start-bar']}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_760_8063)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.00008 14.3334C11.4979 14.3334 14.3334 11.4978 14.3334 8.00002C14.3334 4.50222 11.4979 1.66669 8.00008 1.66669C4.50228 1.66669 1.66675 4.50222 1.66675 8.00002C1.66675 11.4978 4.50228 14.3334 8.00008 14.3334ZM8.00008 15.3334C12.0502 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0502 0.666687 8.00008 0.666687C3.94999 0.666687 0.666748 3.94993 0.666748 8.00002C0.666748 12.0501 3.94999 15.3334 8.00008 15.3334Z"
                fill="#939BA1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.82684 10.7661C4.76188 11.0129 4.98716 11.2382 5.23403 11.1733L9.74792 9.98539C9.86412 9.95481 9.95487 9.86406 9.98545 9.74786L11.1733 5.23397C11.2383 4.9871 11.013 4.76182 10.7661 4.82678L6.25224 6.01465C6.13604 6.04523 6.04529 6.13598 6.01471 6.25218L4.82684 10.7661ZM6.17202 9.58376C6.13304 9.73189 6.26821 9.86706 6.41634 9.82808L8.9293 9.16677C9.0455 9.13619 9.13625 9.04544 9.16683 8.92924L9.82814 6.41628C9.86712 6.26815 9.73195 6.13298 9.58383 6.17196L7.07086 6.83327C6.95466 6.86385 6.86391 6.9546 6.83333 7.0708L6.17202 9.58376Z"
                fill="#939BA1"
              />
            </g>
            <defs>
              <clipPath id="clip0_760_8063">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div>
          <ul>
            <li>Learn More</li>
            <li>Nodes Community</li>
            <li>Documentation</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default QuickStartBar
