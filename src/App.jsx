import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const DashboardAll = React.lazy(
  () => import("./components/dashboardall/DashboardAll")
);
const ForecastLogin = React.lazy(() => import("./components/ForecastLogin"));
const EmployeeDetails = React.lazy(() => import("./pages/EmployeeDetails"));
const ViewMonthlyAttendance = React.lazy(
  () => import("./pages/ViewMonthlyAttendance")
);
const RegularizeAtendance = React.lazy(
  () => import("./pages/RegularizeAtendance")
);
const LeaveApplication = React.lazy(() => import("./pages/LeaveApplication"));
const Reimbursement = React.lazy(() => import("./pages/Reimbursement"));
const DashboardHome = React.lazy(
  () => import("./components/dashboardusermain/DashboardHome")
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ForecastLogin />} />
            <Route path="/hrms" element={<DashboardAll />}>
              <Route index element={<DashboardHome />} />
              <Route path="EmployeeDetails" element={<EmployeeDetails />} />
              <Route
                path="BiometricAttendance"
                element={<ViewMonthlyAttendance />}
              />
              <Route
                path="RegularizeAttendanceRequest"
                element={<RegularizeAtendance />}
              />
              <Route path="LeaveApplication" element={<LeaveApplication />} />
              <Route path="ReimbursementRequest" element={<Reimbursement />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
