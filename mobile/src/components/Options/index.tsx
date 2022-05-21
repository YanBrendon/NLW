import React from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';
import { Option } from '../Option';
import { Copyright as Copyright } from '../Copyright';
import { FeedbackType } from '../Widget';




interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}



export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>


      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([Key, value]) => (
              <Option
                key={Key}
                title={value.title}
                image={value.image}
                onPress={() => onFeedbackTypeChanged(Key as FeedbackType)}
              />
            ))
        }
      </View>
      <Copyright />

    </View>
  );
}