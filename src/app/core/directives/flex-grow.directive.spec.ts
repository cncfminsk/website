import { FlexGrowDirective } from "./flex-grow.directive";

const rendererMock = jasmine.createSpyObj("rendererMock", [
  "selectRootElement",
  "createElement",
  "createViewRoot",
  "createText",
  "setElementProperty",
  "setElementAttribute",
  "setText",
  "setBindingDebugInfo",
  "createTemplateAnchor",
  "projectNodes",
  "attachViewAfter",
  "detachView",
  "destroyView",
  "listen",
  "listenGlobal",
  "setElementClass",
  "setElementStyle",
  "invokeElementMethod",
  "animate",
]);

const elementRefMock = {
  nativeElement: document.createElement("div"),
};

describe("FlexGrowDirective", () => {
  it("should create an instance", () => {
    const directive = new FlexGrowDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
