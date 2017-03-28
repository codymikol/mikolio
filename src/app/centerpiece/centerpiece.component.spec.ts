import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterpieceComponent } from './centerpiece.component';

describe('CenterpieceComponent', () => {
  let component: CenterpieceComponent;
  let fixture: ComponentFixture<CenterpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
