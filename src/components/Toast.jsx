import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckCircle2, X } from 'lucide-react'
import { dismissToast } from '../store/uiSlice'

function SingleToast({ toast }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => dispatch(dismissToast(toast.id)), 4000)
    return () => clearTimeout(timer)
  }, [toast.id, dispatch])

  return (
    <div className="flex items-center gap-2 rounded-xl border-2 border-mint/30 bg-surface-light dark:bg-surface-dark px-4 py-3 shadow-lg animate-fade-up">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-mint" />
      <p className="text-sm">{toast.message}</p>
      <button
        type="button"
        onClick={() => dispatch(dismissToast(toast.id))}
        aria-label="Dismiss"
        className="ml-2 text-ink-light/40 hover:text-ink-light dark:text-ink-dark/40 dark:hover:text-ink-dark"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

export default function Toast() {
  const toasts = useSelector((s) => s.ui.toasts)

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-2">
      {toasts.map((t) => (
        <SingleToast key={t.id} toast={t} />
      ))}
    </div>
  )
}
