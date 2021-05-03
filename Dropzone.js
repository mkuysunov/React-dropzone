import React, { useState } from 'react'
import DropFiles from 'react-dropzone'
import clsx from 'clsx'
import classes from './Dropzone.module.css'
import uploadIcon from './images/upload.png'
import fileIcon from './images/file.svg'

export function Dropzone(props) {
  const { onUpload, ...restDropOptions } = props
  const [files, setFiles] = useState([])

  const handleUpload = () => {
    if (!files.length) return
    onUpload(files)
  }

  const handleOnChange = (acceptedFiles) => {
    if (restDropOptions.multiple) {
      setFiles([...acceptedFiles, ...files])
      return
    }
    setFiles(acceptedFiles)
  }

  const handleRemoveFile = (fileIdx) => {
    setFiles(files.filter((_, idx) => idx !== fileIdx))
  }

  function definingTheFileSize(fileSize) {
    let fSExt = ['Bytes', 'KB', 'MB', 'GB']
    let i = 0
    while (fileSize > 900) {
      fileSize /= 1024
      i++
    }
    return Math.round(fileSize * 100) / 100 + ' ' + fSExt[i]
  }

  // RENDER
  return (
    <div className={classes['root']}>
      <button className={classes['upload-btn']} disabled={!files.length} onClick={handleUpload}>
        Загрузить
      </button>

      <DropFiles onDrop={handleOnChange} {...restDropOptions}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={clsx(classes['drop-box'], { [classes['drop-box_actived']]: isDragActive })}>
              <div className={classes['drop-icon-box']}>
                <img src={uploadIcon} alt="drop here" />
              </div>

              <div className={classes['drop-text-box']}>
                {isDragActive ? 'Бросьте файлы сюда ...' : 'Перетащите сюда файл или нажмите, чтобы выбрать файлы'}
              </div>
            </div>
          </div>
        )}
      </DropFiles>

      <div className={classes['file-container']}>
        {files.map((file, fileIdx) => (
          <div key={fileIdx} className={classes['file-box']}>
            <div className={classes['file-icon-box']}>
              <img src={fileIcon} alt="file icon" />
            </div>
            <div className={classes['file-name']}>{file.name}</div>
            <div className={classes['file-size']}>( {definingTheFileSize(file.size)} )</div>
            <div className={classes['delete-file-btn']} onClick={() => handleRemoveFile(fileIdx)}>
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
