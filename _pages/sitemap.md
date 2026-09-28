---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of the public pages on this site. An [XML version]({{ base_path }}/sitemap.xml) is also available for search engines.

<h2>Pages</h2>
{% assign sorted_pages = site.pages | sort: "title" %}
{% for post in sorted_pages %}
  {% if post.title %}
    {% unless post.sitemap == false %}
      {% unless post.url contains "/assets/" or post.url == "/404.html" %}
        {% include archive-single.html %}
      {% endunless %}
    {% endunless %}
  {% endif %}
{% endfor %}
