import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser, signup } from '../actions';
import { Spinner } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
   const { email, password } = this.props;
   this.props.loginUser({ email, password });
  }
  onSignupPress(){
    this.props.signup();
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={() => this.onButtonPress()}
        borderRadius={5}
        icon={{ name: 'lock' }}
        title="Sign In"
        backgroundColor="#27ae60"
      />
    );
  }
  render() {
    const pic = require('./img/logo.png');

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 2, alignItems: 'center', marginBottom: 20 }} >
          <Image
            style={{ marginTop: 30, flex: 1, width: 170 }}
            source={pic}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ paddingBottom: 20 }}>
            <FormLabel>User/Email</FormLabel>
            <FormInput
              onChangeText={this.onEmailChange.bind(this)}
              vale={this.props.email}
            />
            <FormLabel>Passwrd</FormLabel>
            <FormInput
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </View>
          <Text style={styles.errorTextStyle}>
          {this.props.error}
          </Text>
          <View style={{ paddingBottom: 10 }}>
            {this.renderButton()}
          </View>
          <View >
            <Button
            borderRadius={5}
            onPress={() => this.onSignupPress()}
            icon={{ name: 'person' }}
            title="Sign Up"
            backgroundColor="#03A9F4"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, signup
})(LoginForm);
