import { useState, type SubmitEvent } from 'react';
import { Button } from '../components/form/Button';
import { Input } from '../components/form/Input';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(name, email, password, confirmPassword);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu-email@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirmar Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Criar conta
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 trasnsition ease-linear"
      >
        Já tem uma conta? Entrar
      </a>
    </form>
  );
}
