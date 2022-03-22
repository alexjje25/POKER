import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    
  } from '@chakra-ui/react';


  export default function Buttons() {
    return (

<Stack minH={'100vh'}  >
      <Flex  flex={299}  >
        <Stack spacing={1}  ml={'29%'} mt={10} direction={['column', 'row']} >
<Button
backgroundImage={
    'url(/email.svg)'
  }
  bgSize={28}
  bgRepeat={'no-repeat'}
  backgroundPosition={'center center'}
   
    

            p={6}
         
         
            bg={useColorModeValue('#FFFFFF', 'gray.900')}
            color={'white'}
            rounded={'39'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}></Button>

<Button
backgroundImage={
    'url(/facebook.svg)'
  }
  bgRepeat={'no-repeat'}
  backgroundPosition={'center center'}
  bgSize={16}
  w={10}
           p={6}
            h={9}
        
            bg={useColorModeValue('#FFFFFF', 'gray.900')}
            color={'white'}
            rounded={'39'}
            
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}></Button>


<Button
backgroundImage={
    'url(/google.svg)'
  }
  bgRepeat={'no-repeat'}
  bgSize={29.1}
  backgroundPosition={'center center'}
  w={'10'}
  
          p={6} 
            
       
            
            bg={useColorModeValue('#FFFFFF', 'gray.900')}
            color={'white'}
            rounded={'39'}
            ml={1}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}></Button>


<Button
backgroundImage={
    'url(/apple.svg)'
  }
  bgRepeat={'no-repeat'}
  bgSize={30}
  backgroundPosition={'center center'}
  
           p={6}
            h={9}
           
            ml={1}
            bg={useColorModeValue('#FFFFFF', 'gray.900')}
            color={'white'}
            rounded={'39'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}></Button>
</Stack>
</Flex>

</Stack>

            );
        }