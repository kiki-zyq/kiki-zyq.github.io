---
permalink: /
title: "Hello, this is Yunqi Zhou. 👋"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## 💫 About Me

I am a third-year undergraduate student at the **Central University of Finance and Economics**, majoring in **Data Science and Big Data Technology**, under the supervision of Associate Professor **[Jing Li](https://scholar.google.com/citations?hl=zh-CN&user=YAG9tSMAAAAJ)**.<br>
My research interests focus on: **Multimodal Large Language Models** and **Image Reasoning Segmentation**.<br>
I am also currently working on the development of **CUFE's Industrial and Regional Development Large Model**, supervised by **[Xu Yang](https://github.com/peteryang1)**, Researcher at Microsoft Research Asia.

## 🚀 Recent Works

<div class="publication-list publication-list--compact">
  {% assign selected_papers = site.data.publications.papers | where: "selected", true %}
  {% for paper in selected_papers %}
    {% include publication-card.html paper=paper compact=true %}
  {% endfor %}
</div>

## 📬 Contact Me

Feel free to reach out anytime! 💌

**Email:**
- 2023312247@email.cufe.edu.cn
- 13880155015@163.com
- 1823273293@qq.com
