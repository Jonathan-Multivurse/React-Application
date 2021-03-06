import React, { FC } from 'react'
import { Dropdown } from 'antd'
import styled from 'styled-components'
import { Menu, MenuItem } from './shared'
import { LITEPAPER_ADDRESS, SOCIAL_MEDIAS } from '../../constants'
import { CenteredImg } from '../../styles'

const ICON = styled(CenteredImg)`
  ${({ theme }) => theme.measurements(theme.margins['4.5x'])}
  margin-left: ${({ theme }) => theme.margins['2x']};
  cursor: pointer;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: ${({ theme }) => theme.margins['1x']};
  `}
`

const ITEM = styled(MenuItem)`
  width: 130px;

  > a {
    display: flex;
    justify-content: space-between;
    width: 100%;

    > span {
      color: ${({ theme }) => theme.text1};
    }
  }
`

const Overlay: FC = () => {
  const target = {
    discord: SOCIAL_MEDIAS.discord,
    docs: LITEPAPER_ADDRESS,
    medium: SOCIAL_MEDIAS.medium,
    telegram: SOCIAL_MEDIAS.telegram,
    twitter: SOCIAL_MEDIAS.twitter
  } as { [key: string]: string }

  return (
    <Menu>
      {['docs', 'discord', 'twitter', 'telegram', 'medium'].map((item, index) => (
        <ITEM key={index}>
          <a href={target[item]} target="_blank" rel="noopener noreferrer">
            <span>{item}</span>
            <img src={`${process.env.PUBLIC_URL}/img/assets/${item}_small.svg`} alt={item} />
          </a>
        </ITEM>
      ))}
    </Menu>
  )
}

export const More: FC = () => {
  return (
    <Dropdown
      align={{ offset: [0, 16] }}
      destroyPopupOnHide
      overlay={<Overlay />}
      placement="bottomLeft"
      trigger={['click']}
    >
      <ICON>
        <img src={`${process.env.PUBLIC_URL}/img/assets/more_icon.svg`} alt="more" />
      </ICON>
    </Dropdown>
  )
}
