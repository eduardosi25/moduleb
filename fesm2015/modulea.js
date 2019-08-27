import { Injectable, Component, defineInjectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModuleaService {
    constructor() { }
}
ModuleaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ModuleaService.ctorParameters = () => [];
/** @nocollapse */ ModuleaService.ngInjectableDef = defineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModuleaComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ModuleaComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-modulea',
                template: `
  <form>
  <section class="form-block">
      <label>Input Fields</label>
      <div class="form-group">
          <label for="formFields_1">Textbox [type="text"]</label>
          <input type="text" id="formFields_1" placeholder="Email" size="35" disabled>
          <input type="text" id="formFields_2" placeholder="Email 2" size="45">
          <input type="text" id="formFields_3" placeholder="Email" size="25">
          <input type="text" id="formFields_4" placeholder="Email 2">
          <input type="text" id="formFields_5" placeholder="Email">
          <input type="text" id="formFields_6" placeholder="Email 2">
      </div>
      <div class="form-group">
          <label for="formFields_7">Textbox [type="password"]</label>
          <input type="password" id="formFields_7" placeholder="Password">
      </div>
      <div class="form-group">
          <label for="formFields_8">Textarea</label>
          <textarea id="formFields_8" rows="5"></textarea>
      </div>
      <div class="form-group">
          <label for="formFields_9">Textbox [type="url"]</label>
          <input type="url" id="formFields_9" placeholder="https://vmware.github.io/clarity/" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_10">Textbox [type="tel"]</label>
          <input type="tel" id="formFields_10" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_11">Textbox [type="date"]</label>
          <input type="date" id="formFields_11" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_12">Textbox [type="datetime-local"]</label>
          <input type="datetime-local" id="formFields_12" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_13">Textbox Readonly [type="text"]</label>
          <input type="text" id="formFields_13" size="35" readonly value="Readonly Text">
      </div>
  </section>
</form>  
  
  `,
                styles: []
            },] },
];
/** @nocollapse */
ModuleaComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModuleaModule {
}
ModuleaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forChild([
                        {
                            path: '', pathMatch: 'full', component: ModuleaComponent
                        }
                    ])
                ],
                declarations: [ModuleaComponent],
                exports: [ModuleaComponent]
            },] },
];
/** @nocollapse */
ModuleaModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ModuleaService, ModuleaComponent, ModuleaModule };
//# sourceMappingURL=modulea.js.map
