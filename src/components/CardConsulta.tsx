import { Text, Avatar, VStack } from 'native-base';
import { Botao } from './Botao';

interface ICardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export default function CardConsulta({
  nome,
  foto,
  especialidade,
  data,
  foiAtendido,
  foiAgendado,
}: ICardProps) {
  return (
    <VStack
      w={'100%'}
      bg={foiAtendido ? 'blue.100' : 'white'}
      p={5}
      borderRadius={'lg'}
      shadow={2}
      mb={5}
    >
      <VStack flexDir={'row'}>
        <Avatar size={'lg'} source={{ uri: foto }} />
        <VStack pl={4}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Botao texto={foiAgendado ? 'Cancelar' : 'Agendar consulta'} mt={5} />
    </VStack>
  );
}
