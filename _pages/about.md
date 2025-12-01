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
I am a third-year undergraduate student at the **Central University of Finance and Economics**, majoring in **Data Science and Big Data Technology** under the supervision of **[Prof. Jing Li](https://scholar.google.com/citations?hl=zh-CN&user=YAG9tSMAAAAJ)**.
My research interests include:**Multi-modal Large Language Models** and **Image Reasoning Segmentation**
I am also currently working on the development of **CUFE's Industrial and Regional Development Large Model**, supervised by **[Xu Yang](https://github.com/peteryang1)**.

## Recent Works

<style>
.paper-card {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  transition: all 0.3s ease;
}

.paper-card:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.paper-image-container {
  position: relative;
  flex-shrink: 0;
  width: 280px;
  overflow: hidden;
  border-radius: 8px;
}

.paper-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.paper-image-container:hover .paper-image {
  transform: scale(1.05);
  filter: brightness(1.1);
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
  z-index: 10;
}

.badge-cvpr {
  background: #EBCF53;
  color: #000;
}

.badge-arxiv {
  background: #b31b1b;
}

.badge-iccv {
  background: #1e88e5;
}

.badge-neurips {
  background: #7b1fa2;
}

.badge-icml {
  background: #00897b;
}

.paper-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.paper-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.paper-authors {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.paper-authors .highlight {
  color: #EBCF53;
  font-weight: bold;
}

.paper-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.paper-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-arxiv {
  background: #b31b1b;
  color: white;
}

.link-arxiv:hover {
  background: #8b1515;
}

.link-github {
  background: #24292e;
  color: white;
}

.link-github:hover {
  background: #1a1e22;
}

.link-project {
  background: #EBCF53;
  color: #000;
}

.link-project:hover {
  background: #d4ba4a;
}

.link-pdf {
  background: #4CAF50;
  color: white;
}

.link-pdf:hover {
  background: #3d8b40;
}
</style>

<!-- Paper 1: ZoomSearch -->
<div class="paper-card">
  <div class="paper-image-container">
    <span class="paper-badge badge-arxiv">arXiv</span>
    <img class="paper-image" src="./assets/img/zoomsearch.png" alt="ZoomSearch">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      <a href="https://arxiv.org/abs/2511.20460">Look Where It Matters: Training-Free Ultra-HR Remote Sensing VQA via Adaptive Zoom Search</a>
    </div>
    <div class="paper-authors">
      <span class="highlight">Yunqi Zhou*</span>, Chengjie Jiang*, Chun Yuan, Jing Li†
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2511.20460">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
        arXiv
      </a>
      <a href="https://github.com/kiki-zyq/Zoom-Search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="https://kiki-zyq.github.io/ZoomSearch/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        Project Page
      </a>
    </div>
  </div>
</div>

<!-- Paper 2: GRASP -->
<div class="paper-card">
  <div class="paper-image-container">
    <span class="paper-badge badge-arxiv">arXiv</span>
    <img class="paper-image" src="./assets/img/grasp.png" alt="GRASP">
  </div>
  <div class="paper-content">
    <div class="paper-title">
      <a href="https://arxiv.org/abs/2508.17102">GRASP: Geospatial pixel Reasoning viA Structured Policy learning</a>
    </div>
    <div class="paper-authors">
      Chengjie Jiang, Yunqi Zhou, Jiafeng Yan, Jing Li†, Jiayang Li, Yue Zhou, Hongjie He, Jonathan Li
    </div>
    <div class="paper-links">
      <a href="https://arxiv.org/abs/2508.17102">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
        arXiv
      </a>
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
