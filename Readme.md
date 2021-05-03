# Dropzone (react-dropzone)

component dependencies (clsx, react-dropzone)

## Install:

first download zip and paste inside components folder.

```
npm install clsx react-dropzone
```

## Usage:

```
import { Box } from '@material-ui/core'
import React from 'react'
import { Dropzone } from './components/Dropzone/Dropzone'

export default function App() {

  const uploadFiles = (files) => {
    // do something...
    console.log(files)
  }

  // RENDER
  return (
    <Box>
      <Dropzone onUpload={uploadFiles} multiple />
    </Box>
  )
}
```

## Demo image

<img align="center" width="500" height="410" src="https://github.com/mkuysunov/weather_react-redux/blob/main/TMP/project-pic.PNG">

## API

component supports all react-dropzone framework attributes and additional below attributes

| name     | type     | default     | description                                       |
| -------- | -------- | ----------- | ------------------------------------------------- |
| onUpload | function | undefined   | this function works when you click upload button. |
| btnName  | string   | 'Загрузить' | You can change upload button name.                |
