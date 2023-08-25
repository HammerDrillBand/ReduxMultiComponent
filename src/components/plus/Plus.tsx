import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
 
const Add = () =>{   
    let num1 = useSelector((state: AppState) => state.number1);
    let num2 = useSelector((state: AppState) => state.number2);

    let plus = num1 + num2;

    return (
        <div className="Add">
            <p>{plus}</p>
        </div>
    );
}
export default Add;