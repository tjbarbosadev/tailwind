import logoSvg from '../assets/logo.svg';
import logoutSvg from '../assets/logout.svg';
import { useAuth } from '../hooks/useAuth';

export function Header() {
  const auth = useAuth();

  return (
    <header className="flex w-full items-center justify-between">
      <img src={logoSvg} alt="Logo" />

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-200">
          Olá, {auth.session?.user.name}
        </span>

        <img
          src={logoutSvg}
          alt="Ícone de sair"
          className="my-8 cursor-pointer transition ease-linear hover:opacity-75"
          onClick={() => auth.remove()}
        />
      </div>
    </header>
  );
}
