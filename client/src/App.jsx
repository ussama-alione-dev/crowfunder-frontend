import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layouts/AppLayout";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <>
            <Toaster
                toastOptions={{
                    style: {
                        borderRadius: "8px",
                        background: "var(--color-secondary)",
                        color: "#fff",
                    },
                }}
                position="top-right"
                reverseOrder={true}
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<h1>Login</h1>} />
                    <Route path="/register" element={<h1>Register</h1>} />

                    <Route path="/" element={<AppLayout />}>
                        <Route
                            index
                            element={<h1>Welcome to CrowFunder Dashboard</h1>}
                        />

                        <Route path="projects" element={<h1>Projects</h1>} />
                        <Route
                            path="projects/create"
                            element={<h1>Create Project</h1>}
                        />

                        <Route
                            path="projects/update/:id"
                            element={<h1>Update Project</h1>}
                        />
                        <Route
                            path="projects/:id"
                            element={<h1>Project Details</h1>}
                        />
                        <Route
                            path="projects/:id/investors"
                            element={<h1>Project Investors</h1>}
                        />

                        <Route
                            path="investors/:id"
                            element={<h1>Investor Details</h1>}
                        />
                    </Route>

                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
