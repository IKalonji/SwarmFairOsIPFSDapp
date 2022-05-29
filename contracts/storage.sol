// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract MyStorageFileSystem
{
    uint fileNumber;

    struct file
    {
        string filename;
        string dateUploaded;
        string fileType;
        string storageUrl;
    }

    address _owner;

    mapping(uint => file) files;

    constructor() 
    {
        _owner = msg.sender;
    }

    function uploadFile(string calldata _filename, string calldata _dateUpload, string calldata _fileType, string calldata _storageUrl) external returns(uint)
    {
        require(msg.sender == _owner, "Only the contract owner can upload to smart contract");
        file memory newFile = file(_filename, _dateUpload, _fileType, _storageUrl);
        fileNumber += 1;
        files[fileNumber] = newFile;
        return fileNumber;
    }

    function getFile(uint _fileNumber) public view returns(string memory)
    {
        require(msg.sender == _owner, "Only the contract owner can obtain file from smart contract");
        return files[_fileNumber].storageUrl;
    }
}



