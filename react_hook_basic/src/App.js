import useForm from './useForm'

const  App = () => {
  
  const [data,handle] = useForm({username:'',password:''})   //it will run only one time when anything change happened in dom

  return (
    <div>
      <input name="username" value={data.value} onChange={handle} ></input>
      <input name="password" value={data.value} onChange={handle} ></input>
    </div>
  );
}

export default App;
