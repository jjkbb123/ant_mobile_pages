(self["webpackChunkant_mobile_pages"] = self["webpackChunkant_mobile_pages"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

System.register("Nav", ["react", "./index.less"], function (exports_1, context_1) {
  "use strict";

  var react_1, Nav;

  var __moduleName = context_1 && context_1.id;

  return {
    setters: [function (react_1_1) {
      react_1 = react_1_1;
    }, function (_1) {}],
    execute: function execute() {
      Nav = function Nav() {
        return react_1["default"].createElement("div", {
          className: 'nav'
        }, "Nav");
      };

      exports_1("default", Nav);
    }
  };
});
System.register("Exam", ["react", "antd-mobile"], function (exports_2, context_2) {
  "use strict";

  var react_2, antd_mobile_1, FormItem, Exam;

  var __moduleName = context_2 && context_2.id;

  return {
    setters: [function (react_2_1) {
      react_2 = react_2_1;
    }, function (antd_mobile_1_1) {
      antd_mobile_1 = antd_mobile_1_1;
    }],
    execute: function execute() {
      FormItem = antd_mobile_1.Form.Item;

      Exam = function Exam() {
        return react_2["default"].createElement(antd_mobile_1.Form, null, react_2["default"].createElement(FormItem, {
          label: "\u554A\u4EC0\u4E48\u7684\u628A\u9152\u5E97\u5C31\u5361\u6CB3\u4E0A\u7684\u770B\u54C8\u8003\u8BD5\u7684\u8003\u751F"
        }));
      };

      exports_2("default", Exam);
    }
  };
});
System.register("App", ["react", "Nav", "Exam", "./index.less"], function (exports_3, context_3) {
  "use strict";

  var react_3, Nav_1, Exam_1;

  var __moduleName = context_3 && context_3.id;

  return {
    setters: [function (react_3_1) {
      react_3 = react_3_1;
    }, function (Nav_1_1) {
      Nav_1 = Nav_1_1;
    }, function (Exam_1_1) {
      Exam_1 = Exam_1_1;
    }, function (_2) {}],
    execute: function execute() {
      exports_3("default", function () {
        return react_3["default"].createElement("div", null, react_3["default"].createElement(Nav_1["default"], null), react_3["default"].createElement(Exam_1["default"], null));
      });
    }
  };
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=app.js.map