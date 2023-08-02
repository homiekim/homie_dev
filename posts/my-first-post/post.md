---
title: first post
description: "this is first post description"
date: 2023-08-01 01:02:11
slug: first-post-slug
---

# Heading

## My First Blog Post

### H3 test

테스트 게시물
Using Next v13 Mdx Remote

### List

- list 1
- list 2
- list 3
- list 4

**Bold** Test

`code` Test

[blog](https://hoime.tistory.com/) Test

![img](/home.png)
```js
function solution(k, d) {
  let answer = 0;
  for (let i = 0; i <= d; i += k) {
    let y = Math.sqrt(d ** 2 - i ** 2); // 최대 y 값
    answer += Math.floor(y / k) + 1; // 해당 y 값의 k 배수 갯수 + 1
  }
  return answer;
}
```
