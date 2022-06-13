import React from 'react'
import { Drawer as Puller } from 'antd'


const Drawer = ({onClose, visible}) => {
  return (
      <Puller
          title="Useful Links"
          placement={'left'}
          closable={true}
          onClose={onClose}
          visible={visible}
      >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
      </Puller>
  )
}

export default Drawer