// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/312556ead6370d3aeed0d0c782aee9a501f228a6/angularlocalstorage/index.d.ts
declare module 'angularlocalstorage' {
// Type definitions for AngularLocalStorage 0.1.7
// Project: https://github.com/agrublev/angularLocalStorage
// Definitions by: Horiuchi_H <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular"/>

import * as ng from 'angular';

module 'angular' {
  export namespace localStorage {
    interface ILocalStorageService {
      set(key: string, value: any): any;
      get(key: string): any;
      remove(key: string): boolean;
      clearAll(): void;

      bind($scope: ng.IScope, key: string, opts?: {
        defaultValue?: any;
        storeName?: string;
      }): any;
      unbind($scope: ng.IScope, key: string, storeName?: string): void;
    }
  }
}
}