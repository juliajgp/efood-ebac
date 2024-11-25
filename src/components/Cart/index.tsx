import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Tag from '../Tag'

import { RootReducer } from '../../store'
import { add, open, close, remove, clear } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useEffect, useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import Button from '../Button'
import Card from '../Card'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const [ showCheckout, setShowCheckout ] = useState(false)
  const [ showPagamento, setShowPagamento ] = useState(false)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isSuccess && data ? (
          <p>Sucesso!</p>
        ) : (
          <div>
            {showPagamento ? (
                  <div>
                    <form onSubmit={form.handleSubmit}>
                      <Card title={`Pagamento - Valor a pagar R$ ${getTotalPrice(items)}`}>
                        <>
                          <div>
                            <S.InputGroup>
                              <label htmlFor="fullName">Nome no cartão</label>
                              <input
                                id="fullName"
                                type="text"
                                name="fullName"
                                value={form.values.fullName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('fullName') ? 'error' : ''}
                              />
                            </S.InputGroup>
                            <S.Row>
                              <S.InputGroup>
                                <label htmlFor="email">Número no cartão</label>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  value={form.values.email}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('email') ? 'error' : ''}
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="email">CVV</label>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  value={form.values.email}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('email') ? 'error' : ''}
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row>
                              <S.InputGroup>
                                <label htmlFor="email">Mês de vencimento</label>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  value={form.values.email}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('email') ? 'error' : ''}
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="email">Ano de Vencimento</label>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  value={form.values.email}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('email') ? 'error' : ''}
                                />
                              </S.InputGroup>
                            </S.Row>
                          </div>
                        </>
                      </Card>
                      <Button
                        type="submit"
                        onClick={form.handleSubmit}
                        title="Clique aqui para finalizar a compra"
                        disabled={isLoading}
                      >
                        Finalizar pagamento
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => {setShowPagamento(false)}}
                        title="Clique aqui para voltar ao carrinho"
                        disabled={isLoading}
                      >
                        Voltar para a edição de endereço
                      </Button>
                    </form>
                  </div>
              ) : (
                <div>
                {showCheckout ? (
                  <div>
                    <form onSubmit={form.handleSubmit}>
                        <Card title="Dados de cobrança">
                          <>
                            <div>
                              <S.InputGroup>
                                <label htmlFor="fullName">Quem irá receber</label>
                                <input
                                  id="fullName"
                                  type="text"
                                  name="fullName"
                                  value={form.values.fullName}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('fullName') ? 'error' : ''}
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="email">Endereço</label>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  value={form.values.email}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('email') ? 'error' : ''}
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="cpf">Cidade</label>
                                <InputMask
                                  id="cpf"
                                  type="text"
                                  name="cpf"
                                  value={form.values.cpf}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('cpf') ? 'error' : ''}
                                  mask="999.999.999-99"
                                />
                              </S.InputGroup>
                              <S.Row>
                                <S.InputGroup>
                                  <label htmlFor="cpf">CEP</label>
                                  <InputMask
                                    id="cpf"
                                    type="text"
                                    name="cpf"
                                    value={form.values.cpf}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('cpf') ? 'error' : ''}
                                    mask="999.999.999-99"
                                  />
                                </S.InputGroup>
                                  <S.InputGroup>
                                  <label htmlFor="cpf">Número</label>
                                  <InputMask
                                    id="cpf"
                                    type="text"
                                    name="cpf"
                                    value={form.values.cpf}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('cpf') ? 'error' : ''}
                                    mask="999.999.999-99"
                                  />
                                </S.InputGroup>
                              </S.Row>
                              <S.InputGroup>
                                <label htmlFor="cpf">Complemento (opcional)</label>
                                <InputMask
                                  id="cpf"
                                  type="text"
                                  name="cpf"
                                  value={form.values.cpf}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('cpf') ? 'error' : ''}
                                  mask="999.999.999-99"
                                />
                              </S.InputGroup>
                            </div>
                          </>
                        </Card>
                        <Button
                          type="submit"
                          onClick={() => {setShowPagamento(true)}}
                          title="Clique aqui para finalizar a compra"
                          disabled={isLoading}
                        >
                          Continuar com pagamento
                        </Button>
                        <Button
                          type="submit"
                          onClick={() => {setShowCheckout(false)}}
                          title="Clique aqui para voltar ao carrinho"
                          disabled={isLoading}
                        >
                          Voltar para o carrinho
                        </Button>
                    </form>
                  </div>
                ) : (
                  <div>
                    {items.length > 0 ? (
                      <>
                        <ul>
                          {items.map((item) => (
                            <S.CartItem key={item.id}>
                              <img src={item.foto} alt={item.nome} />
                              <div>
                                <h3>{item.nome}</h3>
                                <span>{parseToBrl(item.preco)}</span>
                              </div>
                              <button onClick={() => removeItem(item.id)} type="button" />
                            </S.CartItem>
                          ))}
                        </ul>
                        <S.Prices>
                          Valor total {parseToBrl(getTotalPrice(items))}{' '}
                        </S.Prices>
                        <button
                          onClick={() => setShowCheckout(true)}
                          title="Clique aqui para continuar com a entrega"
                          type="button"
                        >
                          <Tag>Continuar com a entrega</Tag>
                        </button>
                        <div>
                        </div>
                      </>
                    ) : (
                      <p className="empty-text">
                        O carrinho está vazio, adicione pelo menos um produto para continuar
                        com a compra
                      </p>
                    )}
                  </div>
                )}
                </div>
              )}
          </div>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
