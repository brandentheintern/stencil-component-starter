import { Component, h } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class toggleButton {

  render() {
    return <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>;

  }
}
