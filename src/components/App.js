// @flow

import React from 'react'
import {
  compose,
  setDisplayName,
  withStateHandlers,
  lifecycle,
  pure,
  type HOC,
} from 'recompose'
import Contents from './Contents'

type AppProps = {}

const Component = props => <Contents {...props} />

const Enhance: HOC<*, AppProps> = compose(
  setDisplayName('App'),
  withStateHandlers(
    {
      text: '',
      show: false,
    },
    {
      setText: () => t => ({ text: t }),
      setShow: ({ show }) => () => ({ show: !show }),
    }
  ),
  pure,
  lifecycle({
    componentDidMount() {
      this.props.setText('Hello React')
    },
  })
)

export default Enhance(Component)
