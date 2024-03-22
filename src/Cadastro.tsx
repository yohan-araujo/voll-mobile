import { VStack, Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import Logo from '../src/assets/Logo.png';
import { Titulo } from './components/Titulo';
import { InputTexto } from './components/Input';
import { Botao } from './components/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntrada';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  const avancarSecao = () => {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  };
  const voltarSecao = () => {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  };

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={'center'} />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box mt={10}>
        {secoes[numSecao]?.inputTexto?.map((entrada) => {
          return (
            <InputTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            />
          );
        })}
      </Box>
      <Box>
        <Text color={'blue.800'} fontWeight={'bold'} fontSize={'md'} my={2}>
          Selecione o plano:{' '}
        </Text>
        {secoes[numSecao]?.checkbox?.map((checkbox) => {
          return (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          );
        })}
      </Box>
      {numSecao > 0 && (
        <Botao
          onPress={() => {
            voltarSecao();
          }}
          texto="Voltar"
          mt={4}
          bgColor={'gray.400'}
        />
      )}
      <Botao
        onPress={() => {
          avancarSecao();
        }}
        texto="Avançar"
        mt={4}
        mb={20}
      />
    </ScrollView>
  );
}
