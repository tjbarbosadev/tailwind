export type RefundItemProps = {
  id: string;
  name: string;
  category: string;
  amount: string;
  categoryImg: string;
};

type Props = React.ComponentProps<'a'> & {
  data: RefundItemProps;
};

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      {...rest}
      className="flex cursor-pointer items-center gap-4 rounded-md p-4 hover:bg-green-100/5"
    >
      <img src={data.categoryImg} alt={data.category} className="h-8 w-8" />

      <div className="flex flex-1 flex-col">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <p className="text-xs text-gray-200">{data.category}</p>
      </div>

      <span className="text-sm font-semibold text-gray-100">
        <small className="text-gray-200">R$ </small>
        {data.amount}
      </span>
    </a>
  );
}
