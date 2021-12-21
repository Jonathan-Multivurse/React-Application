import React, { FC, ReactElement } from 'react'
import { Dropdown, Row } from 'antd'
import styled from 'styled-components'
import { CenteredDiv, SVGToWhite } from '../styles'

const ARROW_CLICKER = styled(CenteredDiv)<{ $arrowRotation?: boolean; $measurements?: string }>`
  ${({ theme, $measurements }) => theme.measurements($measurements ? $measurements : theme.margins['1.5x'])}
  margin-left: ${({ theme }) => theme.margins['1x']};
  border: none;
  background: transparent;
  cursor: pointer;
  img {
    ${({ theme }) => theme.measurements('inherit')}
    ${({ $arrowRotation }) => $arrowRotation && 'transform: rotateZ(180deg);'}
    transition: transform 200ms ease-in-out;
  }
`

export const ArrowClicker: FC<{
  arrowRotation?: boolean
  measurements?: string
  [x: string]: any
}> = ({ arrowRotation, measurements, ...props }) => {
  return (
    <ARROW_CLICKER $arrowRotation={arrowRotation} $measurements={measurements} {...props}>
      <SVGToWhite src={`${process.env.PUBLIC_URL}/img/assets/arrow.svg`} alt="arrow" />
    </ARROW_CLICKER>
  )
}

export const ArrowDropdown: FC<{
  arrowRotation?: boolean
  measurements?: string
  offset?: [number, number]
  onVisibleChange: (x: boolean) => void
  overlay: ReactElement | (() => ReactElement)
  children?: ReactElement | (() => ReactElement)
  [x: string]: any
}> = ({ arrowRotation, measurements, offset, onVisibleChange, overlay, placement, children, ...props }) => {
  return (
    <Dropdown
      align={{ offset }}
      destroyPopupOnHide
      onVisibleChange={onVisibleChange}
      overlay={overlay}
      placement={placement || 'bottomRight'}
      trigger={['click']}
      {...props}
    >
      <Row align="middle" wrap={false}>
        {children}
        <ARROW_CLICKER $arrowRotation={arrowRotation} $measurements={measurements}>
          <SVGToWhite src={`${process.env.PUBLIC_URL}/img/assets/arrow.svg`} alt="arrow" />
        </ARROW_CLICKER>
      </Row>
    </Dropdown>
  )
}
