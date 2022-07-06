# 快速开始

## 新建 GitHub 仓库

创建一个用来存储图片的 [GitHub 仓库](https://github.com/new) ，仓库属性必须选 **Public** 。

> 点击链接 https://github.com/new 快速新建仓库

![](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.j1486dtk68n.png)

<br>

## 新建 GitHub Token

创建一个带有 repo 权限的 [GitHub Token](https://github.com/settings/tokens/new) 。

> 点击链接 https://github.com/settings/tokens/new 快速新建 Token

![](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.lpt1xl9fu.png)

**注意：新生成的 Token 只会显示一次，请妥善保存，如有遗失，重新生成即可。**

![](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.pzmcp6b80fk.png)

<br>

## 使用图床

PicX 图床 **无需下载与安装**，只需用浏览器（建议 Chrome 或 Edge 等现代浏览器）打开 **[官网](https://picx.xpoet.cn)** 进行简单配置即可在线使用。
如此便捷！

### 进行图床配置

进入 [PicX 官网](https://picx.xpoet.cn/) ，进行图床配置（使用 GitHub Token 绑定存储图片的仓库和目录）。

> **PicX 官网 https://picx.xpoet.cn**

1. 填写 Token，自动获取该用户下的仓库。

   ![](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.4g8q5m7c8sq0.png)

2. 在仓库的下拉列表中，选择一个作为图床的仓库。

   ![image](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.746g75olruk0.png)

3. 选择一种目录方式（目录即仓库里存放图片的文件夹）。

   ![](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.5ydmhgxjhgo0.png)

    - 新建目录：需手动输入一个新目录。  
      使用 `/` 可创建多级目录，例如：`A01/A02` 表示创建了二级目录，最大支持创建三级目录。

    - 根目录：图片将直接存储在仓库根目录下。

    - 自动目录：自动生成日期格式 `YYYYMMDD` 的目录。例如：`20200909`。

    - 选择仓库目录：自动获取该仓库下所有目录，选择一个目录即可。

<br>

### 上传图片到仓库

- 直接 **拖拽图片** 到上传区域进行上传。

- 通过 **复制图片**，然后 **粘贴** 到上传区域进行上传。  
  粘贴图片时，需先点击一下**激活**上传区域，如下图，**上传区域的虚线边框变成墨蓝色，表示已激活，此时粘贴图片才会生效**。  
  支持通过键盘快捷键进行粘贴（`ctrl + v` / `command + v`）。

  ![](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.6wfw84e4xlw0.png)

- 点击上传区域，然后通过 **选择文件夹图片** 到上传区域进行上传。

<br>

### 复制图片外链

图片上传成功后，如下图

- 点击 `GitHub` 按钮复制 GitHub 图片外链。
- 点击 `CDN` 按钮复制 CDN 图片外链（推荐）。


![image](https://cdn.staticaly.com/gh/XPoet/image-hosting@master/PicX/image.6943gfrxo2k0.webp)
