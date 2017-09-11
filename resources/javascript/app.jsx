import "./laravel.jsx"; // Bootstraper of laravel
import "./routes.jsx";
import "./variables.jsx"
import EmojiPicker from "emojione-picker";
import React from "react";
import ReactDOM from "react-dom";

React.createClass({
    <EmojiPicker onChange={function(data){
      console.log("Emoji chosen", data);
    }} />,
});
