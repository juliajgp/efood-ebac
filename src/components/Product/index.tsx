import { useState } from 'react'
import Tag from '../Tag'

import * as S from './styles'
import closeIcon from '../../assets/images/fechar.png'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface ModalState extends Produto {
  isVisible: boolean
}

const Product = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 100) + '...'
    }
    return text
  }
 
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: 'string',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: 'string',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })
  }

  return (
    <>
      <S.Card
        title={`Clique aqui para ver mais detalhes do produto: ${nome}`}
      >
        <img src={foto} alt={nome} />
        <div className='titulo-class'>
          <S.Title>{nome}</S.Title>
        </div>
        <S.Description>{getDescription(descricao)}</S.Description>
        <div className='button'>
          <button
            onClick={() => {
              setModal({
                isVisible: true,
                foto: foto,
                preco: preco,
                id: id,
                nome: nome,
                descricao: descricao,
                porcao: porcao
              })
            }}
          >
            <Tag>Mais Detalhes</Tag>
          </button> 
        </div>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          {modal.id ? (
                <S.Card
                  title={`Clique aqui para ver mais detalhes do produto: ${nome}`}
                >
                  <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} className='closing-button' />
                  <img src={foto} alt={nome} />
                  <div className='titulo-class'>
                    <S.Title>{nome}</S.Title>
                    <S.Description>{descricao}</S.Description>
                    <S.Description>Serve: de {porcao}</S.Description>
                    <div className='button'>
                      <button
                        onClick={() => {
                          setModal({
                            isVisible: true,
                            foto: foto,
                            preco: preco,
                            id: id,
                            nome: nome,
                            descricao: descricao,
                            porcao: porcao
                          })
                        }}
                      >
                        <Tag>Adicionar ao Carrinho</Tag>
                      </button> 
                    </div>
                  </div>
                </S.Card>
          ) : (
            <iframe frameBorder={0} src={modal.foto} />
            )}
        </S.ModalContent>
        <div
          onClick={() => {
            closeModal()
        }}
        className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Product
