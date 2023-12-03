# Change Log

All notable changes to the "fromstringenum" extension will be documented in this file.

## [1.0]

- Initial release

## [1.1.2]

- string to Enum work's

## [2.0.0]

- Add dto to model support

## [2.0.1]

- Ignore import

## [2.0.2]

- Array<> to []

## [2.0.3]

- return toDto()

## [2.0.4]

- fix ctor
- fix date to string

## [2.0.5]

- coalesce null for toDto() empty map

## [2.0.6]

- fix null property in second position => ' | null' instead of 'null | '

## [3.0.0]

- Add model to spec support

## [4.0.0]

- Add list and child dto support

## [4.0.1]

- fix child dto for nag

## [5.0.0]

- Generate mock from dto

## [6.0.0]

- Create model, spec and mock files

## [7.0.0]

- Create, fill and save model spec and mock files from DTO in a single command
- Add shortcut CTRL + F4 to this
- Rename all method like 'FROM $file : Generate $file'

## [7.0.0]

- Add shortcut for all method
       - 'CTRL + ALT + F1' : 'FROM STRING : Generate Enum'
       - 'CTRL + ALT + F2' : 'FROM DTO : Generate model'
       - 'CTRL + ALT + F3' : 'FROM MODEL : Generate spec'
       - 'CTRL + ALT + F4' : 'FROM DTO : Generate mock'
       - 'CTRL + ALT + F5' : 'FROM DTO : Create all files'

## [7.1.0]

- Move new files into generated-* folder
- Close new files open tab

## [7.1.0]

- bugix generation
- test

## [8.0.0]

- Use fs instead of vscode.workspace to parse dto
- add method in explorer contextual menu

## [9.0.0]

- Move services into npm package
- add toDto spec
- fix Array<DateNullable> generation