sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
], function (ControllerExtension) {
    "use strict";

    return ControllerExtension.extend("paymentmonitor.ext.controller.ListReportExt", {
        override: {
            onAfterRendering: function () {
                var oIconTabBar = this.getView().findAggregatedObjects(true, function (oControl) {
                    return oControl.isA("sap.m.IconTabBar");
                })[0];
                var aSmartTables = this.getView().findAggregatedObjects(true, function (oControl) {
                    return oControl && oControl.isA && oControl.isA("sap.ui.comp.smarttable.SmartTable");
                });
                if (oIconTabBar) {
                    oIconTabBar.getItems().forEach(function (oItem) {
                        var sKey = oItem.getKey();
                        var sText = oItem.getText();
                        if (sKey !== "All") {
                            if (sText && sText.indexOf("(0)") === -1) {
                                oItem.setEnabled(true);
                            }
                            else {
                                oItem.setEnabled(false);
                            }
                            if (sKey === "Delayed") {
                                oItem.setIconColor(sap.ui.core.IconColor.Critical);
                                if (sText && sText.indexOf("(0)") === -1) {
                                    oItem.setEnabled(true);
                                }
                                else {
                                    oItem.setEnabled(false);
                                }
                            }
                            if (sKey === "Error") {
                                oItem.setIconColor(sap.ui.core.IconColor.Negative);
                                if (sText && sText.indexOf("(0)") === -1) {
                                    oItem.setEnabled(true);
                                }
                                else {
                                    oItem.setEnabled(false);
                                }
                            }
                            if (sKey === "Rejected") {
                                oItem.setIconColor(sap.ui.core.IconColor.Negative);
                                if (sText && sText.indexOf("(0)") === -1) {
                                    oItem.setEnabled(true);
                                }
                                else {
                                    oItem.setEnabled(false);
                                }
                            }
                            if (sKey === "Completed") {
                                oItem.setIconColor(sap.ui.core.IconColor.Positive);
                                if (sText && sText.indexOf("(0)") === -1) {
                                    oItem.setEnabled(true);
                                }
                                else {
                                    oItem.setEnabled(false);
                                }
                            }
                        }
                    });
                }
                aSmartTables.forEach(function (oSmartTable) {
                    oSmartTable.attachDataReceived(function () {
                        if (oIconTabBar) {
                            oIconTabBar.getItems().forEach(function (oItem) {
                                var sKey = oItem.getKey();
                                var sText = oItem.getText();
                                if (sKey !== "All") {
                                    if (sText && sText.indexOf("(0)") === -1) {
                                        oItem.setEnabled(true);
                                    }
                                    else {
                                        oItem.setEnabled(false);
                                    }
                                }
                            });
                        }
                    });
                });

            },
            adaptNavigationParameterExtension: function (filter, navigation) {
                if (navigation.semanticObject === "AutomaticPayment") {
                    var date = filter.getSelectOption("runDate")[0].Low;
                    var runID = filter.getSelectOption("runID")[0].Low;
                    var ccode = filter.getSelectOption("CompanyCode")[0].Low;
                    var oDate = new Date(date);
                    var sDate = oDate.getFullYear().toString()
                        + ("0" + (oDate.getMonth() + 1)).slice(-2)
                        + ("0" + oDate.getDate()).slice(-2);
                    filter.removeSelectOption("runDate");
                    filter.removeSelectOption("runID");
                    filter.removeSelectOption("SystemId");
                    filter.removeSelectOption("Completed");
                    filter.removeSelectOption("CompletedBy");
                    filter.removeSelectOption("CompletedTime");
                    filter.removeSelectOption("ExternalBcmBatchNumber");
                    filter.removeSelectOption("IdocInOriginalSystem");
                    filter.removeSelectOption("MonitorCategory");
                    filter.removeSelectOption("NumberOfItemsNettedRegup");
                    filter.removeSelectOption("Origin");
                    filter.removeSelectOption("OurBankCountryKey");
                    filter.removeSelectOption("OurBankKey");
                    filter.removeSelectOption("PayeeBankCountryKey");
                    filter.removeSelectOption("PayeeBankKey");
                    filter.removeSelectOption("PaymentBatch");
                    filter.removeSelectOption("PaymentDocumentNumber");
                    filter.removeSelectOption("PaymentGroup");
                    filter.removeSelectOption("PaymentMethod");
                    filter.removeSelectOption("PaymentMethodName");
                    filter.removeSelectOption("PaymentOrder");
                    filter.removeSelectOption("PaymentType");
                    filter.removeSelectOption("etag");
                    filter.addParameter("currentCompanyCode","" );
                    filter.removeSelectOption("BatchUUID");
                    filter.addParameter("RunDate", sDate);
                    filter.addParameter("RunID",runID );                
                }
            }
        }
    });
});