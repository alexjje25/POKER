import { Box, Flex, Heading, Button, Image, Text, useBreakpointValue } from "@chakra-ui/react";


export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      w={['349vw', '900px', '311.5vh', '215vh', '100%']}
      h={['369vh', '300vh', '200vh', '1200px', '100vh']}
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      backgroundImage={
        'url(/fundovinho.svg)'
      }
    >
      <Box >
        <Box

          bgImage='url("/fundo-black.png")'
          h={489}
          ml={359}
          w={933}
          bgSize='68%'
          bgRepeat='no-repeat'
          mt={95}
        >
          <Flex

            h='80%'
            justify='center'
            pos='relative'
          >
            <Image
              pos='relative'
              right='-422'
              bottom='8'

              src='/fundo-verde.svg'
              alt='Fundo verde'
              w={600}
            />

            <Image
              pos='relative'
              right='125'
              bottom='6'

              src='/listras.svg'
              alt='Listras'
              w={500}
            />
            <Flex ml={640} mt={125} pos={'absolute'}>
              <Image
                pos='relative'
                right='463'
                bottom='-1'
                src='/A1.svg'
                alt='A1'
                w={43}
              />
              <Image
                pos='relative'
                right='459'
                bottom='-1'
                src='/A1.svg'
                alt='A1'
                w={43}
              />
              <Image
                pos='relative'
                right='456'
                bottom='-1'
                src='/A1.svg'
                alt='A1'
                w={43}
              />
              <Image
                pos='relative'
                right='452'
                bottom='-1'
                src='/A1.svg'
                alt='A1'
                w={43}
              />
            </Flex>

            <Image
              pos='relative'
              right='560'
              bottom='-15'
              src='/moedapok.svg'
              alt='A1'
              w={66}
            />
            <Image
              pos='relative'
              right='690'
              bottom='105'
              src='/cartasm2.svg'
              alt='moedapok'
              w={95}
            />
            <Image
              pos='relative'
              right='720'
              bottom='89'
              src='/moedapok.svg'
              alt='A1'
              w={66}
            />
            <Image
              pos='relative'
              right='860'
              bottom='-30'

              src='/cartasm1.svg'
              alt='moedapok'
              w={95}
            />

            <Image
              pos='relative'
              right='580'
              bottom='-5'
              src='/moedapok.svg'
              alt='moedapok'
              w={66}
            />
            <Image
              pos='relative'
              right='600'
              bottom='-31'
              src='/meiocartas.svg'
              alt='moedapok'
              w={95}
            />

            <Image
              pos='relative'
              right='750'
              bottom='85'
              src='/moedapok.svg'
              alt='moedapok'
              w={66}
            />
            <Image
              pos='relative'
              right='750'
              bottom='89'
              src='/image5carta.svg'
              alt='moedapok'
              w={95}
            />

          </Flex>
          <Box
            bgImage='url("/Rectangle.svg")'
            ml={534}
            h={20}
            bgRepeat='no-repeat'
            bgSize={'49%'}
            mt={-185}
          >
            <Flex
              h='70%'
              justify='center'
              pos='relative'
            >
              <Heading fontSize={14} mt={2} ml={-47}
                pos='relative'
                color={'#E19D05'}
              > UserName</Heading>
              <Heading color={'#fff'} fontSize={14} ml={-59} mt={8}> R$ 500,00 </Heading>

              <Image
                pos='relative'
                right='153'
                bottom='1'
                src='/menina.svg'
                alt='A1'
                h={78}
              />
            </Flex>
          </Box>
          <Box
            bgImage='url("/Rectangle.svg")'
            ml={540}
            h={20}
            bgRepeat='no-repeat'
            bgSize={'45%'}
            mt={-260}
          >
            <Flex
              h='70%'
              justify='center'
              pos='relative'
            >
              <Heading fontSize={14} mt={2} ml={-59}
                pos='relative'
                color={'#E19D05'}
              > UserName</Heading>
              <Heading color={'#fff'} fontSize={14} ml={-59} mt={8}> R$ 500,00 </Heading>

              <Image
                pos='relative'
                right='165'
                bottom='1'
                src='/image4.svg'
                alt='A1'
                h={75}
              />
            </Flex>

          </Box>
          <Box
            bgImage='url("/Rectangle.svg")'
            ml={-130}
            h={20}
            bgRepeat='no-repeat'
            mt={-20}
          >
            <Flex
              h='70%'
              justify='center'
              pos='relative'
            >
              <Heading fontSize={14} mt={2} ml={-815}
                pos='relative'
                color={'#E19D05'}
              > UserName</Heading>
              <Heading color={'#fff'} fontSize={14} ml={-59} mt={8}> R$ 500,00 </Heading>

              <Image
                pos='relative'
                ml={10}
                bottom='1'
                src='/menino.svg'
                alt='A1'
                h={76}
              />
            </Flex>
          </Box>
          <Box
            bgImage='url("/amarelo.svg")'
            ml={-130}
            h={20}
            bgRepeat='no-repeat'
            mt={100}
          >
            <Flex
              h='70%'
              justify='center'
              pos='relative'
            >
              <Heading fontSize={13} mt={2} ml={-860}
                pos='relative'
                color={'#E19D05'}
              > UserName</Heading>
              <Heading color={'#fff'} fontSize={13} ml={-59} mt={8}> R$ 500,00 </Heading>

              <Image
                pos='relative'
                right='-34'
                bottom='1'
                src='/meninooculos.svg'
                alt='A1'
                h={76}
              />
            </Flex>
          </Box>
          <Box
            bgImage='url("/dealer.svg")'
            ml={281}
            bgSize={'14%'}
            bgRepeat='no-repeat'
            mt={-376}
          >
            <Flex
              h='70%'
              justify='center'
              ml={-52}
            >
              <Image
                pos='relative'
                ml={-345}
                mt={20}
                src='/dealer2.svg'
                alt='A1'
                h={51}
              />
              <Heading fontSize={14} mt={100} ml={-343}
                pos='absolute'
                color={'#E19D05'}
              > DEALER</Heading>

            </Flex>
          </Box>
          <Flex mt={360} ml={20}>
            <Image
              ml={1}
              right='1400'
              bottom='-50'
              src='/K.svg'
              alt='K'
              w={63}
            />

            <Image
              ml={1}
              right='1400'
              bottom='-50'
              src='/q.svg'
              alt='K'
              w={63}
            />

            <Image
              ml={1}
              right='1402'
              bottom='-50'
              src='/J.svg'
              alt='J'
              w={63}
            />

            <Image
              ml={1}
              right='1400'
              bottom='-50'
              src='/J.svg'
              alt='J'
              w={63}
            />

          </Flex>

          <Flex mt={-10} ml={130}>
            <Image
              pos='relative'
              right='139'
              bottom='20'
              src='/meninooculos.svg'
              alt='A1'
              w={66}
            />
            <Image
              pos='relative'
              right='210'
              bottom='20'
              src='/Ellipse-yellow.svg'
              alt='A1'
              w={78}
            />
            <Heading color={'#E19D05'} fontSize={11} ml={-278}> UserName </Heading>
            <Heading color={'#FFFF'} fontSize={11} ml={-53} mt={4}> R$ 500,00 </Heading>

            <Heading color={'#E19D05'} fontSize={10} mt={-76} ml={10}>Win  </Heading>
            <Heading color={'#FFFF'} fontSize={10} mt={-76} ml={1}> R$ 1.500 </Heading>

            <Heading color={'#E19D05'} fontSize={10} mt={-76} ml={3.5}>Bet  </Heading>
            <Heading color={'#201212'} fontSize={10} mt={-76} ml={1}> R$ 1.500 </Heading>
          </Flex>
        </Box>
      </Box>
      <Flex mt={-6} ml={-547}>
        <Button
          w={['100px', '400px', '100px', '150px', '150px']}
          color={'white'}
          bg="#FF384A"
          mt={566}
          ml={['100px', '400px', '-209px', '-20px', '10px']}
          rounded={'28'}
          h={38}
          type="submit"
          boxShadow={'0 5px 20px 0px rgb(80 300 120 / 43%)'}
          _hover={{
            bg: '#FF5463',
          }}
          _focus={{
            bg: '#FF5463',
          }}
        >
          fold
        </Button>
        <Button
          w={['100px', '400px', '100px', '150px', '150px']}
          ml={['100px', '400px', '-210px', '10px', '10px']}
          color={'white'}
          bg="#686DE0"
          mt={566}
          rounded={'28'}
          h={38}
          type="submit"
          boxShadow={'0 5px 20px 0px rgb(80 300 120 / 43%)'}
          _hover={{
            bg: '#4834D4',
          }}
          _focus={{
            bg: '#4834D4',
          }}
        >
          rise
        </Button>
        <Button
          w={['100px', '400px', '100px', '150px', '150px']}
          color={'white'}
          bg="#37833B"
          mt={566}
          ml={['100px', '400px', '-340px', '10px', '10px']}
          rounded={'28'}
          h={38}
          type="submit"
          boxShadow={'0 5px 20px 0px rgb(80 300 120 / 43%)'}
          _hover={{
            bg: '#3DAC60',
          }}
          _focus={{
            bg: '#3DAC60',
          }}
        >
          call
        </Button>
      </Flex>
    </Flex>
  )
}
