import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortugaComponent } from './tortuga.component';

describe('TortugaComponent', () => {
  let component: TortugaComponent;
  let fixture: ComponentFixture<TortugaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TortugaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TortugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
