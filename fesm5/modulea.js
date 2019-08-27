import { Injectable, Component, defineInjectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModuleaService = /** @class */ (function () {
    function ModuleaService() {
    }
    return ModuleaService;
}());
ModuleaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ModuleaService.ctorParameters = function () { return []; };
/** @nocollapse */ ModuleaService.ngInjectableDef = defineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModuleaComponent = /** @class */ (function () {
    function ModuleaComponent() {
    }
    /**
     * @return {?}
     */
    ModuleaComponent.prototype.ngOnInit = function () {
    };
    return ModuleaComponent;
}());
ModuleaComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-modulea',
                template: "\n  <form>\n  <section class=\"form-block\">\n      <label>Input Fields</label>\n      <div class=\"form-group\">\n          <label for=\"formFields_1\">Textbox [type=\"text\"]</label>\n          <input type=\"text\" id=\"formFields_1\" placeholder=\"Email\" size=\"35\" disabled>\n          <input type=\"text\" id=\"formFields_2\" placeholder=\"Email 2\" size=\"45\">\n          <input type=\"text\" id=\"formFields_3\" placeholder=\"Email\" size=\"25\">\n          <input type=\"text\" id=\"formFields_4\" placeholder=\"Email 2\">\n          <input type=\"text\" id=\"formFields_5\" placeholder=\"Email\">\n          <input type=\"text\" id=\"formFields_6\" placeholder=\"Email 2\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_7\">Textbox [type=\"password\"]</label>\n          <input type=\"password\" id=\"formFields_7\" placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_8\">Textarea</label>\n          <textarea id=\"formFields_8\" rows=\"5\"></textarea>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_9\">Textbox [type=\"url\"]</label>\n          <input type=\"url\" id=\"formFields_9\" placeholder=\"https://vmware.github.io/clarity/\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_10\">Textbox [type=\"tel\"]</label>\n          <input type=\"tel\" id=\"formFields_10\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_11\">Textbox [type=\"date\"]</label>\n          <input type=\"date\" id=\"formFields_11\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_12\">Textbox [type=\"datetime-local\"]</label>\n          <input type=\"datetime-local\" id=\"formFields_12\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_13\">Textbox Readonly [type=\"text\"]</label>\n          <input type=\"text\" id=\"formFields_13\" size=\"35\" readonly value=\"Readonly Text\">\n      </div>\n  </section>\n</form>  \n  \n  ",
                styles: []
            },] },
];
/** @nocollapse */
ModuleaComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModuleaModule = /** @class */ (function () {
    function ModuleaModule() {
    }
    return ModuleaModule;
}());
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
ModuleaModule.ctorParameters = function () { return []; };

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
