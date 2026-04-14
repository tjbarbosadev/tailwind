import logoSvg from '../assets/logo.svg';
import logoutSvg from '../assets/logout.svg';

export function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <img src={logoSvg} alt="Logo" />

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-200">
          Olá, Rodrigo
        </span>

        <img
          src={logoutSvg}
          alt="Ícone de sair"
          className="my-8 cursor-pointer transition ease-linear hover:opacity-75"
        />
      </div>
    </header>
  );
}
