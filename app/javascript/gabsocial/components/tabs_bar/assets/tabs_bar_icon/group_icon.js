const GroupIcon = ({
  className = 'tabs-bar-icon',
  width = '18px',
  height = '18px',
  viewBox = '0 0 48 48'
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
  >
    <g>
      <path className='tabs-bar-icon__path' d='M 29.011719 10.753906 C 31.234375 12.148438 32.792969 14.503906 33.078125 17.242188 C 33.984375 17.667969 34.992188 17.910156 36.058594 17.910156 C 39.953125 17.910156 43.109375 14.753906 43.109375 10.859375 C 43.109375 6.964844 39.953125 3.808594 36.058594 3.808594 C 32.199219 3.808594 29.070312 6.910156 29.011719 10.753906 Z M 24.394531 25.191406 C 28.289062 25.191406 31.445312 22.03125 31.445312 18.140625 C 31.445312 14.246094 28.289062 11.089844 24.394531 11.089844 C 20.5 11.089844 17.339844 14.246094 17.339844 18.140625 C 17.339844 22.035156 20.5 25.191406 24.394531 25.191406 Z M 27.382812 25.671875 L 21.402344 25.671875 C 16.421875 25.671875 12.375 29.722656 12.375 34.699219 L 12.375 42.015625 L 12.390625 42.132812 L 12.894531 42.289062 C 17.648438 43.773438 21.773438 44.269531 25.171875 44.269531 C 31.804688 44.269531 35.652344 42.375 35.890625 42.257812 L 36.359375 42.019531 L 36.410156 42.019531 L 36.410156 34.699219 C 36.414062 29.722656 32.363281 25.671875 27.382812 25.671875 Z M 39.050781 18.390625 L 33.113281 18.390625 C 33.050781 20.765625 32.035156 22.90625 30.429688 24.445312 C 34.855469 25.761719 38.09375 29.863281 38.09375 34.710938 L 38.09375 36.964844 C 43.957031 36.75 47.335938 35.089844 47.554688 34.976562 L 48.027344 34.738281 L 48.078125 34.738281 L 48.078125 27.417969 C 48.078125 22.441406 44.027344 18.390625 39.050781 18.390625 Z M 12.019531 17.910156 C 13.402344 17.910156 14.683594 17.507812 15.769531 16.824219 C 16.117188 14.570312 17.324219 12.597656 19.050781 11.257812 C 19.058594 11.125 19.070312 10.996094 19.070312 10.863281 C 19.070312 6.96875 15.914062 3.8125 12.019531 3.8125 C 8.125 3.8125 4.96875 6.96875 4.96875 10.863281 C 4.96875 14.753906 8.125 17.910156 12.019531 17.910156 Z M 18.351562 24.445312 C 16.757812 22.914062 15.746094 20.785156 15.671875 18.425781 C 15.453125 18.410156 15.234375 18.390625 15.011719 18.390625 L 9.027344 18.390625 C 4.050781 18.390625 0 22.441406 0 27.417969 L 0 34.738281 L 0.0195312 34.851562 L 0.523438 35.007812 C 4.332031 36.199219 7.734375 36.746094 10.691406 36.921875 L 10.691406 34.710938 C 10.691406 29.863281 13.925781 25.761719 18.351562 24.445312 Z M 18.351562 24.445312' />
    </g>
  </svg>
)

export default GroupIcon