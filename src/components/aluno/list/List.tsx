import React from "react"
import { FlatList, Text, View } from "react-native";
import { database } from "../../Home";
import firestore from '@react-native-firebase/firestore';
import { Aluno } from "../../../modes/Aluno";

interface Input{
    navigation:any
}

function atualizarDados(){
    firestore()
    .collection('estudante')
    .onSnapshot( doctument => {
        if(database.length > 0)
        database.splice(0, database.length);

        doctument.docs.map((doc) => {
            const aluno = doc.data() as Aluno;
            database.push({
                id: doc.id,
                ...aluno
            });
            });
            console.log(database);
        });

    
}

const Listar = ({ navigation } : Input) => {

    React.useEffect(() => {

        const subscribe = navigation.addListener( 'focus' ,
        atualizarDados
        );
        return subscribe;
    }, [navigation]);

    return (
        <View>
            <Text>Cadastros</Text>
            <FlatList style={{ flex: 1}}
            data={database}
            renderItem={
                ({ item }) =>
                <Text> {item.nome} </Text>
            }
        />
        </View>
    );
};

export default Listar;