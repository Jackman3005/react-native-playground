import React from 'react';
import { Platform, NativeModules, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

    state = {
        myString: '',
        heavyComputation: Platform.OS === 'android' ? 'computing...' : ''
    };

    async componentDidMount() {
        if (Platform.OS === 'android') {
            const myString = await NativeModules.JackPlayground.addBarTo('foo');
            this.setState({myString});

            NativeModules.JackPlayground.doHeavyComputation([2.5, 4, 2]).then((result) => {
                this.setState({
                    heavyComputation: result
                });
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MyLabelValue label="myString:" value={this.state.myString}/>
                <MyLabelValue label="2.5 * 4 * 2 =" value={this.state.heavyComputation}/>
            </View>
        );
    }
}

const MyLabelValue = ({label, value}) => {
    return (
        <View style={styles.textRow}>
            <Text style={styles.textLabel}>{label} </Text>
            <Text style={styles.textValue}>'{value}'</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRow: {
        display: 'flex',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                backgroundColor: 'lightblue'
            },
            android: {
                backgroundColor: 'lightgreen'
            }
        })
    },
    textLabel: {
        flex: 1,
        textAlign: 'right'
    },
    textValue: {
        flex: 1
    }
});
