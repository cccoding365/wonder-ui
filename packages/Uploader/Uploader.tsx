import React, { FC, useRef, PropsWithChildren, useCallback, useState } from 'react'
import './style.scss'
import ajax, { ee, ajaxError } from './ajax'
import { useEffect } from 'react'
import Progress from '../Progress'
import _, { template } from 'lodash'
import classnames from 'classnames'
import Tooltip from '../Tooltip'
import { UploadFile, UploaderProps } from './props'

function isFunction(func: any) {
  return typeof func === 'function'
}

function _handleFiles(
  files: UploadFile[] | FileList,
  existData?: {}
): UploadFile[] {
  let ret: UploadFile[] = []
  if (files instanceof FileList) {
    let obj: UploadFile = { uid: '', name: '', size: 0, progress: 0 }
    for (let i = 0; i < files.length; i++) {
      obj.uid = `upload_${String(new Date().getTime()).substr(-8)}`
      obj.name = files[i].name
      obj.size = files[i].size
      obj.originFileObj = files[i]
      ret.push(obj)
    }
  } else {
    ret = files.map((file: UploadFile) => {
      file.uid = (file.uid as string)
        ? ''
        : `upload_${String(new Date().getTime()).substr(-8)}`
      return file
    })
  }
  if (existData) {
    const existDataKeys = Object.keys(existData)
    if (existDataKeys.length > 0) {
      ret = ret.map((file) => {
        existDataKeys.forEach((k) => {
          file[k] = existData[k]
        })
        return file
      })
    }
  }
  return ret
}

const Uploader: FC<PropsWithChildren<UploaderProps>> = (props) => {
  const { children, name, accept, disabled, defaultFileList, method,
    action: url, beforeUpload, customeRequest, data, onChange,
    headers, multiple, showUploadList,
    onProgress, onRemove, itemRender } = props
  const [, forceUpdate] = useState({})
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  useEffect(() => {
    if (defaultFileList && defaultFileList.length > 0) {
      setFileList(_handleFiles(defaultFileList, { progress: 1 }))
    }
  }, [])

  const _onProgress = useCallback(
    (event: ProgressEvent<EventTarget>, file: UploadFile) => {
      const { total, loaded } = event
      const { uid } = file
      const percent = Number((loaded / total).toFixed(2))
      setFileList((fileList) => {
        const tmpList = fileList.map((file) => {
          if (file.uid === uid) {
            file.status = 'uploading'
            file.progress = percent
          }
          return file
        })
        return tmpList
      })
      if (percent === 1) {
        if (onChange && isFunction(onChange)) {
          file.status = 'done'
          onChange(file, [file])
        }
        setTimeout(() => {
          setFileList((fileList) =>
            fileList.map((file) => {
              if (file.uid === uid) {
                file.status = 'done'
              }
              return file
            })
          )
        }, 1000)
      }
      if (onProgress && isFunction(onProgress)) {
        onProgress(event)
      }
    },
    []
  )

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    async (event) => {
      if (!event.target.files || event.target.files.length < 1) {
        forceUpdate({})
        return
      }
      let tmpFiles = _handleFiles(event.target.files)
      if (onChange && isFunction(onChange)) {
        onChange(tmpFiles[0], tmpFiles)
      }
      if (beforeUpload && isFunction(beforeUpload)) {
        const beforeUploadHandle = beforeUpload(tmpFiles[0], tmpFiles)
        if (beforeUploadHandle === false) return
        if (beforeUploadHandle instanceof Promise) {
          try {
            const res = await beforeUploadHandle
            if (Object.prototype.toString.call(res) === '[object Object]') {
              tmpFiles = [res]
            }
          } catch (error) {
            console.error('beforeUpload reject error:', error)
            return
          }
        }
      }
      if (customeRequest && isFunction(customeRequest)) {
        customeRequest(tmpFiles[0], tmpFiles)
      } else {
        tmpFiles.forEach((file) => {
          setFileList((fileList) => [...fileList, file])
          ajax({
            file,
            fileKey: name!,
            url: url || '/',
            headers: headers || {},
            onProgress: _onProgress,
            method: method || 'POST',
            extraData: data,
          })
        })
      }
    },
    [onChange, data, url, headers, beforeUpload, customeRequest]
  )

  useEffect(() => {
    const listener = function ({ error, file: errorFile }) {
      setFileList((fileList) => {
        const index = fileList.findIndex((file) => file.uid === errorFile.uid)
        if (index === -1) {
          return fileList
        } else {
          fileList[index].status = 'error'
          fileList[index].errorInfo = error
          return [...fileList]
        }
      })
    }
    ee.on(ajaxError, listener)
    return () => {
      ee.off(ajaxError, listener)
    }
  }, [])

  const deleteFile = useCallback(
    async (f: UploadFile) => {
      let remove = true
      if (onRemove) {
        if (isFunction(onRemove)) {
          remove = onRemove(f) as boolean
        } else if (onRemove instanceof Promise) {
          try {
            remove = await onRemove
          } catch (error) {
            remove = false
          }
        }
      }
      if (remove !== false) {
        setFileList((fileList) =>
          fileList.filter((file) => file.uid !== f.uid)
        )
      }
    },
    [onRemove]
  )

  const getDisplayItem = useCallback(
    (item: UploadFile) => (
      <p
        className={classnames('list-item-up', {
          'list-item-up-error': item.status === 'error',
        })}
      >
        <div className="list-item-up-left">
          {item.status === 'uploading' ? (
            <span className="m-icon-loading1"></span>
          ) : (
            <span className="m-icon-attachment"></span>
          )}
          <span className={'file-name'} title={item.name}>
            {item.name}
          </span>
        </div>

        {item.status === 'error' ? (
          <div className="list-item-up-right" onClick={() => deleteFile(item)}>
            <span className="m-icon-close"></span>
          </div>
        ) : (
          <div
            className="list-item-up-right normal-close"
            onClick={() => deleteFile(item)}
          >
            <span className="m-icon-close" title="删除"></span>
          </div>
        )}
      </p>
    ),
    [deleteFile]
  )

  const defaultItemRender = useCallback((item: UploadFile) => {
    return (
      <div className="list-item" key={item.uid}>
        {item.status === 'error' ? (
          <Tooltip content={item.errorInfo}>{getDisplayItem(item)}</Tooltip>
        ) : (
          getDisplayItem(item)
        )}

        <p className="list-item-down">
          {item.status === 'uploading' && (
            <Progress
              type="line"
              percent={Number(item.progress) * 100}
              strokeColor="#1890ff"
            />
          )}
        </p>
      </div>
    )
  }, [])

  return (
    <div className="wonder-uploader">
      <span onClick={handleClick}>
        <input
          type="file"
          ref={inputRef}
          onChange={handleChange}
          className="hidden-input"
          multiple={multiple}
          accept={accept}
          disabled={disabled}
        />
        {children}
      </span>
      {showUploadList && (
        <ul className="list">
          {fileList.map((file) =>
            itemRender ? itemRender(file, fileList) : defaultItemRender(file)
          )}
        </ul>
      )}
    </div>
  )
}

Uploader.defaultProps = {
  name: 'file',
  action: '/',
  accept: '',
  defaultFileList: [],
  disabled: false,
  multiple: false,
  method: 'POST',
  headers: {},
  data: {},
  showUploadList: true,
}

export default Uploader