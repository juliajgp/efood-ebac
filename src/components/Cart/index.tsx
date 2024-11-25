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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      numberHome: 12,
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(9, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      numberHome: Yup.number()
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string()
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(values);
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberHome),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
      })
    }
  })

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
          <Card title={`Pedido realizado - ${data.orderId}`}>
            <>
              <p className='pedidoConcluido'>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p className='pedidoConcluido'>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
              </p>
              <p className='pedidoConcluido'>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
              </p>
              <p className='pedidoConcluido'>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
              </p>
              <Button 
                type='button'
                title='Concluir'
                onClick={closeCart}
              >
                Concluir
              </Button>
            </>
          </Card>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {showPagamento ? (
                  <div>
                    <Card title={`Pagamento - Valor a pagar ${parseToBrl(getTotalPrice(items))}`}>
                      <>
                        <div>
                            <S.InputGroup>
                              <label htmlFor="cardDisplayName">Nome no cartão</label>
                              <input
                                id="cardDisplayName"
                                type="text"
                                name="cardDisplayName"
                                value={form.values.cardDisplayName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
                              />
                            </S.InputGroup>
                            <S.Row>
                              <S.InputGroup>
                                <label htmlFor="cardNumber">Número no cartão</label>
                                <InputMask
                                  id="cardNumber"
                                  type="text"
                                  name="cardNumber"
                                  value={form.values.cardNumber}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                                  mask="9999 9999 9999 9999"
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="cardCode">CVV</label>
                                <input
                                  id="cardCode"
                                  type="text"
                                  name="cardCode"
                                  value={form.values.cardCode}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('cardCode') ? 'error' : ''}
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row>
                              <S.InputGroup>
                                <label htmlFor="expiresMonth">Mês de vencimento</label>
                                <input
                                  id="expiresMonth"
                                  type="text"
                                  name="expiresMonth"
                                  value={form.values.expiresMonth}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="expiresYear">Ano de Vencimento</label>
                                <input
                                  id="expiresYear"
                                  type="text"
                                  name="expiresYear"
                                  value={form.values.expiresYear}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('expiresYear') ? 'error' : ''}
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
                      {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                    </Button>
                    <Button
                        type="button"
                        onClick={() => {setShowPagamento(false)}}
                        title="Clique aqui para voltar ao carrinho"
                        disabled={isLoading}
                      >
                        Voltar para a edição de endereço
                    </Button>
                  </div>
              ) : (
                <div>
                {showCheckout ? (
                  <div>
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
                            <label htmlFor="address">Endereço</label>
                            <input
                              id="address"
                              type="text"
                              name="address"
                              value={form.values.address}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={checkInputHasError('address') ? 'error' : ''}
                            />
                          </S.InputGroup>
                          <S.InputGroup>
                            <label htmlFor="city">Cidade</label>
                            <input
                              id="city"
                              type="text"
                              name="city"
                              value={form.values.city}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={checkInputHasError('city') ? 'error' : ''}
                            />
                          </S.InputGroup>
                          <S.Row>
                            <S.InputGroup>
                                  <label htmlFor="zipCode">CEP</label>
                                  <InputMask
                                    id="zipCode"
                                    type="text"
                                    name="zipCode"
                                    value={form.values.zipCode}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('zipCode') ? 'error' : ''}
                                    mask="99999-999"
                                  />
                            </S.InputGroup>
                            <S.InputGroup>
                              <label htmlFor="numberHome">Número</label>
                              <input
                                type="text"
                                id="numberHome"
                                name="numberHome"
                                value={form.values.numberHome}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('numberHome') ? 'error' : ''}
                              />
                            </S.InputGroup>
                          </S.Row>
                          <S.InputGroup>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                <input
                                  type="text"
                                  id="complement"
                                  name="complement"
                                  value={form.values.complement}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={checkInputHasError('complement') ? 'error' : ''}
                                />
                          </S.InputGroup>
                        </div>
                      </>
                    </Card>
                    <Button
                          type="button"
                          onClick={() => {setShowPagamento(true)}}
                          title="Clique aqui para finalizar a compra"
                          disabled={isLoading}
                        >
                          Continuar com pagamento
                    </Button>
                    <Button
                          type="button"
                          onClick={() => {setShowCheckout(false)}}
                          title="Clique aqui para voltar ao carrinho"
                          disabled={isLoading}
                        >
                          Voltar para o carrinho
                    </Button>
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
          </form>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
