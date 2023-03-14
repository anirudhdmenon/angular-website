import { Component } from '@angular/core';

const script = document.createElement('script');
script.src = 'https://cdn.cookieyes.com/client.js';
script.setAttribute('data-cookieyes', 'ignore');
document.head.appendChild(script);

@Component({
  selector: 'app-home',
  template: `
    <section class="is-fullheight">
      <div class="hero-body">
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CmzKQ3PSrow" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
  </section>
  `,

  styles: [`
    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      padding-top: 30px;
      height: 0;
      overflow: hidden;
    }
    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    `]
})

export class VideoComponent {

}
