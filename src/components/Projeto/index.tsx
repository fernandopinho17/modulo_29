import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    </Card>
  )
}

export default Projeto
