import { useTheme } from '../context/ThemeProvider';
import {Moon, Sun} from "lucide-react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 absolute top-0 rounded-full bg-primary text-background"
        >
            {theme === 'light' ? (
                <Sun  className="w-6 h-6" />
            ) : (
                <Moon className="w-6 h-6" />
            )}
        </button>
    );
};

export default ThemeToggle;
