import { Component, h } from '@stencil/core';

@Component({
  tag: 'radio-group',
  styleUrl: 'radio-group.css',
  shadow: true,
  formAssociated: true
})
export class radioGroup {
  render() {
    return <form class = "radio">
        <input name="age" type="radio" id="one"></input>
        <label>one</label>
        <input name="age" type="radio" id="two"></input>
        <label>two</label>
        <input name="age" type="radio" id="three"></input>
        <label>three</label>
    </form>
  }
}
