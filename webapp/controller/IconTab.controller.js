sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("icontab.controller.IconTab", {
            onNext:function(){
				var iconTabKey=this.byId("iconTabId").getSelectedKey();
				if(iconTabKey==="PD"){
					var fname=this.byId("fname").getValue();
					var lname=this.byId("lname").getValue();
					var gender=this.byId("Rb").getSelectedIndex();
					var dob=this.byId("dob").getValue();
					var status= this.byId("MarSt").getSelectedKey();
					var mail=this.byId("mail").getValue();
					var mob=this.byId("mob").getValue();
					
					if(fname==="" || lname==="" || gender===-1 || dob==="" || status==="" || mail==="" || mob === ""){
						sap.m.MessageToast.show("Enter all values");
					this.byId("PD").setIconColor(sap.ui.core.IconColor.Negative);
					}else{
							this.byId("PD").setIconColor("Positive");
							sap.m.MessageToast.show("Personal Details saved");
							this.byId("Edu").setEnabled(true);
							this.byId("Edu").setIconColor(sap.ui.core.IconColor.Critical);
							this.byId("iconTabId").setSelectedKey("Edu");
							this.byId("progInd").setPercentValue(25);  
							this.byId("progInd").setDisplayValue("25%");  
							//this.byId("pdForm").setVisible(false);
							//this.byId("eduForm").setVisible(true);
							
					}
				}
				if(iconTabKey==="Edu"){
					var qua= this.byId("qua").getSelectedKey();
					var sp= this.byId("sp").getSelectedKey();
					var passyr=this.byId("passyr").getValue();
					var edutyp= this.byId("edutyp").getSelectedKey();
					var clg=this.byId("clg").getValue();
					var uni=this.byId("uni").getValue();
					if(qua==="" || sp==="" || passyr===-1 || edutyp==="" || clg==="" || uni===""){
						sap.m.MessageToast.show("Enter all values");
						this.byId("Edu").setIconColor(sap.ui.core.IconColor.Negative);
					}else{
							this.byId("Edu").setIconColor("Positive");
							sap.m.MessageToast.show("Educational Details saved");
							this.byId("WE").setEnabled(true);
							this.byId("WE").setIconColor(sap.ui.core.IconColor.Critical);
							this.byId("iconTabId").setSelectedKey("WE");
							this.byId("progInd").setPercentValue(50);  
							this.byId("progInd").setDisplayValue("50%");
					}
				}
				if(iconTabKey==="WE"){
					var weSelect= this.byId("weSelect").getSelectedKey();
					var empdt=this.byId("empdt").getValue();
					var cname= this.byId("cname").getValue();
					var cadd=this.byId("cadd").getValue();
					var cpin=this.byId("cpin").getValue();
					var cadd=this.byId("cadd").getValue();
					var desig= this.byId("desig").getValue();
					var empCode= this.byId("empCode").getValue();
					var Empnature= this.byId("Empnature").getSelectedKey();
					if(weSelect==="" || empdt==="" || cname==="" || cadd==="" || cpin==="" || desig==="" || empCode==="" || Empnature===""){
						sap.m.MessageToast.show("Enter all values");
						this.byId("WE").setIconColor(sap.ui.core.IconColor.Negative);
					}else{
							this.byId("WE").setIconColor("Positive");
							sap.m.MessageToast.show("Company Details saved");
							this.byId("Add").setEnabled(true);
							this.byId("Add").setIconColor(sap.ui.core.IconColor.Critical);
							this.byId("iconTabId").setSelectedKey("Add");
							this.byId("progInd").setPercentValue(75);  
							this.byId("progInd").setDisplayValue("75%");
							this.byId("nextbtn").setText("Finish");
					}
				}if(iconTabKey==="Add"){
					//var weSelect= this.byId("weSelect").getSelectedKey();
					var house=this.byId("house").getValue();
					var street= this.byId("street").getValue();
					var land=this.byId("land").getValue();
					var locality=this.byId("locality").getValue();
					var city=this.byId("city").getValue();
					var dist= this.byId("dist").getValue();
					var pin= this.byId("pin").getValue();
					var state= this.byId("state").getValue();
					if(house==="" || street==="" || land==="" || locality==="" || city==="" || dist==="" || pin==="" || state===""){
						sap.m.MessageToast.show("Enter all values");
						this.byId("Add").setIconColor(sap.ui.core.IconColor.Negative);
					}else{
							this.byId("Add").setIconColor("Positive");
							MessageBox.success("All Employee Details saved");
							this.byId("progInd").setPercentValue(100);  
							this.byId("progInd").setDisplayValue("100%");
							this.byId("nextbtn").setText("Finish");
					}
				}
			},
	});
});