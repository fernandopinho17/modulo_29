import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Githubsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid
      dicta sed, harum accusamus consectetur ipsum? Repellat, consectetur nemo.
      Adipisci, animi ullam. Facilis sapiente tempore sit ullam debitis
      doloribus perferendis!
    </Paragrafo>
    <Githubsecao>
      <img src="https://github-readme-stats.vercel.app/api?username=fernandopinho17&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fernandopinho17=compact&langs_count=7&theme=dracula" />
    </Githubsecao>
  </section>
)

export default Sobre
