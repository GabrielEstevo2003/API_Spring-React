import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box
} from "@mui/material";

const CadastroAluno = ({ onCadastro }) => {
  const [aluno, setAluno] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({
      ...prevAluno,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/cadastroAluno", aluno);
      onCadastro(response.data);
      setAluno({ nome: "", telefone: "", email: "", endereco: "" });
    } catch (error) {
      console.error("Erro ao cadastrar aluno", error);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Cadastro de Aluno
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={aluno.telefone}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={aluno.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Endereço"
            name="endereco"
            value={aluno.endereco}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CadastroAluno;
