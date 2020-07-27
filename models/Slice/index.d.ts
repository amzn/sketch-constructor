import Color from '../Color';
import ExportOptions from '../ExportOptions';
import Rect from '../Rect';
import Style from '../Style';

declare class Slice {
    _class: 'slice';
    do_objectID: string;
    booleanOperation: number;
    exportOptions: ExportOptions;
    frame: Rect;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isVisible: boolean;
    layerListExpandedType: number;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: number;
    rotation: number;
    shouldBreakMaskChain: boolean;
    style: Style;
    hasBackgroundColor: boolean;
    backgroundColor: Color;

    constructor(args: Partial<Slice>)
    constructor(args: any)
    constructor(args: null | undefined, json: Slice)
    constructor(args: null | undefined, json: any)

    static fromJSON(json: Slice): Slice
    static fromJSON(json: any): Slice
}

export = Slice;
