/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'Homerork/Homework_front/node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'ng2-bootstrap/ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ngx-bootstrap.umd.js',
            'moment': 'npm:moment/moment.js',


            app: 'Homerork/Homework_front/app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
            'angular2-grid': 'npm:angular2-grid/dist',
            //calendar
            'primeng': 'npm:primeng',
            "@ng2-dynamic-forms/core": "npm:@ng2-dynamic-forms/core/bundles/core.umd.js",
            "@ng2-dynamic-forms/ui-primeng": "npm:@ng2-dynamic-forms/ui-primeng/bundles/ui-primeng.umd.js",
            "@ng2-dynamic-forms/ui-bootstrap": "npm:@ng2-dynamic-forms/ui-bootstrap/bundles/ui-bootstrap.umd.js",
            'ng2-translate': 'npm:ng2-translate',
            //angular-material
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {defaultExtension: 'js'},
            'angular-in-memory-web-api': {main: './index.js', defaultExtension: 'js'},
            'angular2-grid': {main: 'main.js', defaultExtension: 'js'},

            primeng: {
                defaultExtension: 'js'
            },
            'ng2-translate': {main: 'bundles/ng2-translate.umd.js', defaultExtension: 'js'}
        }
    });
})(this);
