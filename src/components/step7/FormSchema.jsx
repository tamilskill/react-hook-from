import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email id Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Mininmum lenght of password is 8")
      .max(12, "Maximum length of password is 12"),
  })
  .required();

export default function FormSchema() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label htmlFor="input-email">Email address</label>

        <input
          type="email"
          className="form-control"
          id="input-email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-danger">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          className="form-control"
          id="input-password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <div className="text-danger">{errors.password.message}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}
