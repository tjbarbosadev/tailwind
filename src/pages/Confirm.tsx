import { Navigate, useLocation } from 'react-router';

import okSvg from '../assets/ok.svg';

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-500 p-10 lg:w-lg">
      <h1 className="text-center text-2xl font-bold text-green-100">
        Solicitação enviada!
      </h1>
      <img src={okSvg} alt="Solicitação enviada com sucesso" className="w-28" />
      <p>Sua solicitação será analisada!</p>

      <a
        href="/"
        className="rounded-lg bg-green-100 px-4 py-2 text-white transition-opacity hover:opacity-80 hover:shadow-lg"
      >
        Nova solicitação
      </a>
    </div>
  );
}
