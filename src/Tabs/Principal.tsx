import { VStack, Text, Image, ScrollView, Divider, Box } from 'native-base';
import Logo from '../assets/Logo.png';
import { Titulo } from '../components/Titulo';
import { InputTexto } from '../components/Input';
import { Botao } from '../components/Botao';
import { Texts } from '../utils/Texts';

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack
        flex={1}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        p={5}
      >
        <Image source={Logo} alt="Logo Voll" m={5}></Image>
        <Titulo color={'blue.500'} mr={'40'}>
          Boas-vindas!
        </Titulo>
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
        <Titulo fontSize={'2xl'} color={'blue.800'}>
          Depoimentos
        </Titulo>
        <VStack>
          {Texts.map((text) => (
            <Box mt={5} key={text.id}>
              <Text color={'gray.500'} textAlign={'justify'}>
                {text.texto}
              </Text>
              <Text
                fontSize={'md'}
                textAlign={'center'}
                fontWeight={'bold'}
                color={'gray.500'}
                mt={4}
              >
                {text.autor}
              </Text>
              <Divider my={2} />
            </Box>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}
