import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export enum Layout {
    HandsetPortrait = "HandsetPortrait",
    HandsetLandscape = "HandsetLandscape",
    Medium = "Medium",
    Large = "Large"
}

@Injectable({
    providedIn: 'root'
})
export class ResponsiveLayout {

    layout$: Observable<Layout> = this.breakpointObserver.observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.Large,
        Breakpoints.Medium
      ]).pipe(
            map(({ breakpoints }) => {
            if (breakpoints[Breakpoints.HandsetPortrait]) {
                console.log("screens matches handset portait ");
                
                return Layout.HandsetPortrait;
            }
            else if (breakpoints[Breakpoints.HandsetLandscape]) {
                console.log("screens matches HandsetLandscape");
    
                return Layout.HandsetLandscape;
            }
            else if (breakpoints[Breakpoints.Large]) {
                console.log("screens matches Large ");
    
                return Layout.Large;
            }
            return Layout.Medium;
        })
      );

    constructor(private breakpointObserver: BreakpointObserver) {}
}