/**
 * @fileoverview added by tsickle
 * Generated from: lib/text-editor.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorComponent } from './angular-editor.component';
var TextEditorModule = /** @class */ (function () {
    function TextEditorModule() {
    }
    TextEditorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
                    imports: [
                        CommonModule, FormsModule, ReactiveFormsModule
                    ],
                    exports: [AngularEditorComponent, AngularEditorComponent, AngularEditorToolbarComponent]
                },] }
    ];
    return TextEditorModule;
}());
export { TextEditorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtvbmlraS90ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEU7SUFBQTtJQU9nQyxDQUFDOztnQkFQaEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixDQUFDO29CQUN4RixPQUFPLEVBQUU7d0JBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7cUJBQy9DO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLDZCQUE2QixDQUFDO2lCQUN6Rjs7SUFDK0IsdUJBQUM7Q0FBQSxBQVBqQyxJQU9pQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbmd1bGFyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhckVkaXRvckNvbXBvbmVudCwgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQsIEFlU2VsZWN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RWRpdG9yTW9kdWxlIHsgfVxuIl19