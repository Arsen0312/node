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
exports.analyticsreporting_v4 = exports.auth = exports.analyticsreporting = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v4_1 = require("./v4");
Object.defineProperty(exports, "analyticsreporting_v4", { enumerable: true, get: function () { return v4_1.analyticsreporting_v4; } });
exports.VERSIONS = {
    v4: v4_1.analyticsreporting_v4.Analyticsreporting,
};
function analyticsreporting(versionOrOptions) {
    return googleapis_common_1.getAPI('analyticsreporting', versionOrOptions, exports.VERSIONS, this);
}
exports.analyticsreporting = analyticsreporting;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
