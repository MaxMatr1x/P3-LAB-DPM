import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../components/navbar/navbar'; 
import Button from '../components/button';
import Display from '../components/display';

class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
      expression: '',
    };
  }

  componentDidMount() {
    console.log('CalculatorScreen has been mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expression !== this.state.expression) {
      console.log('Expression updated:', this.state.expression);
    }

    if (prevState.result !== this.state.result) {
      console.log('Result updated:', this.state.result);
    }
  }

  componentWillUnmount() {
    console.log('CalculatorScreen will be unmounted');
  }

  handleButtonPress = (label) => {
    if (label === '=') {
      try {
        this.setState({
          result: eval(this.state.expression).toString(),
          expression: '',
        });
      } catch (e) {
        this.setState({ result: 'Error' });
      }
    } else if (label === 'C') {
      this.setState({ result: '0', expression: '' });
    } else {
      this.setState((prevState) => ({
        expression: prevState.expression === '0' ? label : prevState.expression + label,
        result: prevState.expression === '0' ? label : prevState.expression + label,
      }));
    }
  };

  render() {
    const buttons = [
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['C', '0', '=', '+'],
    ];

    return (
      <View style={styles.container}>
        <Navbar />
        <Display result={this.state.result} />
        <View style={styles.buttonContainer}>
          {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((label) => (
                <Button
                  key={label}
                  label={label}
                  onPress={this.handleButtonPress}
                  style={label === '=' ? styles.equalsButton : label === 'C' ? styles.clearButton : styles.defaultButton}
                  textStyle={label === '=' || label === 'C' ? styles.specialButtonText : styles.defaultButtonText}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  defaultButton: {
    backgroundColor: '#333',
  },
  clearButton: {
    backgroundColor: '#ff6666',
  },
  equalsButton: {
    backgroundColor: '#66cc66',
  },
  defaultButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  specialButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CalculatorScreen;
