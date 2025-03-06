// src/types/jquery.slick.d.ts
import * as $ from "jquery";

// Declare global augmentation for JQuery
declare global {
  interface JQuery {
    countTo(options?: any): JQuery;
    slick(options?: any): JQuery;
    
  }
}
declare module 'slick-carousel';

// Export an empty object to ensure this file is treated as a module
export {};
