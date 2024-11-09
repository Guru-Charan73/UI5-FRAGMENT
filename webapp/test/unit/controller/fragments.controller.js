/*global QUnit*/

sap.ui.define([
	"fragmentapplication/fragmentcreation/controller/fragments.controller"
], function (Controller) {
	"use strict";

	QUnit.module("fragments Controller");

	QUnit.test("I should test the fragments controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
