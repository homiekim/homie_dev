---
title: first post
description: "this is first second description"
date: 2023-07-04 12:02:18
slug: first-post-slug
---

# Heading

## My First Blog Post

테스트 게시물
Using Next v13 Mdx Remote

### List

- list 1
- list 2
- list 3
- list 4

**Bold** Test

`code` Test

[https://homei.tistory.com](https://hoime.tistory.com/) Test

> This is a first blockqute. 


> ### This is a H3
>
> - List
>
```
test custom
```

`
list 테스트
- item 1
- item 2
- item 3
`

```javascript
function solution(k, d) {
  let answer = 0;
  for (let i = 0; i <= d; i += k) {
    let y = Math.sqrt(d ** 2 - i ** 2); // 최대 y 값
    answer += Math.floor(y / k) + 1; // 해당 y 값의 k 배수 갯수 + 1
  }
  return answer;
}
```
