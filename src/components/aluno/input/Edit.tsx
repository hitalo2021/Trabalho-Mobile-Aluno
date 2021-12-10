import { useState } from "react";
import { Button, View } from "react-native";
import { Aluno } from "../../../modes/Aluno";
import Form from "./Form";



function editar(){
  console.log("Editar");
}

function Edit(){

  const [ Aluno , setAluno ] = useState<Partial<Aluno>>({
    id: '12345',
    nome: 'Hitalo',
    sexo: 'Masculino',
    turma: 'Sistemas',
    datanasc: new Date(1987,3,19),
    endereco: 'sereno ',
    filiacao: 'Pai, Mae',
  });

    return (<View>
      <Form  aluno={Aluno as Aluno} setAluno={setAluno} />
      <Button
      title="Salvar Alterações"
      onPress={ editar }
      />
    </View>);
  }

  export default Edit;