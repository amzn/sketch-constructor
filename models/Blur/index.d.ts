declare enum BlurType {
  Gaussian = 0,
  Motion = 1,
  Zoom = 2,
  Background = 3,
}

declare class Blur {
  _class: 'blur';
  center: string;
  isEnabled: boolean;
  motionAngle: number;
  radius: number;
  saturation: number;
  type: BlurType;

  static readonly Type: BlurType;
  static fromJSON(json: Blur): Blur;

  constructor(args: Partial<Blur>)
  constructor(args: any)
  constructor(args: null | undefined, json: Blur)
}

export = Blur;
