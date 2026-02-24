var confirmTop1 = "None";
var confirmTop2 = "None";
var confirmTop3 = "None";
var ConfirmTop4 = "None";
var price = "";
onEvent("loginButton", "click", function( ) {
  getKeyValue(getText("usernamelnput"), function (value) {
    if (value == getText("passwordlnput")) {
      setProperty("loginButton", "background-color", "red");
      setTimeout(function() {
        setScreen("sizeScreen");
      }, 1000);
    } else {
      setText("usernamelnput", "");
      setText("passwordlnput", "");
      setProperty("loginButton", "text", "Try again");
      setTimeout(function() {
        setProperty("loginButton", "text", "Login");
      }, 1000);
    }
  });
});
onEvent("sizeDropdown", "change", function( ) {
  var size = getText("sizeDropdown");
  if (size == "Small") {
    setStyle("sizeimage","transform:scale(1)");
  } else if (size=="Medium") {
      setStyle("sizeimage","transform:scale(1.2)");
  } else if (size=="Large") {
    setStyle("sizeimage","transform:scale(1.4)");
  } else {
    setStyle("sizeimage","transform:scale(1.6)");
  }
});
onEvent("Sizebutton", "click", function( ) {
  setScreen("toppingscreen");
});
onEvent("toppingdrop1", "change", function( ) {
  topping1 = getText("toppingdrop1");
  if (topping1 == "choose a topping") {
    topping1 = "None";
    setProperty("tick1", "hidden", true);
  } else {
    setProperty("tick1", "hidden", false);
  }
});

onEvent("toppingdrop2", "change", function( ) {
  topping2 = getText("toppingdrop2");
  if (topping2 == "choose a topping") {
    topping2 = "None";
    setProperty("tick2", "hidden", true);
  } else {
    setProperty("tick2", "hidden", false);
  }
});
onEvent("toppingdrop3", "change", function( ) {
  topping3 = getText("toppingdrop3");
  if (topping3 == "choose a topping") {
    topping3 = "None";
    setProperty("tick3", "hidden", true);
  } else {
    setProperty("tick3", "hidden", false);
  }
});
onEvent("toppingdrop4", "change", function( ) {
  topping4 = getText("toppingdrop4");
  if (topping4 == "choose a topping") {
    topping4 = "None";
    setProperty("tick4", "hidden", true);
  } else {
    setProperty("tick4", "hidden", false);
  }
});
onEvent("Toppingbutton", "click", function( ) {
  setScreen("Confirmscreen");
  setText("confirmSize", getText("sizeDropdown"));
  setText("confirmTop1", topping1);
  setText("confirmTop2", topping2);
  setText("confirmTop3", topping3);
  setText("ConfirmTop4", topping4);
});
onEvent("confirmButtton", "click", function( ) {
  setScreen("orderscreen");
});
