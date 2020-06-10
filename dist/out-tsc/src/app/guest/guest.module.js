import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { GuestComponent } from './guest.component';
import { MatCardModule } from '@angular/material/card';
let GuestModule = class GuestModule {
};
GuestModule = __decorate([
    NgModule({
        declarations: [
            GuestComponent
        ],
        imports: [
            MatCardModule
        ],
        providers: [],
        bootstrap: [GuestComponent]
    })
], GuestModule);
export { GuestModule };
//# sourceMappingURL=guest.module.js.map