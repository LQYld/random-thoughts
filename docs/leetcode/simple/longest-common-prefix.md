---
title: 最长公共前缀
lang: zh
---

## 题目：

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

**示例 1：**
```ts
输入：strs = ["flower","flow","flight"]
输出："fl"
```

**示例 2：**
```ts
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

## 提示

* 1 <= strs.length <= 200
* 0 <= strs[i].length <= 200
* strs[i] 仅由小写英文字母组成

## 题解：
```ts
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = '';
  const firstItem = strs?.[0] || '';
  for (var i = 0; i < firstItem.length; i++) {
    var bool = true;
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i] !== firstItem[i]) {
        bool = false;
        break;
      }
    }
    if (bool) {
      str += firstItem[i]
    } else {
      return str;
    }
  }
  return str;
};
```
