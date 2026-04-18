import { useEffect, useState } from 'react';

import { Input } from '../components/form/Input';
import { Button } from '../components/form/Button';
import { RefundItem, type RefundItemProps } from '../components/RefundItem';

import searchSvg from '../assets/search.svg';
import { CATEGORIES } from '../utils/catogories';
import { formatCurrency } from '../utils/formatCurrency';
import { Pagination } from '../components/Pagination';
import { api } from '../services/api';
import { AxiosError } from 'axios';

const PER_PAGE = 10;

export function Dashboard() {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchRefunds();
  }

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name}&page=${page}&perPage=${PER_PAGE}`,
      );

      console.log(response.data);

      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          category: CATEGORIES[refund.category].name,
          amount: formatCurrency(refund.amount),
          categoryImg: CATEGORIES[refund.category].icon,
        })),
      );

      setTotalPages(response.data.pagination.totalPages);
      setPage(response.data.pagination.page);
    } catch (error) {
      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
      return alert('An error occurred while fetching refunds.');
    }
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

  useEffect(() => {
    fetchRefunds();
  }, [page]);

  return (
    <div className="rounded-lg bg-gray-500 p-5 md:min-w-3xl md:p-10">
      <h1 className="flex-1 text-xl font-bold text-gray-100">
        Manager Dashboard
      </h1>

      <form
        onSubmit={onSubmit}
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
        {refunds.map((refund) => (
          <RefundItem
            key={refund.id}
            data={refund}
            href={`/refund/${refund.id}`}
          />
        ))}
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
