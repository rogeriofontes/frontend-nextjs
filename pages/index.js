import fontwhitecenter from '../styles/font-white-center';
import fontwhite from '../styles/font-white';
import Link from 'next/link';

const qs = require('qs');

export default function Home() {
  return (
    <div>

      <section>

        <article>
          <header className="header-title">
            <h2>O que é o Triângulo Hackerspace?</h2>
          </header>
          <blockquote>
            <p style={fontwhite}>
              O Triângulo Hackerspace (THS) é um grupo de entusiasta que goste de se reunir para fazer projetos legais e compartilhar conhecimento.
              Usando a mentalidade Hacker de estudar a fundo os assuntos de interesse, contribuímos com o crescimento pessoal dos Associados(as).
              Não agimos como Blackhat, ou seja, não atuamos em práticas ilegais. Somos Hackers Éticos, saiba mais em Ética Hacker.

              O Triängulo Hackerspace é um Hackerspace fundado em 2013/01/01 na cidade de Uberländi/MG.
              Além disso, o Triängulo Hackerspace é uma organização privada que propicia a troca de conhecimento
              através de uma infraestrutura própria, para que entusiastas de tecnologia realizem
              projetos em diversas áreas, como cibernética, redes interplanetárias, telecomunicação, eletrônica, software,
              robótica, segurança, biohacking, computação quântica - ou o que mais a criatividade permitir.
              Também pode ser visto como um clube social ou uma maçonaria de ateus, sendo assim uma organização criada e mantida pelos membros fundadores. Os novos membros são aceitos mediante indicação de um membro do hackerspace. O Área31 possui pesquisas secretas, e somente algumas são divulgadas ao público pelo óbvio. Somente são aceitos "hackers de DNA" visto que é impossível treinar um ser humano comum para se tornar um hacker. Qualquer empresa, grupo ou organização que venda a idéia falsa de "criar hackers", seja mediante realização de cursos, treinamentos ou mesmo frequentando eventos ou outros hackerspaces, é mal vista pelos membros do Área31 Hackerspace.
            </p>
          </blockquote>
        </article>

        <article>
          <header className="header-title"> <h2>Quem pode participar?</h2>  </header>
          <blockquote><p style={fontwhite}>O espaço é aberto a comunidade, sendo assim todos podem participar.</p></blockquote>
        </article>

        <article>
          <header className="header-title"> <h2>Como participar?</h2>  </header>
          <blockquote><p style={fontwhite}>Confira nossa agenda para ficar por dentro dos eventos, ou junte-se a nossa comunidade no Discord para trocar ideias e bater um papo.</p></blockquote>
        </article>

        <article>
          <header className="header-title"> <h2>Estatuto:</h2>  </header>
          <blockquote><p style={fontwhite}>Confira sobre nosso estatudo: <a href="https://github.com/Triangulo-Hackerspace/Estatuto">Acesse aqui</a>.</p></blockquote>
        </article>

       
        <article>
          <header className="header-title"> <h2>Com que frequência nos reunimos?</h2>  </header>
          <blockquote><p style={fontwhite}>Geralmente nos encontramos a cada 15 dias, atravéz de algum meetup.</p></blockquote>
        </article>
        
        <article>
          <header className="header-title"> <h2>Sobre:</h2>  </header>
          <blockquote><p style={fontwhite}>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></blockquote>
        </article>

          Pagina inicial
      </section>

      <footer>
        <article>
          <p style={fontwhitecenter}>Copyright 2022 - Triângulo Hackerspace</p>
        </article>
      </footer>

    </div>

  );
}