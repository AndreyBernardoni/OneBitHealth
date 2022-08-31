import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function calculateImc() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validateFields() {
    if (height !== null && weight !== null) {
      calculateImc();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          keyboardType="numeric"
          placeholder="Ex. 1.75"
          value={height}
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          keyboardType="numeric"
          placeholder="Ex. 76.23"
          value={weight}
        />

        <Button title={textButton} onPress={validateFields} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
