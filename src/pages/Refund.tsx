import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Input } from '../components/form/Input';
import { Select } from '../components/form/Select';
import { Button } from '../components/form/Button';
import { Upload } from '../components/form/Upload';

import { CATEGORIES, CATEORIES_KEYS } from '../utils/catogories';

export function Refund() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<string | null>(null);

  const navigate = useNavigate();

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, amount, category, filename, isLoading });

    navigate('/confirm', { state: { fromSubmit: true } });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-6 rounded-xl bg-gray-500 p-10 lg:min-w-lg"
    >
      <header>
        <h1 className="text-xl font-bold">Solicitação de reembolso</h1>
        <p className="mt-2 mb-4 text-xs text-gray-200">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        placeholder="Ex: Hospedagem"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEORIES_KEYS.map((key) => (
            <option key={key} value={key}>
              {CATEGORIES[key].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          placeholder="Ex: R$ 10,00"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min={0}
          step={0.01}
        />
      </div>

      <Upload
        filename={filename}
        legend="Comprovante"
        onChange={(e) => {
          e.target.files && setFilename(e.target.files[0].name);
        }}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar solicitação
      </Button>
    </form>
  );
}
