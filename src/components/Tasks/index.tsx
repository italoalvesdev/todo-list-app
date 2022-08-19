import React from 'react';
import { FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Task } from '../Task';
import { TasksProps } from '../../screens/Home';

import {
  Container,
  Info,
  InfoContent,
  Title,
  Quantity,
  ListEmpty,
  ListEmptyText
} from './styles';

interface Props {
  tasks: TasksProps[];
  onDeleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onComplete }: Props) { 
  const tasksLength = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length; 
  const { colors } = useTheme();

  return (
    <Container>
      <Info>
        <InfoContent>
          <Title>
            Criadas
          </Title>
          <Quantity>
            {tasksLength}
          </Quantity>
        </InfoContent>

        <InfoContent>
          <Title style={{ color: colors.purple }}>
            Concluídas
          </Title>
          <Quantity>
            {completedTasks}
          </Quantity>
        </InfoContent>
      </Info>

    <FlatList 
      data={tasks} 
      keyExtractor={item => item.id} 
      renderItem={({ item }) => (
        <Task 
          task={item}
          onDeleteTask={onDeleteTask} 
          onComplete={onComplete}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <ListEmpty>
          <MaterialCommunityIcons 
            name="clipboard-text-outline" 
            size={60} 
            color={colors.gray_300} 
            style={{ opacity: 0.3 }} 
          />
          <ListEmptyText>
            Você ainda não tem tarefas cadastradas{'\n'}
            <Text style={{ fontWeight: '400' }} >
              Crie tarefas e organize seus itens a fazer
            </Text>
          </ListEmptyText>
        </ListEmpty>
      )}
    />
    </Container>
  );
}