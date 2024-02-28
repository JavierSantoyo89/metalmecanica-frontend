import { useForm } from "react-hook-form";
import Head from "../../components/parcial/head/Head";
import Footer from "../../components/parcial/footer/Footer";
import {useCounter} from "../../state/counter";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
  };
 const count = useCounter((state) =>  state.count)
 const increment = useCounter((state) =>  state.increment)
 const decrement = useCounter((state) =>  state.decrement)
 const reset = useCounter((state) =>  state.reset)
  return (
    <div>
      <Head />
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="* Username"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          placeholder="* Password"
          {...register("password", { required: true })}
        />
        {(errors.username && <span>User name is required</span>) ||
          (errors.password && <span>Password is required</span>)}
        <button type="submit">Login</button>
      </form>
      <div>
        <span>Contador: {count}</span>
         <button onClick={increment}>Incrementar</button>
 <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Reset</button>  
      </div>
      <Footer />
    </div>
  );
}
