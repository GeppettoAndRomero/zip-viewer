/**
 * ConversionManager (zip-viewer).
 * .zip を 1 つ受け取り、展開せずに中身（名前/サイズ/日付）を一覧表示する。
 * ダウンロードはしない。すべてメインスレッド（@zip.js、サーバー不要）。
 */

import { useState, useEffect, useCallback } from 'preact/hooks';
import { AppCard } from './AppCard';
import { AppButton } from './AppButton';
import { ErrorToast } from './ErrorToast';
import { listZip, type ZipEntry } from '@/utils/zipEngine';
import { ui } from '@/i18n/ui';

interface ErrorToastItem {
  id: string;
  message: string;
}

function humanSize(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

interface ConversionManagerProps {
  locale?: string;
}

export function ConversionManager({ locale = 'en' }: ConversionManagerProps) {
  const t = (ui as any)[locale] ?? ui.en;
  const [name, setName] = useState<string | null>(null);
  const [entries, setEntries] = useState<ZipEntry[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [errorToasts, setErrorToasts] = useState<ErrorToastItem[]>([]);

  const showErrorToast = useCallback((message: string) => {
    const id = `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setErrorToasts((prev) => [...prev, { id, message }]);
  }, []);
  const removeErrorToast = useCallback((id: string) => {
    setErrorToasts((prev) => prev.filter((e) => e.id !== id));
  }, []);

  useEffect(() => {
    (globalThis as Record<string, unknown>).__toolReady = true;
  }, []);

  const openZip = useCallback(
    async (file: File) => {
      if (busy) return;
      setBusy(true);
      setName(file.name);
      setEntries(null);
      try {
        setEntries(await listZip(file));
      } catch (error) {
        setEntries(null);
        showErrorToast(
          `${file.name}: ${error instanceof Error ? error.message : (t.errOpenFailed ?? 'Could not read this archive')}`
        );
      } finally {
        setBusy(false);
      }
    },
    [busy, showErrorToast, t]
  );

  const handleFiles = useCallback(
    (files: File[]) => {
      const zip = files.find((f) => f.name.toLowerCase().endsWith('.zip'));
      if (!zip) {
        if (files.length > 0) showErrorToast(t.errUnsupported.replace('{name}', files[0].name));
      } else {
        openZip(zip);
      }
      window.dispatchEvent(new CustomEvent('filesProcessed'));
    },
    [openZip, showErrorToast, t]
  );

  useEffect(() => {
    const handler = (e: Event) => handleFiles((e as CustomEvent<File[]>).detail);
    window.addEventListener('filesDropped', handler);
    return () => window.removeEventListener('filesDropped', handler);
  }, [handleFiles]);

  const hasGarbled = entries?.some((e) => !e.utf8 && /[\u0080-\uffff]/.test(e.name));

  return (
    <div>
      <AppCard>
        <div style="margin-bottom: var(--space-4);">
          <h3 style="margin: 0 0 var(--space-1) 0; font-size: var(--fs-4); font-weight: 600;">
            {t.uploadHeading}
          </h3>
          <p style="margin: 0; font-size: var(--fs-2); color: var(--color-subtle);">
            {t.uploadSubtitle}
          </p>
        </div>

        <div
          style={{
            padding: 'var(--space-6)',
            border: '2px dashed var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface)',
            textAlign: 'center',
            marginBottom: 'var(--space-4)',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <div style="font-size: 3rem; margin-bottom: var(--space-2);">📂</div>
          <div style="font-size: var(--fs-3); font-weight: 600; margin-bottom: var(--space-2);">
            {t.dropClick}
          </div>
          <div style="font-size: var(--fs-1); color: var(--color-subtle);">{t.dropOr}</div>
          <div style="font-size: var(--fs-1); color: var(--color-subtle); margin-top: var(--space-1);">
            {t.dropSupported}
          </div>
          <input
            id="file-input"
            type="file"
            accept=".zip,application/zip"
            onChange={(e) => {
              handleFiles(Array.from(e.currentTarget.files || []));
              e.currentTarget.value = '';
            }}
            style="display: none;"
          />
        </div>

        {entries && (
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3);">
              <strong>{name}</strong>
              <span style="font-size: var(--fs-2); color: var(--color-subtle);" class="num">
                {entries.length} {t.entriesLabel ?? 'entries'}
              </span>
            </div>

            {hasGarbled && (
              <p style="font-size: var(--fs-1); color: var(--color-warning); margin-bottom: var(--space-3);">
                {t.garbledNote ?? 'Some names are not stored as UTF-8 and may be garbled.'}{' '}
                <a href="https://runlocally.app/zip-filename-fix/" rel="noopener">
                  {t.fixNamesLink ?? 'Fix filenames'}
                </a>
              </p>
            )}

            <div style="margin-bottom: var(--space-3); display: flex; justify-content: flex-end;">
              <AppButton variant="secondary" onClick={() => { setEntries(null); setName(null); }}>
                {t.clearAll}
              </AppButton>
            </div>

            <div data-testid="entry-table" style="display: flex; flex-direction: column; gap: 2px;">
              {entries.map((e, i) => (
                <div
                  key={i}
                  style="display: flex; justify-content: space-between; align-items: flex-start; gap: var(--space-3); padding: var(--space-2) var(--space-3); background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-xs); font-size: var(--fs-2);"
                >
                  <span title={e.name} style="flex: 1; min-width: 0; overflow-wrap: anywhere; word-break: break-word;">
                    {e.directory ? '📁 ' : ''}{e.encrypted ? '🔒 ' : ''}
                    {!e.utf8 && /[\u0080-\uffff]/.test(e.name) ? '⚠ ' : ''}
                    {e.name}
                  </span>
                  <span style="flex-shrink: 0; color: var(--color-subtle);" class="num">
                    {e.directory ? '' : humanSize(e.size)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {busy && <p style="color: var(--color-subtle);">{t.reading ?? 'Reading…'}</p>}
      </AppCard>

      {errorToasts.length > 0 && (
        <div className="error-toast-container" aria-label={t.notificationsAria}>
          {errorToasts.map((toast) => (
            <ErrorToast key={toast.id} id={toast.id} message={toast.message} onClose={removeErrorToast} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
