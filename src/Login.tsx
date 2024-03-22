import { VStack, Image, Text, Box, FormControl, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from '../src/assets/Logo.png';
import { Titulo } from './components/Titulo';
import { InputTexto } from './components/Input';
import { Botao } from './components/Botao';

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems={'center'} p={5} justifyContent={'center'}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <FormControl mt={3}>
          <InputTexto label="Email" placeholder="Digite seu email..." />
          <InputTexto label="Senha" placeholder="Digite sua senha..." />
        </FormControl>
      </Box>
      <Botao
        texto="Entrar"
        mt={10}
        onPress={() => {
          navigation.navigate('Tabs');
        }}
      />
      <Link href="#" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cadastro');
          }}
        >
          <Text color={'blue.500'}> Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
