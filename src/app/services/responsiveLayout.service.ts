import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveLayout {

    private _isLayoutHandsetPortait = new BehaviorSubject<boolean>(false);
    private _isLayoutHandsetLandscape = new BehaviorSubject<boolean>(false);
    private _isLayoutMedium = new BehaviorSubject<boolean>(false);
    private _isLayoutLarge = new BehaviorSubject<boolean>(false);
    
    isLayoutHandsetPortait$: Observable<boolean>;
    isLayoutHandsetLandscape$: Observable<boolean>;
    isLayoutMedium$: Observable<boolean>;
    isLayoutLarge$: Observable<boolean>;

    constructor() {
        this.isLayoutHandsetPortait$ = this._isLayoutHandsetPortait.asObservable();
        this.isLayoutHandsetLandscape$ = this._isLayoutHandsetLandscape.asObservable();
        this.isLayoutMedium$ = this._isLayoutMedium.asObservable();
        this.isLayoutLarge$ = this._isLayoutLarge.asObservable();
    }

    toggleLayoutHandsetPortrait(bool: boolean): void {
        this._isLayoutHandsetPortait.next(bool);
    }

    toggleLayoutHandsetLandscape(bool: boolean): void {
        this._isLayoutHandsetLandscape.next(bool);
    }

    toggleLayoutMedium(bool: boolean): void {
        this._isLayoutMedium.next(bool);
    }

    toggleLayoutLarge(bool: boolean): void {
        this._isLayoutLarge.next(bool);
    }
}
