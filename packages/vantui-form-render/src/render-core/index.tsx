import React from 'react'
import FieldItem from './FieldItem'
// import FieldList from './FieldList'

interface RenderCoreProps {
  schema: any
  rootPath?: any[] | undefined
  parentPath?: any[] | undefined
  [key: string]: any
}

interface RenderItemProps {
  schema: any
  rootPath?: any[] | undefined
  path?: any[] | undefined
  key?: string | undefined
}

const renderItem = (props: RenderItemProps) => {
  let { schema, key, path, rootPath } = props

  // render List
  // if (schema.type === 'array' && schema.items?.type === 'object') {
  //   return (
  //     <FieldList
  //       key={key}
  //       schema={schema}
  //       path={path}
  //       rootPath={rootPath}
  //       renderCore={RenderCore}
  //     />
  //   )
  // }

  // render Object | field
  let child: React.ReactNode = null

  // has child schema
  if (schema?.properties) {
    child = RenderCore({ schema, parentPath: path, rootPath })
    path = undefined
  }

  return (
    <FieldItem
      key={key}
      schema={schema}
      path={path}
      rootPath={rootPath}
      children={child}
      renderCore={RenderCore}
    />
  )
}

const RenderCore = (props: RenderCoreProps): any => {
  const { schema, parentPath = [], rootPath = [] } = props
  if (!schema || Object.keys(schema).length === 0) {
    return null
  }

  // render List.item
  if (schema?.items) {
    return renderItem({ schema: schema.items, path: parentPath, rootPath })
  }

  // render Object | field
  return Object.keys(schema?.properties || {}).map((key) => {
    const item = schema.properties[key]
    const path = [...parentPath, key]
    return renderItem({ schema: item, path, key, rootPath })
  })
}

export default RenderCore
