import { TestBed } from '@angular/core/testing';

import { ReceptionProduitService } from './reception-produit.service';

describe('ReceptionProduitService', () => {
  let service: ReceptionProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
