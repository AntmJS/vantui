# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

### 引入

在 Taro 文件中引入组件

```js
import { Uploader } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

文件上传完毕后会触发`afterRead`回调函数，获取到对应的文件的临时地址，然后再使用`wx.uploadFile`将图片上传到远程服务器上。

```jsx
<View>
  <Uploader
    fileList={ this.state.fileList }
    onAfterRead={ this.afterRead }
  />
</View>
 
```

```js
this.state = {
  fileList: []
};

function afterRead(event) {
  const {
    file
  } = event.detail; // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式

  wx.uploadFile({
    url: 'https://example.weixin.qq.com/upload',
    // 仅为示例，非真实的接口地址
    filePath: file.url,
    name: 'file',
    formData: {
      user: 'test'
    },

    success(res) {
      // 上传完成需要更新 fileList
      const {
        fileList = []
      } = this.data;
      fileList.push({ ...file,
        url: res.data
      });
      this.setState({
        fileList
      });
    }

  });
} 
```

### 图片预览

通过向组件传入`fileList`属性，可以绑定已经上传的图片列表，并展示图片列表的预览图。fileList 的详细结构可见下方。

```jsx
<View>
  <Uploader fileList={ this.state.fileList } />
</View>
 
```

```js
this.state = {
  fileList: [{
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    name: '图片1'
  }, // Uploader 根据文件后缀来判断是否为图片文件
  // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
  {
    url: 'http://iph.href.lu/60x60?text=default',
    name: '图片2',
    isImage: true,
    deletable: true
  }]
}; 
```

### 图片可删除状态

通过`deletable`属性可控制是否开启所有图片的可删除状态，`deletable`默认为`true`，即所有图片都可删除。

若希望控制单张图片的可删除状态，可将`deletable`属性设置为`true`，并在`fileList`中为每一项设置`deletable`属性。

```jsx
<View>
  <Uploader
    fileList={ this.state.fileList }
    deletable={ true }
  />
</View>
 
```

```js
this.state = {
  fileList: [{
    url: 'https://img.yzcdn.cn/vant/leaf.jpg'
  }, {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    deletable: false
  }]
}; 
```

### 上传状态

通过`status`属性可以标识上传状态，`uploading`表示上传中，`failed`表示上传失败，`done`表示上传完成。

```jsx
<View>
  <Uploader fileList={ this.state.fileList } />
</View>
 
```

```js
this.state = {
  fileList: [{
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    status: 'uploading',
    message: '上传中'
  }, {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'failed',
    message: '上传失败'
  }]
}; 
```

### 限制上传数量

通过`maxCount`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```jsx
<View>
  <Uploader
    fileList={ this.state.fileList }
    maxCount="2"
    onAfterRead={ this.afterRead }
  />
</View>
 
```

### 自定义上传样式

通过插槽可以自定义上传区域的样式。

```jsx
<View>
  <Uploader>
    <Button
      icon="photo"
      type="primary"
    >
      上传图片
    </Button>
  </Uploader>
</View>
 
```

### 上传前校验

将`useBeforeRead`属性设置为`true`，然后绑定 `beforeRead` 事件可以在上传前进行校验，调用 `callback` 方法传入 `true` 表示校验通过，传入 `false` 表示校验失败。

```jsx
<View>
  <Uploader
    fileList={ this.state.fileList }
    accept="media"
    useBeforeRead={ true }
    onBeforeRead={ this.beforeRead }
    onAfterRead={ this.afterRead }
  />
</View>
 
```

```js
this.state = {
  fileList: []
};

function beforeRead(event) {
  const {
    file,
    callback
  } = event.detail;
  callback(file.type === 'image');
} 
```

## 云开发示例

### 上传图片至云存储

在开发中，可以利用[小程序云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/gettingStarted.html)的云存储能力，将图片上传至云存储内。然后根据返回的`fileiId`来下载图片、删除图片和替换临时链接。

```js
// 上传图片
uploadToCloud() {
  wx.cloud.init();
  const { fileList } = this.data;
  if (!fileList.length) {
    wx.showToast({ title: '请选择图片', icon: 'none' });
  } else {
    const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`myPhoto${index}.png`, file));
    Promise.all(uploadTasks)
      .then(data => {
        wx.showToast({ title: '上传成功', icon: 'none' });
        const newFileList = data.map(item => ({ url: item.fileID }));
        this.setState({ cloudPath: data, fileList: newFileList });
      })
      .catch(e => {
        wx.showToast({ title: '上传失败', icon: 'none' });
        console.log(e);
      });
  }
}

uploadFilePromise(fileName, chooseResult) {
  return wx.cloud.uploadFile({
    cloudPath: fileName,
    filePath: chooseResult.url
  });
}
```
### UploaderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/uploader.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| multiple | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| uploadText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| useBeforeRead | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| afterRead | - | _&nbsp;&nbsp;any<br/>_ | - | `false` |
| beforeRead | - | _&nbsp;&nbsp;any<br/>_ | - | `false` |
| previewSize | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| name | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| accept | - | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"all"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"media"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"image"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"file"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"video"<br/>_ | - | `false` |
| fileList | - | _&nbsp;&nbsp;Array<any><br/>_ | - | `false` |
| maxSize | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| maxCount | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| deletable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showUpload | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| previewImage | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| previewFullImage | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| imageFit | - | _&nbsp;&nbsp;keyof&nbsp;ImageProps.mode&nbsp;&brvbar;&nbsp;undefined<br/>_ | - | `false` |
| uploadIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| sizeType | - | _&nbsp;&nbsp;Array<string><br/>_ | - | `false` |
| capture | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;Array<string><br/>_ | - | `false` |
| compressed | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| maxDuration | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| camera | - | _&nbsp;&nbsp;"back"&nbsp;&brvbar;&nbsp;"front"<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onError | - | _&nbsp;&nbsp;(error:&nbsp;any)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onDelete | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onBeforeRead | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onAfterRead | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onOversize | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onClickPreview | - | _&nbsp;&nbsp;(data:&nbsp;any)&nbsp;=>&nbsp;any<br/>_ | - | `false` |

