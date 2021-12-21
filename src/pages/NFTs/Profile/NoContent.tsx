import React from 'react'
import styled from 'styled-components'

const NO_CONTENT = styled.div`
  margin: 0 auto;
  padding: 80px 0;
  .no-data-image {
    max-width: 160px;
    margin-bottom: 20px;
  }
  .main-text {
    font-size: 17px;
    font-weight: 600;
    color: #9a9a9a;
    margin-bottom: 5px;
  }
  .sub-text {
    font-size: 13px;
    font-weight: 500;
    color: #a0a0a0;
  }
  .btn {
    min-width: 132px;
    height: 41px;
    background: #9625ae;
    margin-top: 30px;
    font-size: 12px;
    color: #fff;
    border: none;
    border-radius: 41px;
    cursor: pointer;
    transition: all 0.1s;
    &:hover {
      opacity: 0.8;
    }
  }
`

interface Props {
  type: string
}

const options = {
  collected: {
    mainText: 'No NFT’s Collected',
    subText: 'Let’s start your collection, go and buy your 1st NFT',
    textButton: 'Explore NFT’s',
    bgButton: '#9625ae'
  },
  created: {
    mainText: 'No NFT’s Created',
    subText: 'Start your journey as a creator today.',
    textButton: 'Create NFT',
    bgButton: '#3735bb'
  },
  favorited: {
    mainText: 'No NFT’s Liked',
    subText: 'Explore and like your most favorite ones.',
    textButton: 'Explore NFT’s',
    bgButton: '#9625ae'
  },
  activity: {
    mainText: 'No Recent Activity',
    subText: 'Buy, Create or Sell and NFT to see activity.',
    textButton: ''
  }
}

export const NoContent = ({ type }: Props) => {
  const obj = options[type]
  return (
    <NO_CONTENT>
      <img className="no-data-image" src={`${process.env.PUBLIC_URL}/img/assets/${type}-no-data.png`} alt="" />
      <div className="main-text">{obj.mainText}</div>
      <div className="sub-text">{obj.subText}</div>
      {obj.textButton && (
        <button className="btn" style={{ background: obj.bgButton }}>
          {obj.textButton}
        </button>
      )}
    </NO_CONTENT>
  )
}
