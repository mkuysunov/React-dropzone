# Dropzone (react-dropzone)

component dependencies (clsx, react-dropzone)

## Install:

**Firstly download zip and extract on your components folder.**

**Installing packages**

```
npm install clsx react-dropzone
```

## Usage:

```
import React from 'react'
import { Dropzone } from './components/Dropzone/Dropzone'

export default function App() {

  const uploadFiles = (files) => {
    // do something...
    console.log(files)
  }

  // RENDER
  return (
    <div>
      <Dropzone onUpload={uploadFiles} multiple />
    </div>
  )
}
```

## Demo image

<img align="center" width="500" height="410" src="https://github.com/mkuysunov/Dropzone-react-dropzone-/blob/main/images/demo-image.png">

## API

<strong>
  Component supports all react-dropzone 
  <a href="https://react-dropzone.js.org/#src" target="_blank">attributes</a>
  and additional below attributes
</strong>  




<table>
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onUpload</td>
            <td>function</td>
            <td>undefined</td>
            <td>this function works when you click upload button.</td>
          </tr>
          <tr>
            <td>btnName</td>
            <td>string</td>
            <td>'Загрузить'</td>
            <td>You can change upload button name.</td>
          </tr>
        </tbody>
      </table>




