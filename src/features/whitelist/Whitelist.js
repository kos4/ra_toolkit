import {useSelector} from "react-redux";
import WhitelistItem from "../../components/WhitelistItem";

export default function Whitelist() {
  const { list } = useSelector(state => state.whitelist);
  let ct = 1;

  return (
    <>
      <h1 className="App__h1">Избранное</h1>
      <div className="whitelist">
        { list.map(item => <WhitelistItem key={item.id} item={item} number={ct++}/>) }
      </div>
    </>
  );
}