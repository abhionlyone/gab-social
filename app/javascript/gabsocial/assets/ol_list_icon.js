const OLListIcon = ({
  className = '',
  width = '16px',
  height = '16px',
  viewBox = '0 0 34 32',
  title = 'Ordered List',
}) => (
  <svg
    className={className}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width={width}
    height={height}
    viewBox={viewBox}
    xmlSpace='preserve'
    aria-label={title}
  >
    <g>
      <path d='M 0 24.421875 L 3.367188 24.421875 L 3.367188 25.261719 L 1.683594 25.261719 L 1.683594 26.949219 L 3.367188 26.949219 L 3.367188 27.789062 L 0 27.789062 L 0 29.472656 L 5.050781 29.472656 L 5.050781 22.738281 L 0 22.738281 Z M 0 24.421875' />
      <path d='M 1.683594 9.261719 L 3.367188 9.261719 L 3.367188 2.527344 L 0 2.527344 L 0 4.210938 L 1.683594 4.210938 Z M 1.683594 9.261719' />
      <path d='M 0 14.316406 L 3.03125 14.316406 L 0 17.851562 L 0 19.367188 L 5.050781 19.367188 L 5.050781 17.683594 L 2.019531 17.683594 L 5.050781 14.148438 L 5.050781 12.632812 L 0 12.632812 Z M 0 14.316406' />
      <path d='M 8.421875 24.421875 L 32 24.421875 L 32 27.789062 L 8.421875 27.789062 Z M 8.421875 24.421875' />
      <path d='M 8.421875 4.210938 L 32 4.210938 L 32 7.578125 L 8.421875 7.578125 Z M 8.421875 4.210938' />
      <path d='M 8.421875 14.316406 L 32 14.316406 L 32 17.683594 L 8.421875 17.683594 Z M 8.421875 14.316406' />
    </g>
  </svg>
)

export default OLListIcon