(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('ngx-dashboard', ['exports', '@angular/core', '@angular/material'], factory) :
    (global = global || self, factory(global['ngx-dashboard'] = {}, global.ng.core, global.ng.material));
}(this, (function (exports, core, material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-dashboard.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxDashboardService = /** @class */ (function () {
        function NgxDashboardService() {
        }
        NgxDashboardService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxDashboardService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxDashboardService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxDashboardService_Factory() { return new NgxDashboardService(); }, token: NgxDashboardService, providedIn: "root" });
        return NgxDashboardService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-dashboard.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxDashboardComponent = /** @class */ (function () {
        function NgxDashboardComponent() {
        }
        /**
         * @return {?}
         */
        NgxDashboardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NgxDashboardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-NgxDashboard',
                        template: "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shiba Inu</mat-card-title>\r\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n        <p>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n            bred for hunting.\r\n        </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n</mat-card>",
                        styles: ["example-card{max-width:400px!important}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]
                    }] }
        ];
        /** @nocollapse */
        NgxDashboardComponent.ctorParameters = function () { return []; };
        return NgxDashboardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/semi-circular-progressbar/semi-circular-progressbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SemiCircularProgressbarComponent = /** @class */ (function () {
        function SemiCircularProgressbarComponent() {
            this.matchCount = 45;
        }
        /**
         * @return {?}
         */
        SemiCircularProgressbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.match = this.match || 0;
            this.matchCount += this.match * 1.8;
        };
        SemiCircularProgressbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-semi-circular-progressbar',
                        template: "<div class=\"progress\">\n    <div class=\"barOverflow\">\n        <div class=\"bar\" [style.transform]=\"'rotate('+matchCount+'deg)'\"></div>\n    </div>\n    <span>{{match}}</span>%\n</div>",
                        styles: [".progress{position:relative;margin:4px;float:left;text-align:center}.barOverflow{position:relative;overflow:hidden;width:90px;height:45px;margin-bottom:-14px}.bar{position:absolute;top:0;left:0;width:90px;height:90px;border-radius:50%;box-sizing:border-box;border:5px solid #eee;border-bottom-color:#0bf;border-right-color:#0bf}"]
                    }] }
        ];
        /** @nocollapse */
        SemiCircularProgressbarComponent.ctorParameters = function () { return []; };
        SemiCircularProgressbarComponent.propDecorators = {
            match: [{ type: core.Input }]
        };
        return SemiCircularProgressbarComponent;
    }());
    if (false) {
        /** @type {?} */
        SemiCircularProgressbarComponent.prototype.match;
        /** @type {?} */
        SemiCircularProgressbarComponent.prototype.matchCount;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/test-component/test-component.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestComponentComponent = /** @class */ (function () {
        function TestComponentComponent() {
        }
        /**
         * @return {?}
         */
        TestComponentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        TestComponentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-test-component',
                        template: "<p>test-component works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TestComponentComponent.ctorParameters = function () { return []; };
        return TestComponentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pie-chart/pie-chart.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PieChartComponent = /** @class */ (function () {
        function PieChartComponent() {
        }
        /**
         * @return {?}
         */
        PieChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        PieChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-pie-chart',
                        template: "<p>pie-chart works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PieChartComponent.ctorParameters = function () { return []; };
        return PieChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/bar-chart/bar-chart.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BarChartComponent = /** @class */ (function () {
        function BarChartComponent() {
        }
        /**
         * @return {?}
         */
        BarChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BarChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-bar-chart',
                        template: "<p>bar-chart works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BarChartComponent.ctorParameters = function () { return []; };
        return BarChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-dashboard.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxDashboardModule = /** @class */ (function () {
        function NgxDashboardModule() {
        }
        NgxDashboardModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxDashboardComponent, SemiCircularProgressbarComponent, TestComponentComponent, PieChartComponent, BarChartComponent],
                        imports: [
                            material.MatCardModule,
                            material.MatButtonModule
                        ],
                        exports: [NgxDashboardComponent, SemiCircularProgressbarComponent, PieChartComponent, BarChartComponent]
                    },] }
        ];
        return NgxDashboardModule;
    }());

    exports.NgxDashboardComponent = NgxDashboardComponent;
    exports.NgxDashboardModule = NgxDashboardModule;
    exports.NgxDashboardService = NgxDashboardService;
    exports.ɵa = SemiCircularProgressbarComponent;
    exports.ɵb = TestComponentComponent;
    exports.ɵc = PieChartComponent;
    exports.ɵd = BarChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-dashboard.umd.js.map
