import { useContext } from "react"
import Alertcontext from "../../context/alert/Alertcontext"

function Alert() {
    const {alert} = useContext(Alertcontext)
  return (
   alert !== null && (
    <p className="flex">
    {alert.type === 'error' && (



<strong>{alert.msg}</strong>
    )}
    </p>
   )
  )
}

export default Alert
