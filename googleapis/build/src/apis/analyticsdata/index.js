"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsdata_v1beta = exports.analyticsdata_v1alpha = exports.auth = exports.analyticsdata = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1alpha_1 = require("./v1alpha");
Object.defineProperty(exports, "analyticsdata_v1alpha", { enumerable: true, get: function () { return v1alpha_1.analyticsdata_v1alpha; } });
const v1beta_1 = require("./v1beta");
Object.defineProperty(exports, "analyticsdata_v1beta", { enumerable: true, get: function () { return v1beta_1.analyticsdata_v1beta; } });
exports.VERSIONS = {
    v1alpha: v1alpha_1.analyticsdata_v1alpha.Analyticsdata,
    v1beta: v1beta_1.analyticsdata_v1beta.Analyticsdata,
};
function analyticsdata(versionOrOptions) {
    return googleapis_common_1.getAPI('analyticsdata', versionOrOptions, exports.VERSIONS, this);
}
exports.analyticsdata = analyticsdata;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
