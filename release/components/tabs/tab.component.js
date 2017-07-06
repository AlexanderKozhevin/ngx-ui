import { Component, Input } from '@angular/core';
var TabComponent = (function () {
    function TabComponent() {
        this.title = '';
        this.active = false;
        this.disabled = false;
    }
    return TabComponent;
}());
export { TabComponent };
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tab',
                template: "\n    <ng-content *ngIf=\"active\"></ng-content>\n  ",
                host: {
                    class: 'ngx-tab'
                }
            },] },
];
/** @nocollapse */
TabComponent.ctorParameters = function () { return []; };
TabComponent.propDecorators = {
    'title': [{ type: Input },],
    'active': [{ type: Input },],
    'disabled': [{ type: Input },],
};
//# sourceMappingURL=tab.component.js.map