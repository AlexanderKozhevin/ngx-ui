import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle.component';
var ToggleModule = (function () {
    function ToggleModule() {
    }
    return ToggleModule;
}());
export { ToggleModule };
ToggleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ToggleComponent],
                exports: [ToggleComponent],
                imports: [CommonModule, FormsModule]
            },] },
];
/** @nocollapse */
ToggleModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toggle.module.js.map