import React, { useState } from 'react';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  useBreakpointValue,
  FormLabel,
  Input,
  Link,
  Stack,
  Image,
  Text,
  useToast,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Buttons from '../../components/buttons'
import Textline from '../../components/textline'
import { useMediaQuery } from '@chakra-ui/media-query';



//validação formulário
const schema = yup.object().shape({

  email: yup.string().email('*Deve ser inserido um e-mail válido').max(255).required('*Nenhum e-mail foi fornecido'),
  password: yup.string().required('*Nenhuma senha foi forncedida')
    .min(8, '*A senha é muito curta - deve ter no mínimo 8 caracteres.')
    .matches(
      /((?=.*[A-Z]){1}).*$/,
      "*As senha devem conter pelo menos uma letra maiuscula"),
});

interface IFormInputs {
  email: string
  password: number

}

export default function Login() {

  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  })


  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const router = useRouter()
  const toast = useToast()
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    toast({
      title: 'Poker Classic',
      description: "Login Efetuado com Sucesso.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    })
    setTimeout(() => {
      router.push('/table')
    }, 4000)
  };
  //Vizualizar a senha
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [ismax] = useMediaQuery("(min-width:1281px)");
  
  return (
    <Stack
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(/fundo.svg)'
      }
      bgSize={'cover'}
    >
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={7} flex={5} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'md'} >
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                '/pok.svg'
              }
              maxW={['180', '230', '230', '230', '249']}
              mr={ismax ? "-100" : 'null'}
              ml={['62', '101', '101', '101', '101']}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mb={2}>
                <FormLabel color='white'>Login </FormLabel>
                <Input border='3px solid' borderLeft={0} borderRight={0} borderTop={0}
                  color='white' variant='flushed'
                  maxW={['330', '450', '450', '450', '460']}
                  //largura começando de aparelhos menores para aparelhos maiores
                  type="text"
                  {...register("email")} />
                <Text color="red" fontSize="13"
                  fontWeight='bold'>
                  {errors.email?.message}
                </Text>
              </FormControl>
              <FormControl id="password">
                <FormLabel color='white' mb={2} >Senha</FormLabel>
                <InputGroup>
                  <Input color='white' border='3px solid' borderLeft={0} borderRight={0} borderTop={0}
                    maxW={['330', '450', '450', '450', '460']}
                    type={showPassword ? "text" : "password"}   {...register("password")} variant='flushed'
                  />
                  <InputRightElement width={['3rem', '8rem', '8rem', '8rem', '2.5rem']}>
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text color="red" fontSize="13" fontWeight='bold'>
                  {errors.password?.message}
                </Text>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox size='sm' mr={-215} mt={1} border={1} defaultChecked textColor={'white'} > Lembrar de mim</Checkbox>
                  <Link color={'white'} right={['-50px', '8rem', '8rem', '8rem', '10']} fontSize={14}
                  >Esqueci a senha</Link>
                </Stack>
                <Button
                  top={10}
                  bg="Primary.50"
                  color='white'
                  h={59}
                  type="submit"
                  boxShadow={'0 5px 20px 0px rgb(80 300 120 / 43%)'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  _focus={{
                    bg: 'green.500',
                  }}>
                  LOGIN
                </Button>
              </Stack>
              <Text color='white' fontSize={['13', '16', '16', '16', '16']} ml={['100', '130', '175', '170', '170']} mt={59}>cadastre-se agora</Text>
              <Textline />
              <Buttons />
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          {isWideVersion && (
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                '/chips.svg'
              }
              maxW={700}
              ml={-40}
            />
          )}
        </Flex>
      </Stack>
    </Stack>
  );
}