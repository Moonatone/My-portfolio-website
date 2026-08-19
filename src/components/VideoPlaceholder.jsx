import { useState } from 'react'
import { Play, Film } from 'lucide-react'

/**
 * Drop a real clip in later: put an .mp4 under /public/videos/ and pass its
 * path as `videoSrc` (e.g. "/videos/task-flow-demo.mp4"). Until then this
 * renders a playful placeholder instead of a broken video player.
 */
export default function VideoPlaceholder({
  videoSrc,
  poster,
  title = 'Project demo',
  size = 'default', // 'default' | 'large'
}) {
  const [errored, setErrored] = useState(false)
  const showRealVideo = Boolean(videoSrc) && !errored

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink-light dark:bg-black">
      {showRealVideo ? (
        <video
          className="h-full w-full object-cover"
          controls
          poster={poster}
          onError={() => setErrored(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          disabled
          className="group relative flex h-full w-full cursor-default flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#7C3AED_0%,#FF6B6B_55%,#FFC845_100%)]"
          aria-label={`${title} — demo video placeholder`}
        >
          {/* subtle dot-grid texture, on-theme with a code editor's minimap */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />
          <span
            className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/60 transition-transform ${size === 'large' ? 'h-20 w-20' : ''}`}
          >
            <Play
              className="ml-1 h-6 w-6 fill-white text-white"
              strokeWidth={0}
            />
          </span>
          <span className="relative flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1 font-mono text-xs text-white">
            <Film className="h-3.5 w-3.5" />
            Demo video coming soon
          </span>
        </button>
      )}
    </div>
  )
}
