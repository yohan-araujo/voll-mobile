import { Button, IButtonProps } from 'native-base';

interface IBotaoProps extends IButtonProps {
  texto: string;
}

export function Botao({ texto, ...rest }: IBotaoProps) {
  return (
    <Button w="100%" bg="blue.800" borderRadius="lg" {...rest}>
      {texto}
    </Button>
  );
}
