import { Component, h } from '@stencil/core';

@Component({
  tag: 'animated-progress-bar',
  styleUrl: 'animated-progress-bar.css',
  shadow: true,
})
export class animatedProgress {

  render() {
    return <div class="container">    
                <div class="progress progress-striped">
                    <div class="progress-bar"></div>                       
                </div> 
            </div>;
  }
}
