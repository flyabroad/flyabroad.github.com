目录内容
* contract 合同样本
* eb5 美国投资移民
* info 信息表格
* test 测试

# SCSS Blend Modes
CSS doesn't natively support color blending the way that Photoshop does. This library attempts to fake that by allowing you to blend a foreground color with a background color in order to approximate color blending. This was originally intended for use with the [Compass Photoshop Drop Shadow Plugin](https://github.com/heygrady/compass-photoshop-drop-shadow) but it proved impractical to integrate.

## Blending Functions
The included functions are based on the [blend.js](https://github.com/jseidelin/pixastic/blob/master/actions/blend.js) in the [Pixastic Image Processing Library](http://www.pixastic.com/lib/). I chose this library because JavaScript is easy enough to read and the blend modes seemed to match closely with what Photoshop offered. Additionally, a [detailed explaination of Photoshop blend modes](http://photoblogstop.com/photoshop/photoshop-blend-modes-explained) was used as a reference as well as the [Wikipedia article on blend modes](http://en.wikipedia.org/wiki/Blend_modes).

## Usage
These blend mode functions are not magic. In Photoshop, the blend mode functions are applied dynamically between two layers in order to create various effects. In CSS they can only be used to combine two solid colors together. Blend modes can be useful in times when a Photoshop design implements a blend mode on an element, like a drop shadow, that is over a mostly solid background. Choosing a dominant background color and a solid foreground color will allow for the apearance of a dynamically blended color.