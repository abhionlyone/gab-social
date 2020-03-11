import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { defineMessages, injectIntl } from 'react-intl'
import ImmutablePureComponent from 'react-immutable-pure-component'
import { makeGetStatus } from '../selectors';
import CommentHeader from './comment_header'
import Avatar from './avatar'
import Button from './button'
import DisplayName from './display_name'
import DotTextSeperator from './dot_text_seperator'
import RelativeTimestamp from './relative_timestamp'
import Text from './text'
import StatusContent from './status_content'

const messages = defineMessages({
  follow: { id: 'follow', defaultMessage: 'Follow' },
})

const makeMapStateToProps = () => {
  const getStatus = makeGetStatus()

  const mapStateToProps = (state, props) => {
    const status = getStatus(state, props)
    let descendantsIds = Immutable.List()

    if (status) {
      // ALL descendants
      descendantsIds = descendantsIds.withMutations(mutable => {
        const ids = [status.get('id')]

        while (ids.length > 0) {
          let id = ids.shift();
          const replies = state.getIn(['contexts', 'replies', id])

          if (status.get('id') !== id) {
            mutable.push(id)
          }

          if (replies) {
            replies.reverse().forEach(reply => {
              ids.unshift(reply)
            });
          }
        }
      })
    }

    return {
      status,
      descendantsIds,
    }
  }

  return mapStateToProps
}

export default
@injectIntl
@connect(makeMapStateToProps)
class Comment extends ImmutablePureComponent {

  static propTypes = {
    status: ImmutablePropTypes.map.isRequired,
    descendantsIds: ImmutablePropTypes.list,

  }

  handleClick = () => {
    // if (this.props.onClick) {
    //   this.props.onClick();
    //   return;
    // }

    // if (!this.context.router) return;

    // this.context.router.history.push(
    //   `/${this._properStatus().getIn(['account', 'acct'])}/posts/${this._properStatus().get('id')}`
    // )
  }

  render() {
    const { status } = this.props

    console.log("status:", status)

    return (
      <div className={[_s.default, _s.px10, _s.mb10, _s.py5].join(' ')} data-comment={status.get('id')}>
        <div className={[_s.default].join(' ')}>

          <div className={[_s.default, _s.flexRow].join(' ')}>
            <NavLink
              to={`/${status.getIn(['account', 'acct'])}`}
              title={status.getIn(['account', 'acct'])}
              className={[_s.default, _s.mr10, _s.pt5].join(' ')}
            >
              <Avatar account={status.get('account')} size={32} />
            </NavLink>

            <div className={[_s.default, _s.flexGrow1].join(' ')}>
              <div className={[_s.default, _s.px10, _s.py5, _s.radiusSmall, _s.backgroundSubtle].join(' ')}>
                <div className={_s.pt2}>
                  <CommentHeader status={status} />
                </div>
                <div className={[_s.py5].join(' ')}>
                  <StatusContent
                    status={status}
                    onClick={this.handleClick}
                    isComment
                    collapsable
                  />
                </div>
              </div>
              <div className={[_s.default, _s.flexRow, _s.mt5].join(' ')}>
                
                <Button
                  text
                  radiusSmall
                  backgroundColor='none'
                  color='tertiary'
                  className={[_s.px5, _s.backgroundSubtle_onHover, _s.py2, _s.mr5].join(' ')}
                >
                  <Text size='extraSmall' color='inherit' weight='bold'>
                    Like
                  </Text>
                </Button>

                <Button
                  text
                  radiusSmall
                  backgroundColor='none'
                  color='tertiary'
                  className={[_s.px5, _s.backgroundSubtle_onHover, _s.py2, _s.mr5].join(' ')}
                >
                  <Text size='extraSmall' color='inherit' weight='bold'>
                    Reply
                  </Text>
                </Button>

                <Button
                  text
                  radiusSmall
                  backgroundColor='none'
                  color='tertiary'
                  className={[_s.px5, _s.backgroundSubtle_onHover, _s.py2, _s.mr5].join(' ')}
                >
                  <Text size='extraSmall' color='inherit' weight='bold'>
                    ···
                  </Text>
                </Button>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
