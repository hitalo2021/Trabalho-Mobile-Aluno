import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Aluno } from "../../../modes/Aluno";
import { database } from "../../Home";
import Form from "./Form";
import firestore from '@react-native-firebase/firestore';

function salvar(aluno: Aluno){
    firestore()
    .collection('Aluno')
    .add(aluno)
    .then((data) => {
        console.log(data);
        console.log('Novo Aluno Criado!');
    });
}
interface Input{
    navigation: any
}
function Add(){
    const [ Aluno , setAluno ] = useState<Partial<Aluno>>({});

    return(
        <View>
            <Form aluno={ Aluno as Aluno } setAluno={setAluno}/>
            <Button title= 'Salvar' 
            onPress={() =>{
                salvar(Aluno as Aluno)
            }
            }
            />
        </View>
    );
};

export default Add;
