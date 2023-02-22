import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-black is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title text-light">
          Lorem Ipsum
          </p>
          <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis molestie dolor, sit amet 
          ornare tortor porttitor ut. Suspendisse varius arcu sem, vel ultricies justo imperdiet id. Aliquam 
          varius sem enim, sed luctus tortor sodales ut. Donec feugiat dapibus hendrerit. Aenean ipsum nibh, 
          pharetra malesuada dolor vel, hendrerit feugiat lacus. Proin magna urna, volutpat vel odio nec, 
          egestas tincidunt est. Mauris eget sem finibus, ultricies augue ac, tincidunt magna. Phasellus 
          tempor, augue in lobortis vehicula, enim neque eleifend magna, sed vehicula massa mi at mauris. 
          Sed in libero fermentum, pulvinar nibh vitae, pulvinar dolor. Maecenas sagittis sed mi vel vehicula. 
          Aliquam erat volutpat. Quisque scelerisque arcu non sapien placerat aliquam. Phasellus eu aliquam 
          lacus, in faucibus felis. Morbi in enim tempor, porta augue vitae, pharetra est. Aliquam aliquet sit 
          amet urna in varius.
          </p>
        </div>
      </div>
  </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/images/bg-image.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `]
})
export class HomeComponent {

}
