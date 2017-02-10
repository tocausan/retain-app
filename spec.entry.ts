import 'core-js'; 
import 'ts-helpers'; 

import 'zone.js/dist/zone'; 
import 'zone.js/dist/proxy'; 
import 'zone.js/dist/long-stack-trace-zone'; 
import 'zone.js/dist/sync-test'; 
import 'zone.js/dist/async-test'; 
import 'zone.js/dist/jasmine-patch'; 
import 'zone.js/dist/fake-async-test'; 

import 'rxjs/Rx'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 

import * as testing from '@angular/core/testing'; 
import * as browser from '@angular/platform-browser-dynamic/testing'; 

import './src/app/services/api.spec'; 

testing.TestBed.initTestEnvironment( 
browser.BrowserDynamicTestingModule, 
browser.platformBrowserDynamicTesting() 
); 