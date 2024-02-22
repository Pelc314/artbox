import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtystyczneObrazyComponent } from './artystyczne-obrazy.component';

describe('ArtystyczneObrazyComponent', () => {
  let component: ArtystyczneObrazyComponent;
  let fixture: ComponentFixture<ArtystyczneObrazyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtystyczneObrazyComponent]
    });
    fixture = TestBed.createComponent(ArtystyczneObrazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
