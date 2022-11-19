import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { DefaultLayout } from './layout/default'
import { HomePage } from './pages/Home'
import { IssuePage } from './pages/Issue'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/issue" element={<IssuePage />} />
    </Route>,
  ),
)

export function Router() {
  return <RouterProvider router={router} />
}
