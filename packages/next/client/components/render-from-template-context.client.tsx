'client'

import React, { useContext } from 'react'
import { TemplateContext } from '../../shared/lib/app-router-context'

export default function RenderFromTemplateContext(): JSX.Element {
  const children = useContext(TemplateContext)
  return <>{children}</>
}
