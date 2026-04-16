import { useState } from 'react';

import { Input } from '../components/form/Input';
import { Button } from '../components/form/Button';
import { RefundItem } from '../components/RefundItem';

import searchSvg from '../assets/search.svg';
import { CATEGORIES } from '../utils/catogories';
import { formatCurrency } from '../utils/formatCurrency';
import { Pagination } from '../components/Pagination';

const REFUND_EXAMPLE = {
  id: '1',
  name: 'Thiago',
  category: 'Alimentação',
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES['food'].icon,
};

export function Dashboard() {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
  }

  function handlePagination(action: 'prev' | 'next') {
    setPage((prev) => {
      if (action === 'next' && prev < totalPages) {
        return prev + 1;
      }

      if (action === 'prev' && prev > 1) {
        return prev - 1;
      }
      return prev;
    });
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

      <div className="flex max-h-102 flex-col overflow-y-auto border-b border-b-gray-400">
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
      <div className="mt-4">
        <Pagination
          current={page}
          total={totalPages}
          nextPage={() => handlePagination('next')}
          prevPage={() => handlePagination('prev')}
        />
      </div>
    </div>
  );
}
