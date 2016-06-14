System.register(["@angular/core", "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var TemplateDrivenFormComponent;
    function hasNumbers(control) {
        if (!control.value.match('\\d+')) {
            return { noNumbers: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { email: '', password: '' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user = this.myForm.value;
                };
                TemplateDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                hasNumbers
                            ])],
                        'confirmPassword': ['', common_1.Validators.required]
                    });
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-form',
                        template: "\n        <div class=\"col-md-6 col-md-offset-3\">\n        <h2>Sign-up Form</h2>\n          <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(f)\">\n            <div class=\"form-group form-group-sm\">\n              <label for=\"mail\" class=\"col-sm-2 control-label\">Mail</label>\n                <input \n                    type=\"text\" \n                    class=\"form-control\" \n                    id=\"mail\"\n                    [ngFormControl]=\"myForm.controls['email']\"\n                    #mail=\"ngForm\">\n                    <span class=\"validation-error\" *ngIf=\"!mail.valid\">Not Valid</span>\n            </div> \n               <div class=\"form-group form-group-sm\">\n                    <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n                  <input \n                    type=\"text\" \n                    class=\"form-control\" \n                    id=\"password\"\n                    [ngFormControl]=\"myForm.controls['password']\"\n                    #password=\"ngForm\">\n                    <span class=\"validation-error\" *ngIf=\"!password.valid\">Not Valid</span>\n               </div>\n               <div class=\"form-group form-group-sm\">\n                    <label for=\"confirm-password\" class=\"col-sm-2 control-label\">Confirm</label>\n                  <input \n                    type=\"text\" \n                    class=\"form-control\"\n                    id=\"confirm-password\"\n                    [ngFormControl]=\"myForm.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\">\n                    <span class=\"validation-error\" *ngIf=\"!confirmPassword.valid\">Not Valid</span>\n                <div class=\"form-group\">\n                  <button \n                    type=\"submit\" \n                    class=\"btn btn primary\">Submit</button> \n                </div>\n            </div><!-- /.row -->\n            </form>\n            <h2>You submitted</h2>\n            <div>Mail: {{user.email}}</div>\n            <div>Password: {{user.password}}</div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBMkVBLG9CQUFvQixPQUFnQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2hDLENBQUM7WUFDRyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUE7UUFDNUIsQ0FBQztJQUFBLENBQUM7Ozs7Ozs7Ozs7WUExQk47Z0JBSUkscUNBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFGN0MsU0FBSSxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBRWUsQ0FBQztnQkFFakQsOENBQVEsR0FBUixVQUFTLElBQUk7b0JBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCw4Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNoQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLFVBQVU7NkJBQ2IsQ0FBQyxDQUFDO3dCQUNILGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUMvQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFwRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsNGtFQTRDVDtxQkFDSixDQUFDOzsrQ0FBQTtnQkFzQkYsa0NBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHFFQW9CQyxDQUFBIiwiZmlsZSI6InRlbXBsYXRlLWRyaXZlbi1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7aXNCb29sZWFufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9mYWNhZGUvbGFuZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXRlbXBsYXRlLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XHJcbiAgICAgICAgPGgyPlNpZ24tdXAgRm9ybTwvaDI+XHJcbiAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFpbFwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiPk1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI21haWw9XCJuZ0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFtYWlsLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFwYXNzd29yZC52YWxpZFwiPk5vdCBWYWxpZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiPkNvbmZpcm08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhY29uZmlybVBhc3N3b3JkLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuIHByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+PCEtLSAvLnJvdyAtLT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+TWFpbDoge3t1c2VyLmVtYWlsfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5QYXNzd29yZDoge3t1c2VyLnBhc3N3b3JkfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURyaXZlbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIHVzZXIgPSB7ZW1haWw6ICcnLCBwYXNzd29yZDogJyd9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKXtcclxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLm15Rm9ybS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIGhhc051bWJlcnNcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNOdW1iZXJzKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcclxuICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKCdcXFxcZCsnKSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge25vTnVtYmVyczogdHJ1ZX1cclxuICAgIH19Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
