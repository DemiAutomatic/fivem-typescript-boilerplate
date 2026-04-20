import { useState } from 'react';
import { useNuiEvent } from './hooks/useNuiEvent';
import { fetchNui } from './utils/fetchNui';
import { isEnvBrowser } from './utils/misc';

function App() {
  const [visible, setVisible] = useState(isEnvBrowser());
  const [count, setCount] = useState(0);

  useNuiEvent('setVisible', (data: { visible?: boolean }) => {
    setVisible(data.visible || false);
  });

  function handleHideModal() {
    setVisible(false);
    void fetchNui('exit');
  }

  return (
    <>
      {visible && (
        <div className='boilerplate-wrapper'>
          <div className='boilerplate-modal-container'>
            <h3>Boilerplate Modal</h3>
            <p>Count: {count}</p>

            <div>
              <button type='button' onClick={() => setCount((prev) => ++prev)}>
                Increment
              </button>
              <button type='button' onClick={() => setCount((prev) => --prev)}>
                Decrement
              </button>
              <button type='button' onClick={() => handleHideModal()}>
                Hide modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
