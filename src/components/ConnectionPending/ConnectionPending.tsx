import { ToastPending } from '@alium-official/uikit'
import Portal from '@reach/portal'
import React from 'react'
import { useSelector } from 'react-redux'
import { State } from 'state/types'

const ConnectionPending = () => {
  const connectionError = useSelector<State, State['profile']['connectionError']>(
    (state) => state.profile.connectionError,
  )
  return <Portal>{connectionError && <ToastPending error={connectionError} />}</Portal>
}

export default ConnectionPending
