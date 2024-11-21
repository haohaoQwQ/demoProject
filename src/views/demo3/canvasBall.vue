<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-11-12 14:23:20
 * @LastEditTime: 2024-11-12 16:22:55
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\views\canvasDemo\canvasBall.vue
 * @Description: canvas应用之滚动的小球
-->
<template>
  <div class="containerWrap">
    <h2>CanvasBall</h2>
    <canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
  </div>
</template>

<script>
export default {
  name: 'CanvasBall',
  mounted () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let raf;
    const ball = {
      x: 100,
      y: 100,
      vx: 5,
      vy: 8,
      radius: 25, // 半径
      color: "blue",
      // 画一个蓝色的实心圆
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      },
    };
    function draw() {
      // clearRect：通过把像素设置为透明黑色以达到擦除一个矩形区域的目的。
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      raf = window.requestAnimationFrame(draw);
    }
    canvas.addEventListener("mouseover", (e) => {
      raf = window.requestAnimationFrame(draw);
    });
    canvas.addEventListener("mouseout", (e) => {
      window.cancelAnimationFrame(raf);
    });
    ball.draw();
  }
}
</script>