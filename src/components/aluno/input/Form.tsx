import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Aluno } from "../../../modes/Aluno";
import DateField from 'react-native-datefield';

interface Input {
    aluno: Aluno
    setAluno: any
  }

  const Form = ({ aluno, setAluno}: Input) => {

  return(
    <View>
        <TextInput placeholder="Nome Aluno"
        value= {aluno.nome}
        onChangeText={ text => setAluno({
            ...aluno,
            nome: text
        })} />
        <TextInput placeholder="Sexo"
        value= {aluno.sexo}
        onChangeText={ text => setAluno({
            ...aluno,
            sexo: text
        })} />
        <DateField 
            defaultValue={aluno.datanasc}
            labelDate='Dia'
            labelMonth='Mês'
            labelYear='Ano'
            onSubmit={data => setAluno({
                ...aluno,
            datanasc: data
            })}
   />
        <TextInput placeholder="Turma"
        value= {aluno.turma}
        onChangeText={ text => setAluno({
            ...aluno,
            turma: text
        })} />
        <TextInput placeholder="Endereco"
        value= {aluno.endereco}
        onChangeText={ text => setAluno({
            ...aluno,
            endereco: text
        })} />
        <TextInput placeholder="Filiacao"
        value= {aluno.filiacao}
        onChangeText={ text => setAluno({
            ...aluno,
            filiacao: text
        })} />
    </View>
);
};

export default Form;