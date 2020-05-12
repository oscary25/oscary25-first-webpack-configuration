import "../css/index.css";

import test from "./test";

if (module.hot) {
  module.hot.accept("./test", function () {
    console.log("Haciendo el hot reload");
    test();
  });
}

test();
