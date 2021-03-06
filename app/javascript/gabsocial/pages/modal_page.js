import { Fragment } from 'react'
import PageTitle from '../features/ui/util/page_title'
import LinkFooter from '../components/link_footer'
import WhoToFollowPanel from '../components/panel/who_to_follow_panel'
import DefaultLayout from '../layouts/default_layout'

export default class ModalPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { children, title } = this.props

    return (
      <DefaultLayout
        title={title}
        layout={(
          <Fragment>
            <WhoToFollowPanel />
            <LinkFooter />
          </Fragment>
        )}
        showBackBtn
      >
        <PageTitle path={title} />
        {children}
      </DefaultLayout>
    )
  }
}