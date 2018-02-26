import React from 'react'
import styled from 'emotion/react'
import * as c from 'shared/constants/colors'

const Card = styled('div')`
  max-width: 300px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
  padding: 15px 10px;
  box-sizing: border-box;
  border-bottom-width: ${({borderBottom}) => borderBottom.size};
  border-bottom-style: solid;
  border-bottom-color: ${({borderBottom}) => c[borderBottom.color]};
`

export default ({ children, ...rest}) => (
  <Card {...rest}>
    { children }
  </Card>
)