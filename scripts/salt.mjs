#!/usr/bin/env node
import { ethers } from "ethers";
console.log('Generating Salt for deployment')
ethers.utils.id(Date.now().toString());
console.log('id:' + ethers.utils.id(Date.now().toString()));