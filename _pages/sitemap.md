---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of the public pages on this site. An [XML version]({{ base_path }}/sitemap.xml) is also available for search engines.

<h2>Pages</h2>
{% assign public_pages = site.pages | where_exp: "item", "item.title and item.sitemap != false" | sort: "title" %}
{% for post in public_pages %}
  {% unless post.url contains "/assets/" or post.url == "/404.html" %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}
