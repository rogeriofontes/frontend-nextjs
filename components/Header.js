import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <span id="site-name">Triângulo Hackerspace</span>
        </Link>
        <span id="pages">
          <Link href="/archives">Artigos</Link>
          <Link href="/video-screencasts">Vídeos</Link>
          <Link href="/history">História</Link>
          <Link href="/albuns">Albuns de Fotos</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/register-forms">Formas de Associação</Link>
          <Link href="/register">Associe-se</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;