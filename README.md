# Team Profile Generator

## Overview

This application allows team managers to quickly create a team portfolio web page through a few short prompts on the command line. This functionality comes from the built-in Javascript library fs and the inquirer and jest packages.   

## Screenshot
![sample screenshot of finished site](./dist/images/samplescreenshot.png)
Video walkthrough
[link to video](https://drive.google.com/file/d/1DqELq0JXbBrv2iXuPyHi0DaLWDnSutph/view)

## Installation

To install, clone the repo:
```
git clone https://github.com/DylanGodfrey/Team-Profile-Generator
```

## Usage
To use, navigate your terminal to the root directory of where this repository is stored on your machine. 
After installing, ensure all unit tests are passing by running
```
npm test
```
After that, start the application by running
```
node index
```
From here, you will be prompted for the name, ID, email and role of each employee and each manager's office number, each engineer's github link and eadch intern's school name.

After finishing that, your completed webpage will be generated in /dist/index.html. To have profile pictures for each employee, add a .png file with their name as the file name to /dist/images/profile

## Questions
Feel free to contact me if you have any questions or concerns!

**Dylan Godfrey**

- [Github Link](https://github.com/DylanGodfrey)

## License

MIT License

Copyright (c) 2022 Dylan Godfrey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.