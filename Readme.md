# Dropzone (react-dropzone)

component dependencies (clsx, react-dropzone)

## Install:

**Firstly download zip and extract on your components folder.**

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

**Component supports all react-dropzone framework attributes  and additional below attributes**

| name     | type     | default     | description                                       |
| -------- | -------- | ----------- | ------------------------------------------------- |
| onUpload | function | undefined   | this function works when you click upload button. |
| btnName  | string   | 'Загрузить' | You can change upload button name.                |
