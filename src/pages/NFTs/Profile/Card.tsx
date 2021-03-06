import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { StyledCard } from './Card.styled'
import { SellYourNFTView } from '../SellNFT/SellYourNFTView'

interface CardData {
  order: number
  type?: string
}

type Props = {
  data: CardData
  isExplore?: boolean
}

export const Card = ({ data, isExplore }: Props) => {
  const history = useHistory()

  const [visible, setVisible] = useState(false)
  const handleOk = () => setVisible(false)
  const handleCancel = () => setVisible(false)

  const goMyCreatedNFT = () => {
    if (['favorited', 'created'].includes(data?.type)) history.push('/NFTs/profile/my-created-NFT')
    if (data?.type === 'collected') history.push('/NFTs/profile/my-own-NFT')
    return
  }
  return (
    <div className="card-item">
      <StyledCard>
        <img
          className="card-image"
          src={`${process.env.PUBLIC_URL}/img/assets/card-1.png`}
          alt=""
          onClick={goMyCreatedNFT}
        />
        <div className="info">
          <div className="name">#0028</div>
          <div className="number">
            144pixels
            <img className="check-icon" src={`${process.env.PUBLIC_URL}/img/assets/check-icon.png`} alt="" />
          </div>
          <div className="other">2,900 SOL</div>
          {data?.type === 'favorited' ? (
            <div className="like-group favorited-group">
              <img className="heart-red" src={`${process.env.PUBLIC_URL}/img/assets/heart-red.svg`} alt="" />
              <span className="like-count">{data?.order}</span>
            </div>
          ) : (
            <div className="like-group">
              <>
                <img className="heart-purple" src={`${process.env.PUBLIC_URL}/img/assets/heart-purple.svg`} alt="" />
                <img className="heart-empty" src={`${process.env.PUBLIC_URL}/img/assets/heart-empty.svg`} alt="" />
              </>
              <span className="like-count">{data?.order}</span>
            </div>
          )}
          <div className="option">
            {isExplore ? (
              <button className="buy-now-btn">Buy now</button>
            ) : data?.type === 'favorited' ? (
              <div className="price-group">
                <span className="text">Last</span>
                <img className="price-image" src={`${process.env.PUBLIC_URL}/img/assets/price.svg`} alt="" />
                <span className="price-number">35</span>
              </div>
            ) : [1, 2].includes(data?.order) ? (
              <button className="sell-now-btn" onClick={() => setVisible(true)}>
                Sell now
              </button>
            ) : (
              <img className="card-logo" src={`${process.env.PUBLIC_URL}/img/assets/card-logo-1.svg`} alt="" />
            )}
          </div>
        </div>
      </StyledCard>
      <SellYourNFTView visible={visible} handleOk={handleOk} handleCancel={handleCancel} />
    </div>
  )
}
