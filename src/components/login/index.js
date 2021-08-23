import loginThunk from "../../store/modules/login/thunk";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { DefaultForm, StyledButton, StyledInput} from "../../styles/index"


const LoginComponent = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email("Please type a valid email format").required("This field is required"),

    password: yup
      .string()
      .min(4, "Minimum of 4 digits required")
      .required("This field is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(loginThunk(data, history));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
          <DefaultForm onSubmit={handleSubmit(handleForm)}>          
              <StyledInput placeholder="Email" name="email"
              autoComplete="off" 
              {...register("email", {
              required: "Required"
            })}></StyledInput>
              <div >{errors.email?.message} </div>
              <StyledInput
                placeholder="Password"
                name="password"
                autoComplete="off"
                {...register("password", {
              required: "Required",
            })}
                type="password"
              ></StyledInput>
            <div >{errors.password?.message}</div>
            <br/>
            <StyledButton type="submit">Login</StyledButton>
          </DefaultForm>

      
    </motion.div>
  );
};

export default LoginComponent;