import { TestBed } from '@angular/core/testing';

import { PetCadastroService } from './pet-cadastro.service';

describe('PetCadastroService', () => {
  let service: PetCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
