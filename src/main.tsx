import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "@/components/ui/provider.tsx";
import {Provider as ProviderRedux} from 'react-redux'
import {store} from "@/app/stor.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderRedux store={store}>
    <Provider>
      <App/>
    </Provider>
    </ProviderRedux>
  </StrictMode>,
)
