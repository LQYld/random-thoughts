---
title: 有效的括号
lang: zh
---

## 题目：

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

* 左括号必须用相同类型的右括号闭合。
* 左括号必须以正确的顺序闭合。
* 每个右括号都有一个对应的相同类型的左括号。

**示例 1：**
```ts
输入：s = "()"
输出：true
```
**示例 2：**
```ts
输入：s = "()[]{}"
输出：true
```
**示例 3：**
```ts
输入：s = "(]"
输出：false
```

## 提示：
* 1 <= s.length <= 104
* s 仅由括号 '()[]{}' 组成

## 题解：
```ts
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let stack = [], length = s.length;
    if(length % 2) return false;
    for(let item of s){
        switch(item){
            case "{":
            case "[":
            case "(":
                stack.push(item);
                break;
            case "}":
                if(stack.pop() !== "{") return false;
                break;
            case "]":
                if(stack.pop() !== "[") return false;
                break;
            case ")":
                if(stack.pop() !== "(") return false;
                break;
        }
    }
    return !stack.length;
};
```
