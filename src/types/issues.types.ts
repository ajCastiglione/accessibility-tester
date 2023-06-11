export type Issue = {
  code: string;
  type: string;
  typeCode: string;
  message: string;
  context: string;
  selector: string;
  runner: string;
  runnerExtras?: object;
};
