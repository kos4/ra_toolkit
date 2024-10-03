import {useDispatch} from "react-redux";
import {removeWhitelist} from "../features/whitelist/whitelistSlice";

export default function WhitelistItem({number, item}) {
  const dispatch = useDispatch();

  return (
    <div className="whitelist__item">
      {number}. {item.title} <button onClick={() => dispatch(removeWhitelist(item.id))}>Удалить</button>
    </div>
  );
}