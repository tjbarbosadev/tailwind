import { useState } from 'react';

import { Input } from '../components/form/Input';
import { Button } from '../components/form/Button';
import { RefundItem } from '../components/RefundItem';

import searchSvg from '../assets/search.svg';
import { CATEGORIES } from '../utils/catogories';
import { formatCurrency } from '../utils/formatCurrency';

const REFUND_EXAMPLE = {
  id: '1',
  name: 'Thiago',
  category: 'Alimentação',
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES['food'].icon,
};

export function Dashboard() {
  const [name, setName] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="rounded-lg bg-gray-500 p-5 md:min-w-3xl md:p-10">
      <h1 className="flex-1 text-xl font-bold text-gray-100">
        Manager Dashboard
      </h1>

      <form
        onSubmit={handleSubmit}
        className="item-center mt-6 flex justify-between gap-3 border-b border-b-gray-400 pb-6 md:flex-row"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="icon" type="submit">
          <img src={searchSvg} alt="Search" />
        </Button>
      </form>

      <div className="flex max-h-100 flex-col overflow-y-auto">
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
  );
}
