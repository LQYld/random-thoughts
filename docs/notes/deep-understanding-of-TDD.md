---
title: 深入了解 TDD
lang: zh
description: 在软件开发中，TDD是一种术语。但是往往都是理解它的意思，但是并未在研发过程中利用。
date: 2024-06-02 17:40:00
---

[[toc]]

## 什么是 TDD ?

**测试驱动开发**（英语：Test-driven development，缩写为TDD）是一种软件开发过程中的应用方法，由极限编程中倡导，以其倡导先写测试程序，然后编码实现其功能得名。测  试驱动开发始于20世纪90年代。测试驱动开发的目的是取得快速反馈并使用“illustrate the main line”方法来构建程序。

**测试驱动开发是戴两顶帽子思考的开发方式：**
- 先戴上实现功能的帽子，在测试的辅助下，快速实现其功能；
- 再戴上重构的帽子，在测试的保护下，通过去除冗余的代码，提高代码品质。

**测试驱动着整个开发过程：**
- 首先，驱动代码的设计和功能的实现；
- 其后，驱动代码的再设计和重构。

## 为什么在研发中很少利用 ?

### 研发时间不充裕

在常见的企业级工作中，需求任务往往时间不充裕，并且一个接着一个。

需求的排期绝大部分都会因为时间的不充裕进行倒排。就算排期时间充足，也会因为不确定因素导致部分业务功能被重新设计，但时间却不会因此延后。

再如此紧凑的工作节奏的前提下，往往大部分程序员都会放弃 **TDD** 的研发模式。从而使自己的时间变得更充裕。

### 盲目的自信

**TDD** 编程往往会使自己的工作添加了新的负担。因为不仅需要研发业务代码，还需要为其补充测试代码。

但是很多人本身就感觉到需求带来的压力，不想再自行添加压力。就会觉得，这么简单的业务需求没必要用 **TDD**，直接编写业务代码就好，不会有什么异常出现的。毕竟都做了很多次相似的需求了。

## 为什么推荐使用 TDD ?

有的人会认为 **TDD** 会新增测试代码带来更多的研发时长，这在紧张的研发中会新增更多的工作量。

<font color="red">这是一种错误的想法。合理的 
  <strong>
    <font color="red">TDD</font>
  </strong> 
  是会大幅度减少更多的心智负担。
</font> 

### 减少繁琐自测

**TDD** 的宗旨就是倡导先写测试程序，然后编码实现。这样的研发方式，当编码实现完成也就相当于自测完成。

并且再编写测试程序的时候，也是对需求的深入理解，再很多边界或极端问题都会得到预先的考虑。如果遇到不合理或与预期出现差异的部分可以提前提出。大大提高了风险的感知。

并且当代码改动的时，不会从头到尾的进行完整自测。只需要执行相关的链路测试通过即可。对改动的影响范围也会提前有个心理范围。

### 减少异常情况

往往在软件正常使用的时候操作行为会千奇百怪，不同的操作可能会触发各种不同的场景。每一种可能存在的场景都是我们在研发时所需要考虑的。

如果从 **开发阶段** 推进到 **测试阶段** 是必须要通过测试同事提供的 **冒烟测试**。冒烟测试最低需要保障正常链路通过，最高就是覆盖到所涉及到的每一种（边界/极端）场景。

通过测试程序可以根据测试同事提供的测试用例覆盖到大部分异常情况，也可以自行扩展更多（边界/极端）场景。

**通过测试程序的触发是打造（边界/极端）场景最便捷的方式，用程序去触发程序。**

### 未接触的项目可快速了解核心

在工作中，都避免不了会交接负责之前未接触过的项目。这种情况往往听了交接人的描述和阅读交接文档是没办法了解到业务的核心，只能浅入的了解。

**代码从不说谎**

真正了解项目的核心最直接的方式就是阅读源码，从中理解业务思路。如果项目过于冗余庞大阅读起来会极其困难，不知如何下手。这个时候 **TDD** 的优势就体现出来了。

从单测下手，一个经过 **TDD** 研发模式编写的代码，往往会有健全的单测覆盖了所有场景。从单测中了解每一个链路、场景的模式和副作用。阅读过单测后再去阅读项目中的源码会发现，理解起来会十分容易。

这是最有效，最敏捷的方法。

### TDD 测试只能测试公用方法 ?

很多人在编码的时候都在想。
- 单测只能测试公用方法？
- 只能测试纯函数？
- 如果方法都是使用的开源库中的 API，那么是不是没有单测来编写了？

单测不仅仅是测试公用方法，还可以测试页面内容。但是往往很少有人会编写页面内容。之前笔者，也很少利用单测去测试页面。但是发现，在业务代码中测试页面也可以省去很多时间。

**例如：页面的某一个模块需要根据不同的枚举展示不同的内容，或者某一个枚举需要单独处理一下在展示**

这个时候，修改了代码逻辑需要重新自测，每一个场景都需要进行覆盖。确保修改的内容不会产生副作用。如果逻辑根据业务频繁进行更改就会产生大量的时间用在测试上。

但是可以用单测来去除这个自测的时间，可以利用快照的方式，这样没有改动过的场景会用快照来测试。就不需要手动来进行覆盖测试。

### TDD 测试在 ci/cd 中也不可或缺

现在很多企业内部的研发流程的 ci 中都会有单测覆盖率的标准红线。单测的覆盖率是代码安全健壮的重要指标。有些企业会设置门槛硬性要求覆盖率不能低于90%，这也是对项目的一种保障。

## 总结

希望阅读过本文后 **TDD** 不再是一种负担，而是会转化为利器，帮助你在研发中带来更高的收益、减少更多的负担。

