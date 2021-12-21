import { Image } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { SpaceBetweenDiv } from '../styles'

const SEARCH_BAR_WRAPPER = styled(SpaceBetweenDiv)`
  width: 100%;
  margin: 0 ${({ theme }) => theme.margins['3x']};
  padding: ${({ theme }) => theme.margins['1x']} ${({ theme }) => theme.margins['3x']};
  border-radius: 45px;
  background-color: ${({ theme }) => theme.searchbarBackground};

  > input {
    height: ${({ theme }) => theme.margins['5x']};
    font-size: 16px;
    text-align: left;
    background-color: ${({ theme }) => theme.searchbarBackground};
    flex: 1;
    color: white;
    font-family: 'Montserrat';
    border: none;
    outline: none;
    ::placeholder {
      color: white;
    }
  }
`

export const SearchBar = ({ placeholder, ...rest }: any) => {
  return (
    <SEARCH_BAR_WRAPPER {...rest}>
      <input placeholder={placeholder || 'Search by nft or creator'} />
      <Image preview={false} src={`${process.env.PUBLIC_URL}/img/assets/search.png`} />
    </SEARCH_BAR_WRAPPER>
  )
}
