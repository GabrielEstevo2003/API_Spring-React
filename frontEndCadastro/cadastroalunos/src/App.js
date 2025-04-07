import React, { useState } from "react";
import CadastroAluno from "./cadastroAluno";
import ListaAlunos from "./listaAluno";
import { Container, Box } from "@mui/material";

function App() {
  const [atualizarLista, setAtualizarLista] = useState(false);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <CadastroAluno onCadastro={() => setAtualizarLista(!atualizarLista)} />
      </Box>
      <Box sx={{ my: 4 }}>
        <ListaAlunos key={atualizarLista} />
      </Box>
    </Container>
  );
}

export default App;
