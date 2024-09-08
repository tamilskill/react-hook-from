import { useForm } from "react-hook-form";

export default function LoginWithValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="input-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <div className="text-danger">Email is Required</div>
          )}
          {errors.email?.type === "pattern" && (
            <div className="text-danger">Invalid email address</div>
          )}

          {/* <input
            type="email"
            className="form-control"
            id="input-email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email id Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )} */}
        </div>
        <div className="form-group">
          <label htmlFor="input-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="input-password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Mininmum lenght of password is 8",
              },
              maxLength: {
                value: 12,
                message: "Maximum length of password is 12",
              },
            })}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
