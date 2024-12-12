<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-11-11 10:39:24
 * @LastEditTime: 2024-12-12 16:40:45
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\views\demo2\mediaDevices.vue
 * @Description: 浏览器调用摄像头拍照保存，navigator.mediaDevices的用法
-->
<template>
  <div class="containerWrap" ref="wrapper">
    <h2>navigator.mediaDevices</h2>
    <div class="btnWrap">
      <button @click="handleOpenCamera">{{showCamera ? '关闭' : '开启'}}摄像头</button>
      <button @click="handleClickTakePhoto">点击拍照</button>
      <button @click="handleDownloadImage">下载图片</button>
    </div>
    <div class="videoWrap">
      <div>当前摄像头内容：</div>
      <video autoplay :width="videoWidth"></video>
    </div>
    <div class="photoWrap">
      <div>拍摄的照片如下：</div>
      <canvas id="canvas" :width="videoWidth" :height="videoHeight"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaDevices',
  data () {
    return {
      videoWidth: 400,
      videoHeight: 225,
      showCamera: false,
      // video dom对象
      videoElement: null,
      // getUserMedia返回的stream对象
      stream: null,
    }
  },
  mounted () {
    this.handleOpenCamera();
  },
  methods: {
    saveCanvasAsImage(canvas, filename) {
      // 将canvas转换为DataURL
      var dataURL = canvas.toDataURL("image/png");
      console.log(dataURL, 'dataURL')
      // 创建一个Blob对象
      var blob = this.dataURLToBlob(dataURL);
      console.log(blob, 'blob')
      // 创建一个指向Blob对象的URL
      var url = URL.createObjectURL(blob);
      console.log(url, 'url')
      // 创建一个a标签用于下载
      var downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.innerHTML = "下载";
      this.$refs.wrapper.appendChild(downloadLink);
      // document.body.appendChild(downloadLink);
      // 触发下载
      downloadLink.click();
      // 清理并移除元素和对象URL引用
      // document.body.removeChild(downloadLink);
      // URL.revokeObjectURL(url);
    },
    dataURLToBlob(dataURL) {
      var BlobConstructor = window.Blob;
      var mimeString = dataURL.split(',')[0].match(/:(.*?);/)[1];
      var byteString = atob(dataURL.split(',')[1]);
      var array = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          array[i] = byteString.charCodeAt(i);
      }
      return new BlobConstructor([array], {type: mimeString});
    },
    // 下载图片
    handleDownloadImage () {
      const canvas = document.getElementById("canvas");
      const filename = "photo.png";
      this.saveCanvasAsImage(canvas, filename);
    },
    // 点击拍照
    handleClickTakePhoto () {
      const canvas = document.getElementById("canvas");
      console.log(canvas, 'canvas')
      //拿到 canvas 上下文对象
      const ctx = canvas.getContext("2d");
      console.log(ctx, 'ctx')
      ctx?.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
    },
    // 打开/关闭摄像头
    handleOpenCamera () {
      this.showCamera = !this.showCamera;
      if (this.showCamera) {
        this.getUserMedia();
        // this.getDisplayMedia();
      } else {
        let tracks = this.stream.getTracks()
        console.log(tracks, 'tracks')
        tracks.forEach(track => track.stop());
        this.videoElement.srcObject = null;
      }
    },
    // 获取用户媒介（摄像头，麦克风）
    getUserMedia () {
      const videoParams = {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 }
      }
      // navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      navigator.mediaDevices.getUserMedia({ video: videoParams, audio: true }).then(stream => {
        console.log(stream, 'stream')
        this.stream = stream;
        this.videoElement = document.querySelector('video');
        this.videoElement.srcObject = this.stream;
        this.videoElement.play();
      });
    },
    // 共享屏幕
    getDisplayMedia () {
      const audioParams = { 
        channels: 2, 
        autoGainControl: false, 
        echoCancellation: false, 
        noiseSuppression: false 
      }
      navigator.mediaDevices.getDisplayMedia({ video: true, audio: audioParams }).then(stream => {
        console.log(stream, 'getDisplayMedia: stream')
        this.stream = stream;
        this.videoElement = document.querySelector('video');
        this.videoElement.srcObject = this.stream;
        this.videoElement.play();
      });
    },
    // 获取所有媒介设备
    getAllMediaDevices () {
      navigator.mediaDevices.enumerateDevices().then(devices => {
        console.log('设备列表：', devices);
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        const defaultVideoDevice = videoDevices[0];
        console.log(`默认摄像头：${defaultVideoDevice.label}`);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.btnWrap {
  margin-bottom: 20px;
}
.photoWrap {
  margin-top: 20px;
}
</style>