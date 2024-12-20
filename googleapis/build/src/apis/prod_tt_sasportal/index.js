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
exports.prod_tt_sasportal_v1alpha1 = exports.auth = exports.prod_tt_sasportal = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1alpha1_1 = require("./v1alpha1");
Object.defineProperty(exports, "prod_tt_sasportal_v1alpha1", { enumerable: true, get: function () { return v1alpha1_1.prod_tt_sasportal_v1alpha1; } });
exports.VERSIONS = {
    v1alpha1: v1alpha1_1.prod_tt_sasportal_v1alpha1.Prod_tt_sasportal,
};
function prod_tt_sasportal(versionOrOptions) {
    return googleapis_common_1.getAPI('prod_tt_sasportal', versionOrOptions, exports.VERSIONS, this);
}
exports.prod_tt_sasportal = prod_tt_sasportal;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
