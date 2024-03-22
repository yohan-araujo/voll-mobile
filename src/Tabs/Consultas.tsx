import { VStack, Divider, ScrollView } from 'native-base';
import CardConsulta from '../components/CardConsulta';
import { Titulo } from '../components/Titulo';
import { Botao } from '../components/Botao';

export default function Consultas() {
  return (
    <ScrollView>
      <Titulo color={'blue.500'} mb={5}>
        Minhas Consultas
      </Titulo>
      <VStack px={5}>
        <Botao mt={5} texto="Agendar nova consulta" mb={5} px={5} />
      </VStack>
      <Titulo
        color={'blue.500'}
        fontSize={'lg'}
        mb={5}
        alignSelf={'flex-start'}
        ml={5}
      >
        Proximas Consultas
      </Titulo>

      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Cardiologista"
        foto="https://github.com/yohan-araujo.png"
        data="21/03/2024"
        foiAgendado
      />
      <Titulo
        color={'blue.500'}
        fontSize={'lg'}
        mb={5}
        alignSelf={'flex-start'}
        ml={5}
      >
        Consultas passadas
      </Titulo>

      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Cardiologista"
        foto="https://github.com/yohan-araujo.png"
        data="21/03/2024"
        foiAtendido
      />

      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Cardiologista"
        foto="https://github.com/yohan-araujo.png"
        data="21/03/2024"
        foiAtendido
      />

      <CardConsulta
        nome="Dr. Yohan"
        especialidade="Cardiologista"
        foto="https://github.com/yohan-araujo.png"
        data="21/03/2024"
        foiAtendido
      />
      <Divider mt={5} />
    </ScrollView>
  );
}
