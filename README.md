## Warning

Mainly used for my company, but can be used for your Angular project if yours models, Dto's or Enum match
Check into folder "tests" https://github.com/SrenoG/dto-to-model what output you can expect.

## Features

Context menu is enable on .ts files, you can generate enum and all files from there

- 'CTRL + ALT + F1' : 'FROM STRING : Generate Enum'
    Need enum-dto.d.ts or enum-dto.ts extension file
    see notes below
    
- 'CTRL + ALT + F2' : 'FROM DTO : Generate model'
    from an opened dto file => generate model
    Need -dto.d.ts or -dto.ts extension file

- 'CTRL + ALT + F3' : 'FROM DTO : Generate specs'
    from an opened model file => generate spec
    Need -dto.d.ts or -dto.ts extension file

- 'CTRL + ALT + F4' : 'FROM DTO : Generate mocks'
    from an opened dto file => generate mock
    Need -dto.d.ts or -dto.ts extension file

- 'CTRL + ALT + F5' : 'FROM DTO : Create all files'
    from an opened dto file => generate model, spec and mock in a new folder in current folder
    If file is an enum => generate enum
    Need -dto.d.ts or -dto.ts extension file


## important
Except 'Generate Enum, these methods have to be used in api folder with all other dto files for getting and populate all properties of child dto.
But can be used localy without this feature.


## Notes for ENUM generator

You can now transform a list of string into Enum.

Also it give methods to convert TO and From EnumDto.

Create a new .ts file for your enum.

The firstLine must be the enum name and must be matching of your Dto Without "Dto" at the end.

Paste a list of words, one by line.

They can be ending by a ',' or be surrounding by quote or simple quote,

but they can be in lowerCamelCase or CamelCase.

Doublon are deleted in the process and the list is sorted.

You can also starting from enum Dto file:

exemple:
export enum TestEnumDto {
 Test1 = "test1",
 Test2 = "test2"
}
