import { useContext } from "react";
import ContextData from "./GlobalSqContext";
import ContextData1 from "./GlobalUserContext";

function BoxSmall() {

    const {sq1, sq2} = useContext(ContextData);
    const {user} = useContext(ContextData1);

    return (
        <div className="box-area">
            <div className="title">SMALL BOX of {user}</div>
            <div className="sq-bin">
                {
                    sq1?.map((s, i) => <div key={i} className="sq sm">{s}</div>)
                }
            </div>
            <div className="sq-bin">
                {
                    sq2?.map((s, i) => <div key={i} className="sq sm">{s}</div>)
                }
            </div>
        </div>
    )
}

export default BoxSmall;