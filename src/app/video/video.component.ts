import { Component } from '@angular/core';
import { CookiePreferencesService } from '../cookie-preferences.service';

const script = document.createElement('script');
script.src = 'https://scriptstaging.cookieyes.com/client_data/39cf18ec2729793773cdf4e1/client.js';
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

  preferences: any;

  constructor(private cookiePreferencesService: CookiePreferencesService) {
    this.preferences = JSON.parse(localStorage.getItem('cookiePreferences'));
  }

  playVideo() {
    if (this.preferences && this.preferences.functional) {
      // Play video
    } else {
      // Show message saying that cookies are required to play the video
    }
  }

}