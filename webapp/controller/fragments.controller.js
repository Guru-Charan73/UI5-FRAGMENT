sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function (Controller, Fragment) {
    "use strict";

    return Controller.extend("fragmentapplication.fragmentcreation.controller.fragments", {
        onInit: function () {
            // Initialization code if required
        },

        onOpenDialog: function () {
            var oView = this.getView();

            // Check if the dialog is already created
            if (!this.byId("dialogId")) {
                // Load the fragment asynchronously
                Fragment.load({
                    id: oView.getId(),
                    name: "fragmentapplication.fragmentcreation.fragments.dialogFragment",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                }).catch(function (error) {
                    console.error("Error loading fragment:", error);
                });
            } else {
                // If already created, open the dialog
                this.byId("dialogId").open();
            }
        },

        onCloseDialog: function () {
            this.byId("dialogId").close();
        }
    });
});
