import { NumericInput, NumericInputProps } from '@blueprintjs/core'
import { EditorFieldProps } from 'components/editor/EditorFieldProps'
import { useController } from 'react-hook-form'

export interface EditorIntegerInputProps<T> extends EditorFieldProps<T> {
  NumericInputProps: Omit<
    NumericInputProps,
    'name' | 'inputRef' | 'onValueChange' | 'onBlur'
  >
}

export const EditorIntegerInput = <T,>({
  name,
  control,
  NumericInputProps,
}: EditorIntegerInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules: { min: { value: 0, message: '最小为 0' } },
  })

  return (
    <NumericInput
      selectAllOnFocus
      minorStepSize={null}
      min={0}
      name={name}
      inputRef={ref}
      onValueChange={(value) => {
        if (
          Number.isNaN(value) ||
          !Number.isFinite(value) ||
          !Number.isSafeInteger(value) ||
          value === 0
        ) {
          onChange(null)
          return
        }
        onChange(value)
      }}
      onBlur={onBlur}
      // @ts-ignore: TODO: improve generics usage to solve this typing problem
      value={value ?? ''}
      // seems that NumericInput component have a bug where if
      // passed an undefined value, it's just simply not gonna update anymore...
      {...NumericInputProps}
    />
  )
}
