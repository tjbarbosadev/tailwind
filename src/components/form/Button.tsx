type Props = React.ComponentProps<'button'> & {
  isLoading?: boolean;
};

export function Button({
  isLoading,
  type = 'button',
  children,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 px-4 py-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
      {...rest}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  );
}
