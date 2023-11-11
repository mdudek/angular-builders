"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeBrowserBasedBuilder = void 0;
const architect_1 = require("@angular-devkit/architect");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const transform_factories_1 = require("./transform-factories");
const executeBrowserBasedBuilder = (executebBuilder) => (options, context) => {
    function setup() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const browserTarget = (0, architect_1.targetFromTargetString)(
            // `browserTarget` has been deprecated.
            (_a = options.buildTarget) !== null && _a !== void 0 ? _a : options.browserTarget);
            return context.getTargetOptions(browserTarget);
        });
    }
    return (0, rxjs_1.from)(setup()).pipe((0, operators_1.switchMap)(customWebpackOptions => executebBuilder(options, context, (0, transform_factories_1.getTransforms)(customWebpackOptions, context))));
};
exports.executeBrowserBasedBuilder = executeBrowserBasedBuilder;
//# sourceMappingURL=generic-browser-builder.js.map