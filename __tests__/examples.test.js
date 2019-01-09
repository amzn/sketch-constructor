/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

const {clearOutput} = require('./__helpers');
const path = require('path');
const fs = require('fs');
const childProcess = require("child_process");


describe('Examples', () => {
  beforeEach(() => {
    clearOutput();
  });

  fs.readdirSync(path.join(process.cwd(), "__examples__")).forEach(dir => {
    it(dir, () => {
      childProcess.execSync(`cd __examples__/${dir} && npm test`);
    });
  });

});