
import './App.css';
import { Button } from './components/ui/button';
import { useGetPokemonByNameQuery } from './redux/api/pokemon';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { setName } from './redux/features/show/showSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  const { data, error, isLoading } = useGetPokemonByNameQuery('ability');

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


      <h1>All Pokémon</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error occurred while fetching data</h1>}
      {data ? (
        <>
          <h2>Total Pokémon: {data.count}</h2>
          <ul>
            {data.results.map((pokemon: { name: string; url: string }) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No data available</h2>
      )}

    </>
  )
}

export default App
