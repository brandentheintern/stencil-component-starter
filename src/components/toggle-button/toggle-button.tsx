import { Component, h, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class toggleButton {
  @Prop({ mutable: true }) checked: boolean;

  @Event() buttonToggled: EventEmitter;
  buttonToggledHandler() {
    this.buttonToggled.emit();
  }

  @Method()
  async clickToggleBox() {
    this.checked = !this.checked;
    this.buttonToggledHandler();
  }

  render() {
    return (
      <label class="switch">
        <input
          type="checkbox"
          checked={this.checked}
          onClick={() => {
            this.clickToggleBox();
          }}
        />
        <span class="slider"></span>
      </label>
    );
  }
}
