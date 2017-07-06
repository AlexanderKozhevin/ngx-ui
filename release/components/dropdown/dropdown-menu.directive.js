import { ElementRef, Directive } from '@angular/core';
var DropdownMenuDirective = (function () {
    function DropdownMenuDirective(element) {
        this.element = element.nativeElement;
    }
    return DropdownMenuDirective;
}());
export { DropdownMenuDirective };
DropdownMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ngx-dropdown-menu',
                host: {
                    class: 'ngx-dropdown-menu'
                }
            },] },
];
/** @nocollapse */
DropdownMenuDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
//# sourceMappingURL=dropdown-menu.directive.js.map