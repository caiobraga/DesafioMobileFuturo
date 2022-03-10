import { Error } from "./error";

export default class AsyncSnapshot {
  
  private _data: any;
  private _error: Error;
  private _hasData: boolean;
  private _hasError: boolean;
  
  constructor(data: any, error: Error) {
      this._data = data;
      this._error = error;
      this._hasData = data ? true : false;
      this._hasError = error ? true : false;
    }
  
    getData() {
      return this._data;
    }
  
    getError() {
      return this._error;
    }
  
    hasData() {
      return this._hasData;
    }
  
    hasError() {
      return this._hasError;
    }
  }