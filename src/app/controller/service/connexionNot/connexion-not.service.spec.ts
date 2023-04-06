import { TestBed } from '@angular/core/testing';

import { ConnexionNotService } from './connexion-not.service';

describe('ConnexionNotService', () => {
  let service: ConnexionNotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionNotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
