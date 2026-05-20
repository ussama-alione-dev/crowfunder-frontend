import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center flex-col justify-center">
            <h1 className="text-2xl  font-bold mb-4">Register</h1>
            <form action="" className="w-1/4  flex flex-col gap-4 mt-4">
                <input
                    className="bg-accent p-3 rounded-md border-none outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="bg-accent p-3 rounded-md border-none outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="bg-primary text-white p-3 rounded-md hover:bg-primary/90 cursor-pointer transition-colors duration-200"
                    type="submit"
                >
                    Register
                </button>
            </form>
            <span className="mt-4 text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary  hover:underline">
                    Login
                </Link>
            </span>
        </div>
    );
};

export default Register;
