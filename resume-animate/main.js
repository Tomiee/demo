var style = `/* 
* 面试官您好:
* 我是xxx  纸质档的简历有点枯燥
* 所以我制作了一个动态的简历来介绍自己
* 以下是我的展示
*/

/* 先加个样式 */
*{
  transition: all 1s
}

html {
  background: rgb(222,222,222)
}

#code {
  border: 1px red dotted;
  padding: 20px 15px
}

/* 来点代码高亮 */

.token.selector {
  color: #690
}
.token.property {
  color:#905
}
.token.comment {
  color: slategray
}
.token.function {
  color: #DD4A68
}
`

var paperStyle = `/*
* 好了,开始正式介绍
* 我需要一张白纸
*/

#paper {
  width: 50%;
  height: 100%;
  background: white;
  position: fixed;
  right: 0;
  top:0;
  border: 1px solid red;
  padding:20px
}

#markdown {
  width:100%;
  height:100%;
  background:grey
}

`

var myResume = `
### 这是markdown语法
. 姓名
. 毕业学校
. continue...
`

// 写简历之前的代码
writeCode(style, () => {
  creatPaper()
})

// 简历
markdown(myResume)


function creatPaper() {
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  writeCode(paperStyle,()=>{
    var div = document.createElement('div')
    div.id = 'markdown'
    document.getElementById('paper').appendChild(div)
  })
}


function writeCode(newCode, callback) {
  var oldCode_prism = document.getElementById('code').innerHTML
  var oldCode = document.getElementById('myStyle').innerHTML
  var n = 1
  var timer = setInterval(function () {
    n++
    var content = newCode.substring(0, n)
    document.getElementById('code').innerHTML = oldCode_prism + Prism.highlight(content, Prism.languages.css, 'css')
    document.getElementById('myStyle').innerHTML = oldCode + newCode.substring(0, n)
    document.getElementById('code').scrollTop = document.getElementById('code').scrollHeight
    console.log(1)
    if (n > newCode.length) {
      clearInterval(timer)
      callback() //creatPaper
      console.log('f2')
    }
  }, 0)
}

function markdown(resume){
  var n = 1
  var timer = setInterval(function () {
    n++
    document.getElementById('markdown').innerHTML = resume.substring(0, n)
    document.getElementById('markdown').scrollTop = document.getElementById('code').scrollHeight
    console.log(1)
    if (n > newCode.length) {
      clearInterval(timer)
    }
  }, 20)
}