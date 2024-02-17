import { useForm } from "react-hook-form";
import Head from "../../components/parcial/head/Head";
import Footer from "../../components/parcial/footer/Footer";
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
      <Footer />
    </div>
  );
}
