import { useState } from 'react';
import uuid from 'react-native-uuid';
import { AntDesign } from '@expo/vector-icons';

import { Logo } from './Logo';
import { Tasks } from '../../components/Tasks';

import {
  Container,
  Header,
  Form,
  Input,
  PlusButton,
} from './styles';
import { Alert } from 'react-native';

export interface TasksProps {
  id: string;
  name: string;
  isCompleted: boolean;
}

export function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const [isChangeBorderColor, setIsChangeBorderColor] = useState(false);
  const [isChangeBackgroundColor, setIsChangeBackgroundColor] = useState(false);

  function handleCreateParticipant() {
    const tasksDuplicated = tasks.filter(task => task.name === taskName)
      
    if (tasksDuplicated.length > 0) {
      return Alert.alert('Tarefa existe', 'Já existe essa tarefa na lista');
    }

    setTasks(prevState => (
      [
        ...prevState,
        {
          id: String(uuid.v4()),
          name: taskName,
          isCompleted: false,
        }
      ]
    ));
    setTaskName("");
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTaskById(taskId: string) {
    Alert.alert('Remover', `Remover tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter((task) => task.id !== taskId))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Form>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTaskName}
            value={taskName}
            onBlur={() => setIsChangeBorderColor(false)} 
            onFocus={() => setIsChangeBorderColor(true)}
            isChangeBorderColor={isChangeBorderColor}
          />

          <PlusButton 
            onPress={handleCreateParticipant} 
            onPressIn={() => setIsChangeBackgroundColor(true)} 
            onPressOut={() => setIsChangeBackgroundColor(false)}
            isChangeBackgroundColor={isChangeBackgroundColor}
          >
            <AntDesign name="pluscircleo" size={16} color="white" />
          </PlusButton>
        </Form>
      </Header>

      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTaskById}  
        onComplete={toggleTaskCompletedById}  
      />
    </Container>
  );
}