---
title: 共读
description: 探索源代码的奥秘：与您一同深入解读，揭示软件背后的精彩世界
projects:

  Vue Ecosystem:
    - name: 'VueUse'
      link: '/co-reading/vueuse.html'
      desc: 'Collection of Composition API utils for Vue 2 and 3'
      icon: 'i-logos-vueuse'
  CLI: 
    - name: 'ni'
      desc: 'Use the right package manager'
      link: '/co-reading/ni.html'
      icon: 'i-codicon-package'
    - name: 'taze'
      link: '/co-reading/taze.html'
      desc: 'A modern CLI tool that keeps your deps fresh'
      icon: 'i-carbon-spine-label'

---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
