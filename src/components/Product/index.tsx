import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
      laboriosam consequatur possimus aperiam sapiente eveniet maiores quasi
      expedita commodi cum deserunt aspernatur in rerum, fuga aliquid soluta ea
      consectetur veritatis?
    </Descricao>
  </Card>
)

export default Product
