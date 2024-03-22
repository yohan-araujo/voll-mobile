const secoes = [
  {
    id: 1,
    titulo: 'Insira alguns dados básicos',
    inputTexto: [
      {
        id: 1,
        label: 'Nome',
        placeholder: 'Digite seu nome...',
      },
      {
        id: 2,
        label: 'Email',
        placeholder: 'Digite seu email...',
      },
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Digite sua senha...',
      },
      {
        id: 4,
        label: 'Repita a senha',
        placeholder: 'Repita sua senha...',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Agora, mais alguns dados sobre voce',
    inputTexto: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Digite seu CEP...',
      },
      {
        id: 2,
        label: 'Endereço',
        placeholder: 'Digite seu endereço...',
      },
      {
        id: 3,
        label: 'Número',
        placeholder: 'Digite seu número...',
      },
      {
        id: 4,
        label: 'Complemento',
        placeholder: 'Digite seu complemento...',
      },
      {
        id: 5,
        label: 'Telefone',
        placeholder: '(00) 00000-0000',
      },
    ],
  },
  {
    id: 3,
    titulo: 'Para finalizar quais sao os seus planos',
    checkbox: [
      {
        id: 1,
        value: 'Sulamerica',
      },
      {
        id: 2,
        value: 'Unimed',
      },
      {
        id: 3,
        value: 'Bradesco',
      },
      {
        id: 4,
        value: 'Amil',
      },
      {
        id: 5,
        value: 'Biosaúde',
      },
      {
        id: 6,
        value: 'Biovida',
      },
      {
        id: 7,
        value: 'Outros',
      },
      {
        id: 8,
        value: 'Não tenho plano',
      },
    ],
  },
];

export { secoes };
