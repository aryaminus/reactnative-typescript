import * as React from "react";
import { AppRegistry, View, Text } from "react-native";

const App = () => {
    const greetings = "Hello world!\nThis is react native from a swift app!";
    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center", backgroundColor: "pink", paddingTop: 46 }}>
            <Text style={{ flex: 1, textAlign: "center", textAlignVertical: "center" }}>
                {greetings}
            </Text>
        </View>
    );
}

AppRegistry.registerComponent("swiftly", () => App);