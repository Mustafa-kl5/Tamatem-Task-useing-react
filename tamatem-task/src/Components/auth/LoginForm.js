import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "../../validation/loginSchema";
import "../../ComponentStyle/loginComponent.css";
function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-form-mainLayout">
      <div className="login-form-sub-layout">
        <div className="login-form-input-holder">
          <img
            className="tamatem-logo"
            alt="Tamatem logo"
            src="https://avatars.githubusercontent.com/u/124091983"
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.email}>
                <TextField
                  error={errors.email && true}
                  {...field}
                  autoFocus
                  label="Email"
                  className="input"
                  helperText={errors.email?.message}
                />
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.password}>
                <TextField
                  error={errors.password && true}
                  {...field}
                  type="password"
                  label="Password"
                  className="input"
                  helperText={errors.password?.message}
                />
              </FormControl>
            )}
          />
          <div className="w-full flex justify-end">
            <Button
              size="large"
              variant="contained"
              color="error"
              onClick={handleSubmit(onSubmit)}
              // disabled={!isValid}
              //Extra feature: disable button if the fields not valid
            >
              login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
