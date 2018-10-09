import React from "react";
import "./List.css";

const ItemList = () => {
  return (
    <div class="well">
      <ul class="list-inline">
        <li class="list-inline-item"><img alt="Crowbar" class="itemImg" src="https://picsum.photos/50/50?image=0" /></li>
        <li class="list-inline-item"><img alt="Crowbar" class="itemImg" src="https://picsum.photos/500/50?image=0" /></li>
        <li class="list-inline-item"><img alt="Crowbar" class="itemImg" src="https://picsum.photos/50/50?image=0" /></li>
        <li class="list-inline-item"><img alt="Crowbar" class="itemImg" src="https://picsum.photos/50/50?image=0" /></li>
        <li class="list-inline-item"><img alt="Crowbar" class="itemImg" src="https://picsum.photos/50/50?image=978" /></li>
      </ul>
    </div>
  );
};

export default ItemList;