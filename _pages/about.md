---
permalink: /
title: "Hello, this is Yunqi Zhou. 👋"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


## About Me
I am a third-year undergraduate student at the **Central University of Finance and Economics**, majoring in **Data Science and Big Data Technology** under the supervision of **[Prof. Jing Li](https://scholar.google.com/citations?hl=zh-CN&user=YAG9tSMAAAAJ)**.<br>
My research interests include:**Multi-modal Large Language Models** and **Image Reasoning Segmentation**<br>
I am also currently working on the development of **CUFE's Industrial and Regional Development Large Model**, supervised by **[Xu Yang](https://github.com/peteryang1)**.

## Recent Works

<style>
.paper-card {
  display: flex;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  transition: box-shadow 0.3s ease;
}

.paper-card:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.paper-image-container {
  position: relative;
  flex: 0 0 280px;
  width: 280px;
  height: 180px;
  margin-right: 25px;
  border-radius: 8px;
  overflow: hidden;
}

.paper-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  z-index: 2;
}

.badge-arxiv {
  background: linear-gradient(135deg, #b31b1b, #8b0000);
}

.badge-cvpr {
  background: linear-gradient(135deg, #0066cc, #004999);
}

.badge-underreview {
  background: linear-gradient(135deg, #ff9800, #e65100);
}

.paper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.paper-image-container:hover .paper-image {
  transform: scale(1.08);
}

.paper-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.paper-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
}

.paper-authors {
  font-size: 14px;
  color: #666;
  margin-bottom: 18px;
  line-height: 1.6;
}

.paper-authors .highlight {
  color: #EBCF53;
  font-weight: bold;
}

.paper-authors a {
  color: #EBCF53;
  text-decoration: none;
  font-weight: bold;
}

.paper-authors a:hover {
  text-decoration: underline;
}

.paper-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  min-width: 100px;
  text-align: center;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none !important;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.btn-arxiv {
  background-color: #b31b1b;
  border: 2px solid #b31b1b;
  color: #ffffff !important;
}

.btn-arxiv:hover {
  background-color: #ffffff !important;
  color: #b31b1b !important;
  border: 2px solid #b31b1b !important;
}

.btn-github {
  background-color: #24292e;
  border: 2px solid #24292e;
  color: #ffffff !important;
}

.btn-github:hover {
  background-color: #ffffff !important;
  color: #24292e !important;
  border: 2px solid #24292e !important;
}

.btn-project {
  background-color: #EBCF53;
  border: 2px solid #EBCF53;
  color: #000000 !important;
}

.btn-project:hover {
  background-color: #ffffff !important;
  color: #d4b84a !important;
  border: 2px solid #EBCF53 !important;
}

.btn-pdf {
  background-color: #e74c3c;
  border: 2px solid #e74c3c;
  color: #ffffff !important;
}

.btn-pdf:hover {
  background-color: #ffffff !important;
  color: #e74c3c !important;
  border: 2px solid #e74c3c !important;
}
</style>

<!-- Paper 1: ZoomSearch -->
<div class="paper-card">
  <div class="paper-image-container">
    <span class="paper-badge badge-arxiv">arXiv</span>
    <img class="paper-image" src="./images/paper/zoomsearch.jpg" alt="ZoomSearch">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      Look Where It Matters: Training-Free Ultra-HR Remote Sensing VQA via Adaptive Zoom Search
    </div>
    <div class="paper-authors">
      <span class="highlight">Yunqi Zhou*</span>, Chengjie Jiang*, Chun Yuan, Jing Li†
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2511.20460" class="btn btn-arxiv">arXiv</a>
      <a href="https://github.com/kiki-zyq/Zoom-Search" class="btn btn-github">GitHub</a>
      <a href="https://kiki-zyq.github.io/ZoomSearch/" class="btn btn-project">Project</a>
    </div>
  </div>
</div>

<!-- Paper 2: GRASP -->
<div class="paper-card">
  <div class="paper-image-container">
    <span class="paper-badge badge-arxiv">arXiv</span>
    <img class="paper-image" src="./images/paper/grasp.png" alt="GRASP">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      GRASP: Geospatial pixel Reasoning viA Structured Policy learning
    </div>
    <div class="paper-authors">
      Chengjie Jiang, <span class="highlight">Yunqi Zhou</span>, Jiafeng Yan, Jing Li†, Jiayang Li, Yue Zhou, Hongjie He, Jonathan Li
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2508.17102" class="btn btn-arxiv">arXiv</a>
    </div>
  </div>
</div>

<!-- 
==============================================
📝 使用说明 / How to Use:
==============================================

1. 替换图片路径:
   将 "your-paper-image-1.png" 替换为你的论文配图路径

2. 修改状态标签:
   可用的 badge 类名:
   - badge-cvpr   (金色 #EBCF53)
   - badge-arxiv  (红色)
   - badge-iccv   (蓝色)
   - badge-neurips (紫色)
   - badge-icml   (青色)

3. 填写论文信息:
   - paper-title: 论文标题
   - paper-authors: 作者列表 (用 <span class="highlight"> 高亮你的名字)

4. 添加链接:
   可用的链接样式:
   - link-arxiv   (红色 arXiv)
   - link-github  (黑色 GitHub)
   - link-project (金色 项目主页)
   - link-pdf     (绿色 PDF)

5. 添加更多论文:
   复制整个 <div class="paper-card">...</div> 块
==============================================
-->
