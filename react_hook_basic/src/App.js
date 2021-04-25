import useFetch from './useFetch'

const  App = () => {
  
  const [data,loading] = useFetch('https://jsonplaceholder.typicode.com/posts/1')
  
  return (
    <div>
      {!loading && data}
    </div>
  );
}

export default App;
