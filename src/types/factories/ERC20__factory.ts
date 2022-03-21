/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000dce38038062000dce83398101604081905262000034916200024b565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200030c565b8280546200007690620002db565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156200014c576200014c6200010e565b6040525050565b60006200015f60405190565b90506200016d828262000124565b919050565b60006001600160401b038211156200018e576200018e6200010e565b601f19601f83011660200192915050565b60005b83811015620001bc578181015183820152602001620001a2565b83811115620001cc576000848401525b50505050565b6000620001e9620001e38462000172565b62000153565b905082815260208101848484011115620002065762000206600080fd5b620002138482856200019f565b509392505050565b600082601f830112620002315762000231600080fd5b815162000243848260208601620001d2565b949350505050565b60008060408385031215620002635762000263600080fd5b82516001600160401b038111156200027e576200027e600080fd5b6200028c858286016200021b565b92505060208301516001600160401b03811115620002ad57620002ad600080fd5b620002bb858286016200021b565b9150509250929050565b634e487b7160e01b600052602260045260246000fd5b600281046001821680620002f057607f821691505b60208210811415620003065762000306620002c5565b50919050565b610ab2806200031c6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610183578063a9059cbb14610196578063dd62ed3e146101a957600080fd5b8063395093511461013f57806370a082311461015257806395d89b411461017b57600080fd5b806318160ddd116100b257806318160ddd1461010c57806323b872dd1461011d578063313ce5671461013057600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e2565b6040516100e391906105f2565b60405180910390f35b6100ff6100fa36600461064e565b610274565b6040516100e39190610695565b6002545b6040516100e391906106a9565b6100ff61012b3660046106b7565b61028e565b60126040516100e39190610710565b6100ff61014d36600461064e565b6102b2565b61011061016036600461071e565b6001600160a01b031660009081526020819052604090205490565b6100d66102f1565b6100ff61019136600461064e565b610300565b6100ff6101a436600461064e565b61035d565b6101106101b7366004610747565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f190610790565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90610790565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b5050505050905090565b60003361028281858561036b565b60019150505b92915050565b60003361029c85828561041f565b6102a7858585610481565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028290829086906102ec9087906107d3565b61036b565b6060600480546101f190610790565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103505760405162461bcd60e51b815260040161034790610848565b60405180910390fd5b6102a7828686840361036b565b600033610282818585610481565b6001600160a01b0383166103915760405162461bcd60e51b8152600401610347906108b2565b6001600160a01b0382166103b75760405162461bcd60e51b81526004016103479061091c565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104129085906106a9565b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461047b578181101561046e5760405162461bcd60e51b81526004016103479061092c565b61047b848484840361036b565b50505050565b6001600160a01b0383166104a75760405162461bcd60e51b8152600401610347906109c1565b6001600160a01b0382166104cd5760405162461bcd60e51b815260040161034790610a2b565b6001600160a01b038316600090815260208190526040902054818110156105065760405162461bcd60e51b815260040161034790610a95565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061053d9084906107d3565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161058791906106a9565b60405180910390a361047b565b60005b838110156105af578181015183820152602001610597565b8381111561047b5750506000910152565b60006105ca825190565b8084526020840193506105e1818560208601610594565b601f01601f19169290920192915050565b6020808252810161060381846105c0565b9392505050565b60006001600160a01b038216610288565b6106248161060a565b811461062f57600080fd5b50565b80356102888161061b565b80610624565b80356102888161063d565b6000806040838503121561066457610664600080fd5b60006106708585610632565b925050602061068185828601610643565b9150509250929050565b8015155b82525050565b60208101610288828461068b565b8061068f565b6020810161028882846106a3565b6000806000606084860312156106cf576106cf600080fd5b60006106db8686610632565b93505060206106ec86828701610632565b92505060406106fd86828701610643565b9150509250925092565b60ff811661068f565b602081016102888284610707565b60006020828403121561073357610733600080fd5b600061073f8484610632565b949350505050565b6000806040838503121561075d5761075d600080fd5b60006107698585610632565b925050602061068185828601610632565b634e487b7160e01b600052602260045260246000fd5b6002810460018216806107a457607f821691505b602082108114156107b7576107b761077a565b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156107e6576107e66107bd565b500190565b602581526000602082017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781527f207a65726f000000000000000000000000000000000000000000000000000000602082015291505b5060400190565b60208082528101610288816107eb565b602481526000602082017f45524332303a20617070726f76652066726f6d20746865207a65726f2061646481527f726573730000000000000000000000000000000000000000000000000000000060208201529150610841565b6020808252810161028881610858565b602281526000602082017f45524332303a20617070726f766520746f20746865207a65726f20616464726581527f737300000000000000000000000000000000000000000000000000000000000060208201529150610841565b60208082528101610288816108c2565b6020808252810161028881601d81527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000602082015260400190565b602581526000602082017f45524332303a207472616e736665722066726f6d20746865207a65726f20616481527f647265737300000000000000000000000000000000000000000000000000000060208201529150610841565b6020808252810161028881610967565b602381526000602082017f45524332303a207472616e7366657220746f20746865207a65726f206164647281527f657373000000000000000000000000000000000000000000000000000000000060208201529150610841565b60208082528101610288816109d1565b602681526000602082017f45524332303a207472616e7366657220616d6f756e742065786365656473206281527f616c616e6365000000000000000000000000000000000000000000000000000060208201529150610841565b6020808252810161028881610a3b56fea164736f6c634300080a000a";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly contractName: "ERC20";
  public readonly contractName: "ERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
