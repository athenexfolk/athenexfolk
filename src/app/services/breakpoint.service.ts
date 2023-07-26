import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private screenBreakpoint = '(min-width: 768px)'
  public isLargeScreen = false
  breakpointObserver: BreakpointObserver

  constructor(private bpo: BreakpointObserver) {
    this.breakpointObserver = bpo;
  }

  getBreakPointObserver() {
    return this.breakpointObserver.observe(this.screenBreakpoint)
  }
  
}
