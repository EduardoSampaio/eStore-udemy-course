import { Component, computed, input, Signal } from '@angular/core';
import {
  faStar,
  faStarHalfStroke,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  imports: [FontAwesomeModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css',
})
export class RatingsComponent {
  score = input<number>(0);

  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  // Computed signal for stars
  stars = computed(() => {
    const value = Math.min(this.score(), 5); // Clamp to max 5
    const icons: IconDefinition[] = [];

    const solid = Math.floor(value);
    const half = value - solid >= 0.5;

    for (let i = 0; i < solid; i++) {
      icons.push(this.faStar);
    }

    if (half) {
      icons.push(this.faStarHalfStroke);
    }

    while (icons.length < 5) {
      icons.push(this.faStarEmpty as unknown as IconDefinition);
    }

    return [...icons];
  });
}
