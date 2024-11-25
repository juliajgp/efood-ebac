import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

import lixeira from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.coral};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  h2, label {
    color: ${colors.amarelin} !important;
  }

  input {
    background-color: ${colors.amarelin};
  }

  button {
    background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;

    max-width: 100%;
    width: 100%;
  }

  ${TagContainer}, ${ButtonContainer} {
    background-color: ${colors.amarelin};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${colors.coral};
  }

  ${ButtonContainer} {
    height: 30px;
    margin-bottom: 8px;
  }

  ul {
    margin-bottom: 4rem;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.amarelin};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: green;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.amarelin};
  padding: 8px 8px;
  margin-bottom: 4px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.coral};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${colors.coral};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`
/* checkout */


type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  margin: 6px 0;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.amarelin};
    border: 1px solid ${colors.amarelin};
    height: 32px;
    padding: 0 8px;
    display: block;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`