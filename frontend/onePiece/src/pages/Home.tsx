import { Box, Text, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import "./Home.css"

function Home() {
    return (
        <Box zIndex={-1} bg='black' position='relative'>
            <Box className='background'>
                <Box>
                    <Text
                        textAlign='center'
                        color='white'
                        fontSize="4xl"
                        fontWeight="extrabold"
                        textShadow='0 0 10px grey'
                        margin='10px'
                    >
                        Bem-Vindo! <br />
                        Que tal criar sua tripulação ?
                    </Text>
                </Box>
                <Stack>
                    <ButtonGroup gap='4' cursor='pointer'>
                        <Button colorScheme='red' fontSize='2xl'>Criar</Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </Box>
    )
}

export default Home;