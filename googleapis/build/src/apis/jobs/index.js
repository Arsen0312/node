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
exports.jobs_v4 = exports.jobs_v3p1beta1 = exports.jobs_v3 = exports.jobs_v2 = exports.auth = exports.jobs = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v2_1 = require("./v2");
Object.defineProperty(exports, "jobs_v2", { enumerable: true, get: function () { return v2_1.jobs_v2; } });
const v3_1 = require("./v3");
Object.defineProperty(exports, "jobs_v3", { enumerable: true, get: function () { return v3_1.jobs_v3; } });
const v3p1beta1_1 = require("./v3p1beta1");
Object.defineProperty(exports, "jobs_v3p1beta1", { enumerable: true, get: function () { return v3p1beta1_1.jobs_v3p1beta1; } });
const v4_1 = require("./v4");
Object.defineProperty(exports, "jobs_v4", { enumerable: true, get: function () { return v4_1.jobs_v4; } });
exports.VERSIONS = {
    v2: v2_1.jobs_v2.Jobs,
    v3: v3_1.jobs_v3.Jobs,
    v3p1beta1: v3p1beta1_1.jobs_v3p1beta1.Jobs,
    v4: v4_1.jobs_v4.Jobs,
};
function jobs(versionOrOptions) {
    return googleapis_common_1.getAPI('jobs', versionOrOptions, exports.VERSIONS, this);
}
exports.jobs = jobs;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
