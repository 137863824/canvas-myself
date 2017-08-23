// demo1
window.onload = function () {
    draw()
}

function draw(){
var canvas = $('#canvas')[0]
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        // 矩形
        ctx.fillStyle = "rgb(200,0,0)";// 填充色
        ctx.fillRect(25,25,100,100);// 实心矩形
        ctx.clearRect(40, 40, 10, 10);  // 擦除
        ctx.fillStyle = "rgba(200,0,0,0.4)";
        ctx.strokeRect(100,50,50,50);// 空心矩形
        // 三角形（连续路径）
        ctx.fillStyle = "blue"
        ctx.beginPath()//开始划线
        ctx.moveTo(10,150)//起始点（将笔尖移动到指定坐标上）
        ctx.lineTo(50,150)//中间点
        ctx.lineTo(30,130)//中间点
        ctx.fill()//闭合并填充
        // 笑脸（非连续路径）
        ctx.fillStyle = "yellow"
        ctx.beginPath();
        ctx.arc(50,200,50,0,Math.PI*2,true);//圆
        ctx.moveTo(85,200);
        ctx.arc(50,200,35,0,Math.PI,false); //弧
        ctx.moveTo(35,175);
        ctx.arc(30,175,5,0,Math.PI*2,false); //弧
        ctx.moveTo(75,175);
        ctx.arc(70,175,5,0,Math.PI*2,false); //弧

        ctx.stroke()//绘制线条
    } else {
        alert('canvas-unsupported code here')
    }
}