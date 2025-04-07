import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table,TableHead,TableRow,TableCell,TableBody,Paper,Container,Typography} from "@mui/material";

const ListaAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    carregarAlunos();
  }, []);

  const carregarAlunos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cadastroAluno");
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Lista de Alunos
      </Typography>
      <Paper elevation={3} sx={{ overflowX: "auto", borderRadius: 2, p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>Telefone</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Endereço</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.id}>
                <TableCell>{aluno.nome}</TableCell>
                <TableCell>{aluno.telefone}</TableCell>
                <TableCell>{aluno.email}</TableCell>
                <TableCell>{aluno.endereco}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ListaAlunos;
