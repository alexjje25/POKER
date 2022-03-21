



import { Box, Center, Divider, Flex, Button, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Buttons() {
    return (
      <Button 

      w={['100px',  '400px' , '449px', '450px', '450px']} 
      color={'white'}
      bg="Primary.50" 
      mb={-180} 
      h={58}
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
      
           )
    }