import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {
  isLargeScreen = false;
  constructor(private bs: BreakpointService) {
    this.bs
      .getBreakPointObserver()
      .subscribe((state) => (this.isLargeScreen = state.matches));
  }
}
