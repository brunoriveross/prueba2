import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneraqrPage } from './generaqr.page';

describe('GeneraqrPage', () => {
  let component: GeneraqrPage;
  let fixture: ComponentFixture<GeneraqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneraqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
