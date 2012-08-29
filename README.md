## Easy Writer for Twitter Bootstrap

Bootstrap 을 위한 Editor 서버용 공개합니다. 
소스를 다시 정리해서 올렸습니다. 

이전에 올린 bootstrap-writer 와는 다르게 서버에 실시간으로 저장하는 방식입니다. 
인증은 tumblr, twitter, facebook, google, github  5가지 oauth 모듈로 인증을 합니다. (everyauth 사용)

mongo DB 와 연동되어서 기본 데이타를 실시간으로 저장하고 화면을 바로 확인 하실 수 있습니다. 

## 설치

`git clone https://github.com/easylogic/bootwriter.git`

`cd bootwrriter`

`npm install`

## 실행 

`node app.js`

## 빌드

Bootstrap Writer 의 클라이언트 기본 구조는 Requirejs, Backbone.js, Jade 3가지로 되어 있습니다. 
그래서 Jade 로 되어 있는 템플릿을 좀 더 빠르게 로딩하기 위해서 r.js 명령어로 최적화 하게 되어 있습니다. 

`cd public` 

`./build.sh`

디렉토리에 보시면  build.sh 가 있는데요. 이 것을 실행하면  에디터에 필요한 Backbone.js + Jade 파일들을 패키징 해줍니다. 

아래 두가지 모듈을 사용해서 최적화를 합니다. 

jade-amd 
requirejs 


### Demo Site 
[Demo](http://blog.easylogic.co.kr/)

### Screen Cast 
[Sample](http://blog.easylogic.co.kr/view/503cda88000000583e000006)


# 글쓰기를 바꿔보자? 

Bootstrap Writer 는 글을 쓸 때  html editor 만 사용해서 오는 불편함을 줄이고 html 태그를 몰라도  화면 편집이 
가능하도록  설계된 글 쓰기 모듈 입니다. 

## 사용되는 컴포넌트들은 어떤게 있나요? 

컴포넌트를 Toy 라고 부릅니다. 

### Scaffolding

* Box 

### Text/Markup

* Text
* Html
* Jade
* MarkDown

### Base CSS
 
* Code
* Table

### Component

* Alert
* Blockqoute
* Breadcrumbs
* Download
* Hero Unit
* Image
* Label
* Page Header
* Progress Bar
* Space
* Button Groups 

### Plugins 

* Collapse
* Carousel
* Tab

Bootstrap Writer uses a number of opensource projects to work

* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
* [jQuery](http://jquery.com/)
* [RequireJS](http://requirejs.org/) - include [Jade plugin](https://github.com/rocketlabsdev/require-jade)
* [js-beautify](http://jsbeautifier.org/)
* [google-code-pretty](https://code.google.com/p/google-code-prettify/)
* [TinyMCE] (http://www.tinymce.com/)
 



# License

The MIT License (MIT)

Copyright (c) 2012 easylogic.co.kr (cyberuls@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
