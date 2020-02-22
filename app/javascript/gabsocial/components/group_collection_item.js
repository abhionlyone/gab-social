import ImmutablePropTypes from 'react-immutable-proptypes'
import ImmutablePureComponent from 'react-immutable-pure-component'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { defineMessages, injectIntl } from 'react-intl'
import classNames from 'classnames/bind'
import { shortNumberFormat } from '../utils/numbers'
import Image from './image'
import Text from './text'
import Button from './button'
import DotTextSeperator from './dot_text_seperator'

const messages = defineMessages({
  members: { id: 'groups.card.members', defaultMessage: 'Members' },
  new_statuses: { id: 'groups.sidebar-panel.item.view', defaultMessage: 'new gabs' },
  no_recent_activity: { id: 'groups.sidebar-panel.item.no_recent_activity', defaultMessage: 'No recent activity' },
})

const mapStateToProps = (state, { id }) => ({
  group: state.getIn(['groups', id]),
  relationships: state.getIn(['group_relationships', id]),
})

const cx = classNames.bind(_s)

export default
@connect(mapStateToProps)
@injectIntl
class GroupCollectionItem extends ImmutablePureComponent {
  static propTypes = {
    group: ImmutablePropTypes.map,
    relationships: ImmutablePropTypes.map,
  }

  render() {
    const { intl, group, relationships } = this.props

    if (!relationships) return null

    const unreadCount = relationships.get('unread_count')

    const subtitle = unreadCount > 0 ? (
      <Fragment>
        {shortNumberFormat(unreadCount)}
        &nbsp;
        {intl.formatMessage(messages.new_statuses)}
      </Fragment>
    ) : intl.formatMessage(messages.no_recent_activity)

    const imageHeight = '200px'

    // : todo :
    const isMember = false

    const outsideClasses = cx({
      default: 1,
      width50PC: 1,
    })

    const navLinkClasses = cx({
      default: 1,
      noUnderline: 1,
      overflowHidden: 1,
      borderColorSecondary: 1,
      radiusSmall: 1,
      border1PX: 1,
      marginBottom10PX: 1,
      marginLeft5PX: 1,
      marginRight5PX: 1,
      backgroundColorPrimary: 1,
      backgroundSubtle_onHover: isMember,
    })

    return (
      <div className={outsideClasses}>
        <NavLink
          to={`/groups/${group.get('id')}`}
          className={navLinkClasses}
        >
          <Image
            src={group.get('cover')}
            alt={group.get('title')}
            height={imageHeight}
          />

          <div className={[_s.default, _s.paddingHorizontal10PX, _s.marginVertical10PX].join(' ')}>
            <Text color='primary' size='medium' weight='bold'>
              {group.get('title')}
            </Text>

            <div className={[_s.default, _s.flexRow, _s.alignItemsCenter, _s.marginTop5PX].join(' ')}>
              <Text color='secondary' size='small'>
                {shortNumberFormat(group.get('member_count'))}
                &nbsp;
              {intl.formatMessage(messages.members)}
              </Text>
              <DotTextSeperator />
              <Text color='secondary' size='small' className={_s.marginLeft5PX}>
                {subtitle}
              </Text>
            </div>
          </div>

          {
            !isMember &&
            <div className={[_s.default, _s.paddingHorizontal10PX, _s.marginBottom10PX].join(' ')}>
              <Button
                color='primary'
                backgroundColor='tertiary'
                radiusSmall
              >
                <Text color='inherit' weight='bold'>
                  Join
                </Text>
              </Button>
            </div>
          }

        </NavLink>
      </div>
    )
  }
}