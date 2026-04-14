export function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-100">
        404 - Página Não Encontrada
      </h1>
      <a
        href="/"
        className="text-sm font-semibold text-gray-100 hover:text-green-800 transition ease-linear"
      >
        Voltar a Home
      </a>
    </div>
  );
}
