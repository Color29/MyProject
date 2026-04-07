window.onload = function() {

	let str = `
/*
* Hi。！
*
* 
* 如这个页面。就是个什么也没有的网页。
* 我的工作就是给这种空白的页面加点儿东西。
* 比如，这个页面太单调了
* 给背景加个颜色
*/

.content {
    background-color: #6d3333;
}

.text {
    color: #08bf4e;
    font-weight: bold;
    font-size: 18px;
    position: relative;
   
}

.heart {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    top: 220px;
    right: 15%;
    animation: animation 2s linear infinite;
    rotate: 45deg;
}

.heart::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    background-color: red;
}

.heart::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: -50%;
    background-color: red;
}

@keyframes animation {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

/*
* Ok，完成！
* 感谢亲爱的观看！
*/
`

	// style标签
	let stylelink = document.getElementById("stylelink")
	// 文字容器
	let text = document.querySelector(".text")
	//播放按钮
	let play = document.querySelector(".play")
	let innerText = ""

	// 点击播放
	play.onclick = function() {
		document.querySelector(".content").removeChild(play)
		document.querySelector("audio").play()
		setTimeout(() => {
			load()
		}, 1000)
	}

	let i = 0

	function load() {
		if (i >= str.length) return
		i++
		innerText += str[i]
		stylelink.innerHTML = innerText
		text.innerHTML = innerText
		text.scrollTop += 30
		// 递归调用
		setTimeout(() => {
			load()
		}, 60)
	}

}
