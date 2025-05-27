import authService from "../services/auth.service"
import { useNavigate } from "react-router-dom"
import userStore from "../stores/userStore"
import { Button } from "@mui/material"
import { TextField } from "@mui/material"

function LoginForm(props) {
    const navigate = useNavigate()
    const { getUserName, getPassword } = userStore()
    const userName = getUserName()
    const password = getPassword()
    
    const submit = () => {
      authService.login(userName, password).then(
        () => {
          navigate("/")
          location.reload()
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          alert(resMessage)
        }
      );
    }
    return (
      <>
      <div className="w-full flex justify-center">
        <div>
          <div className="flex flex-row  p-[10px]"><div className="w-50">Nic пользователя</div><UserName /></div>
          <div className="flex flex-row  p-[10px]"><div className="w-50">Пароль</div><div><Password /></div></div>
          <Button variant="contained" onClick={submit}>Send</Button>
        </div>
      </div>
      </>
    )
}


function UserName() {
  const { getUserName, setUserName } = userStore()
  const userName = getUserName()

  const handleChange = (event) => {
    setUserName(event.target.value);
  }

  return (
    <TextField variant="standard" onChange={handleChange} value={userName} />
  )
}

function Password() {
  const { getPassword, setPassword } = userStore()
  const password = getPassword()

  const handleChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <TextField variant="standard" type="password" onChange={handleChange} value={password} />
  )
}


export default LoginForm;