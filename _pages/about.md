---
permalink: /
title: "Hello, this is Yunqi Zhou. 👋"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<h2 class="section-heading">About Me</h2>

I am a fourth-year undergraduate student at the **Central University of Finance and Economics**, majoring in **Data Science and Big Data Technology**, under the supervision of Associate Professor **[Jing Li](https://scholar.google.com/citations?hl=zh-CN&user=YAG9tSMAAAAJ)**.<br>
I will be joining the **College of Computer Science and Technology at Zhejiang University** as a Ph.D. student.<br>
My research interests focus on: **Multimodal Large Language Models**, **Image Reasoning Segmentation**, and **Time Series Foundation Model**.<br>
I am also currently working on the development of **CUFE's Industrial and Regional Development Large Model**, supervised by **[Xu Yang](https://github.com/peteryang1)**, Researcher at Microsoft Research Asia.

<h2 class="section-heading">Education</h2>

<div class="education-grid">
  <article class="education-card">
    <div class="education-meta">
      <span class="education-stage">Undergraduate</span>
      <span class="education-date">2023 — 2027</span>
    </div>
    <div class="education-main">
      <div class="education-logo">
        <img src="{{ '/images/education/cufe.jpg' | relative_url }}" alt="Central University of Finance and Economics logo">
      </div>
      <div class="education-details">
        <h3>Central University of Finance and Economics</h3>
        <p class="education-degree">B.S. in Data Science and Big Data Technology</p>
        <p class="education-location">School of Information · Beijing, China</p>
      </div>
    </div>
  </article>

  <article class="education-card education-card--next">
    <div class="education-meta">
      <span class="education-stage">Incoming Ph.D.</span>
      <span class="education-date">2027 —</span>
    </div>
    <div class="education-main">
      <div class="education-logo">
        <img src="{{ '/images/education/zju.png' | relative_url }}" alt="Zhejiang University logo">
      </div>
      <div class="education-details">
        <h3>Zhejiang University</h3>
        <p class="education-degree">Ph.D. in Computer Science</p>
        <p class="education-location">College of Computer Science and Technology · Hangzhou, China</p>
      </div>
    </div>
  </article>
</div>

<h2 class="section-heading">Recent Works</h2>

<div class="publication-list publication-list--compact">
  {% assign selected_papers = site.data.publications.papers | where: "selected", true %}
  {% for paper in selected_papers %}
    {% include publication-card.html paper=paper compact=true %}
  {% endfor %}
</div>

<h2 class="section-heading">Contact Me</h2>

Feel free to reach out anytime! 💌

**Email:**
- 2023312247@email.cufe.edu.cn
- 13880155015@163.com
