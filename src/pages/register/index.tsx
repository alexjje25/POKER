import React, { useState } from 'react';

import {
  Button,
  Flex,
  FormControl,
  useBreakpointValue,
  FormLabel,
  Input,
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
import CheckBox from '../../components/checkbox'
import { useMediaQuery } from '@chakra-ui/media-query';


//validação formulário
const schema = yup.object().shape({
  name: yup.string().required('O campo nome precisa ser preenchido'),
  email: yup.string().email('*Deve ser inserido um e-mail válido').max(255).required('*Nenhum e-mail foi fornecido'),
  password: yup.string().required('*Nenhuma senha foi forncedida')
    .min(8, '*A senha é muito curta - deve ter no mínimo 8 caracteres.')
    .matches(
      /((?=.*[A-Z]){1}).*$/,
      "*As senha devem conter pelo menos uma letra maiuscula"),
});

interface IFormInputs {
  name: string
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
      description: "Cadastro Efetuado com Sucesso.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    })
    setTimeout(() => {
      router.push('/login')
    }, 4000)
  };

  //Vizualizar a senha
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [ismax] = useMediaQuery("(max-width:280px)");
  return (
    <Stack
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(/fundo.svg)'
      }
      bgSize={'cover'}
    >
      <Stack minH={'100vh'} direction={{ base: 'row', md: 'row' }}>
        <Flex p={7} flex={5} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'md'}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                '/pok.svg'
              }
              maxW={['180', '230', '230', '230', '249']}
              mr={ismax ? "-70" : 'null'}
              ml={['74', '101', '101', '101', '101']}
              mb={-5}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mb={2}>
                <FormLabel color='white'>Name </FormLabel>
                <Input border='3px solid' borderLeft={0} borderRight={0} borderTop={0}
                  color='white' variant='flushed'
                  //largura começando de aparelhos menores para aparelhos maiores
                  w={['300px', '409px', '440px', '380px', '450px']}
                  type="text"
                  {...register("name")} />
                <Text color="red" fontSize="13"
                  fontWeight='bold'>
                  {errors.name?.message}
                </Text>
              </FormControl>
              <FormControl mb={2}>
                <FormLabel color='white'>Login </FormLabel>
                <Input border='3px solid' borderLeft={0} borderRight={0} borderTop={0}
                  color='white' variant='flushed'
                  //largura começando de aparelhos menores para aparelhos maiores
                  w={['300px', '409px', '440px', '380px', '450px']}
                  type="text"
                  {...register("email")} />
                <Text color="red" fontSize="13"
                  fontWeight='bold'>
                  {errors.email?.message}
                </Text>
              </FormControl>
              <FormControl >
                <FormLabel color='white' mb={2} >Senha</FormLabel>
                <InputGroup>
                  <Input border='3px solid' borderLeft={0} borderRight={0} borderTop={0}
                    color='white'
                    w={['300px', '409px', '440px', '380px', '460px']}
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
                  <CheckBox />
                </Stack>
                <Button
                  top={1}
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
              ml={-60}
              mr={-8}
              maxW={740}
            />
          )}
        </Flex>
      </Stack>
    </Stack>
  );
}