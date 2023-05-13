import React, { useContext } from 'react'

import { _get } from '../../utils'
import { FRContext } from '../../models/context'
import { isHasExpression, parseAllExpression } from '../../models/expression'
import { getDependValues } from './module'
import Main from './main'

export default (props: any) => {
  const { schema, rootPath, ...otherProps } = props
  const store: any = useContext(FRContext)
  const { schema: formSchema } = store.getState()
  const dependencies = schema?.dependencies

  // No function expressions exist
  if (!isHasExpression(schema) && !schema?.dependencies) {
    return <Main {...props} store={store} />
  }

  // Need to listen to form values for dynamic rendering
  return (
    <>
      {(form: any) => {
        const formData = form.getFieldsValue(true)

        const formDependencies: any[] = []
        const dependValues = (dependencies || []).map((depPath: string) => {
          const item: any[] = []
          formDependencies.push(item)
          return getDependValues(formData, depPath, props, item)
        })

        const newSchema = parseAllExpression(
          schema,
          formData,
          rootPath,
          formSchema,
        )

        return (
          <Main
            schema={{
              ...newSchema,
              dependencies: formDependencies,
            }}
            rootPath={rootPath}
            {...otherProps}
            dependValues={dependValues}
            store={store}
          />
        )
      }}
    </>
  )
}
