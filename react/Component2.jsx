import React from 'react'
import styled from 'emotion/react'
import * as c from 'shared/constants/colors'

import { Input } from '.'

const FileInput = styled('label')`
  height: 40px;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  padding: 0 10px;
  background: #fafbfd;
  border: 1px solid #E7E9F0;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const HiddenInput = styled('input')`
  display: none;
`

export default ({ children, ...props }) => (
  <FileInput>
    { children }
    <HiddenInput type='file' {...props} />
  </FileInput>
)