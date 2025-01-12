import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ToggleVisibility from "./components/ToggleVisibility";

const App = () => {
  return <ToggleVisibility />
};

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<App />)
});

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//import { Turbo } from "@hotwired/turbo-rails"
//Turbo.session.drive = false

//import jquery from "jquery";
//window.jQuery = jquery;
//window.$ = jquery;
//import Rails from "@rails/ujs"
//Rails.start();
