// @flow

import React from 'react'
import { compose, setDisplayName, pure, type HOC } from 'recompose'
import Show from './Show'
import Button from './Button'

type ContentsProps = {|
  text: string,
  show: boolean,
|}

const Component = props => (
  <React.Fragment>
    <Show {...props} />
    <Button {...props} />
  </React.Fragment>
)

const Enhance: HOC<*, ContentsProps> = compose(setDisplayName('Contents'), pure)

export default Enhance(Component)
