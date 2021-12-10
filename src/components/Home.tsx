import React from "react";
import { Button, View } from "react-native";
import { Aluno } from "../modes/Aluno";

export let database : Aluno[] = [];

interface Input{
    navigation: any
}

const Home = ({ navigation } : Input) => {
    return (
        <View> 
            <Button
            title="Novo"
            onPress={ () => navigation.navigate('Novo') }/>           
            <Button
            title="Editar"
            onPress={ () => navigation.navigate('Editar') }/>
            <Button
            title="Listar"
            onPress={ () => navigation.navigate('Listar') }/>
        </View>
    );
};

export default Home;