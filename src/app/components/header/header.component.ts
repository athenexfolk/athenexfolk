import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLargeScreen = false;
  constructor(private bs: BreakpointService) {
    this.bs
      .getBreakPointObserver()
      .subscribe((state) => (this.isLargeScreen = state.matches));
  }
}
