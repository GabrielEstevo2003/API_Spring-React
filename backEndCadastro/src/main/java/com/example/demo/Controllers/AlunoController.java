package com.example.demo.Controllers;

import com.example.demo.Models.Aluno;
import com.example.demo.Services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.demo.Constant.constant.API_URL_ALUNO;
@RestController
public class AlunoController {
    @Autowired
    AlunoService alunoService;

    @PostMapping(API_URL_ALUNO)
    public Aluno insert(@RequestBody Aluno aluno){
        return alunoService.save(aluno);
    }

    @GetMapping(API_URL_ALUNO)
    public List<Aluno> findAll(){
        return alunoService.findAll();
    }
}
