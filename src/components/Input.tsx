import { Input, IInputProps, Text } from 'native-base';

interface InputProps extends IInputProps {
  placeholder?: string;
  label?: string;
}

export function InputTexto({ label, placeholder, ...rest }: InputProps) {
  return (
    <>
      <Text color={'blue.800'} fontWeight={'bold'} fontSize={'md'}>
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        {...rest}
      />
    </>
  );
}
