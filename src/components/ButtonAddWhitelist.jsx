import {useDispatch} from "react-redux";
import {addWhitelist} from "../features/whitelist/whitelistSlice";

export default function ButtonAddWhitelist({item}) {
  const dispatch = useDispatch();

  return (
    <button className="button" type="button" onClick={() => dispatch(addWhitelist(item))}>В избранное</button>
  );
}