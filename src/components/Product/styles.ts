import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.coral};
  color: white;
  position: relative;
  text-decoration: none;
  display: block;
  height: 443px;
  width: 320px;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .button {
    position: relative;
  }

  button {
    background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;
    width: 100%;

    position: absolute;
    top: 0;
    bottom: 0;
  }

  ${TagContainer} {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${colors.coral};
  }
  
  div {
    margin-bottom: 4px;
  }
  
  .titulo-class {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled.h3`
  padding: 3px 8px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  color: white;
`

export const Description = styled.p`
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0 24px;
  color: white;
`
/*modal */
export const Items = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  cursor: zoom-in;

  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  z-index: 1;

  > ${Card} {
    max-width: 100% !important;
    height: 265px;
    width: 100%;
    display: flex;
    flex-direction: row;

    > img {
      height: 100%;
      width: 30%;
      object-fit: cover;
      object-position: left;
    }

    .closing-button {
      position: absolute;
      right: 10px;
      width: 20px;
      height: 20px;
    }

    .titulo-class {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0;
      margin-left: 10px;

      > ${Description}, ${TagContainer}, .button {
        margin: 0;
      }

      .button {
        width: 100%;
      }

      button {
        position: relative;
      }
    }
  }
`

