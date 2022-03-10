export class Error {
     _message: string;
     _codError: string;

    constructor(message: string, codError: string) {
        this._message = message;
        this._codError = codError;
      }
}