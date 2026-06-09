import { forwardRef } from 'react'
import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-md border border-primary-panel bg-primary-deep px-4 py-3 text-body-md text-ink placeholder:text-muted transition duration-300 focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/30'

interface LabelWrapProps {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

function LabelWrap({ id, label, required, error, children }: LabelWrapProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-body-sm font-medium text-ink">
        {label}
        {required && (
          <span className="text-semantic-error" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-body-xs text-semantic-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(function FormInput(
  { label, error, id, required, className, ...props },
  ref,
) {
  const fieldId = id ?? props.name
  return (
    <LabelWrap id={fieldId!} label={label} required={required} error={error}>
      <input
        ref={ref}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldBase, error && 'border-semantic-error', className)}
        {...props}
      />
    </LabelWrap>
  )
})

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(function FormSelect(
  { label, error, id, required, options, className, ...props },
  ref,
) {
  const fieldId = id ?? props.name
  return (
    <LabelWrap id={fieldId!} label={label} required={required} error={error}>
      <select
        ref={ref}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldBase, error && 'border-semantic-error', className)}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </LabelWrap>
  )
})

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(function FormTextarea(
  { label, error, id, required, className, ...props },
  ref,
) {
  const fieldId = id ?? props.name
  return (
    <LabelWrap id={fieldId!} label={label} required={required} error={error}>
      <textarea
        ref={ref}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldBase, 'min-h-[120px] resize-y', error && 'border-semantic-error', className)}
        {...props}
      />
    </LabelWrap>
  )
})
