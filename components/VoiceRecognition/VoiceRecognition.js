import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const onSpeechResults = (e) => {
      setRecognizedText(e.value[0]);
    };

    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const startListening = async () => {
    try {
      setIsListening(true);
      setRecognizedText('');
      await Voice.start('en-US');
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop();
      setSearchInput(recognizedText); // Set recognized text to the search input
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={isListening ? stopListening : startListening}>
        <Text>{isListening ? 'Stop Listening' : 'Start Listening'}</Text>
      </TouchableOpacity>

      <Text>Recognized Text: {recognizedText}</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
        placeholder="Search..."
        onChangeText={(text) => setSearchInput(text)}
        value={searchInput}
      />
    </View>
  );
};

export default VoiceRecognition;
