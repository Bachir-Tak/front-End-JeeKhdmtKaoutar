import { TestBed } from '@angular/core/testing';

import { DemandeProduitService } from './demande-produit.service';

describe('DemandeProduitService', () => {
  let service: DemandeProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
