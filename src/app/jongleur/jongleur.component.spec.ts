import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JongleurComponent } from './jongleur.component';

describe('JongleurComponent', () => {
  let component: JongleurComponent;
  let fixture: ComponentFixture<JongleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JongleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JongleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
