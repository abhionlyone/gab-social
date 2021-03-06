'use strict'

import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { INTRODUCTION_VERSION } from '../actions/onboarding'
import { BrowserRouter, Route } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import { IntlProvider, addLocaleData } from 'react-intl'
import { fetchCustomEmojis } from '../actions/custom_emojis'
import { hydrateStore } from '../actions/store'
import {
  connectUserStream,
  connectStatusUpdateStream,
} from '../actions/streaming'
import { getLocale } from '../locales'
import initialState from '../initial_state'
import { me } from '../initial_state'
import UI from '../features/ui'
// import Introduction from '../features/introduction'
import ErrorBoundary from '../components/error_boundary'
import Display from './display'

const { localeData, messages } = getLocale()
addLocaleData(localeData)

export const store = configureStore()
const hydrateAction = hydrateStore(initialState)

store.dispatch(hydrateAction)
store.dispatch(fetchCustomEmojis())

const mapStateToProps = (state) => {
  const account = state.getIn(['accounts', me])
  const showIntroduction = account ? state.getIn(['settings', 'introductionVersion'], 0) < INTRODUCTION_VERSION : false

  return {
    showIntroduction,
  }
}

@connect(mapStateToProps)
class GabSocialMount extends PureComponent {

  static propTypes = {
    showIntroduction: PropTypes.bool,
  }

  render () {
    // Disabling introduction for launch
    // const { showIntroduction } = this.props
    //
    // if (showIntroduction) {
    //   return <Introduction />
    // }

    return (
      <BrowserRouter>
        <ScrollContext>
          <Route path='/' component={UI} />
        </ScrollContext>
      </BrowserRouter>
    )
  }

}

export default class GabSocial extends PureComponent {

  static propTypes = {
    locale: PropTypes.string.isRequired,
  }

  componentDidMount() {
    if (!!me) {
      this.disconnect = store.dispatch(connectUserStream())
      store.dispatch(connectStatusUpdateStream())
    }

    console.log('%c Gab Social ', [
      , 'color: #30CE7D'
      , 'display: block'
      , 'line-height: 80px'
      , 'font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, "Helvetica Neue", sans-serif'
      , 'font-size: 36px'
      , 'text-align: center'
      , 'font-weight: bold'
    ].join(';'))
  }

  componentWillUnmount () {
    if (this.disconnect) {
      this.disconnect()
      this.disconnect = null
    }
  }

  render () {
    const { locale } = this.props

    return (
      <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
          <Display>
            <ErrorBoundary>
              <GabSocialMount />
            </ErrorBoundary>
          </Display>
        </Provider>
      </IntlProvider>
    )
  }

}
