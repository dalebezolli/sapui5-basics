sap.ui.define([ 'sap/ui/core/mvc/Controller' ], Controller => {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
        onDoSomething: _ => {
            alert('Something fun');
        }
    });
});