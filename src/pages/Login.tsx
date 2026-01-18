import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSchema } from "../validations/userSchema";
/*
interface formLogin {
  username: string;
  password: string;
}
  const [formLogin, setFormLogin] = useState<formLogin>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `username: ${formLogin.username}, password: ${formLogin.password}`
    );
    setFormLogin({ username: "", password: "" });
  };
*/
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(useSchema), mode: "onChange" });

  console.log("errores: ", errors);

  const submit = handleSubmit((data) => {
    console.log(data);
    console.log("formulario enviado: ", data);
  });
  return (
    <div className="shadow w-[90%] md:w-1/2 mx-auto p-3 mt-5">
      <form
        onSubmit={submit}
        className="flex justify-center flex-col items-center gap-4"
      >
        <div className="flex flex-col w-full md:w-md gap-2">
          <label htmlFor="user" className="label">
            Ingresa tu usuario
          </label>
          <input
            type="text"
            //name="username"
            id="user"
            placeholder="Ingresa el nombre de tu usuario"
            className={`input ${
              errors.username && "input-error"
            } w-full outline-0`}
            {...register("username", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
          />
          {errors.username?.message && (
            <span className="text-red-600">{errors.username?.message}</span>
          )}
        </div>
        <div className="flex flex-col w-full md:w-md gap-2">
          <label htmlFor="pss" className="label">
            Ingresa tu contraseña
          </label>
          <input
            type="password"
            id="pass"
            className={`input ${
              errors.password && "input-error"
            } w-full outline-0`}
            {...register("password", {
              required: { value: true, message: "La contraseña es requerida" },
            })}
          />
          {errors.password?.message && (
            <span className="text-red-600">{errors.password?.message}</span>
          )}
        </div>
        <div className="flex justify-center w-full md:w-md">
          <button type="submit" className="btn btn-primary w-full">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}
