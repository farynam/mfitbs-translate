#!/bin/bash

rootModuleDir=$(npm root)
node ${rootModuleDir}/mfitbs-translate/src/main/index.mjs "$@"
