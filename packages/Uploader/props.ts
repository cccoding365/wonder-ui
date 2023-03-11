export interface UploadFile {
  uid: string
  name: string
  size: number
  progress?: number
  status?: 'error' | 'success' | 'done' | 'uploading' | 'removed'
  errorInfo?: string
  originFileObj?: File
}

type ExtraDataFunction = (
  file: UploadFile,
  files: UploadFile[]
) => {} | Promise<{}>
type ExtraData = {} | ExtraDataFunction | undefined

export interface UploaderProps {
  name?: string
  action?: string
  accept?: string
  showUploadList?: boolean
  defaultFileList?: UploadFile[]
  disabled?: boolean
  multiple?: boolean
  method?: string
  headers?: {}
  data?: ExtraData
  onRemove?: (file: UploadFile) => boolean | Promise<boolean> | void
  beforeUpload?: (
    file: UploadFile,
    fileList: UploadFile[]
  ) => boolean | Promise<UploadFile> | void
  onChange?: (file: UploadFile, files: UploadFile[]) => void
  customeRequest?:
  | ((file: UploadFile, fileList: UploadFile[]) => void)
  | undefined
  onProgress?: (event: ProgressEvent<EventTarget>) => void
  itemRender?: (file: UploadFile, fileList: UploadFile[]) => React.ReactNode
}