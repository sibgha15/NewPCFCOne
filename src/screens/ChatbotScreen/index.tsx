import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Animated,
  ScrollView,
} from 'react-native';
import {
  Bubble,
  GiftedChat,
  IMessage,
  InputToolbar,
} from 'react-native-gifted-chat';
import {styles} from './styles';
import {
  AttachFileIcon,
  EmojiIcon,
  SendIcon,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RoundedButton from '../../components/common/roundedButton';
import {useNavigation} from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const paddingBottom = useRef(
    new Animated.Value(Platform.OS === 'ios' ? hp(4) : 0),
  ).current;

  useEffect(() => {
    const keyboardDidShow = () => {
      Animated.timing(paddingBottom, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    const keyboardDidHide = () => {
      Animated.timing(paddingBottom, {
        toValue: Platform.OS === 'ios' ? hp(4) : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [paddingBottom]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Welcome to PCFC AI. Pick a topic from the list or type down a question!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'John Doe',
          avatar: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages => {
      const updatedMessages = GiftedChat.append(previousMessages, newMessages);
      console.log('Index of last message:', updatedMessages.length - 1);
      return updatedMessages;
    });
  }, []);

  const renderInputToolBar = props => {
    const handleSuggestedText = text => {
      props.onSend({text}, true);
    };

    return (
      <>
        <View style={styles.suggestedTextContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10}}>
            {['Hello!', 'How are you!', 'I’m good, thanks for asking'].map(
              (text, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSuggestedText(text)}
                  style={styles.suggestedTab}>
                  <Text style={styles.suggestedtabText}>{text}</Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>

        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: colors.white,
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: wp(1.5),
            borderTopWidth: 0,
            paddingVertical: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <TouchableOpacity>
                <EmojiIcon />
              </TouchableOpacity>

              <TouchableOpacity>
                <AttachFileIcon />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  if (props.text.trim().length > 0) {
                    props.onSend({text: props.text.trim()}, true);
                  }
                }}>
                <SendIcon />
              </TouchableOpacity>
            </View>
          </View>
        </InputToolbar>
      </>
    );
  };

  const renderBubble = props => {
    const isCurrentUser = props.currentMessage.user._id === 1;

    return (
      <View
        style={{
          marginBottom: hp(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp(1.5),
            justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
          }}>
          <Text
            style={{
              fontSize: fonts.fontSize.medium,
              fontFamily: fonts.fontFamily.primary,
              lineHeight: 20,
              letterSpacing: 0.5,
              color: colors.darkGray,
              paddingTop: hp(1.5),
            }}>
            {props.currentMessage.user.name}
          </Text>
        </View>

        <Bubble
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: colors.white,
              paddingHorizontal: wp(1.5),
              paddingVertical: hp(1.5),
              borderRadius: 12,
            },
            right: {
              backgroundColor: colors.primary,
              paddingHorizontal: wp(1.5),
              paddingVertical: hp(1.5),
              borderRadius: 12,
              alignSelf: 'flex-end',
              right: -wp(10),
            },
          }}
          textStyle={{
            left: {
              fontSize: fonts.fontSize.normal,
              fontFamily: fonts.fontFamily.primary,
              lineHeight: 18,
              letterSpacing: 0.5,
              color: colors.darkGray,
            },
            right: {
              fontSize: fonts.fontSize.normal,
              fontFamily: fonts.fontFamily.primary,
              lineHeight: 18,
              letterSpacing: 0.5,
              color: colors.white,
            },
          }}
          renderTime={() => (
            <Text
              style={{
                fontSize: fonts.fontSize.small,
                fontFamily: fonts.fontFamily.primary,
                color: isCurrentUser ? colors.white : colors.secondary,
                lineHeight: 16,
                letterSpacing: 0.5,
                marginLeft: 'auto',
                paddingHorizontal: wp(2),
                textTransform: 'lowercase',
              }}>
              {new Date(props.currentMessage.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          )}
        />
      </View>
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingBottom,
        },
      ]}>
      <LinearGradient
        colors={['#1881BB', '#20AAE2']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[
          styles.header,
          {paddingTop: Platform.OS === 'ios' ? hp(7) : hp(2)},
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <WhiteArrowIconLeft />
        </TouchableOpacity>
        <Text style={styles.headerText}>PCFC AI</Text>
        <View style={{width: 20}}></View>
      </LinearGradient>
      <View style={styles.mainContainer}>
        {isChatStarted ? (
          <>
            <GiftedChat
              messages={messages}
              onSend={messages => onSend(messages)}
              user={{
                _id: 1,
                name: 'Ahmed Mustafa',
                avatar:
                  'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
              }}
              placeholder="Write a message..."
              showUserAvatar
              alwaysShowSend
              renderInputToolbar={renderInputToolBar}
              renderBubble={renderBubble}
              renderAvatarOnTop
              showAvatarForEveryMessage
              renderFooter={() => (
                <View
                  style={{
                    height: hp(8),
                  }}
                />
              )}
            />
          </>
        ) : (
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Welcome to PCFC AI!</Text>
            <Text style={styles.welcomeDescription}>
              By clicking the "Start Chat" button you agree to have your
              personal data processed under our Privacy Policy.
            </Text>
            <RoundedButton
              title="Start Chat"
              onPress={() => setIsChatStarted(true)}
            />
          </View>
        )}
      </View>
    </Animated.View>
  );
};

export default ChatScreen;
