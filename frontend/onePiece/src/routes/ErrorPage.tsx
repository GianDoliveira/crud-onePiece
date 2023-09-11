import Home from "../pages/Home";
import { Box } from "@chakra-ui/react";

function ErrorPage() {

  return (
    <Box bg="black" position="relative" zIndex={1}>
      <Box>
        <Home
          saudacao="Ops!"
          message="Um erro inesperado ocorreu :("
          botao="Voltar para o início"
          link="/"
          image="https://media.tenor.com/CFAwMDCOzvUAAAAd/one-piece-anime.gif"
        />
      </Box>
    </Box>
  );
}


export default ErrorPage;