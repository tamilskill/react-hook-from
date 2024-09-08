import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="input-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            placeholder="Enter email"
            {...register('email')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="input-password"
            placeholder="Password"
            {...register('password')}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
