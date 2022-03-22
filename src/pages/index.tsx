import React from 'react';

import 'aos/dist/aos.css';
import {
  Flex,
  Button,
  Image,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'


export default function Home() {
  
  const router = useRouter()

  return (
    <Flex

      bgColor={'black'}
      h={'100vh'}
    >
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
          '/pok.svg'
        }
        w={['200px', '292px', '300px', '300px', '300px']}
        h={['69', '97', '97', '97', '97']}
        mt={75}
        ml={['80px', '150px', '300px', '390px', '550px']}
      />
      <Button onClick={() => router.push('/register')}
        w={['200px', '300px', '300px', '260px', '260px']}
        color={'white'}
        bg=""
        mt={80}
        h={63}
        ml={['-220px', '-300px', '300px', '-310px', '-309px']}
        type="submit"
        boxShadow={'0 2px 15px 5px rgb(50 300 120 / 22%)'}
        _hover={{
          bg: '#002714',
        }}
        _focus={{
          bg: '#002714',
        }}>
        REGISTER
      </Button>
    </Flex>
  )
}



