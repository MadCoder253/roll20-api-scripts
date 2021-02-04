"use strict";

// prep GurpsSheet Scripts after campaign loads.
on("ready", () => {
  GurpsSheet.init();
});

// create the namespace
var GurpsSheet = GurpsSheet || {};

// create the initialization class
GurpsSheet.init = function () {
  log("Initialize GURPS Sheet");
  on("chat:message", GurpsSheet.handleSkillRollQuery);
};

/**
 * If message is skill roll, process results.
 * For data structure see: SampleData/SkillRollQuery.json
 * 
 * @param {*} msg Message object passed by chat 
 */
GurpsSheet.handleSkillRollQuery = function (msg) {
  
  if (msg.rolltemplate !== "skillRoll") {
    log("leaving!");
    return;
  }

  log("process the roll query!");
  
};
