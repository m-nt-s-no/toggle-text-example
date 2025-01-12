import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-hidden"
export default class extends Controller {
  static targets = ["text"]

  toggle () {
    this.textTarget.classList.toggle('hidden');
  }
}
