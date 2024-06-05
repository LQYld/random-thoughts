---
title: 一文读懂什么是 make ? 什么是 Makefile ?
lang: zh
description: 当前主流的前端构建都是 webpack、vite、rollup 等等。如果需要语言的环境的话，构建使用的指令就会错综复杂。这种场景下 make 或许是一个不错的选择。
date: 2024-06-03 21:01:00
---

[[toc]]

## 什么是 make ?

在计算机科学中，make 是一种自动化构建工具，它自动化了编译和构建过程，以便开发者不必手动调用编译器或其他工具。make 工具最初是为了在 UNIX 系统上使用而创建的，但现在也有其它操作系统平台上的版本。

make 依据一个用户编写的文件，在这个文件中（通常命名为 Makefile），开发者列出了项目中的源文件和目标文件（通常是可执行文件或库），以及源文件之间的依赖关系。Makefile 中还定义了规则来指导如何从源代码产生目标文件，包括编译命令和其他必要的步骤。

## 什么是Makefile ?

当我们在阅读开源项目的时候会发现，很多项目的工程目录中会存在 **Makefile** 文件。
很多人会对他感到陌生，甚至会因为这个未知的文件新增对阅读源码的压力。

其实，**Makefile** 是一个文件，它包含了一个由 **make** 构建工具识别和执行的一系列目标特定的命令。
**make** 工具使用 **Makefile** 来控制编译和生成可执行文件的复杂过程，并且通常用于自动化代码编译、链接以及其他尽可能节省时间的构建任务。

## 安装 make

### windows

因为 **make** 只能在 Unix/Linux 下运行，所以，如果使用 **windows** 系统，我们要先想办法在 windows 中跑一个 Linux环境。然后在以 Linux 的方式进行安装。

### mac

因为 **macOS**，它的内核是一种 **Unix**，所以可以直接执行 **make**。

推荐使用 **Homebrew** 安装 **make** 以及GCC工具链：

```zsh
brew install make gcc
```

### linux

```shell
sudo apt install build-essentail
```

> build-essentail 是一个软件包元组件，在 **Debian** 和基于 **Deian** 的系统中（如 Ubuntu）中表示一组编译和构建二进制文件或源码所必须的软件包。这个包集合通常包含以下几个重要的编译工具。
- gcc: GNU C 编译器
- g++: GNU C++ 编译器
- make: 一个工具，主要功能是自动确定文件之间的依赖关系并调用 **gcc/g++** 来构建程序
- libc-dev: 标准C库的开发文件，用于编译C语言程序

---

安装成功后，可以输入 **make -v** 验证：

```zsh
$ make -v
GNU Make 4.3
...
```

输入 **gcc --version** 验证GCC工具链：
```zsh
$ gcc --version
gcc (Ubuntu ...) 11.4.0
...
```

如果经上文操作后成功输出版本号，这样我们就成功地安装了 **make** ，以及GCC工具链。

## Makefile 文件
当我们在终端输入 **make** 命令时，它就会在当前目录查找一个名为 **Makefile** 的文件。然后根据文件内定义的规则，自动化的执行命令。

**Makefile** 这个命名，语意化，就是指生成文件。

### 结构组成

一个 **Makefile** 主要由以下几个部分构成：
- **目标（target）**：通常是文件的名称，代表了要构建的东西，如可执行文件或对象文件。当你在执行 **make target** 时，**make** 会尝试更新这个目标。
- **依赖项**：这是在构建目标前必须先存在或是最新的文件。如果依赖项比目标新，或目标不存在，**make**会执行更新目标的规则。
- **规则**：一条规则表示如何创建或更新一个目标。它通常是一系列将要被 ***shell*** 执行的命令。
- **变量**：**Makefile** 中可以使用变量来简化和提高可维护性。你可以在 **Makefile** 的顶部定义一个变量，并在整个文件中反复使用它。
- **伪目标**：这些目标不是实际的文件，它们只是一个规则的名称。伪目标用于执行无关于文件的任务，例如清理构建目录。

### 一个简单的列子

Make这个词，英语的意思是"制作"。Make命令直接用了这个意思，就是要做出某个文件。我现在想创建文件 **a.txt**，那么就可以使用 **make** 命令。

```zsh
make a.txt
```

但是你会发现并不会起任何作用，因为 **Make** 并不知道该如何制作出 **a.txt**。就需要使用者告诉它该如何使用其他命令来完成这个目标。

假设，现在存在文件 **b.txt** 和 **c.txt**，而 **a.txt** 依赖于 **b.txt** 和 **c.txt** 是两者合并的产物。那么 **Makefile** 需要知道如下的规则：

```zsh
a.txt: b.txt c.txt
  cat b.txt c.txt > a.txt
```

这说明了 **make a.txt** 命令可以分为两个步骤：
- 第一步，检测 **b.txt** 和 **c.txt** 是否同时存在
- 第二部，使用 **cat** 命令，将两个文件合并输入新的文件

**Makefile文件也可以写为Makefile， 或者用命令行参数指定为其他文件名。**

例如：
```zsh
$ make -f rules.txt
# 或者
$ make --file=rules.txt
```

上述代码，指定了 **make** 所根据的规则文件。它的规则很简单，你规定要构建哪个文件、它依赖哪些源文件，当那些文件有变动时，如何重新构建它。

### Makefile 中的规则

**Makefile** 可以由多个规则构成。每条规则的格式如下：
```txt
<target> : <prerequisites> 
[tab]  <commands>
```

上面第一行冒号前面的部分，叫做"目标"（target），冒号后面的部分叫做"前置条件"（prerequisites）；第二行必须由一个tab键起首，后面跟着"命令"（commands）。

"目标"是必需的，不可省略；"前置条件"和"命令"都是可选的，但是两者之中必须至少存在一个。

每条规则就明确两件事：构建目标的前置条件是什么，以及如何构建。下面就详细讲解，每条规则的这三个组成部分。

#### 目标（target）

每一个目标对应着每一个规则，例如上述提到的 **make a.txt**。目标通常是文件名，表示需要通过 **make** 所构建的对象。

目标可以是一个或多个文件名，多个文件名之间用 **空格** 隔开。

除了使用文件名，还可以使用某个操作/动作来命名，这称为 **"伪目标"** （phony target）。

例如： 

```zsh
clean:
      rm *.o
```

上面的代码中，**clean** 不是文件名而是操作名，规则的作用是删除。这就属于 **伪目标**。

```zsh
make clean
```

如果目录中刚好存在一个名叫 **clean** 的文件，那么这个命令也不会执行。这是 **make** 的宗旨是创建，他会理解为 **clean** 文件已经存在无需创建，会违背我们设置 **clean** 为伪目标的本意。

为了避免这种情况，可以明确声明clean是"伪目标"，写法如下。

```zsh
.PHONY: clean
clean:
        rm *.o temp
```

经过 **.PHONY** 声明为伪目标后，**make** 就不会再去检查文件是否已经创建而是每次运行都执行对应的命令。

> 如果直接执行 **make** 而未指定目标，则会默认执行 **Makefile** 文件中的第一个目标。

#### 前置条件（prerequisites）

前置条件通常是一组文件名，文件直接用空格分隔。它是指定了 **目标** 是否重新构建的判断条件：只要有一个前置文件不存在，或者存在更新，**目标** 就需要重新构建

> 更新是通过前置文件的 last-modification 时间戳与目标的时间戳进行比对

下面我们看一个简单例子：

```zsh
result.txt: source.txt
    cp source.txt result.txt
```

这里的规则，是创建一个 **result.txt** 文件。创建 **result.txt** 的前置条件是 **source.txt**。如果当前目录中条件文件存在，则正常执行规则。否则就必须再写一条规则来满足前置条件，才可以保证正常执行。

---

```zsh
source.txt: 
  echo "this is the source" > source.txt
```

这里的规则，是创建一个 **source.txt** 文件，并且将内容 **"this is the source"** 填充到 **source.txt** 文件中。这段代码中，**source.txt** 规则后没有任何前置条件，就意味着它不依赖于其他文件，只要 **source.txt** 文件不存在，则每次调用都会进行创建。

---

如果需要一次性创建多个文件，往往采用 **伪目标** 的方式。

例如：
```zsh
source: file1 file2 file3
```

让我们来一起解析上面的内容，source 是一个 **伪目标**，只有三个前置文件，没有任何对应的命令。

```zsh
make source
```

那么在执行 **make source** 命令后，会一次性创建 file1，file2，file3三个文件。这种场景下使用 **伪目标** 的写法就要比下面的方式要方便很多。

```zsh
make file1
make file2
make file3
```

#### 命令（commands）

**命令**，表示如何更新目标文件，一般由一行或多行的Shell命令组成。它是构建 **"目标"** 的具体指令，它的运行结果通常就是创建的目标文件。

每行命令之前必须有一个tab键。如果想用其他键，可以用内置变量.RECIPEPREFIX声明。

```zsh
.RECIPEPREFIX = >
all:
  > echo Hello, world
```

> 这里 **.RECIPEPREFIX** 是内置变量，**.RECIPEPREFIX** 被设置成 >，这意味着在后续的规则中，可以使用 > 来代替通常使用的 Tab 键来开始每一行指令。<br>所以下面的这行规则的含义是，定义 **伪目标** all，并在控制台输出 "Hello, world"。

<font color="red">需要注意的是，每行命令在一个单独的shell中执行。这些shell之间没有任何继承关系。</font>

---

我们来看一个另一个案例：

```zsh
var-lost:
  export foo=bar
  echo "foo=[$$foo]"
```

让我们来简单解析一下：
- 第一步，设置了 **伪目标** var-lost
- 第二步，设置命令声明了环境变量 foo，并且赋值为 bar
- 第三步，在控制台打印 foo=[bar]

执行上面的规则，会报异常，取不到foo的值。这是因为两行命令在两个不同的进程执行。

一个解决办法是将两行命令合并为一行，用分号分隔。

```zsh
var-lost:
  export foo=bar; echo "foo=[$$foo]"
```

另一个解决办法是在换行符前加反斜杠转义。

```zsh
var-lost: 
  export foo=bar; \
  echo "foo[$$foo]"
```

最后一个方式是加上 **.ONESHELL：** 命令。

```zsh
.ONESHELL:
var-lost:
  export foo=bar;
  echo "foo=[$$foo]"
```

> **.ONESHELL** 是一个内置变量，它会改变 **make** 的处理命令的方式。在没设置的时候，**make** 会为每一行命令启动一个新的shell。这意味着不同行的命令之间，环境变量和其他状态信息不会相互之间共享。<br>当设置时，所有命令会同时在同一个shell中执行，同一个shell中可共享这些环境变量和其他状态信息。

## Makefile 文件的语法

### 注释

**#**，表示注释。

我们来看一个简短的例子：

```zsh
result.txt: source.txt
  # 这是一行注释
  cp source.txt result.txt # 这是一行注释
```

### 回声（echoing）

先来解释一下什么是 **回声**。通常指的是命令或操作的输出信息。

在 **Makefile** 中，默认情况下，会将这些命令打印到标准输出，这是为了告知用户 **make** 正在执行哪些操作。

我们举一个简单的列子：

```zsh
test: 
  # 这是一个测试
```

让我们来执行上面的规则，我们会在控制台看到下面的结果。

```zsh
$ make test
# 这是一个测试
```

如果说，我执行规则的时候不想看到 **回声的内容** 。可以在命令前面加上 **@**，就可以关闭回声。

例如：

```zsh
test: 
  @# 这是一个测试
```

现在再执行 ***make test** ，就不会有任何输出。

> 这里有个小小的建议。由于在构建过程中，需要了解当前在执行哪条命令，所以通常只在注释和纯显示的echo命令前面加上 **@**。

### 通配符

通配符（wildcard）用来指定一组符合条件的文件名。主要有星号（*）、问号（？）和 [...] 。

比如， *.js 表示所有后缀名为js的文件。

例如：

```zsh
clean:
        rm -f *.o
```

让我们解析一下：
- 第一步，创建名为 **clean** 的伪目标
- 第二步，强制删除所有以.js结尾的文件

### 模式匹配

**make** 命令允许对文件名，进行类似正则运算的匹配，主要用到的匹配符是 **%**。比如，假定当前目录下有 f1.c 和 f2.c 两个源码文件，需要将它们编译为对应的对象文件。

```txt
%.o: %.c
```

等同于下面的写法

```
f1.o: f1.c
f2.o: f2.c
```

使用匹配符%，可以将大量同类型的文件，只用一条规则就完成构建。

### 变量和赋值符

> 这是 **Makefile** 最重要的语法之一。它使 **Makefile** 拥有了更多的扩展性。

**Makefile** 允许使用等号自定义变量。

```zsh
txt = Hello world
test: 
  @echo $(txt)
```

让我们来一起解析一下上面的规则：
- 第一步，定义了变量 **txt**，并设置等于 Hello World。
- 第二步，定义了 **伪目标** 名为 test
- 第三步，在控制台输出 Hello World

这里，变量调用时需要放在 **$()** 之中。但是调用Shell变量，需要在美元符号前，再加一个美元符号，这是因为Make命令会对美元符号转义。

```zsh
test:
    @echo $$HOME
```

定义变量时，也可以将变量的值指向另一个变量。

```zsh
v1 = $(v2)
```

当变量的值指向另一个变量时，就会产生一个问题。v1 的值到底在定义时扩展（静态扩展），还是在运行时扩展（动态扩展）？如果 v2 的值是动态的，这两种扩展方式的结果可能会差异很大。

为了解决类似问题，**Makefile** 提供了四个赋值运算符 （=、:=、？=、+=），它们的区别请看 [StackOverflow](https://stackoverflow.com/questions/448910/what-is-the-difference-between-the-gnu-makefile-variable-assignments-a)。

```zsh
VARIABLE = value
# 在执行时扩展，允许递归扩展。

VARIABLE := value
# 在定义时扩展。

VARIABLE ?= value
# 只有在该变量为空时才设置值。

VARIABLE += value
# 将值追加到变量的尾端。
```

### 内置变量（Implicit Variables）

Make命令提供一系列内置变量，除了上文之前提到的（**.ONESHELL**、**.RECIPEPREFIX**）之外还有很多。

比如，$(CC) 指向当前使用的编译器，$(MAKE) 指向当前使用的Make工具。这主要是为了跨平台的兼容性，详细的内置变量清单见 [make 内置变量手册](https://www.gnu.org/software/make/manual/html_node/Implicit-Variables.html)。

### 自动变量（Automatic Variables）

**make** 命令还提供一些自动变量，它们的值与当前规则有关。主要有以下几个。

#### $@

<span>$@</span>就是 **make** 命令当前构建的那个目标。比如，**make foo** 的 **$@** 指的是 **foo**。

我们来举例来理解一下：

```zsh
a.txt b.txt: 
  touch $@
```

等于下面的写法。

```zsh
a.txt:
  touch a.txt
b.txt:
  touch b.txt
```

或者

```zsh
a.txt b.txt: 
  touch a.txt b.txt
```

这两组规则并不完全相等，尽管它们的结果可能看起来相似。

第一个规则的目标是 a.txt，第二个规则的目标是 b.txt。当 make a.txt 被执行时，将运行第一个规则中的命令 touch a.txt。当 make b.txt 被执行时，将运行第二个规则中的命令 touch b.txt。

第二个规则有两个目标：a.txt 和 b.txt。命令 touch a.txt b.txt 将同时为这两个目标运行。这意味着不管你执行 make a.txt 还是 make b.txt，结果都是两个文件 a.txt 和 b.txt 都会被 touch 命令更新。换句话说，这个规则将把 a.txt 和 b.txt 看作是有相同依赖关系和构建命令的目标。

#### $<

<span>$< 指代第一个前置条件。比如，规则为 t: p1 p2，那么$< 就指代p1。</span>

```zsh
a.txt: b.txt c.txt
  cp $< $@ 
```

等同于下面的写法。

```zsh
a.txt: b.txt c.txt
  cp b.txt a.txt 
```

#### $?

<span>$? 指代比目标更新的所有前置条件，之间以空格分隔。比如，规则为 t: p1 p2，其中 p2 的时间戳比 t 新，$?就指代p2。</span>

#### $^

<span>$^ 指代所有前置条件，之间以空格分隔。比如，规则为 t: p1 p2，那么 $^ 就指代 p1 p2 。</span>

#### $*

<span>$* 指代匹配符 % 匹配的部分， 比如% 匹配 f1.txt 中的f1 ，$* 就表示 f1。</span>

#### $(@D) 和 $(@F)

<span>$(@D) 和 $(@F) 分别指向 $@ 的目录名和文件名。比如，$@是 src/input.c，那么$(@D) 的值为 src ，$(@F) 的值为 input.c。</span>

#### \$(<D) 和 \$(<F)

<span>$(&lt;D) 和 $(&lt;F) 分别指向 $&lt; 的目录名和文件名。</span>

所有的自动变量清单，请看 [手册](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html)。下面是自动变量的一个例子。

```zsh
dest/%.txt: src/%.txt
    @[ -d dest ] || mkdir dest
    cp $< $@
```

<span>上面代码将 src 目录下的 txt 文件，拷贝到 dest 目录下。首先判断 dest 目录是否存在，如果不存在就新建，然后，$&lt; 指代前置文件（src/%.txt）， $@ 指代目标文件（dest/%.txt）。</span>

### 判断和循环

**Makefile** 使用 **Bash** 语法，完成判断和循环。

```zsh
ifeq ($(CC),gcc)
  libs=$(libs_for_gcc)
else
  libs=$(normal_libs)
endif
```

上面代码判断当前编译器是否 gcc ，然后指定不同的库文件。

```zsh
LIST = one two three
all:
    for i in $(LIST); do \
        echo $$i; \
    done

# 等同于

all:
    for i in one two three; do \
        echo $i; \
    done
```

上面代码的运行结果。

```txt
one
two
three
```

### 函数

**Makefile** 还可以使用函数，格式如下。

```zsh
$(function arguments)
# 或者
${function arguments}
```

**Makefile** 提供了许多 [内置函数](https://ruanyifeng.com/blog/2015/02/make.html)，可供调用。下面是几个常用的内置函数。

#### shell 函数

shell 函数用来执行 shell 命令

```zsh
srcfiles := $(shell echo src/{00..99}.txt)
```

#### wildcard 函数

wildcard 函数用来在 Makefile 中，替换 Bash 的通配符。

```zsh
srcfiles := $(wildcard src/*.txt)
```

#### subst 函数

subst 函数用来文本替换，格式如下。

```zsh
$(subst from,to,text)
```

下面的例子将字符串"feet on the street"替换成"fEEt on the strEEt"。

```zsh
$(subst ee,EE,feet on the street)
```

下面是一个稍微复杂的例子。

```zsh
comma:= ,
empty:=
# space变量用两个空变量作为标识符，当中是一个空格
space:= $(empty) $(empty)
foo:= a b c
bar:= $(subst $(space),$(comma),$(foo))
# bar is now `a,b,c'.
```

#### patsubst函数

patsubst 函数用于模式匹配的替换，格式如下。

```zsh
$(patsubst pattern,replacement,text)
```

下面的例子将文件名"x.c.c bar.c"，替换成"x.c.o bar.o"。

```zsh
$(patsubst %.c,%.o,x.c.c bar.c)
```

#### 替换后缀名

替换后缀名函数的写法是：变量名 + 冒号 + 后缀名替换规则。它实际上patsubst函数的一种简写形式。

```zsh
min: $(OUTPUT:.js=.min.js)
```

上面代码的意思是，将变量OUTPUT中的后缀名 .js 全部替换成 .min.js 。

## Makefile 的实例

### 执行多个目标

```zsh
.PHONY: cleanall cleanobj cleandiff

cleanall : cleanobj cleandiff
        rm program

cleanobj :
        rm *.o

cleandiff :
        rm *.diff
```

上面代码可以调用不同目标，删除不同后缀名的文件，也可以调用一个目标（cleanall），删除所有指定类型的文件。

## Makefile 在软件工程中的体现

阮一峰老师在《阮一峰的网络日志》中用 [使用 Make 构建网站](https://www.ruanyifeng.com/blog/2015/03/build-website-with-make.html) 介绍了用 **make** 进行网站构建。
在文中使用 **make** 代替了常见的前端构建工具 **（Grunt、Gulp、Brunch、Broccoli、Mimosa）**。

其实 **make** 不单单可以代替，也可以和当前主流的前端构建生态相结合。打造更多构建链路和场景的实践。

### make & npm run 命令

在前端工程中，基本的构建指令都被注册在 **package.json** 中的 **script** 字段中。

例如：

```json
...
  "scripts": {
    "dev": "xxx",
    "build": "xxx build",
    "test": "xxx test",
    "preview": "xxx preview",
    "mock": "xxx mock",
    "docs": "xxx docs",
    "proxy": "xxx proxy",
    "lint": "xxx lint",
    "lint:fix": "xxx lint:fix",
    "ci": "xxx ci",
    "update:version": "xxx version"
  },
...
```

如果想开启代理模式则需要运行 **npm run proxy**。当用户想以本地运行方式启动项目则需要运行 **npm run dev** 。但是这样就需要先执行 **run proxy** 再执行 **run dev**。

这种场景我们就可以利用 **make** 将两个指令合并再同一个场景内，这样一条命令就可以完成之前的步骤。**Makefile** 中可以注册如下：

```zsh
proxy_dev: 
  npm run proxy; npm run dev;
```

### make & npm run 命令 & git 命令

再企业级项目研究中，普遍规定再每次 **push**代码之前，都需要通过 **ci** 流程后才可以提交。一般 **ci** 的检测被注册再 **git commit** 的钩子中。但是如果 **commit** 前遗忘进行代码检查，那么再 **commit** 的钩子阶段会触发异常，禁止 **commit**，然后修改后在进行提交。

这个时候，就可以利用 **make** 再 **add** 的时候自动进行检测触发自动修复。

例如：

```zsh
add_lint: 
  git add .; npm run lint:fix
```

这里会发现 **add** 阶段会触发一次检查，**commit** 阶段也会触发一次。会不会检查的次数过于频繁。

笔者认为，**commit** 阶段触发的是单纯的 **lint**，将 **lint:fix** 设置在 **add** 阶段，可以自动的修复不合规的部分。毕竟大部分情况都会在 **commit** 之前手动触发以下 **lint:fix**。将手动切为自动，减少更多异常的风险。 & 

### make & npm publish

当进行 **npm** 发包的时候规定 **version** 版本不能低于之前的 **version** 版本。但是也会有忘记更新版本号的时候，就会导致 **npm publish** 发布失败。如果将 **npm publish** 与 **update version** 两个指令进行合并，就可以防止遗忘更新 **version** 版本。

```zsh
publish_version: 
  npm run update:version; npm publish;
```

### make & workspace

workspace 是当前主流的一种研发方式，可以将一个大型项目拆分为多个工作空间，部分项目会将 **webSite** 和 **service** 代码都存放在同一个代码项目。这种情况下，当搭建研发环境的时候就需要分别将两个应用的场景都搭建好就需要要很多指令来一一搭建。

这个时候就可以通过 **make** 来实现，单指令多环境搭建。

例如：

```zsh
init: 
  webSite init;
  service init;
```

## 总结

**make** 不仅可以自动化构建，也可以和主流的构建工具相结合，让更多场景变得自动化。

希望通过本篇文章可以帮助大家降低研发中的心智负担，让更多的场景自动化。

---

## 感谢（题外话）🌸

> 本节内容参考了 [《阮一峰的网络日志》- Make 命令教程](https://www.ruanyifeng.com/blog/2015/02/make.html)
