import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <nav>
            <S.Links>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de restaurantes"
                  to="/"
                >
                  Restaurantes
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <Link to="/">
          <h1 className='logo'>
            <img src={logo} alt="EFOOD" />
          </h1>
        </Link>
        <S.CartButton role="button" onClick={openCart}>
          <span>{items.length} - produto(s) no carrinho</span>
        </S.CartButton>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default Header
