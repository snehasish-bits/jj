import { BusyIndicator } from '@ui5/webcomponents-react'
import React from 'react'

function LoadingDialog() {
  return (
    <div className='loading-backdrop'>
        <BusyIndicator 
            active
            size='Large'
            delay={0}
        />
    </div>
  )
}

export default LoadingDialog