import classNames from 'classnames/bind'
import Button from './button'
import Icon from './icon'
import Image from './image'

const cx = classNames.bind(_s)

export default class SidebarSectionItem extends PureComponent {

  static contextTypes = {
    router: PropTypes.object,
  }

  static propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    icon: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    me: PropTypes.bool,
    suffix: PropTypes.node,
    buttonRef: PropTypes.func,
  }

  state = {
    hovering: false,
  }

  handleOnMouseEnter = () => {
    this.setState({ hovering: true })
  }

  handleOnMouseLeave = () => {
    this.setState({ hovering: false })
  }

  render() {
    const {
      to,
      active,
      icon,
      image,
      title,
      me,
      count,
      onClick,
      href,
      buttonRef,
    } = this.props
    const { hovering } = this.state

    const noRouter = !this.context.router
    const iconSize = '16px'
    const currentPathname = noRouter ? '' : this.context.router.route.location.pathname
    const shouldShowActive = hovering || active || currentPathname === to || currentPathname === href
    const isNotifications = to === '/notifications'

    const containerClasses = cx({
      default: 1,
      maxWidth100PC: 1,
      width100PC: 1,
      flexRow: 1,
      py5: 1,
      px10: 1,
      alignItemsCenter: 1,
      radiusSmall: 1,
      border1PX: 1,
      outlineNone: 1,
      borderColorTransparent: !shouldShowActive,
      borderColorSecondary: shouldShowActive,
      bgTransparent: !shouldShowActive,
      bgPrimary: shouldShowActive,
    })

    const textClasses = cx({
      default: 1,
      fontWeightNormal: 1,
      fs15PX: 1,
      text: 1,
      textOverflowEllipsis: 1,
      colorPrimary: 1,
    })

    const iconClasses = cx({
      fillPrimary: 1,
    })

    const countClasses = cx({
      default: 1,
      text: 1,
      mlAuto: 1,
      fs12PX: 1,
      px5: 1,
      mr2: 1,
      lineHeight15: 1,
      ml5: 1,
      colorSecondary: !isNotifications,
      colorWhite: isNotifications,
      bgBrand: isNotifications,
      radiusSmall: isNotifications,
    })

    return (
      <Button
        to={noRouter ? undefined : to}
        href={noRouter ? (to || href) : href}
        onClick={onClick}
        noClasses
        buttonRef={buttonRef}
        onMouseEnter={() => this.handleOnMouseEnter()}
        onMouseLeave={() => this.handleOnMouseLeave()}
        className={[_s.default, _s.noUnderline, _s.outlineNone, _s.cursorPointer, _s.width100PC, _s.bgTransparent].join(' ')}
      >
        <div className={containerClasses}>
          {
            icon && 
            <Icon id={icon} className={iconClasses} size={iconSize} />
          }
          
          {
            image &&
            <Image
              alt={title}
              className={_s.circle}
              width={iconSize}
              height={iconSize}
              src={image}
            />
          }
          
          <div className={[_s.default, _s.flexNormal, _s.px10, _s.textOverflowEllipsis, _s.overflowWrapBreakWord, _s.flexRow, _s.width100PC].join(' ')}>
            <span className={textClasses}>{title}</span>
          </div>

          {
            count > 0 &&
            <span className={countClasses}>
              {count}
            </span>
          }
        </div>
      </Button>
    )
  }

}
