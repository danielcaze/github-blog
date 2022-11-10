import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" />
        <Route path="/post/:post-id" />
      </Route>
    </Routes>
  )
}
