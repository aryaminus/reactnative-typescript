import * as React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import * as Redux from "redux";
import { Dispatch } from "redux";
import { ICountState } from "../models";
import { appStyles } from "../styles";

class CounterApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View style={appStyles.appContainer}>
                <Text style={appStyles.header}>Welcome to counter:</Text>
                <View style={appStyles.centerBox}>
                    <Text style={appStyles.reallyLargeText}>
                        0
                    </Text>
                </View>
                <View style={appStyles.bottomBox}>
                    <Button title="️☝☝️☝️️ Up ️" onPress={this.increment} />
                    <Text> | </Text>
                    <Button title=" Down 👇👇👇" onPress={this.decrement} />
                </View>
            </View>
        );
    }

    private decrement = (): void => {
        console.log("trying to do the decrement");
    }

    private increment = (): void => {
        console.log("trying to do the increment");
    }
}

function mapStateToProps(state: ICountState) {
    return {
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
