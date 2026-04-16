import { useActionState } from 'react';
import { Button } from '../components/form/Button';
import { Input } from '../components/form/Input';
import z, { ZodError } from 'zod';
import { api } from '../services/api';
import { AxiosError } from 'axios';

const signInSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z
    .string()
    .trim()
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  async function signIn(prevState: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      });

      const response = await api.post('/sessions', data);
      console.log(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        return { message: error.issues.map((err) => err.message).join(', ') };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return { message: 'Erro ao entrar, tente novamente' };
    }
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-4">
      <Input
        required
        name="email"
        legend="E-mail"
        type="email"
        placeholder="seu-email@email.com"
      />

      <Input
        required
        name="password"
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      {state?.message && (
        <p className="text-center text-sm font-semibold text-red-500">
          {state.message}
        </p>
      )}

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="trasnsition mt-10 mb-4 text-center text-sm font-semibold text-gray-100 ease-linear hover:text-green-800"
      >
        Criar conta
      </a>
    </form>
  );
}
