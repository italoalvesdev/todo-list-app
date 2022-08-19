import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { TasksProps } from '../../screens/Home';

import { Container, Content, CheckButton, Text, TrashButton } from './styles';

interface Props {
  task: TasksProps;
  onDeleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onComplete }: Props) {
  const { colors } = useTheme();
  const [trashIconColor, setTrashIconColor] = useState(false);

  return (
    <Container>
      <Content>
        <CheckButton onPress={() => onComplete(task.id)}>
          {task.isCompleted
            ? 
              <AntDesign 
                name="checkcircle" 
                size={20} 
                color={colors.purple_dark}
            />
            :
              <Entypo 
                name="circle" 
                size={20} 
                color={colors.blue} 
              />
          }
        </CheckButton>
        <Text isCompleted={task.isCompleted}>
          {task.name}
        </Text>
        <TrashButton 
          onPress={() => onDeleteTask(task.id)} 
          onPressIn={() => setTrashIconColor(true)} 
          onPressOut={() => setTrashIconColor(false)}
        >
          <FontAwesome5 
            name="trash-alt" 
            size={16} 
            color={trashIconColor ? colors.danger : colors.gray_300}
          />
        </TrashButton>
      </Content>
    </Container>
  );
}