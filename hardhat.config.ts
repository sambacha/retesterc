/**
 * @package solidity-hardhat-template
 * @file hardhat configuration
 * @version 1.1.0
 * @type import('hardhat/config').HardhatUserConfig
 */
import { ethers } from "ethers";
import 'xdeployer';
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
//import 'dotenv/config';
import dotenv from 'dotenv'

import { HardhatUserConfig } from 'hardhat/types';

dotenv.config()


const test_mnemonic =
  'test test test test test test test test test test test junk';

const config: HardhatUserConfig = {
  /**
   * @note
   * Before version 0.8.6 omitting the 'enabled' key was not equivalent to setting
   * it to false and would actually disable all the optimizations.
   * @see: {@link https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description}
   *
   */
  solidity: {
    version: '0.8.10',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      optimizer: {
        enabled: true,
        runs: 1_000,
        details: {
          yul: false,
        },
      },
      outputSelection: {
        '*': {
          '*': [
            'abi',
            'evm.bytecode',
            'evm.deployedBytecode',
            'evm.methodIdentifiers',
            'metadata',
          ],
          '': ['ast'],
        },
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/cFP5cs1HrnoWVda-8qLPi8HBOpLuxDG7',
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY
    }
  },
  xdeploy: {
    contract: 'DSAllowances',
    //    constructorArgsPath: "PATH_TO_CONSTRUCTOR_ARGS", // optional
    salt: '420691337',
    signer: process.env.PRIVATE_KEY,
    networks: ['goerli'],
    rpcUrls: ["https://eth-goerli.alchemyapi.io/v2/cFP5cs1HrnoWVda-8qLPi8HBOpLuxDG7"],
    gasLimit: 1.2 * 10 ** 6,
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  typechain: {
    outDir: 'types/',
    target: 'ethers-v5',
  },
};

// @note Compiler output configuration for verifying on Sourceify
export const defaultSolcOutputSelection = {
  '*': {
    '*': [
      'abi',
      'evm.bytecode',
      'evm.deployedBytecode',
      'evm.methodIdentifiers',
      'metadata',
    ],
    '': ['ast'],
  },
};

export default config;
