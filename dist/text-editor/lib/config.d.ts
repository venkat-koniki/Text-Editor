import { SelectOption } from './ae-select/ae-select.component';
export interface CustomClass {
    name: string;
    class: string;
    tag?: string;
}
export interface Font {
    name: string;
    class: string;
}
export interface AngularEditorConfig {
    editable?: boolean;
    spellcheck?: boolean;
    height?: 'auto' | string;
    minHeight?: '0' | string;
    maxHeight?: 'auto' | string;
    width?: 'auto' | string;
    minWidth?: '0' | string;
    translate?: 'yes' | 'now' | string;
    enableToolbar?: boolean;
    showToolbar?: boolean;
    placeholder?: string;
    defaultParagraphSeparator?: string;
    fontSizes?: SelectOption[];
    defaultFontName?: string;
    defaultFontSize?: '10px' | '12px' | '14px' | '16px' | '18px' | '20px' | '22px' | string;
    uploadUrl?: string;
    uploadWithCredentials?: boolean;
    fonts?: Font[];
    customClasses?: CustomClass[];
    sanitize?: boolean;
    toolbarPosition?: 'top' | 'bottom';
    outline?: boolean;
    toolbarHiddenButtons?: string[][];
}
export declare const angularEditorConfig: AngularEditorConfig;
