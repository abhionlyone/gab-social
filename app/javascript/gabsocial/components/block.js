export default class Block extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <div className={[_s.default, _s.backgroundColorPrimary, _s.overflowHidden, _s.radiusSmall, _s.borderColorSecondary, _s.border1PX].join(' ')}>
        {children}
      </div>
    )
  }
}