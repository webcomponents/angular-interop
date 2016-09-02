/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  var ngVer = '@2.0.0-rc.5'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-rc.1'; // lock router version
  var formsVer = '@0.3.0'; // lock forms version
  var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides

  var angular2ModalVer = '@2.0.0-beta.2';

  //map tells the System loader where to look for things
  var map = {
    'app': 'app',

    '@angular': 'https://unpkg.com/@angular', // sufficient if we didn't pin the version
    '@angular/router': 'https://unpkg.com/@angular/router' + routerVer,
    '@angular/forms': 'https://unpkg.com/@angular/forms' + formsVer,
    '@angular/router-deprecated': 'https://unpkg.com/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api', // get latest
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6',
    'ts': 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://unpkg.com/typescript@1.9.0-dev.20160409/lib/typescript.js',


    'angular2-modal': 'https://unpkg.com/angular2-modal' + angular2ModalVer
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {
      main: 'main.ts',
      defaultExtension: 'ts'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
      main: 'index.js',
      defaultExtension: 'js'
    },


    'angular2-modal': {
      defaultExtension: 'js',
      main: 'index'
    },

    // Some internal directories in angular2-modal are barrel like (having index.ts)
    // this works great with webpack, with systemJS it needs mapping.
    'angular2-modal/providers': {
      defaultExtension: 'js',
      main: 'index'
    },
    'angular2-modal/overlay': {
      defaultExtension: 'js',
      main: 'index'
    },
    'angular2-modal/components': {
      defaultExtension: 'js',
      main: 'index'
    },

    // Plugins also need mappings.
    'angular2-modal/plugins/bootstrap': {
      defaultExtension: 'js',
      main: 'index'
    },
    'angular2-modal/plugins/vex': {
      defaultExtension: 'js',
      main: 'index'
    },
    'angular2-modal/plugins/js-native': {
      defaultExtension: 'js',
      main: 'index'
    }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/' + pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVer;
  });

  // Add package entries for angular packages
  ngPackageNames.concat(['forms', 'router', 'router-deprecated']).forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/' + pkgName] = {
      main: '/bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js'
    };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
