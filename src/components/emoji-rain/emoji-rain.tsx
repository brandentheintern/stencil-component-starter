import { Component, h } from '@stencil/core';

@Component({
  tag: 'emoji-rain',
  styleUrl: 'emoji-rain.css',
  shadow: true,
  formAssociated: true
})
export class emojiRain {
  render() {
    return <emoji-rain active></emoji-rain>
  }
}
