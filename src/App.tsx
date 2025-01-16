
import './App.css';
import { Button } from './components/ui/button';
import { increment } from './redux/features/quiz/quizSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  const countValue = useAppSelector(state => state.value);
  const dispatch = useAppDispatch();

  const handleBtn = ()=>{
    dispatch(increment());
  }

  return (
    <>
      <h1>{countValue}</h1>
      <Button onClick={handleBtn}>Hello</Button>
    </>
  )
}

export default App
