import { TestBed } from '@angular/core/testing';
import { funcionariosService } from './funcionarios.service';

describe('FuncionariosService', () => {
  let service: funcionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(funcionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
