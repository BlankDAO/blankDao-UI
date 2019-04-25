abiSell = [{
    "inputs": [],
    "constant": true,
    "name": "MINIMUM_PAYMENT",
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "stateMutability": "view",
    "payable": false,
    "type": "function"
}, {
    "inputs": [],
    "constant": false,
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "type": "function"
}, {
    "inputs": [],
    "constant": true,
    "name": "owner",
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "stateMutability": "view",
    "payable": false,
    "type": "function"
}, {
    "inputs": [],
    "constant": true,
    "name": "price",
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "stateMutability": "view",
    "payable": false,
    "type": "function"
}, {
    "inputs": [],
    "constant": true,
    "name": "MAXIMUM_PAYMENT",
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "stateMutability": "view",
    "payable": false,
    "type": "function"
}, {
    "inputs": [],
    "constant": true,
    "name": "BLANK_TOKEN_PARTS",
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "stateMutability": "view",
    "payable": false,
    "type": "function"
}, {
    "inputs": [{
        "type": "address",
        "name": "_newOwner"
    }],
    "constant": false,
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "type": "function"
}, {
    "stateMutability": "nonpayable",
    "inputs": [{
        "type": "address",
        "name": "blankTokenaddr"
    }, {
        "type": "address",
        "name": "stableTokenAddr"
    }, {
        "type": "address",
        "name": "financeAddr"
    }],
    "type": "constructor",
    "payable": false
}, {
    "inputs": [{
        "indexed": false,
        "type": "uint256",
        "name": "amount"
    }, {
        "indexed": false,
        "type": "uint256",
        "name": "price"
    }, {
        "indexed": false,
        "type": "address",
        "name": "seller"
    }],
    "type": "event",
    "name": "Sell",
    "anonymous": false
}, {
    "inputs": [{
        "indexed": true,
        "type": "address",
        "name": "previousOwner"
    }],
    "type": "event",
    "name": "OwnershipRenounced",
    "anonymous": false
}, {
    "inputs": [{
        "indexed": true,
        "type": "address",
        "name": "previousOwner"
    }, {
        "indexed": true,
        "type": "address",
        "name": "newOwner"
    }],
    "type": "event",
    "name": "OwnershipTransferred",
    "anonymous": false
}, {
    "inputs": [{
        "type": "address",
        "name": "financeAddr"
    }],
    "constant": false,
    "name": "setFinance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "type": "function"
}, {
    "inputs": [{
        "type": "address",
        "name": "stableTokenAddr"
    }],
    "constant": false,
    "name": "setStableToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "type": "function"
}, {
    "inputs": [{
        "type": "uint256",
        "name": "_price"
    }],
    "constant": false,
    "name": "setPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "type": "function"
}, {
    "inputs": [],
    "constant": false,
    "name": "sell",
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "type": "function"
}];