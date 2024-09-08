import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "@mui/material";
import { IntegrateControlledInput } from "../step5/IntegrateControlledInput";

export const IntegrateMui = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: { value: "chocolate", label: "Chocolate" },
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input placeholder="Enter Name" {...field} className="mb-3" />
        )}
      />
      <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            className="mb-3"
          />
        )}
      />
      {/* step 5 ignore it 
          <IntegrateControlledInput control={control} name="Address" />
           */}
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};
