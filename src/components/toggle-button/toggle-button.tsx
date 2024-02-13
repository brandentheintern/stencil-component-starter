import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class toggleButton {
  @Prop({ mutable: true }) checked: boolean;

  @Event() buttonToggled: EventEmitter;
  buttonToggledHandler() {
    console.log('button toggled to be ' + `${this.checked}`);
    this.buttonToggled.emit();
  }

  render() {
    return (
      <label class="switch">
        <input
          type="checkbox"
          checked={this.checked}
          onClick={() => {
            this.checked = !this.checked;
            this.buttonToggledHandler();
          }}
        />
        <span class="slider"></span>
      </label>
    );
  }
}
