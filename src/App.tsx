import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
const MetersPage = lazy(() => import("./pages/meters/meters-page"));
const CustomerPage = lazy(() => import("./pages/customers/customer-page"));
const PrivateRoutes = lazy(() => import("./lib/private-routes"));
const PublicRoutes = lazy(() => import("./lib/public-routes"));
const CreateWorkspace = lazy(() => import("./pages/create-workspace/create-workspace-page"));
const Workspace = lazy(() => import("./pages/workspace/workspace-page"));
const Login04 = lazy(() => import("./pages/login/login-page"));
const Suspense01 = lazy(() => import("./components/suspense-ui"));
const Home = lazy(() => import("./pages/home/Home"));
const Settings = lazy(() => import("./pages/settings/settings-page"));
const Catalouge = lazy(() => import("./pages/catalogue/catalogue-page"));
const EventPage = lazy(()=>import("@/pages/events/events-page"))

const App: React.FC = () => {
  return (
    <Suspense fallback={<Suspense01 />}>
      <Routes>
        <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login04 />} />
        <Route path="/create-workspace" element={<CreateWorkspace />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/plans-settings" element={<Workspace />} />
          <Route path="/usage-billing/meters" element={<MetersPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/catalogue" element={<Catalouge />} />
          <Route path="/usage-billing/events" element={<EventPage />} />
          <Route path="/customers" element={<CustomerPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
