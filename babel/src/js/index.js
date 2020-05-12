import "../css/index.css";

import search from "./search";
import render from "./render";

const id = prompt("Pon un id haber que sale");

search(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    alert("Pusiste un disparate");
  });
