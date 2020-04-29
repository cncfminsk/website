import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { LoaderInterceptor } from "./loader-interceptor";

describe("LoaderInterceptorService", () => {
  let service: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoaderInterceptor],
    });
    service = TestBed.inject(LoaderInterceptor);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
