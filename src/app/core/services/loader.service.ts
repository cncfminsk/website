import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  public httpRequest() {
    this.isLoadingSubject.next(true);
  }

  public httpSuccess() {
    this.isLoadingSubject.next(false);
  }
}
