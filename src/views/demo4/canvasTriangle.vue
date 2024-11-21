<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-11-12 14:56:20
 * @LastEditTime: 2024-11-20 16:16:19
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\views\demo4\canvasTriangle.vue
 * @Description: 
-->
<template>
  <div class="containerWrap">
    <h2>Canvas入门之Triangle和circle</h2>
    <canvas id="canvasTriangle" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  name: 'CanvasTriangle',
  mounted () {
    const canvas = document.getElementById('canvasTriangle')
    const ctx = canvas.getContext('2d')
    // 画一个红色的三角形
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(200, 100);
    ctx.lineTo(300, 250);
    ctx.lineTo(100, 250);
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(100, 150);
    ctx.lineTo(300, 150);
    ctx.lineTo(200, 300);
    ctx.lineTo(100, 150);
    ctx.stroke();

    // 画一个黑色的大圆
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(200, 200, 200, 0, Math.PI * 2);
    ctx.stroke();
    // 画一个橘色的小圆
    ctx.beginPath();
    ctx.strokeStyle = 'orange';
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.stroke();

    // 横线
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7e9';
    ctx.moveTo(0, 100);
    ctx.lineTo(400, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#e5e7e9';
    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#e5e7e9';
    ctx.moveTo(0, 300);
    ctx.lineTo(400, 300);
    ctx.stroke();
    
    // 竖线
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7e9';
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#e5e7e9';
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 400);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7e9';
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 400);
    ctx.stroke();
  }
}
</script>

<style lang="scss" scoped>
canvas {
  border: 1px solid black;
}
</style>