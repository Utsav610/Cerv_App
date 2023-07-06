import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {GiftedChat} from 'react-native-gifted-chat';
export default function ChatDetails() {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
}
