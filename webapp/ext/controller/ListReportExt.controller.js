sap.ui.controller("dsn.s4fdclauselibraryupload.ext.controller.ListReportExt", {
    onClickAction: function (e) { this._getDialog(e).open() }, _getDialog: function (e) {
        if (!this._oDialog) {
            this._oDialog = sap.ui.xmlfragment("dsn.s4fdclauselibraryupload.fragment.upload",this);this.getView().addDependent(this._oDialog)}return this._oDialog},
            onInit:function(){},
            onBeforeUploadStarts:function(e){var t=new sap.m.UploadCollectionParameter({name:"slug",value:e.getParameter("fileName")});
            e.getParameters().addHeaderParameter(t);
            var a = this.getView().getModel(); a.refreshSecurityToken();
            var o = a.oHeaders; var n = o["x-csrf-token"];
            var i = new sap.m.UploadCollectionParameter({ name: "x-csrf-token", value: n });
            e.getParameters().addHeaderParameter(i)
        }, onUploadComplete: function(e) {
            this.getView().getModel().refresh(); this._getDialog(e).close()
        }, onUploadTerminated: function(e) { }, onCancelBtn: function(e) { this._getDialog(e).close() }
    });
 