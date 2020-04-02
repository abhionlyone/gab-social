const BoldIcon = ({
  className = '',
  width = '16px',
  height = '16px',
  viewBox = '0 0 34 32',
  title = 'Strikethrough',
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
      <path d='M 23.371094 15.519531 C 25.578125 13.976562 27.144531 11.484375 27.144531 9.144531 C 27.144531 3.988281 23.152344 0 18 0 L 3.714844 0 L 3.714844 32 L 19.804688 32 C 24.59375 32 28.285156 28.113281 28.285156 23.335938 C 28.285156 19.863281 26.308594 16.902344 23.371094 15.519531 Z M 10.570312 5.714844 L 17.429688 5.714844 C 19.324219 5.714844 20.855469 7.246094 20.855469 9.144531 C 20.855469 11.039062 19.324219 12.570312 17.429688 12.570312 L 10.570312 12.570312 Z M 18.570312 26.285156 L 10.570312 26.285156 L 10.570312 19.429688 L 18.570312 19.429688 C 20.46875 19.429688 22 20.960938 22 22.855469 C 22 24.753906 20.46875 26.285156 18.570312 26.285156 Z M 18.570312 26.285156' />
    </g>
  </svg>
)

export default BoldIcon