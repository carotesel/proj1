import { View, Text, TextInput, StatusBar, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from 'react';


const RegisterProviderScreen = () => {
  
  const [data, setData] = useState({
    nombre: undefined, 
    apellido: undefined,
    email: undefined,
    dni: undefined,
    nombreComercio: undefined,
    calle: undefined,
    altura: undefined,
    ciudad: undefined,
    codPostal: undefined,
    emailComercio: undefined,
  });

  const onChangeInput = (e, name) => { 
    setData({
      ...data, 
      [name]: e.nativeEvent.text
    });
  }

  const registrar = () => { 
    console.log(data)
  }
  
  return (
    <View style={styles.container}>
      <Text>Datos del titular</Text>
      <TextInput style={styles.textInput} placeholder="Nombre" name="nombre" onChange={(e) => onChangeInput(e, "nombre")}/>
      <TextInput style={styles.textInput} placeholder="Apellido" name="apellido" onChange={(e) => onChangeInput(e, "apellido")}/>
      <TextInput style={styles.textInput} placeholder="Email" name="email" onChange={(e) => onChangeInput(e, "email")}/>
      <TextInput style={styles.textInput} placeholder="DNI" name="dni" onChange={(e) => onChangeInput(e, "dni")}/>

      <Text>Datos del negocio</Text>
      <TextInput style={styles.textInput} placeholder="Nombre del comercio" name="nombreComercio" onChange={(e) => onChangeInput(e, "nombreComercio")}/>
      <TextInput style={styles.textInput} placeholder="Dirección" name="calle" onChange={(e) => onChangeInput(e, "calle")}/>
      <TextInput style={styles.textInput} placeholder="Altura" name="altura" onChange={(e) => onChangeInput(e, "altura")}/>
      <TextInput style={styles.textInput} placeholder="Ciudad" name="ciudad" onChange={(e) => onChangeInput(e, "ciudad")}/>
      <TextInput style={styles.textInput} placeholder="Código Postal" name="codPostal" onChange={(e) => onChangeInput(e, "codPostal")}/>
      <TextInput style={styles.textInput} placeholder="Email del comercio" name="emailComercio" onChange={(e) => onChangeInput(e, "emailComercio")}/>

      <Button title="Registrarme" onPress={registrar}></Button>

      <Text>Ya tenés una cuenta? Iniciar Sesión</Text>



      <StatusBar style="auto" />
    </View>
  );
};

export default RegisterProviderScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#051E44",
      alignItems: "center",
      justifyContent: "center",
    },
    textInput: {
      borderWidth: 1,
      padding: 15,
      width: "85%",
      borderRadius: 8,
      backgroundColor: "#fff",
    },
  });
  
