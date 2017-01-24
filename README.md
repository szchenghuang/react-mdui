[![Build Status][travis_img]][travis_site]
[![NPM Package][npm_img]][npm_site]
[![Dependency status][david_img]][david_site]
[![devDependency status][david_dev_img]][david_dev_site]

# react-mdui #

[MDUI][mdui] in ReactJS.

## Demo ##

[Demo][demo] is a preview application for your reference.

## Install ##

```sh
npm install react-mdui --save
```

## Usage ##

Take `Button` for example:

```sh
import { Button } from 'react-mdui';

const button = (
  <Button
    node="button"
    raised
    block
    ripple
    disabled
  >
    Click Me!
  </Button>
);
```

## Components ##
Below is a list of available components. Each of them can be imported by either
default import of named import for flexibility, namely

```sh
import { Button } from 'react-mdui';
import Button from 'react-mdui/Button';
```

* [Button][Button]
* [Checkbox][Checkbox]
* [Chip][Chip]
* [Collapse][Collapse]
* [Divider][Divider]
* [Drawer][Drawer]
* [Icon][Icon]
* [List][List]
* [Panel][Panel]
* [Radio][Radio]
* [Slider][Slider]
* [Subheader][Subheader]
* [Switch][Switch]

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-mdui/blob/master/LICENSE.md) for details.

[mdui]: https://github.com/zdhxiong/mdui
[Button]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Button.md
[Checkbox]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Checkbox.md
[Chip]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Chip.md
[Collapse]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Collapse.md
[Divider]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Divider.md
[Drawer]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Drawer.md
[Icon]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Icon.md
[List]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/List.md
[Panel]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Panel.md
[Radio]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Radio.md
[Slider]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Slider.md
[Subheader]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Subheader.md
[Switch]: https://github.com/szchenghuang/react-mdui/blob/master/readme/components/Switch.md

[demo]: https://szchenghuang.github.io/react-mdui/

[travis_img]: https://travis-ci.org/szchenghuang/react-mdui.svg?branch=master
[travis_site]: https://travis-ci.org/szchenghuang/react-mdui
[npm_img]: https://img.shields.io/npm/v/react-mdui.svg
[npm_site]: https://www.npmjs.org/package/react-mdui
[david_img]: https://david-dm.org/szchenghuang/react-mdui/status.svg
[david_site]: https://david-dm.org/szchenghuang/react-mdui/
[david_dev_img]: https://david-dm.org/szchenghuang/react-mdui/dev-status.svg
[david_dev_site]: https://david-dm.org/szchenghuang/react-mdui/?type=dev
