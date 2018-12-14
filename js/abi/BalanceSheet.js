var balanceSheet = {
  "contractName": "BalanceSheet",
  "abi": [
    {
      "inputs": [
        {
          "name": "_dao",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_asset",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetAssets",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_liabilities",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetLiabilities",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_equity",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetEquity",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setAssets",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_liabilities",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setLiabilities",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_equity",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setEquity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMarginOfSafety",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAcidTestResult",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        }
      ],
      "name": "getAsset",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_liability",
          "type": "string"
        }
      ],
      "name": "getLiability",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_equity",
          "type": "string"
        }
      ],
      "name": "getEquity",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405262271c80600055624e3900600155627555806002556301d5560060035534801561002d57600080fd5b50604051602080610b308339810180604052810190808051906020019092919050505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260048190555050610a88806100a86000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ce9334b1461009357806331496821146101105780635a9b66d71461018d57806367fc01fa1461020057806391017d421461022b578063aa389c7e1461029e578063cd5286d014610311578063ee7e66661461038e575b600080fd5b34801561009f57600080fd5b506100fa600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103b9565b6040518082815260200191505060405180910390f35b34801561011c57600080fd5b50610177600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061042e565b6040518082815260200191505060405180910390f35b34801561019957600080fd5b506101fe600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506104a3565b005b34801561020c57600080fd5b50610215610661565b6040518082815260200191505060405180910390f35b34801561023757600080fd5b5061029c600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610666565b005b3480156102aa57600080fd5b5061030f600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610824565b005b34801561031d57600080fd5b50610378600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506109e2565b6040518082815260200191505060405180910390f35b34801561039a57600080fd5b506103a3610a57565b6040518082815260200191505060405180910390f35b60006007826040518082805190602001908083835b6020831015156103f357805182526020820191506020810190506020830392506103ce565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b60006008826040518082805190602001908083835b6020831015156104685780518252602082019150602081019050602083039250610443565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104ff57600080fd5b6000603c6018603c80600454420381151561051657fe5b0481151561052057fe5b0481151561052a57fe5b0481151561053457fe5b049050600254811115151561054857600080fd5b816006846040518082805190602001908083835b602083101515610581578051825260208201915060208101905060208303925061055c565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507f710243991929910d356d0abcb8194c0a8fc7b9f81e9fd02d4164d009a091d77b83836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610621578082015181840152602081019050610606565b50505050905090810190601f16801561064e5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c257600080fd5b6000603c6018603c8060045442038115156106d957fe5b048115156106e357fe5b048115156106ed57fe5b048115156106f757fe5b049050600254811115151561070b57600080fd5b816006846040518082805190602001908083835b602083101515610744578051825260208201915060208101905060208303925061071f565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fa78c87c3a8b077758fcb9720389b4895816e3e3ad54d1c0577c40e753518e0d283836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156107e45780820151818401526020810190506107c9565b50505050905090810190601f1680156108115780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561088057600080fd5b6000603c6018603c80600454420381151561089757fe5b048115156108a157fe5b048115156108ab57fe5b048115156108b557fe5b04905060025481111515156108c957600080fd5b816006846040518082805190602001908083835b60208310151561090257805182526020820191506020810190506020830392506108dd565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fca60e43b2b8ded54860fefe655159e0c656dc9076b570ec28d18092ec4453b9483836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156109a2578082015181840152602081019050610987565b50505050905090810190601f1680156109cf5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b60006006826040518082805190602001908083835b602083101515610a1c57805182526020820191506020810190506020830392506109f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b6000905600a165627a7a72305820b711737b905ef5dfa9aa729d1782edab39a899dd59dc9d9daaa1f562f8f47f990029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ce9334b1461009357806331496821146101105780635a9b66d71461018d57806367fc01fa1461020057806391017d421461022b578063aa389c7e1461029e578063cd5286d014610311578063ee7e66661461038e575b600080fd5b34801561009f57600080fd5b506100fa600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103b9565b6040518082815260200191505060405180910390f35b34801561011c57600080fd5b50610177600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061042e565b6040518082815260200191505060405180910390f35b34801561019957600080fd5b506101fe600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506104a3565b005b34801561020c57600080fd5b50610215610661565b6040518082815260200191505060405180910390f35b34801561023757600080fd5b5061029c600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610666565b005b3480156102aa57600080fd5b5061030f600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610824565b005b34801561031d57600080fd5b50610378600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506109e2565b6040518082815260200191505060405180910390f35b34801561039a57600080fd5b506103a3610a57565b6040518082815260200191505060405180910390f35b60006007826040518082805190602001908083835b6020831015156103f357805182526020820191506020810190506020830392506103ce565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b60006008826040518082805190602001908083835b6020831015156104685780518252602082019150602081019050602083039250610443565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104ff57600080fd5b6000603c6018603c80600454420381151561051657fe5b0481151561052057fe5b0481151561052a57fe5b0481151561053457fe5b049050600254811115151561054857600080fd5b816006846040518082805190602001908083835b602083101515610581578051825260208201915060208101905060208303925061055c565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507f710243991929910d356d0abcb8194c0a8fc7b9f81e9fd02d4164d009a091d77b83836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610621578082015181840152602081019050610606565b50505050905090810190601f16801561064e5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c257600080fd5b6000603c6018603c8060045442038115156106d957fe5b048115156106e357fe5b048115156106ed57fe5b048115156106f757fe5b049050600254811115151561070b57600080fd5b816006846040518082805190602001908083835b602083101515610744578051825260208201915060208101905060208303925061071f565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fa78c87c3a8b077758fcb9720389b4895816e3e3ad54d1c0577c40e753518e0d283836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156107e45780820151818401526020810190506107c9565b50505050905090810190601f1680156108115780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561088057600080fd5b6000603c6018603c80600454420381151561089757fe5b048115156108a157fe5b048115156108ab57fe5b048115156108b557fe5b04905060025481111515156108c957600080fd5b816006846040518082805190602001908083835b60208310151561090257805182526020820191506020810190506020830392506108dd565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055507fca60e43b2b8ded54860fefe655159e0c656dc9076b570ec28d18092ec4453b9483836040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156109a2578082015181840152602081019050610987565b50505050905090810190601f1680156109cf5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050565b60006006826040518082805190602001908083835b602083101515610a1c57805182526020820191506020810190506020830392506109f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b6000905600a165627a7a72305820b711737b905ef5dfa9aa729d1782edab39a899dd59dc9d9daaa1f562f8f47f990029",
  "sourceMap": "75:2393:30:-;;;150:9;134:25;;183:10;163:30;;215:10;197:28;;244:10;229:25;;1308:71;8:9:-1;5:2;;;30:1;27;20:12;5:2;1308:71:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1347:4;1341:3;;:10;;;;;;;;;;;;;;;;;;1370:3;1358:9;:15;;;;1308:71;75:2393;;;;;;",
  "deployedSourceMap": "75:2393:30:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2233:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2233:121:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2358:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2358:107:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1383:155;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1383:155:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1904:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1904:66:30;;;;;;;;;;;;;;;;;;;;;;;1729:158;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1729:158:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1542:183;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1542:183:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2125:104;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2125:104:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1974:147;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1974:147:30;;;;;;;;;;;;;;;;;;;;;;;2233:121;2295:6;2317:19;2337:10;2317:31;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2317:31:30;;;;;;;;;;;;;;;;;;;;;;2310:38;;2233:121;;;:::o;2358:107::-;2414:6;2436:14;2451:7;2436:23;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2436:23:30;;;;;;;;;;;;;;;;;;;;;;2429:30;;2358:107;;;:::o;1383:155::-;1159:3;;;;;;;;;;;1145:17;;:10;:17;;;1137:26;;;;;;;;1206:11;1255:2;1250;1245;1240;1227:9;;1221:3;:15;1220:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;1206:51;;1282:7;;1272:6;:17;;1264:26;;;;;;;;1489:6;1464:14;1479:6;1464:22;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1464:22:30;;;;;;;;;;;;;;;;;;;;;:31;;;;1507:25;1517:6;1525;1507:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1507:25:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1169:1;1383:155;;:::o;1904:66::-;1954:6;1904:66;:::o;1729:158::-;1159:3;;;;;;;;;;;1145:17;;:10;:17;;;1137:26;;;;;;;;1206:11;1255:2;1250;1245;1240;1227:9;;1221:3;:15;1220:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;1206:51;;1282:7;;1272:6;:17;;1264:26;;;;;;;;1837:6;1811:14;1826:7;1811:23;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1811:23:30;;;;;;;;;;;;;;;;;;;;;:32;;;;1855:26;1865:7;1874:6;1855:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1855:26:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1169:1;1729:158;;:::o;1542:183::-;1159:3;;;;;;;;;;;1145:17;;:10;:17;;;1137:26;;;;;;;;1206:11;1255:2;1250;1245;1240;1227:9;;1221:3;:15;1220:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;1206:51;;1282:7;;1272:6;:17;;1264:26;;;;;;;;1665:6;1634:14;1649:12;1634:28;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1634:28:30;;;;;;;;;;;;;;;;;;;;;:37;;;;1683:36;1698:12;1712:6;1683:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1683:36:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1169:1;1542:183;;:::o;2125:104::-;2179:6;2201:14;2216:6;2201:22;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2201:22:30;;;;;;;;;;;;;;;;;;;;;;2194:29;;2125:104;;;:::o;1974:147::-;2024:6;1974:147;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"contracts/interfaces/IBalanceSheet.sol\";\n\ncontract BalanceSheet is IBalanceSheet {\n\n  //Constants\n\n  uint256 month = 712 hours;\n  uint256 twoMonths = 1424 hours;\n  uint256 quarter = 2136 hours;\n  uint256 year = 8544 hours;\n\n/*\n  //Assets\n\n  int256 cash;\n\n  int256 marketableSecurities;\n\n  int256 accountsReceivable;\n\n  int256 inventory;\n\n  int256 prepaidExpenses;\n\n  int256 longTermExpenses;\n\n  int256 fixedAssets;\n\n  int256 intangibleAssets;\n\n  int256 shortTermInvestments;\n\n  int256 totalShortTermAssets;\n\n  int256 totalLongTermAssets;\n\n  int256 totalAssets;\n\n  //Liabilities\n\n  int256 currentPortionLongTermDebt;\n\n  int256 bankIndebtedness;\n\n  int256 interestPayable;\n\n  int256 wages;\n\n  int256 longTermDebt;\n\n  int256 totalLiabilities;\n\n  //Equity\n\n  uint256 retainedEarnings;\n\n  uint256 commonCoins;\n\n  uint256 treasuryStock;\n\n  uint256 commonEquity;\n\n  uint256 bookValue;\n\n*/\n\n  //Misscellanous\n\n  uint256 startTime;\n\n  address dao;\n\n  mapping(string => int256) detailedAssets;\n  mapping(string => int256) detailedLiabilities;\n  mapping(string => int256) detailedEquity;\n\n  modifier onlyDAO {\n\n    require(msg.sender == dao);\n    _;\n\n  }\n\n  modifier inQuarter {\n\n    uint _hours = (now - startTime) / 60 / 60 / 24 / 60;\n\n    require(_hours <= quarter);\n\n    _;\n\n  }\n\n  constructor(address _dao) {\n\n    dao = _dao;\n\n    startTime = now;\n\n  }\n\n  function setAssets(string _asset, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_asset] = amount;\n\n    emit SetAssets(_asset, amount);\n\n  }\n\n  function setLiabilities(string _liabilities, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_liabilities] = amount;\n\n    emit SetLiabilities(_liabilities, amount);\n\n  }\n\n  function setEquity(string _equity, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_equity] = amount;\n\n    emit SetEquity(_equity, amount);\n\n  }\n\n  //GETTERS\n\n  function getMarginOfSafety() public view returns (int256) {\n\n\n\n  }\n\n  function getAcidTestResult() public view returns (int256) {\n\n    //(cash + accounts receivable + short term investments) / current liabilities\n\n  }\n\n  function getAsset(string _asset) public view returns (int256) {\n\n    return detailedAssets[_asset];\n\n  }\n\n  function getLiability(string _liability) public view returns (int256) {\n\n    return detailedLiabilities[_liability];\n\n  }\n\n  function getEquity(string _equity) public view returns (int256) {\n\n    return detailedEquity[_equity];\n\n  }\n\n}\n",
  "sourcePath": "contracts/accounting/statements/BalanceSheet.sol",
  "ast": {
    "absolutePath": "contracts/accounting/statements/BalanceSheet.sol",
    "exportedSymbols": {
      "BalanceSheet": [
        9511
      ]
    },
    "id": 9512,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9312,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:30"
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 9313,
        "nodeType": "ImportDirective",
        "scope": 9512,
        "sourceUnit": 11763,
        "src": "25:48:30",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9314,
              "name": "IBalanceSheet",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 11762,
              "src": "100:13:30",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBalanceSheet_$11762",
                "typeString": "contract IBalanceSheet"
              }
            },
            "id": 9315,
            "nodeType": "InheritanceSpecifier",
            "src": "100:13:30"
          }
        ],
        "contractDependencies": [
          11762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9511,
        "linearizedBaseContracts": [
          9511,
          11762
        ],
        "name": "BalanceSheet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9318,
            "name": "month",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "134:25:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9316,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "134:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "373132",
              "id": 9317,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "150:9:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2563200_by_1",
                "typeString": "int_const 2563200"
              },
              "value": "712"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9321,
            "name": "twoMonths",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "163:30:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9319,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "163:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31343234",
              "id": 9320,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "183:10:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5126400_by_1",
                "typeString": "int_const 5126400"
              },
              "value": "1424"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9324,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "197:28:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9322,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "197:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 9323,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "215:10:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7689600_by_1",
                "typeString": "int_const 7689600"
              },
              "value": "2136"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9327,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "229:25:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9325,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "229:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 9326,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "244:10:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_30758400_by_1",
                "typeString": "int_const 30758400"
              },
              "value": "8544"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9329,
            "name": "startTime",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "937:17:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9328,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "937:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9331,
            "name": "dao",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "959:11:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9330,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "959:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9335,
            "name": "detailedAssets",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "975:40:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 9334,
              "keyType": {
                "id": 9332,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "983:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "975:25:30",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 9333,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "993:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9339,
            "name": "detailedLiabilities",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "1019:45:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 9338,
              "keyType": {
                "id": 9336,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1027:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1019:25:30",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 9337,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1037:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9343,
            "name": "detailedEquity",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "1068:40:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 9342,
              "keyType": {
                "id": 9340,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1076:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1068:25:30",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 9341,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1086:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9353,
              "nodeType": "Block",
              "src": "1130:46:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9349,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9346,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14788,
                            "src": "1145:3:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1145:10:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9348,
                          "name": "dao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9331,
                          "src": "1159:3:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1145:17:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9345,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1137:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1137:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9351,
                  "nodeType": "ExpressionStatement",
                  "src": "1137:26:30"
                },
                {
                  "id": 9352,
                  "nodeType": "PlaceholderStatement",
                  "src": "1169:1:30"
                }
              ]
            },
            "documentation": null,
            "id": 9354,
            "name": "onlyDAO",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9344,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1130:0:30"
            },
            "src": "1113:63:30",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9378,
              "nodeType": "Block",
              "src": "1199:105:30",
              "statements": [
                {
                  "assignments": [
                    9357
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9357,
                      "name": "_hours",
                      "nodeType": "VariableDeclaration",
                      "scope": 9379,
                      "src": "1206:11:30",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9356,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1206:4:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9370,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 9360,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 9358,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14790,
                                  "src": "1221:3:30",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 9359,
                                  "name": "startTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9329,
                                  "src": "1227:9:30",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1221:15:30",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 9361,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1220:17:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 9362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1240:2:30",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "1220:22:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3630",
                          "id": 9364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1245:2:30",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_60_by_1",
                            "typeString": "int_const 60"
                          },
                          "value": "60"
                        },
                        "src": "1220:27:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3234",
                        "id": 9366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1250:2:30",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_24_by_1",
                          "typeString": "int_const 24"
                        },
                        "value": "24"
                      },
                      "src": "1220:32:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3630",
                      "id": 9368,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1255:2:30",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_60_by_1",
                        "typeString": "int_const 60"
                      },
                      "value": "60"
                    },
                    "src": "1220:37:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1206:51:30"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 9372,
                          "name": "_hours",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9357,
                          "src": "1272:6:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9373,
                          "name": "quarter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9324,
                          "src": "1282:7:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1272:17:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9371,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1264:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1264:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9376,
                  "nodeType": "ExpressionStatement",
                  "src": "1264:26:30"
                },
                {
                  "id": 9377,
                  "nodeType": "PlaceholderStatement",
                  "src": "1297:1:30"
                }
              ]
            },
            "documentation": null,
            "id": 9379,
            "name": "inQuarter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1199:0:30"
            },
            "src": "1180:124:30",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9392,
              "nodeType": "Block",
              "src": "1334:45:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9384,
                      "name": "dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9331,
                      "src": "1341:3:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9385,
                      "name": "_dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9381,
                      "src": "1347:4:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1341:10:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9387,
                  "nodeType": "ExpressionStatement",
                  "src": "1341:10:30"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9388,
                      "name": "startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9329,
                      "src": "1358:9:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9389,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14790,
                      "src": "1370:3:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1358:15:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9391,
                  "nodeType": "ExpressionStatement",
                  "src": "1358:15:30"
                }
              ]
            },
            "documentation": null,
            "id": 9393,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9381,
                  "name": "_dao",
                  "nodeType": "VariableDeclaration",
                  "scope": 9393,
                  "src": "1320:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9380,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1320:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1319:14:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9383,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1334:0:30"
            },
            "scope": 9511,
            "src": "1308:71:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9415,
              "nodeType": "Block",
              "src": "1457:81:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9404,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9335,
                        "src": "1464:14:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 9406,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9405,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9395,
                        "src": "1479:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1464:22:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9407,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9397,
                      "src": "1489:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1464:31:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9409,
                  "nodeType": "ExpressionStatement",
                  "src": "1464:31:30"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9411,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9395,
                        "src": "1517:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9412,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9397,
                        "src": "1525:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9410,
                      "name": "SetAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11697,
                      "src": "1507:9:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 9413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1507:25:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9414,
                  "nodeType": "EmitStatement",
                  "src": "1502:30:30"
                }
              ]
            },
            "documentation": null,
            "id": 9416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9400,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9399,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9354,
                  "src": "1439:7:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1439:7:30"
              },
              {
                "arguments": null,
                "id": 9402,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9401,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9379,
                  "src": "1447:9:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1447:9:30"
              }
            ],
            "name": "setAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9395,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 9416,
                  "src": "1402:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9394,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1402:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9397,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9416,
                  "src": "1417:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9396,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1417:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1401:30:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9403,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:30"
            },
            "scope": 9511,
            "src": "1383:155:30",
            "stateMutability": "nonpayable",
            "superFunction": 11716,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9438,
              "nodeType": "Block",
              "src": "1627:98:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9427,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9335,
                        "src": "1634:14:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 9429,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9428,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9418,
                        "src": "1649:12:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1634:28:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9430,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9420,
                      "src": "1665:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1634:37:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9432,
                  "nodeType": "ExpressionStatement",
                  "src": "1634:37:30"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9434,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9418,
                        "src": "1698:12:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9435,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9420,
                        "src": "1712:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9433,
                      "name": "SetLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11703,
                      "src": "1683:14:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 9436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1683:36:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9437,
                  "nodeType": "EmitStatement",
                  "src": "1678:41:30"
                }
              ]
            },
            "documentation": null,
            "id": 9439,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9423,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9422,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9354,
                  "src": "1609:7:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1609:7:30"
              },
              {
                "arguments": null,
                "id": 9425,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9424,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9379,
                  "src": "1617:9:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1617:9:30"
              }
            ],
            "name": "setLiabilities",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9418,
                  "name": "_liabilities",
                  "nodeType": "VariableDeclaration",
                  "scope": 9439,
                  "src": "1566:19:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9417,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9420,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9439,
                  "src": "1587:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9419,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1565:36:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9426,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1627:0:30"
            },
            "scope": 9511,
            "src": "1542:183:30",
            "stateMutability": "nonpayable",
            "superFunction": 11723,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9461,
              "nodeType": "Block",
              "src": "1804:83:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9450,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9335,
                        "src": "1811:14:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 9452,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9451,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9441,
                        "src": "1826:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1811:23:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9453,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "1837:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1811:32:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9455,
                  "nodeType": "ExpressionStatement",
                  "src": "1811:32:30"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9457,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9441,
                        "src": "1865:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9458,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9443,
                        "src": "1874:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9456,
                      "name": "SetEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11709,
                      "src": "1855:9:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 9459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1855:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9460,
                  "nodeType": "EmitStatement",
                  "src": "1850:31:30"
                }
              ]
            },
            "documentation": null,
            "id": 9462,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9446,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9445,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9354,
                  "src": "1786:7:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1786:7:30"
              },
              {
                "arguments": null,
                "id": 9448,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9447,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9379,
                  "src": "1794:9:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1794:9:30"
              }
            ],
            "name": "setEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9441,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 9462,
                  "src": "1748:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9440,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1748:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9443,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9462,
                  "src": "1764:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9442,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1764:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1747:31:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9449,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1804:0:30"
            },
            "scope": 9511,
            "src": "1729:158:30",
            "stateMutability": "nonpayable",
            "superFunction": 11730,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9467,
              "nodeType": "Block",
              "src": "1962:8:30",
              "statements": []
            },
            "documentation": null,
            "id": 9468,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarginOfSafety",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1930:2:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9465,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9468,
                  "src": "1954:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9464,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1954:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1953:8:30"
            },
            "scope": 9511,
            "src": "1904:66:30",
            "stateMutability": "view",
            "superFunction": 11735,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9473,
              "nodeType": "Block",
              "src": "2032:89:30",
              "statements": []
            },
            "documentation": null,
            "id": 9474,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAcidTestResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9469,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2000:2:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9471,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9474,
                  "src": "2024:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9470,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2024:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2023:8:30"
            },
            "scope": 9511,
            "src": "1974:147:30",
            "stateMutability": "view",
            "superFunction": 11740,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9485,
              "nodeType": "Block",
              "src": "2187:42:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9481,
                      "name": "detailedAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9335,
                      "src": "2201:14:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 9483,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9482,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9476,
                      "src": "2216:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2201:22:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 9480,
                  "id": 9484,
                  "nodeType": "Return",
                  "src": "2194:29:30"
                }
              ]
            },
            "documentation": null,
            "id": 9486,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9476,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 9486,
                  "src": "2143:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9475,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2142:15:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9479,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9486,
                  "src": "2179:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9478,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2179:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2178:8:30"
            },
            "scope": 9511,
            "src": "2125:104:30",
            "stateMutability": "view",
            "superFunction": 11747,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9497,
              "nodeType": "Block",
              "src": "2303:51:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9493,
                      "name": "detailedLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9339,
                      "src": "2317:19:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 9495,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9494,
                      "name": "_liability",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9488,
                      "src": "2337:10:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2317:31:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 9492,
                  "id": 9496,
                  "nodeType": "Return",
                  "src": "2310:38:30"
                }
              ]
            },
            "documentation": null,
            "id": 9498,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLiability",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9488,
                  "name": "_liability",
                  "nodeType": "VariableDeclaration",
                  "scope": 9498,
                  "src": "2255:17:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9487,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2255:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2254:19:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9491,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9498,
                  "src": "2295:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9490,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2295:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2294:8:30"
            },
            "scope": 9511,
            "src": "2233:121:30",
            "stateMutability": "view",
            "superFunction": 11754,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9509,
              "nodeType": "Block",
              "src": "2422:43:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9505,
                      "name": "detailedEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9343,
                      "src": "2436:14:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 9507,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9506,
                      "name": "_equity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9500,
                      "src": "2451:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2436:23:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 9504,
                  "id": 9508,
                  "nodeType": "Return",
                  "src": "2429:30:30"
                }
              ]
            },
            "documentation": null,
            "id": 9510,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9500,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 9510,
                  "src": "2377:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2376:16:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9503,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9510,
                  "src": "2414:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9502,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2414:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2413:8:30"
            },
            "scope": 9511,
            "src": "2358:107:30",
            "stateMutability": "view",
            "superFunction": 11761,
            "visibility": "public"
          }
        ],
        "scope": 9512,
        "src": "75:2393:30"
      }
    ],
    "src": "0:2469:30"
  },
  "legacyAST": {
    "absolutePath": "contracts/accounting/statements/BalanceSheet.sol",
    "exportedSymbols": {
      "BalanceSheet": [
        9511
      ]
    },
    "id": 9512,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9312,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:30"
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 9313,
        "nodeType": "ImportDirective",
        "scope": 9512,
        "sourceUnit": 11763,
        "src": "25:48:30",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9314,
              "name": "IBalanceSheet",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 11762,
              "src": "100:13:30",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBalanceSheet_$11762",
                "typeString": "contract IBalanceSheet"
              }
            },
            "id": 9315,
            "nodeType": "InheritanceSpecifier",
            "src": "100:13:30"
          }
        ],
        "contractDependencies": [
          11762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9511,
        "linearizedBaseContracts": [
          9511,
          11762
        ],
        "name": "BalanceSheet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9318,
            "name": "month",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "134:25:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9316,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "134:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "373132",
              "id": 9317,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "150:9:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2563200_by_1",
                "typeString": "int_const 2563200"
              },
              "value": "712"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9321,
            "name": "twoMonths",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "163:30:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9319,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "163:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31343234",
              "id": 9320,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "183:10:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5126400_by_1",
                "typeString": "int_const 5126400"
              },
              "value": "1424"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9324,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "197:28:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9322,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "197:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 9323,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "215:10:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7689600_by_1",
                "typeString": "int_const 7689600"
              },
              "value": "2136"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9327,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "229:25:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9325,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "229:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 9326,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "244:10:30",
              "subdenomination": "hours",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_30758400_by_1",
                "typeString": "int_const 30758400"
              },
              "value": "8544"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9329,
            "name": "startTime",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "937:17:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9328,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "937:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9331,
            "name": "dao",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "959:11:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9330,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "959:7:30",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9335,
            "name": "detailedAssets",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "975:40:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 9334,
              "keyType": {
                "id": 9332,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "983:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "975:25:30",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 9333,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "993:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9339,
            "name": "detailedLiabilities",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "1019:45:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 9338,
              "keyType": {
                "id": 9336,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1027:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1019:25:30",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 9337,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1037:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9343,
            "name": "detailedEquity",
            "nodeType": "VariableDeclaration",
            "scope": 9511,
            "src": "1068:40:30",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
              "typeString": "mapping(string => int256)"
            },
            "typeName": {
              "id": 9342,
              "keyType": {
                "id": 9340,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1076:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1068:25:30",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                "typeString": "mapping(string => int256)"
              },
              "valueType": {
                "id": 9341,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "1086:6:30",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9353,
              "nodeType": "Block",
              "src": "1130:46:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9349,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9346,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14788,
                            "src": "1145:3:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1145:10:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9348,
                          "name": "dao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9331,
                          "src": "1159:3:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1145:17:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9345,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1137:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1137:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9351,
                  "nodeType": "ExpressionStatement",
                  "src": "1137:26:30"
                },
                {
                  "id": 9352,
                  "nodeType": "PlaceholderStatement",
                  "src": "1169:1:30"
                }
              ]
            },
            "documentation": null,
            "id": 9354,
            "name": "onlyDAO",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9344,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1130:0:30"
            },
            "src": "1113:63:30",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9378,
              "nodeType": "Block",
              "src": "1199:105:30",
              "statements": [
                {
                  "assignments": [
                    9357
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9357,
                      "name": "_hours",
                      "nodeType": "VariableDeclaration",
                      "scope": 9379,
                      "src": "1206:11:30",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9356,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1206:4:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9370,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 9360,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 9358,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14790,
                                  "src": "1221:3:30",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 9359,
                                  "name": "startTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9329,
                                  "src": "1227:9:30",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1221:15:30",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 9361,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1220:17:30",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 9362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1240:2:30",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "1220:22:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3630",
                          "id": 9364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1245:2:30",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_60_by_1",
                            "typeString": "int_const 60"
                          },
                          "value": "60"
                        },
                        "src": "1220:27:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3234",
                        "id": 9366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1250:2:30",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_24_by_1",
                          "typeString": "int_const 24"
                        },
                        "value": "24"
                      },
                      "src": "1220:32:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3630",
                      "id": 9368,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1255:2:30",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_60_by_1",
                        "typeString": "int_const 60"
                      },
                      "value": "60"
                    },
                    "src": "1220:37:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1206:51:30"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 9372,
                          "name": "_hours",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9357,
                          "src": "1272:6:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9373,
                          "name": "quarter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9324,
                          "src": "1282:7:30",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1272:17:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9371,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        14791,
                        14792
                      ],
                      "referencedDeclaration": 14791,
                      "src": "1264:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1264:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9376,
                  "nodeType": "ExpressionStatement",
                  "src": "1264:26:30"
                },
                {
                  "id": 9377,
                  "nodeType": "PlaceholderStatement",
                  "src": "1297:1:30"
                }
              ]
            },
            "documentation": null,
            "id": 9379,
            "name": "inQuarter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1199:0:30"
            },
            "src": "1180:124:30",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9392,
              "nodeType": "Block",
              "src": "1334:45:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9384,
                      "name": "dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9331,
                      "src": "1341:3:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9385,
                      "name": "_dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9381,
                      "src": "1347:4:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1341:10:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9387,
                  "nodeType": "ExpressionStatement",
                  "src": "1341:10:30"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9388,
                      "name": "startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9329,
                      "src": "1358:9:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9389,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14790,
                      "src": "1370:3:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1358:15:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9391,
                  "nodeType": "ExpressionStatement",
                  "src": "1358:15:30"
                }
              ]
            },
            "documentation": null,
            "id": 9393,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9381,
                  "name": "_dao",
                  "nodeType": "VariableDeclaration",
                  "scope": 9393,
                  "src": "1320:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9380,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1320:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1319:14:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9383,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1334:0:30"
            },
            "scope": 9511,
            "src": "1308:71:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9415,
              "nodeType": "Block",
              "src": "1457:81:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9404,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9335,
                        "src": "1464:14:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 9406,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9405,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9395,
                        "src": "1479:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1464:22:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9407,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9397,
                      "src": "1489:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1464:31:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9409,
                  "nodeType": "ExpressionStatement",
                  "src": "1464:31:30"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9411,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9395,
                        "src": "1517:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9412,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9397,
                        "src": "1525:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9410,
                      "name": "SetAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11697,
                      "src": "1507:9:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 9413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1507:25:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9414,
                  "nodeType": "EmitStatement",
                  "src": "1502:30:30"
                }
              ]
            },
            "documentation": null,
            "id": 9416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9400,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9399,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9354,
                  "src": "1439:7:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1439:7:30"
              },
              {
                "arguments": null,
                "id": 9402,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9401,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9379,
                  "src": "1447:9:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1447:9:30"
              }
            ],
            "name": "setAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9395,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 9416,
                  "src": "1402:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9394,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1402:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9397,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9416,
                  "src": "1417:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9396,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1417:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1401:30:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9403,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:30"
            },
            "scope": 9511,
            "src": "1383:155:30",
            "stateMutability": "nonpayable",
            "superFunction": 11716,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9438,
              "nodeType": "Block",
              "src": "1627:98:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9427,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9335,
                        "src": "1634:14:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 9429,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9428,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9418,
                        "src": "1649:12:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1634:28:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9430,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9420,
                      "src": "1665:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1634:37:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9432,
                  "nodeType": "ExpressionStatement",
                  "src": "1634:37:30"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9434,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9418,
                        "src": "1698:12:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9435,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9420,
                        "src": "1712:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9433,
                      "name": "SetLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11703,
                      "src": "1683:14:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 9436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1683:36:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9437,
                  "nodeType": "EmitStatement",
                  "src": "1678:41:30"
                }
              ]
            },
            "documentation": null,
            "id": 9439,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9423,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9422,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9354,
                  "src": "1609:7:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1609:7:30"
              },
              {
                "arguments": null,
                "id": 9425,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9424,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9379,
                  "src": "1617:9:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1617:9:30"
              }
            ],
            "name": "setLiabilities",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9418,
                  "name": "_liabilities",
                  "nodeType": "VariableDeclaration",
                  "scope": 9439,
                  "src": "1566:19:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9417,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9420,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9439,
                  "src": "1587:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9419,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1565:36:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9426,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1627:0:30"
            },
            "scope": 9511,
            "src": "1542:183:30",
            "stateMutability": "nonpayable",
            "superFunction": 11723,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9461,
              "nodeType": "Block",
              "src": "1804:83:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9450,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9335,
                        "src": "1811:14:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                          "typeString": "mapping(string memory => int256)"
                        }
                      },
                      "id": 9452,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9451,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9441,
                        "src": "1826:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1811:23:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9453,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "1837:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1811:32:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9455,
                  "nodeType": "ExpressionStatement",
                  "src": "1811:32:30"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9457,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9441,
                        "src": "1865:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9458,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9443,
                        "src": "1874:6:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9456,
                      "name": "SetEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11709,
                      "src": "1855:9:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                        "typeString": "function (string memory,int256)"
                      }
                    },
                    "id": 9459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1855:26:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9460,
                  "nodeType": "EmitStatement",
                  "src": "1850:31:30"
                }
              ]
            },
            "documentation": null,
            "id": 9462,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9446,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9445,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9354,
                  "src": "1786:7:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1786:7:30"
              },
              {
                "arguments": null,
                "id": 9448,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9447,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9379,
                  "src": "1794:9:30",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1794:9:30"
              }
            ],
            "name": "setEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9441,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 9462,
                  "src": "1748:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9440,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1748:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9443,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9462,
                  "src": "1764:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9442,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1764:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1747:31:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9449,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1804:0:30"
            },
            "scope": 9511,
            "src": "1729:158:30",
            "stateMutability": "nonpayable",
            "superFunction": 11730,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9467,
              "nodeType": "Block",
              "src": "1962:8:30",
              "statements": []
            },
            "documentation": null,
            "id": 9468,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMarginOfSafety",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1930:2:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9465,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9468,
                  "src": "1954:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9464,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1954:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1953:8:30"
            },
            "scope": 9511,
            "src": "1904:66:30",
            "stateMutability": "view",
            "superFunction": 11735,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9473,
              "nodeType": "Block",
              "src": "2032:89:30",
              "statements": []
            },
            "documentation": null,
            "id": 9474,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAcidTestResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9469,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2000:2:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9471,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9474,
                  "src": "2024:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9470,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2024:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2023:8:30"
            },
            "scope": 9511,
            "src": "1974:147:30",
            "stateMutability": "view",
            "superFunction": 11740,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9485,
              "nodeType": "Block",
              "src": "2187:42:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9481,
                      "name": "detailedAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9335,
                      "src": "2201:14:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 9483,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9482,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9476,
                      "src": "2216:6:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2201:22:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 9480,
                  "id": 9484,
                  "nodeType": "Return",
                  "src": "2194:29:30"
                }
              ]
            },
            "documentation": null,
            "id": 9486,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9476,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 9486,
                  "src": "2143:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9475,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2142:15:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9479,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9486,
                  "src": "2179:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9478,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2179:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2178:8:30"
            },
            "scope": 9511,
            "src": "2125:104:30",
            "stateMutability": "view",
            "superFunction": 11747,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9497,
              "nodeType": "Block",
              "src": "2303:51:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9493,
                      "name": "detailedLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9339,
                      "src": "2317:19:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 9495,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9494,
                      "name": "_liability",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9488,
                      "src": "2337:10:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2317:31:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 9492,
                  "id": 9496,
                  "nodeType": "Return",
                  "src": "2310:38:30"
                }
              ]
            },
            "documentation": null,
            "id": 9498,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLiability",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9488,
                  "name": "_liability",
                  "nodeType": "VariableDeclaration",
                  "scope": 9498,
                  "src": "2255:17:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9487,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2255:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2254:19:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9491,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9498,
                  "src": "2295:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9490,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2295:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2294:8:30"
            },
            "scope": 9511,
            "src": "2233:121:30",
            "stateMutability": "view",
            "superFunction": 11754,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9509,
              "nodeType": "Block",
              "src": "2422:43:30",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9505,
                      "name": "detailedEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9343,
                      "src": "2436:14:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_int256_$",
                        "typeString": "mapping(string memory => int256)"
                      }
                    },
                    "id": 9507,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9506,
                      "name": "_equity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9500,
                      "src": "2451:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2436:23:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 9504,
                  "id": 9508,
                  "nodeType": "Return",
                  "src": "2429:30:30"
                }
              ]
            },
            "documentation": null,
            "id": 9510,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9500,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 9510,
                  "src": "2377:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2376:16:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 9504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9503,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9510,
                  "src": "2414:6:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9502,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2414:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2413:8:30"
            },
            "scope": 9511,
            "src": "2358:107:30",
            "stateMutability": "view",
            "superFunction": 11761,
            "visibility": "public"
          }
        ],
        "scope": 9512,
        "src": "75:2393:30"
      }
    ],
    "src": "0:2469:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-14T17:21:44.516Z"
}

module.exports = {

  balanceSheet

}