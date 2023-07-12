sap.ui.define([ 
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
], (Controller, JSONModel) => {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
        onInit: function() {
            const model = new JSONModel({ count: 0 });
            this.getView().setModel(model);
        },
        onCount: function(event) {
            const model = this.getView().getModel();
            const prevCount = model.getProperty('/count');
            model.setProperty('/count', prevCount + 1);
        }
    });
});