/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-dashboard.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgxDashboardComponent } from './ngx-dashboard.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SemiCircularProgressbarComponent } from './semi-circular-progressbar/semi-circular-progressbar.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
var NgxDashboardModule = /** @class */ (function () {
    function NgxDashboardModule() {
    }
    NgxDashboardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxDashboardComponent, SemiCircularProgressbarComponent, TestComponentComponent, PieChartComponent, BarChartComponent],
                    imports: [
                        MatCardModule,
                        MatButtonModule
                    ],
                    exports: [NgxDashboardComponent, SemiCircularProgressbarComponent, PieChartComponent, BarChartComponent]
                },] }
    ];
    return NgxDashboardModule;
}());
export { NgxDashboardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL25neC1kYXNoYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3BFO0lBQUE7SUFRa0MsQ0FBQzs7Z0JBUmxDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQ0FBZ0MsRUFBRSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDckksT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0NBQWdDLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7aUJBQ3pHOztJQUNpQyx5QkFBQztDQUFBLEFBUm5DLElBUW1DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFNlbWlDaXJjdWxhclByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZW1pLWNpcmN1bGFyLXByb2dyZXNzYmFyL3NlbWktY2lyY3VsYXItcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVzdENvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGllQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05neERhc2hib2FyZENvbXBvbmVudCwgU2VtaUNpcmN1bGFyUHJvZ3Jlc3NiYXJDb21wb25lbnQsIFRlc3RDb21wb25lbnRDb21wb25lbnQsIFBpZUNoYXJ0Q29tcG9uZW50LCBCYXJDaGFydENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW05neERhc2hib2FyZENvbXBvbmVudCwgU2VtaUNpcmN1bGFyUHJvZ3Jlc3NiYXJDb21wb25lbnQsIFBpZUNoYXJ0Q29tcG9uZW50LCBCYXJDaGFydENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERhc2hib2FyZE1vZHVsZSB7IH1cclxuIl19