import { VStack, Text, ScrollView, Box } from 'native-base';
import { InputTexto } from '../components/Input';
import { Botao } from '../components/Botao';
import { Titulo } from '../components/Titulo';
import CardConsulta from '../components/CardConsulta';

export default function Explorar() {
  return (
    <ScrollView flex={1} bg={'white'} p={5}>
      <Box
        w={'100%'}
        borderRadius={'lg'}
        borderRightRadius={'md'}
        bgColor={'gray.100'}
        shadow={1}
        p={3}
        mt={5}
      >
        <InputTexto placeholder="Digite a especialidade..." />
        <InputTexto placeholder="Digite sua localizacao..." />
        <Botao texto="Buscar" my={3} />
      </Box>

      <Titulo color={'blue.500'}> Resultado da Busca</Titulo>
      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Neurologista"
        foto="https://github.com/yohan-araujo.png"
      />
      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Neurologista"
        foto="https://github.com/yohan-araujo.png"
      />
      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Neurologista"
        foto="https://github.com/yohan-araujo.png"
      />
      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Neurologista"
        foto="https://github.com/yohan-araujo.png"
      />
      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Neurologista"
        foto="https://github.com/yohan-araujo.png"
      />
    </ScrollView>
  );
}
