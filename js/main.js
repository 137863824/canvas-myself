// demo1
window.onload = function () {
    if (document.getElementById('canvas')) {
        draw()

        function draw() {
            var canvas = $('#canvas')[0]
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d')
                // 矩形
                ctx.fillStyle = "rgb(200,0,0)"; // 填充色
                ctx.fillRect(25, 25, 100, 100); // 实心矩形
                ctx.clearRect(40, 40, 10, 10); // 擦除
                ctx.fillStyle = "rgba(200,0,0,0.4)";
                ctx.strokeRect(100, 50, 50, 50); // 空心矩形
                // 实心三角形（连续路径）
                ctx.fillStyle = "blue"
                ctx.beginPath() //开始划线
                ctx.moveTo(10, 150) //起始点（将笔尖移动到指定坐标上）
                ctx.lineTo(50, 150) //直线
                ctx.lineTo(30, 130) //直线
                ctx.fill() //闭合并填充(自动闭合)
                // 空心三角形（连续路径）
                ctx.fillStyle = "yellow"
                ctx.beginPath() //开始划线
                ctx.moveTo(50, 150) //起始点（将笔尖移动到指定坐标上）
                ctx.lineTo(80, 150) //直线
                ctx.lineTo(65, 130) //直线
                ctx.closePath(); //闭合路径
                ctx.stroke() //描线
                // 笑脸（非连续路径）
                ctx.fillStyle = "green"
                ctx.beginPath();
                ctx.arc(50, 200, 50, 0, Math.PI * 2, true); //圆(圆心，半径，开始角度，结束角度，旋转方向)(连接到圆上最右侧的点开始化弧)
                ctx.moveTo(85, 200);
                ctx.arc(50, 200, 35, 0, Math.PI, false); //弧
                ctx.moveTo(35, 175);
                ctx.arc(30, 175, 5, 0, Math.PI * 2, false); //弧
                ctx.moveTo(75, 175);
                ctx.arc(70, 175, 5, 0, Math.PI * 2, false); //弧
                ctx.stroke() //绘制线条
                // 圆弧列
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 3; j++) {
                        ctx.beginPath();
                        var x = 50 + j * 50
                        var y = 250 + i * 50
                        var r = 20
                        var startAngle = 0
                        var endAngle = Math.PI + (Math.PI * j) / 2
                        var anticlockwise = i % 2 == 0 ? false : true
                        ctx.arc(x, y, r, startAngle, endAngle, anticlockwise)
                        if (i > 1) {
                            ctx.fill();
                        } else {
                            ctx.stroke();
                        }
                    }
                }
                // 二次贝塞尔曲线
                ctx.beginPath()
                ctx.fillStyle = "red"
                ctx.moveTo(300, 50)
                ctx.quadraticCurveTo(300, 0, 375, 10)
                ctx.quadraticCurveTo(375, 50, 300, 50)
                // ctx.quadraticCurveTo(300,0,350,50)

                ctx.stroke()
                // 三次贝塞尔曲线
                ctx.beginPath();
                ctx.moveTo(175, 140);
                ctx.bezierCurveTo(175, 137, 170, 125, 150, 125);
                ctx.bezierCurveTo(120, 125, 120, 162.5, 120, 162.5);
                ctx.bezierCurveTo(120, 180, 140, 202, 175, 220);
                ctx.bezierCurveTo(210, 202, 230, 180, 230, 162.5);
                ctx.bezierCurveTo(230, 162.5, 230, 125, 200, 125);
                ctx.bezierCurveTo(185, 125, 175, 137, 175, 140);
                ctx.fill();
                // 实现矩形的其他方法
                ctx.rect(250, 100, 50, 50)
                ctx.stroke();

                // 综合练习（封装的一个用于绘制圆角矩形的函数）
                function roundedRect(ctx, x, y, width, height, radius) {
                    ctx.beginPath();
                    ctx.moveTo(x, y + radius);
                    ctx.lineTo(x, y + height - radius);
                    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
                    ctx.lineTo(x + width - radius, y + height);
                    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
                    ctx.lineTo(x + width, y + radius);
                    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
                    ctx.lineTo(x + radius, y);
                    ctx.quadraticCurveTo(x, y, x, y + radius);
                    ctx.stroke();
                }
                roundedRect(ctx, 135, 119, 25, 49, 10);

                // Path2D（用变量接收缓存和记录的路径)
                var reRect = new Path2D()
                reRect.rect(250, 200, 60, 40)
                var reCircle = new Path2D()
                reCircle.moveTo(125, 35);
                reCircle.arc(250, 250, 35, 0, Math.PI * 2)
                ctx.stroke(reRect)
                ctx.stroke(reCircle)
                // SVG paths
                // new Path2D(); // 空的Path对象
                // new Path2D(path); // 克隆Path对象
                // new Path2D(d); // 从SVG建立Path对象
                var p = new Path2D("M200 10 h 30 v 80 h -80 Z")
                ctx.fill(p)





                // 颜色和样式
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < 6; j++) {
                        ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                            Math.floor(255 - 42.5 * j) + ',0)';
                        ctx.beginPath();
                        ctx.fillRect(j * 25 + 200, i * 25 + 300, 25, 25);
                    }
                }
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < 6; j++) {
                        ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
                            Math.floor(255 - 42.5 * j) + ')';
                        ctx.beginPath();
                        ctx.arc(350 + j * 25, 300 + i * 25, 10, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }

            } else {
                alert('canvas-unsupported code here')
            }
        }
    }


    if (document.getElementById('canvas2')) {
        var offset = 0

        function ant() {
            var canvas = $('#canvas2')[0]
            var ctx = canvas.getContext('2d')
            // 注意：线宽防止色调半渲染，线帽与端点连接
            // 使用虚线
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.setLineDash([5, 20]);
            ctx.lineDashOffset = offset;
            ctx.strokeRect(10, 10, 100, 100);
        }

        function march() {
            offset--;
            // if (offset > 16) {
            //     offset = 0;
            // }
            ant();
        }
        setInterval(march, 20)


    }
    // 渐变
    if (document.getElementById('canvas3')) {
        function draw3() {
            var canvas = $('#canvas3')[0]
            var ctx = canvas.getContext('2d')
            // 线性渐变
            var lingrad = ctx.createLinearGradient(0, 150, 150, 150);
            lingrad.addColorStop(0, '#00ABEB');
            lingrad.addColorStop(0.5, '#fff');
            lingrad.addColorStop(0.5, '#26C000');
            lingrad.addColorStop(1, '#fff');
            ctx.fillStyle = lingrad;
            ctx.fillRect(10, 100, 130, 130);
            // 圆形渐变
            var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
            radgrad.addColorStop(0, '#A7D30C');
            radgrad.addColorStop(0.9, '#019F62');
            radgrad.addColorStop(1, 'rgba(1,159,98,0)');
            ctx.fillStyle = radgrad;
            ctx.fillRect(0, 0, 150, 150);
            // 图案样式
            var img = new Image();
            img.src = '../imgs/tu.jpg';
            console.log(1)
            img.onload = function () {
                console.log(2)
                // 创建图案
                var ptrn = ctx.createPattern(img, 'repeat');
                ctx.fillStyle = ptrn;
                ctx.fillRect(200, 200, 150, 150);
            }
            console.log(3)

            // 阴影
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 2;
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
            ctx.font = "20px Times New Roman";
            ctx.fillStyle = "Black";
            ctx.fillText("Sample String", 5, 300);
        }
        draw3()
    }







}