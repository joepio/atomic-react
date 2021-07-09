import React from 'react';
import toast, { ToastBar, Toaster as ReactHotToast } from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Button, ButtonInput } from './Button';

/**
 * Makes themed toast notifications available in the Context. Render this
 * somewhere high up in the app
 */
export function Toaster() {
  const theme = useTheme();
  return (
    <ReactHotToast
      position='bottom-right'
      toastOptions={{
        style: {
          background: theme.colors.bg,
          color: theme.colors.text,
        },
      }}
    >
      {t => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            position: 'relative',
            animation: t.visible
              ? 'toast-enter .5s ease'
              : 'toast-exit 1s ease',
          }}
        >
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <Button
                  title='Clear'
                  noMargins
                  subtle
                  onClick={() => toast.dismiss(t.id)}
                >
                  <FaTimes />
                </Button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </ReactHotToast>
  );
}
