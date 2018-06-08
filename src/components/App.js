// @flow

import React from 'react'
import {
  compose,
  setDisplayName,
  withStateHandlers,
  lifecycle,
  pure,
} from 'recompose'
import type { HOC } from 'recompose'
import Contents from './Contents'

type AppProps = {}

type ContentsProps = {|
  text: string,
  show: boolean,
|}

const Component = props => <Contents {...props} />

const Enhance: HOC<ContentsProps, AppProps> = compose(
  setDisplayName('App'),
  withStateHandlers(
    {
      text: 'text',
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
