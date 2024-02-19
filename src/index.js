import print from "./module";
import "../src/styles/main.scss";
import webpackLogo from "./assets/webpack.png";

print("Hello World!!");
document
  .getElementById("webpackLogo")
  .appendChild(document.createElement("img")).src = webpackLogo;
