import Header from "../components/Header/Header";
import { CardProjects, ContainerProjects } from "../styles/ProjectsStyle";


export default function Projects() {
  return (
    <>
      <Header />
      <ContainerProjects>
        
        <CardProjects>
          <h2>Monty Hall</h2>
          <p>
            O paradoxo de Monty Hall considera que existem três portas, atrás de uma existe um prêmio e,
            atrás das outras duas não existe nada.
          </p>
          <a href="https://hungry-kepler-eff66a.netlify.app/">Link</a>
        </CardProjects>

        <CardProjects>
          <h2>AluraKut</h2>
          <p>Um clone da página principal do orkut clássico</p>
          <a href="https://zealous-euler-e1e6f0.netlify.app">LInk</a>
        </CardProjects>

        <CardProjects>
          <h2>Crud-Next</h2>
          <p>Um pequena aplicação feita em next com
            integração do firebase para guardar os dados
          </p>
          <a href="https://github.com/dandankara/crud-next">Link</a>
        </CardProjects>

        <CardProjects>
          <h2>Supera-Store</h2>
          <p>Teste técnico feito para Superah, um e-commerce de jogos</p>
          <a href="https://github.com/dandankara/superah_store"> link</a>
        </CardProjects>

        <CardProjects>
          <h2>Moveit-Next</h2>
          <p>Aplicação feita do modelo pomodoro para auxilio nos estudos</p>
          <a href="https://kind-mestorf-c5bd61.netlify.app/"> link</a>
        </CardProjects>
        
      </ContainerProjects>
    </>
  )
}