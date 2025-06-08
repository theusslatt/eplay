import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  description,
  image,
  infos,
  system
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
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
