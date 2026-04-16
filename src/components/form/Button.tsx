import { classMerge } from '../../utils/classMerge';

type Props = React.ComponentProps<'button'> & {
  isLoading?: boolean;
  variant?: 'base' | 'icon' | 'iconSmall';
};

const variants = {
  button: {
    base: 'h-12',
    icon: 'h-12 w-12',
    iconSmall: 'h-8 w-8',
  },
};

export function Button({
  isLoading,
  children,
  type = 'button',
  variant = 'base',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={classMerge([
        'flex cursor-pointer items-center justify-center rounded-lg bg-green-100 text-white hover:bg-green-200 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500',
        variants.button[variant],
      ])}
      {...rest}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  );
}
