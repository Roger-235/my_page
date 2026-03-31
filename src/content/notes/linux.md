---
title: linux
pubDate: 2026-03-31
description: I use linux btw
tags: [linux,system]
updatedDate: 2026-03-31
---

:::warning
因為我用的是ubuntu所以底下會以ubuntu為主
:::

## 基本知識

### 套件管理工具

 * 統一保管程式文件的地方
 * 方便將程式一鍵安裝與下載

| 工具 | 格式 | 發行版 | 
| :--: | :--: | :--: |
| apt | .deb | debian線 |
| dnf | .rpm | redhat線 |
| Pacman | .pkg.tar.zst | arch線 |

### sudo

* linux系統的管理員權限
* 當你在command用了這個代表這行是以管理員權限執行

## 指令

### apt

>debian線專門的套件管理工具

```!
sudo apt install firefox    下載
sudo apt remove edge        刪除
sudo apt update             更新apt庫
sudo apt upgrade            根據apt庫檔案更新軟體
```

* 如果有apt裡沒有的軟體就要去軟體的官網找.deb的檔案下載並且  
  `sudo apt install ./Minecraft.deb` ＊注意檔案的位置必須要明確指定路徑
* 預設不會自動更新軟體

### snap

>沙盒式的套件管理工具，ubuntu系統很常用到

`sudo snap install discord`

### cd

>打開資料夾

### ls

>檢視資料夾

`-l` 只查看文件權限與詳細資料
`-a` 只查看所有檔案（包括隱藏的）

### mkdir

>建立資料夾

### rm

>刪除檔案

### cp

>複製到某個地方

### touch

>如果沒那個檔案就創建一個，如果有了就更新時間戳記

### 壓縮

| zip | tar |
| :--: | :--: |
| .zip | .tar |
| 壓縮率較低 | 壓縮率較高 |
| 先壓縮後打包 | 先打包後壓縮 |
| 原生支援windows | 需要另外安裝套件 |

#### zip

```!
zip file.zip file1 file2
zip -r output.zip 資料夾
unzip file.zip -d 壓縮到的位置
```

:::warning
zip資料夾如果沒有-r會直接壓縮一個空的資料夾
:::

#### tar

>本身不會壓縮需要呼叫程式

| command | function |
| :--: | :--: |
| -c | 壓縮 |
| -x | 解壓縮 |
| -t | 查看裡面的檔案結構 |
| -v | 顯示處理過程 |
| -f | 指定檔名 |
| -C | 指定目標資料夾 |

| 壓縮工具 | 副檔名 | command |
| :--: | :--: | :--: |
| gzip | .tar.gz | -z |
| bzip2 | .tar.bz2 | -j |
| xz | .tar.xz | -J |

```!
tar -czvf 壓縮後的檔名 -C 要壓縮到的位置
```

:::warning
因為tar本身會有一個目錄清單所以在-t的時候並不會解壓縮
:::