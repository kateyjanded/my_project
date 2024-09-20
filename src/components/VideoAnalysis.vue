<template>
  <div id="app">
    <div class="container">
      <SideBar />
      <MainContent />
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import MainContent from "./MainContent.vue";

export default {
  name: "VideoAnalysis",
  components: {
    SideBar,
    MainContent,
  },
};
</script>

<style>
.container {
  display: flex;
  height: 100%;
}
</style>

<!-- <template>
  <div class="upload-container">
    <h2>Upload your Video</h2>
    <p>MP4 or MP3 formats are accepted.</p>
    <div class="upload-box">
      <div class="upload-content">
        <img src="@/assets/upload-icon.png" alt="Upload Icon" />
        <p>Browse and choose the files you want to upload</p>
        <label class="browse-button">
          Browse File
          <input type="file" @change="onFileChange" accept="video/*" />
        </label>
        <label v-if="filename">Selected file: {{ filename }}</label>

        <button @click="uploadVideo">Upload</button>
      </div>
    </div>
    <div v-if="analysisResult">
      <h3>Incident Report</h3>
      <pre>{{ analysisResult }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoFile: null,
      filename: "",
      analysisResult: "",
    };
  },
  methods: {
    onFileChange(event) {
      this.videoFile = event.target.files[0];
      if (this.videoFile) {
        this.filename = this.videoFile.name; // Set the filename to the label
      }
    },
    async uploadVideo() {
      console.log("entered");
      if (!this.videoFile) {
        alert("Please select a video file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", this.videoFile);
      console.log(formData);
      try {
        const response = await fetch(" http://127.0.0.1:8000/upload", {
          method: "POST",
          body: formData,
        });
        this.analysisResult = await response.json();
        console.log(this.analysisResult);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    },
  },
};
</script>

<style scoped>
.upload-container {
  text-align: center;
  padding: 20px;
}

.upload-container h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.upload-container p {
  color: #666;
  margin-bottom: 20px;
}

.upload-box {
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-content img {
  width: 50px;
  margin-bottom: 10px;
}

.upload-content p {
  margin-bottom: 10px;
  color: #333;
}

.browse-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.browse-button input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
}
</style>

 <script>
export default {
  data() {
    return {
      videoFile: null,
      analysisResult: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.videoFile = event.target.files[0];
    },
    async uploadVideo() {
      if (!this.videoFile) {
        alert("Please select a video file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", this.videoFile);

      try {
        const response = await fetch("http://localhost:8000/upload", {
          method: "POST",
          body: formData,
        });
        this.analysisResult = await response.json();
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    },
  },
};
</script>

<style scoped>
.upload-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
}

input[type="file"] {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

pre {
  text-align: left;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}
</style> 
-->
