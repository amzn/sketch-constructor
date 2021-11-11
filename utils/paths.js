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

const fs = require('fs');
const exitHook = require('async-exit-hook');

/**
 * Path to the temporary sketch constructor folder
 */
const STORAGE_DIR = process.env.STORAGE_DIR || '.sketch-constructor';

exitHook(() => {
  if (fs.existsSync(STORAGE_DIR) && fs.readdirSync(STORAGE_DIR).length > 0) {
    fs.rmdirSync(STORAGE_DIR, { recursive: true, force: true });
  }
});

/**
 * Path to the temporary local image folder
 */
const STORAGE_IMG_DIR = `${STORAGE_DIR}/images`;

/**
 * Path to directory with preview file
 */
const STORAGE_PREVIEW_DIR = `${STORAGE_DIR}/previews`;

/**
 * Path to preview file
 */
const STORAGE_PREVIEW_FILE = `${STORAGE_PREVIEW_DIR}/preview.png`;

module.exports = {
  STORAGE_DIR,
  STORAGE_IMG_DIR,
  STORAGE_PREVIEW_DIR,
  STORAGE_PREVIEW_FILE,
};
