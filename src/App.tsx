import {Provider} from "@/components/ui/provider.tsx";
import {Provider as ProviderRedux} from 'react-redux'
import {store} from "@/app/store/stor.ts";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {RouterProvider} from "react-router";
import {router} from "@/routes/router.tsx";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderRedux store={store}>
        <Provider>
          <RouterProvider router={router}/>
        </Provider>
      </ProviderRedux>

    </QueryClientProvider>
  )
}

export default App
