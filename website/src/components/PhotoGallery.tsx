import { useState, useEffect, useCallback } from 'react';

interface Props {
  photos: string[];
  title: string;
  subtitle?: string;
  onClose: () => void;
}

export default function PhotoGallery({ photos, title, subtitle, onClose }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1)), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1)), [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  if (photos.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="font-bold text-white text-lg">{title}</div>
          {subtitle && <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{subtitle}</div>}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{current + 1} / {photos.length}</span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative px-4 min-h-0" onClick={(e) => e.stopPropagation()}>
        {photos.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-4 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 20 }}
          >
            ‹
          </button>
        )}

        <img
          key={current}
          src={photos[current]}
          alt={`${title} photo ${current + 1}`}
          className="max-h-full max-w-full rounded-xl object-contain"
          style={{ maxHeight: 'calc(100vh - 220px)' }}
        />

        {photos.length > 1 && (
          <button
            onClick={next}
            className="absolute right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 20 }}
          >
            ›
          </button>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center gap-2 px-6 py-4 flex-shrink-0 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
              style={{
                width: 64,
                height: 48,
                border: i === current ? '2px solid #C9912A' : '2px solid transparent',
                opacity: i === current ? 1 : 0.5,
              }}
            >
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
