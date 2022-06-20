import fontwhitecenter from '../styles/font-white-center';
import fontwhite from '../styles/font-white';

const RegisterForm = () => {
    return <div>
        <article>
            <blockquote><p style={fontwhite}>
                <p style={fontwhite}><h2>Para fazer doações: <a href="#">Acesse aqui</a></h2></p>
                <hr />
                <b><h2>Amigo do Triângulo Hackerspace</h2></b>
                Contribuicao Mensal: 10 Reais. <br /><br />
                Pessoa contribui, sem compromisso com o Hackerspace, apenas com intuito de ajudar o mesmo.<br />
                <br />
                <hr />
                <b><h2>Associado</h2></b>
                Contribuicao Mensal: 30 Reais. <br /><br />
                Pessoa contribui mensalmente e recebe titulo de associado, tal titulo da direito de: <br />
                <ul>
                    <li>1. Descontos entre 50% a 100% do valor de um curso/serviço executado dentro e/ou com o nome do Hackerspace: (Exceto taxas referentes a cobertura de custos de hardwares como kits e/ou componentes, etc).</li>
                    <li>2. Direto de participar das assembleias e direito a voto em qualquer assunto discutido em uma assembleia.</li>
                    <li>3. Direito de usufruir das instalações e ferramentas presentes no Hackerspace enquanto um membro Key-Holder mante-lo aberto.</li>
                    <li>4. Ministrar / Promover atividades dentro do Hackerspace sem custo algum enquanto um membro Key-Holder mante-lo aberto.</li>
                    <li>5. Poderá utilizar o espaço para estudo ou trabalho pessoal.</li>
                    <li>6. O mesmo se torna responsavel pelo zelo do ambiente enquanto o mesmo estiver presente no local.</li>
                </ul>
                <hr />
                <b><h2>Key-Holder</h2></b>
                Contribuicao Mensal: 100 Reais. <br /><br />
                <ul>
                    <li>1. Apenas para Associado que:
                        <ul>
                            <li>i. estar associado por no minimo 6 meses</li>
                            <li>ii. estiver com "boa conduta" nos últimos 3 meses consecutivos e com as Contribuições mensais em dia;</li>
                            <li>iii.receber votação positiva unanime dos associados presentes em assembleia. (O mesmo nao sera convocado e nao estara presente na Assembleia para que nenhum associado se sinta intimidado pela sua presença);</li>
                        </ul>
                    </li>
                    <li>2. O mesmo tera os mesmos direitos de um Associado;</li>
                    <li>3. O mesmo portara uma chave do Hackerspace e poderá mante-lo aberto no horario que lhe convir;</li>
                    <li>4. O mesmo nao pode ficar com suas contribuicoes com atraso maior que 30 dias, caso positivo, seu acesso sera revogado;</li>
                    <li>5. O mesmo sera responsável pela instalação e ferramentas no local, quando o mesmo estiver aberto o local;</li>
                </ul>

            </p></blockquote>
        </article>

    </div>;
};

export default RegisterForm;