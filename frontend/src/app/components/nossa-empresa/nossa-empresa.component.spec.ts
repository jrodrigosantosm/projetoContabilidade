import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaEmpresaComponent } from './nossa-empresa.component';

describe('NossaEmpresaComponent', () => {
  let component: NossaEmpresaComponent;
  let fixture: ComponentFixture<NossaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NossaEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
