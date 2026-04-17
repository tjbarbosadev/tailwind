import { useState } from 'react';
import { data, useNavigate, useParams } from 'react-router';

import { Input } from '../components/form/Input';
import { Select } from '../components/form/Select';
import { Button } from '../components/form/Button';
import { Upload } from '../components/form/Upload';

import fileSvg from '../assets/file.svg';

import { CATEGORIES, CATEGORIES_KEYS } from '../utils/catogories';
import z from 'zod';
import { AxiosError } from 'axios';
import { api } from '../services/api';

const refundSchema = z.object({
  description: z.string().min(1, 'A descrição é obrigatória'),
  amount: z.coerce
    .number('Valor inválido')
    .positive('O valor deve ser positivo'),
  category: z.string().min(1, 'A categoria é obrigatória'),
});

export function Refund() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (params.id) {
      navigate(-1);
      return;
    }

    try {
      setIsLoading(true);

      if (!filename) {
        alert('O comprovante é obrigatório');
        return;
      }

      const fileUploadFormData = new FormData();
      fileUploadFormData.append('file', filename);

      const uploadResponse = await api.post('/uploads', fileUploadFormData);

      console.log({ uploadResponse });

      const data = refundSchema.parse({
        description,
        category,
        amount: amount.replace(',', '.'),
      });

      console.log({ ...data, filename: uploadResponse.data.fileName });

      await api.post('/refunds', {
        ...data,
        filename: uploadResponse.data.fileName,
      });

      navigate('/confirm', { state: { fromSubmit: true } });
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert(error.issues.map((issue) => issue.message).join('\n'));
        return;
      }

      if (error instanceof AxiosError && error.response?.data.issues) {
        alert(
          error.response?.data.issues
            .map((issue: any) => issue.message)
            .join('\n'),
        );
        return;
      }

      alert('Ocorreu um erro ao enviar a solicitação');
      return;
    } finally {
      setIsLoading(false);
    }
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
        legend="Descrição"
        placeholder="Ex: Hospedagem"
        value={description}
        disabled={!!params.id}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          disabled={!!params.id}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((key) => (
            <option key={key} value={key}>
              {CATEGORIES[key].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          placeholder="Ex: R$ 10,00"
          value={amount}
          disabled={!!params.id}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {(!params.id && (
        <>
          <Upload
            filename={filename}
            legend="Comprovante"
            disabled={!!params.id}
            onChange={(e) => {
              e.target.files && setFilename(e.target.files[0]);
            }}
          />

          <Button type="submit" isLoading={isLoading}>
            Enviar solicitação
          </Button>
        </>
      )) || (
        <>
          <a
            href="/"
            target="_blank"
            className="flex items-center justify-center gap-2 text-green-100 hover:opacity-70"
          >
            <img src={fileSvg} alt="Comprovante" />
            <span>Abrir comprovante</span>
          </a>

          <Button variant="base" onClick={() => navigate(-1)}>
            Voltar para o dashboard
          </Button>
        </>
      )}
    </form>
  );
}
