// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
import "controllers"
import { toggleTextVisibility } from "./custom/toggle_visibility";

document.addEventListener('DOMContentLoaded', () => {
  //attach custom function to window
  window.toggleTextVisibility = toggleTextVisibility;
});

Turbo.session.drive = false

import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;
import Rails from "@rails/ujs"
Rails.start();
