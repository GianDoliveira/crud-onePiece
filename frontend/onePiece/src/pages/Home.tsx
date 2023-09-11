import { Box, Text, Button, ButtonGroup, Stack, Link } from '@chakra-ui/react'

function Home(props:any) {
    return (
        <Box bg='black' position='relative' zIndex={1}>
            <Box 
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexDirection='column'
                h='100vh'
                w='100%'
                _before={{
                    position:'absolute',
                    content:'""',
                    inset:`${0}`,
                    opacity:`${0.5}`,
                    backgroundImage:`${props.image}`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    zIndex:`${-1}`
                }}
            >
                <Text
                    textAlign='center'
                    color='white'
                    fontSize="4xl"
                    fontWeight="extrabold"
                    textShadow='0 0 20px grey'
                    margin='10px'
                >
                    {props.saudacao} <br />
                    {props.message}
                </Text>
                <Stack>
                    <ButtonGroup gap='4' cursor='pointer'>
                        <Button colorScheme='red' fontSize='2xl'> <Link href={props.link}>{props.botao}</Link> </Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </Box>
    )
}

export default Home;