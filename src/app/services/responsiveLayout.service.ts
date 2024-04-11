import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveLayout {

    private _layout = new BehaviorSubject<Layout>(Layout.Large)

    layout$: Observable<Layout>;

    constructor() {
        this.layout$ = this._layout.asObservable();
    }

    toggleLayoutHandsetPortrait(): void {
        this._layout.next(Layout.HandsetPortrait);
    }

    toggleLayoutHandsetLandscape(): void {
        this._layout.next(Layout.HandsetLandscape);
    }

    toggleLayoutMedium(): void {
        this._layout.next(Layout.Medium);
    }

    toggleLayoutLarge(): void {
        this._layout.next(Layout.Large);
    }
}

export enum Layout {
    HandsetPortrait = "HandsetPortrait",
    HandsetLandscape = "HandsetLandscape",
    Medium = "Medium",
    Large = "Large"
}
