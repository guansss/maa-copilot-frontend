import { Button, Drawer, DrawerSize } from '@blueprintjs/core'
import { OperationUploader } from 'components/uploader/OperationUploader'
import { FC, useState } from 'react'

export const OperationUploaderLauncher: FC = () => {
  const [uploaderActive, setUploaderActive] = useState(false)

  return (
    <>
      <Drawer
        size={DrawerSize.LARGE}
        isOpen={uploaderActive}
        onClose={() => setUploaderActive(false)}
      >
        <OperationUploader />
      </Drawer>

      <Button
        large
        fill
        icon="cloud-upload"
        onClick={() => setUploaderActive(true)}
      >
        上传已有作业
      </Button>
    </>
  )
}
