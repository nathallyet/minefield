import React from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Modal
} from "react-native";

const LevelSelection = (props) => {
  return (
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible} animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>

          <TouchableOpacity 
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => props.onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "rgba(0,0,0,0.6)",

    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",

    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    marginTop: 20,
    padding: 5,
    width: 175,

    alignItems: "center"
  },
  bgEasy: {
    backgroundColor: "#49B65D"
  },
  bgNormal: {
    backgroundColor: "#2765F7"
  },
  bgHard: {
    backgroundColor: "#F26337"
  },
  buttonLabel: {
    fontSize: 20,
    color: "#EEE",
    fontWeight: "bold"
  }
});

export default LevelSelection;