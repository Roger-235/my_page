---
title: C++
pubDate: 2026-03-22
description: 偏向底層邏輯的中階程式語言
tags: [cpp,dev]
updatedDate: 2026-03-23
---

>1.高效能  
>2.物件導向  
>3.泛型程式設計

## 物件導向

## 關於std,namespace

* 不同的namespace可以讓代碼結構更清晰
* `std` 是一個官方標準的namespace
* 為了避免重複取名可以自己定義namespace
* 開發大型專案的時候最好用namespace方便檢查代碼
* `using namespace std` 會讓之後沒有定義namespace的變數都直接預設std
* 建議不要在大型專案 `using namespace std` 會比較好查代碼

## 語法

* 指定標頭檔
  `#include <header>` 
* 定義namespace
  ```cpp
  namespace game{
      void age(){std::cout << 18;}
  }
  game::age();
  //output 18
  ```
* 定義資料類型
  `int a=0,b;`
* 輸入數值==可以放在while迴圈的判斷式裡==
  `cin>>name`
* 輸出文字
  `cout<<"hello world"<<endl`
* 條件式
  ```cpp
  if(grade>=60){
      cout<<"pass"<<endl
  }
  else{
      cout<<"fail"<<endl
  }
  ```
* 迴圈
  ```cpp
  while(wheat<200){
      wheat++;
  }
  cout<<"now you as strong as Winnie"
  ```
## \

`\a` 讓蜂鳴器逼一聲  
`\n` 換行  
`\b` 回退一個字元，如果有打字會覆蓋那一個字元  
`\r` 回退一個水平行，如果有打字就會覆蓋整個行  
`\t` 等同於按 `tab`  
`\0` return `null`  
`\x` 後面加16或8進制 ASCII 碼，可以顯示對應字元  
`\n` 後面加萬國碼可以顯示表情符號  

## 比較運算

`&&` 等同於and  
`||` 等同於or  
`!` 等同於not  

## 函數

* `sizeof()` 取得變數大小
* `cout.width()` 規範數字長度並向右對齊
* `cout.percision()` 規範小數點只能到第幾位==如果有fixed不夠會補0==

## 各種細節

### endl

1. 換行
2. 印出並且強制清空暫存

### cin >> value1 >> value2;

* 預設用空白或enter隔開兩個輸入
* 遇到空白或換行不管有幾個都會忽視他直到遇到下一個有意義的值

### 當cin出現在while迴圈裡

> 1. 跑不知道有幾筆的大量資料  
> 2. 等待指令直到鍵盤輸入某個值
* 會卡在判斷直到每個 `>>` 都被填滿才執行迴圈內容
* 如果遇到字元輸入錯誤或是EOF（檔案結束符）會直接跳出迴圈

## 詳細功能

### 各種字元類型佔用大小



### std::ios::

>當只有改輸出時不用打ios::  
>用.setf()時不能不打ios::

| 指令 | 功能 |
| :--: | :--: |
| boolalpha | 將真與假以true與false顯示 |
| noboolalpha | 將真與假以 1與 0顯示(預設) |
| dec | 10進位顯示(預設) |
| oct | 8進位顯示 |
| hex | 16進位顯示 |
| fixed | 正常方式顯示(非科學記號) |
| scientific | 科學記號 |
| showbase | 顯示基底(16進制前加上 0x) |
| noshowbase | 不顯示基底(預設) |
| showpoint | 小數點數字後補 0 |
| noshowpoint | 小數點數字後不補 0(預設) |
| showpos | 正數顯示+ |
| noshowpos | 正數不顯示+(預設) |
| skipws | 忽略空白字元(預設) |
| uppercase | 字母大寫 |
| nouppercase | 字母小寫 |
| left | 靠左 |
| right | 靠右 |
