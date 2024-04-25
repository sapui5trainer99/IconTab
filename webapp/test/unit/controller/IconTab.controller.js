/*global QUnit*/

sap.ui.define([
	"icontab/controller/IconTab.controller"
], function (Controller) {
	"use strict";

	QUnit.module("IconTab Controller");

	QUnit.test("I should test the IconTab controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
