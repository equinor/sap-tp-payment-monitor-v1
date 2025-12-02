sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
], function (ControllerExtension) {
    "use strict";

    return ControllerExtension.extend("paymentmonitor.ext.controller.ObjectPageExt", {
        override: {
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
                    filter.addParameter("currentCompanyCode", "");
                    filter.removeSelectOption("BatchUUID");
                    filter.addParameter("RunDate", sDate);
                    filter.addParameter("RunID", runID);
                }
            }
        }
    });
});