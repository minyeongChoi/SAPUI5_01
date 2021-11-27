sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("iitp.zui500221126.controller.View1", {
			onInit: function () {
                // let oData={
                // aSkill: [
                //     {sId: "S01", sName:"SAPUI5", grade:"중"},
                //     {sId: "S02", sName:"ABAP", grade:"상"},
                //     {sId: "S03", sName:"HANA", grade:"상"}
                // ],
                let oData={
                    aSkill: [
                        {sId: "S01", 
                        sName:"SAPUI5", 
                        grade:"중",
                        aEmp: [
                                {eId: "E001", eName: "Choi MY"},
                                {eId: "E002", eName: "Lee SH"},
                            ]
                        },
                        {sId: "S02", 
                        sName:"ABAP", 
                        grade:"상",
                        aEmp: [
                            {eId: "E003", eName: "Choi MY_2"},
                            {eId: "E004", eName: "Lee SH_2"},
                            ]
                        },
                        {sId: "S03", 
                        sName:"HANA", 
                        grade:"상",
                        aEmp: [
                            {eId: "E005", eName: "Choi MY_3"},
                            {eId: "E006", eName: "Lee SH_3"},
                            ]
                        }
                    ]
			};
            
            let oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel);
        },
        onSkillClick: function(oEvent) {
            // alert(oEvent);
            let sPath = oEvent.getSource().getBindingContext().getPath();
            //alert(sPath); // /aSkill/0
            let oTableEmp = this.byId("idTableEmp");
            //컨트롤에 있는 데이터와 뷰에있는걸 연결할때 : 바인딩
            oTableEmp.bindElement(sPath);
        },
        onSelectionChange: function(oEvent) {
            // alert(oEvent);
            let oListItem = oEvent.getParameter("listItem");
            let sPath = oListItem.getBindingContext().getPath();
            alert(sPath)

            let oTableEmp = this.byId("idTableEmp");
            oTableEmp.bindElement(sPath);
        },


        // onSelect: function(oEvent){
        //     let oCombo = this.getView().byId("idCombo");
        //     let selectcarrId = oCombo.getSelectedKey();
        //     alert( selectcarrId );

        //     let sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
        //     let sPath = oEvent.getParameter("selectedItem").getBindingContext("myModel").getPath();
        //         // let sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
        //         // 설정한 애가 디폴트일때, 모델 이름을 줬으면 이름을 줘야함
        //     alert(sPath);
        // }

	});
});
