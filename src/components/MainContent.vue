<template>
  <div class="main-content">
    <div class="header">
      <h2>INCIDENT REPORTING SYSTEM USING LARGE LANGUAGE MODELS</h2>
    </div>
    <div class="messages">
      <div v-if="messages.length == 0" class="button-container">
        <button @click="generateReport">Generate Incident Report</button>
        <button disabled @click="askQuestions">
          Ask Questions on Warehouse Operations
        </button>
        <button disabled @click="discussCauses">
          Discuss possible causes of incident
        </button>
        <button disabled @click="discussSafety">
          Discuss safety policies in organisation
        </button>
      </div>
      <div class="reports" v-else>
        <ul>
          <li class="list-item" v-for="(item, index) in messages" :key="index">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="message-input">
      <div v-if="isLoading" class="dot-loader">
        <div v-for="n in 3" :key="n" class="dot"></div>
      </div>
      <div class="input-container">
        <input
          type="text"
          class="text-input"
          placeholder="Enter your text here"
          :value="filename"
        />
        <button
          v-if="!filename"
          class="attachment-button"
          @click="triggerFileUpload"
        >
          <i class="fas fa-paperclip"></i>
        </button>

        <button v-else class="attachment-button" @click="uploadVideo">
          <i class="fas fa-upload"></i>
        </button>

        <input
          type="file"
          ref="fileInput"
          style="display: none"
          @change="handleFileUpload"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      isLoading: false,
      isSelected: false,
      messages: [],
      filename: "",
    };
  },
  methods: {
    generateReport() {
      this.messages.push("Please upload an incident video");
    },
    askQuestions() {},
    discussCauses() {},
    discussSafety() {},
    sendMessage() {},
    onFileChange(event) {
      this.videoFile = event.target.files[0];
      if (this.videoFile) {
        this.filename = this.videoFile.name;
      }
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      this.videoFile = event.target.files[0];
      if (this.videoFile) {
        this.filename = this.videoFile.name;
      }
      console.log("Selected file:", this.filename);
    },
    async uploadVideo() {
      this.isLoading = true;
      console.log("entered");
      if (!this.videoFile) {
        alert("Please select a video file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", this.videoFile);
      console.log(formData);
      try {
        const response = await fetch("http://127.0.0.1:8000/upload", {
          method: "POST",
          body: formData,
        });
        this.analysisResult = await response.json();
        console.log(this.analysisResult);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
      this.messages.push(this.analysisResult);
      this.isLoading = false;
      this.filename = "";
    },
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.messages {
  flex: 1; /* Flex item: takes up remaining space */
  overflow-y: auto;
}
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
.upload-content {
  display: flex;
  width: 100%;
  justify-content: center;
}
.main-content {
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
}
.user {
  position: relative;
  right: 0;
}
.reports {
}
.header {
  text-align: center;
  height: 10%;
  flex: 0 1 auto;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.list-item {
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #eee;
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 500px;
  text-align: left;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
}
.button-container button {
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
  background-color: #f0f8ff;
  cursor: pointer;
  font-size: 14px;
  margin: 20px;
  height: 150px;
  width: 150px;
}

.message-input {
  text-align: center;
  margin: 10px;
  flex: 0 1 auto;
}

p {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  width: 100%;
  white-space: pre-wrap;
}
.dot-loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 5px;
  background-color: #333;
  border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-15px);
  }
}
/* .message-input input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 600px;
} */

/* .message-input button {
  padding: 10px 20px;
  width: 100px;
  margin-left: 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
  background-color: #ff7e00;
  color: #fff;
  cursor: pointer;
} */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

.text-input {
  flex: 1;
  padding: 10px;
  border: 10px;
  outline: none;
}
.input-container {
  height: 40px;
}

.attachment-button {
  background-color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.attachment-button i {
  font-size: 16px;
}
</style>
