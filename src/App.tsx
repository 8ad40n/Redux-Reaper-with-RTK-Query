
import './App.css';
import { Button } from './components/ui/button';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { setName } from './redux/features/show/showSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();

  const show = useAppSelector(state => state.show.name);
  const handleName = ()=>{
    dispatch(setName('Joy'));
  }

  const countValue = useAppSelector(state => state.counter.value);
  

  const handleInc = ()=>{
    dispatch(increment());
  }
  const handleDec = ()=>{
    dispatch(decrement(5));
  }

  return (
    <>
      <h1>{show}</h1>
      <Button className='m-1' variant={'secondary'} onClick={handleName}> Change name to Joy </Button>
      <h1>{countValue}</h1>
      <Button className='m-1' variant={'outline'} onClick={handleInc}> + by 1 </Button>
      <Button className='m-1' variant={'destructive'} onClick={handleDec}> - by 5 </Button>
    </>
  )
}

export default App
